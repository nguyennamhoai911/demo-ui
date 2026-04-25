const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceDir = path.join(__dirname, 'source-zip');
const destDir = path.join(__dirname, 'unbuilt-sources');

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.zip'));

for (const file of files) {
  const match = file.match(/v1\.(\d)/);
  if (match) {
    const version = match[1];
    const folderName = `product-detail-v1-${version}`;
    const zipPath = path.join(sourceDir, file);
    const destPath = path.join(destDir, folderName);
    
    console.log(`Extracting ${file} to ${folderName}...`);
    try {
        execSync(`powershell Expand-Archive -Force -Path "${zipPath}" -DestinationPath "${destPath}"`);
        console.log(`Success: ${folderName}`);
    } catch (e) {
        console.error(`Failed to extract ${file}`);
    }
  }
}
