const fs = require('fs');
const d = 'public/product-detail-v1/';
const css = fs.readFileSync(d + 'styles.css', 'utf8');
const top = fs.readFileSync(d + 'body-top.html', 'utf8');
const bot = fs.readFileSync(d + 'body-bottom.html', 'utf8');
const js = fs.readFileSync(d + 'script.js', 'utf8');

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>PKGFF-24230V1 — Pin lithium 24V 230Ah cho xe nâng điện | PKG Battery</title>
<meta name="description" content="Bình ắc quy pin lithium công nghiệp 24V 230Ah cho xe nâng điện. Công nghệ LiFePO4, BMS thông minh, sạc nhanh 2-4 giờ."/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<style>
${css}
</style>
</head>
<body>
${top}
${bot}
<script>
${js}
<\/script>
</body>
</html>`;

fs.writeFileSync(d + 'index.html', html, 'utf8');
console.log('Combined index.html:', html.length, 'chars');
