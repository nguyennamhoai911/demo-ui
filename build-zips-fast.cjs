const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceDir = path.join(__dirname, 'unbuilt-sources');
const publicDir = path.join(__dirname, 'public');

// We know product-detail-v1-0 already has node_modules
const templateModules = path.join(sourceDir, 'product-detail-v1-0', 'node_modules');

const folders = fs.readdirSync(sourceDir).filter(f => f.startsWith('product-detail-v1-') && fs.statSync(path.join(sourceDir, f)).isDirectory());

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(srcPath, destPath) : fs.copyFileSync(srcPath, destPath);
  }
}

for (const folder of folders) {
  // skip v1-0 as it's already built
  if (folder === 'product-detail-v1-0') continue;
  
  const folderPath = path.join(sourceDir, folder);
  const viteConfigPath = path.join(folderPath, 'vite.config.ts');
  console.log(`\n=== Building ${folder} ===`);

  try {
    if (fs.existsSync(viteConfigPath)) {
      let config = fs.readFileSync(viteConfigPath, 'utf-8');
      if (!config.includes("base:")) {
        if (/export default defineConfig\(\{/.test(config)) {
          config = config.replace(
            /export default defineConfig\(\{/,
            "export default defineConfig({\n  base: './',"
          );
        } else if (/return \{/.test(config)) {
          config = config.replace(/return \{/, "return {\n    base: './',");
        }
        fs.writeFileSync(viteConfigPath, config, 'utf-8');
        console.log(`  Patched vite.config.ts`);
      }
    }

    const hasNodeModules = fs.existsSync(path.join(folderPath, 'node_modules'));
    if (!hasNodeModules) {
      console.log(`  Copying node_modules from v1-0...`);
      // Use powershell Copy-Item for fast recursive copy
      execSync(`powershell Copy-Item -Recurse -Force "${templateModules}" "${path.join(folderPath, 'node_modules')}"`);
    }

    console.log(`  Building...`);
    execSync('npm run build', { cwd: folderPath, stdio: 'inherit' });

    const distPath = path.join(folderPath, 'dist');
    const targetPath = path.join(publicDir, folder);
    if (fs.existsSync(targetPath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
    }
    console.log(`  Copying dist -> public/${folder}`);
    copyDir(distPath, targetPath);
    console.log(`  ✔ Done: ${folder}`);
  } catch (err) {
    console.error(`  ❌ Failed: ${folder}:`, err.message);
  }
}
