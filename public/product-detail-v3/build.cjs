const fs = require('fs');
const path = require('path');
const dir = __dirname;

const top = fs.readFileSync(path.join(dir, 'top.html'), 'utf8');
const bottom = fs.readFileSync(path.join(dir, 'bottom.html'), 'utf8');
const css = fs.readFileSync(path.join(dir, 'enhancements.css'), 'utf8');

// Read the v1 inline styles from the original
const v1Styles = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--red:#C8181E;--red-deep:#A01318;--red-glow:rgba(200,24,30,.18);--red-sub:rgba(200,24,30,.08);--blk:#080808;--nb:#0E0E0E;--dk:#141414;--g9:#181818;--g8:#242424;--g7:#373737;--g6:#4A4A4A;--g5:#666;--g4:#8A8A8A;--g3:#ADADAD;--g2:#D0D0D0;--g1:#E8E8E8;--g0:#F4F4F4;--wh:#FFF;--ow:#FAFAFA;--f:'Inter',system-ui,sans-serif;--mx:1340px;--ez:cubic-bezier(.16,1,.3,1)}
html{scroll-behavior:smooth}body{font-family:var(--f);background:var(--ow);color:var(--nb);line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.w{max-width:var(--mx);margin:0 auto;padding:0 56px}@media(max-width:768px){.w{padding:0 24px}}
.rv{opacity:0;transform:translateY(28px);transition:opacity .8s var(--ez),transform .8s var(--ez)}.rv.in{opacity:1;transform:none}.d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}.d4{transition-delay:.4s}
.eb{display:inline-flex;align-items:center;gap:10px;font:700 10.5px/1 var(--f);letter-spacing:.14em;text-transform:uppercase;color:var(--red)}.eb::before{content:'';width:22px;height:2px;background:var(--red)}
.btn{display:inline-flex;align-items:center;gap:8px;font:700 13px/1 var(--f);letter-spacing:.025em;text-decoration:none;padding:14px 28px;border:none;cursor:pointer;transition:all .25s;white-space:nowrap}
.btn svg{width:14px;height:14px;flex-shrink:0;transition:transform .2s}.btn:hover svg{transform:translateX(3px)}
.br{background:var(--red);color:#fff;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)}.br:hover{background:var(--red-deep);transform:translateY(-1px);box-shadow:0 8px 28px rgba(200,24,30,.35)}
.bo{background:0 0;color:var(--nb);border:1.5px solid var(--g2)}.bo:hover{border-color:var(--nb)}
.bg{background:0 0;color:var(--red);border:1.5px solid rgba(200,24,30,.3)}.bg:hover{background:var(--red-sub)}
#nav{position:fixed;top:0;left:0;right:0;z-index:200;transition:all .4s var(--ez)}
#nav.solid{background:rgba(255,255,255,.97);backdrop-filter:blur(24px);border-bottom:1px solid rgba(0,0,0,.06);box-shadow:0 2px 32px rgba(0,0,0,.05)}
.nav-in{max-width:var(--mx);margin:0 auto;padding:0 56px;height:72px;display:flex;align-items:center;justify-content:space-between}
@media(max-width:768px){.nav-in{padding:0 24px;height:64px}}
.nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none}
.logo-b{width:36px;height:36px;background:var(--red);display:flex;align-items:center;justify-content:center;clip-path:polygon(0 0,82% 0,100% 18%,100% 100%,0 100%)}
.logo-b svg{width:18px;height:18px;color:#fff}
.nav-t{font:900 15px/1 var(--f);letter-spacing:.07em;color:var(--nb)}
#hero{position:relative;padding:140px 0 0;background:var(--g0);overflow:hidden}
.hero-pat{position:absolute;inset:0;background-image:linear-gradient(rgba(200,24,30,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(200,24,30,.03) 1px,transparent 1px);background-size:80px 80px;pointer-events:none}
.hero-grid{display:grid;grid-template-columns:1fr 520px;gap:64px;align-items:center}
@media(max-width:1100px){.hero-grid{grid-template-columns:1fr;gap:40px}}
.hero-bc{font-size:12px;color:var(--g4);margin-bottom:20px}.hero-bc a{color:var(--g5);text-decoration:none}.hero-bc a:hover{color:var(--red)}
.hero-badge{display:inline-block;font:700 10px/1 var(--f);letter-spacing:.1em;text-transform:uppercase;color:var(--red);border:1px solid rgba(200,24,30,.25);padding:6px 14px;margin-bottom:20px}
.hero-h{font-size:clamp(32px,4vw,52px);font-weight:900;letter-spacing:-.03em;line-height:1.08;margin-bottom:20px}
.hero-sub{font-size:clamp(15px,1.3vw,18px);line-height:1.7;color:var(--g5);margin-bottom:10px;max-width:520px}
.hero-mc{font-size:12px;color:var(--g4);margin-bottom:28px;font-style:italic}
.hero-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:48px}
#specs{position:relative;z-index:10;margin-top:-40px;padding-bottom:80px}
.sp{padding:28px 20px;text-align:center;transition:background .3s}
.sp-icon{width:32px;height:32px;margin:0 auto 10px;background:var(--red-sub);border:1px solid rgba(200,24,30,.15);display:flex;align-items:center;justify-content:center}
.sp-icon svg{width:15px;height:15px;color:var(--red)}
.sp-val{font-size:clamp(22px,2.2vw,30px);font-weight:900;letter-spacing:-.03em;color:var(--nb);line-height:1}
.sp-unit{font-size:11px;color:var(--red);font-weight:700;margin-left:2px}
.sp-lbl{font-size:10.5px;color:var(--g4);margin-top:6px;letter-spacing:.02em}
.sh{margin-bottom:48px}.sh .eb{margin-bottom:14px}
.sh h2{font-size:clamp(28px,3vw,42px);font-weight:900;letter-spacing:-.03em;line-height:1.1}
.sh p{font-size:15px;color:var(--g5);line-height:1.7;margin-top:12px;max-width:560px}
.acc{border:1px solid var(--g1);margin-bottom:-1px;transition:border-color .3s}
.acc.open{border-color:rgba(200,24,30,.2)}
.acc-head{display:flex;align-items:center;gap:14px;padding:20px 28px;cursor:pointer;transition:background .2s}
.acc-head:hover{background:var(--g0)}
.acc-icon{width:32px;height:32px;flex-shrink:0;background:var(--red-sub);border:1px solid rgba(200,24,30,.12);display:flex;align-items:center;justify-content:center}
.acc-icon svg{width:14px;height:14px;color:var(--red)}
.acc-title{font-size:15px;font-weight:700;flex:1}
.acc-arrow{width:20px;height:20px;transition:transform .3s var(--ez)}.acc.open .acc-arrow{transform:rotate(180deg)}
.acc-body{max-height:0;overflow:hidden;transition:max-height .4s var(--ez)}.acc.open .acc-body{max-height:500px}
.acc-inner{padding:0 28px 24px 74px;font-size:13.5px;line-height:1.7;color:var(--g5)}
.acc-inner .callout{background:rgba(200,24,30,.05);border-left:3px solid var(--red);padding:12px 16px;margin-top:12px;font-size:12.5px;color:var(--g6)}
.rel-body{padding:20px}
.rel-tag{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--red);margin-bottom:6px}
.rel-name{font-size:15px;font-weight:700;margin-bottom:8px;line-height:1.3}
.rel-desc{font-size:12.5px;color:var(--g5);line-height:1.55;margin-bottom:12px}
.rel-link{font-size:11px;font-weight:700;color:var(--red);letter-spacing:.05em;text-transform:uppercase}
.cta-glow{position:absolute;top:-100px;right:-100px;width:500px;height:500px;background:radial-gradient(circle,rgba(200,24,30,.12),transparent 70%);pointer-events:none}
.form-grid{display:grid;grid-template-columns:1fr 400px;gap:72px;align-items:start;position:relative;z-index:2}
@media(max-width:1000px){.form-grid{grid-template-columns:1fr;gap:48px}}
.form-h{font-size:clamp(26px,3vw,38px);font-weight:900;letter-spacing:-.03em;line-height:1.1;color:#fff;margin-bottom:12px}
.form-sub{font-size:14px;line-height:1.7;color:rgba(255,255,255,.4);margin-bottom:36px}
.form-fields{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:600px){.form-fields{grid-template-columns:1fr}}
.ff{display:flex;flex-direction:column;gap:6px}.ff.full{grid-column:span 2}@media(max-width:600px){.ff.full{grid-column:span 1}}
.ff label{font-size:11px;font-weight:600;color:rgba(255,255,255,.5);letter-spacing:.04em;text-transform:uppercase}
.ff input,.ff select,.ff textarea{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);padding:12px 16px;color:#fff;font:400 14px/1.5 var(--f);transition:border-color .2s;outline:none;resize:vertical}
.ff input:focus,.ff select:focus,.ff textarea:focus{border-color:var(--red)}
.ff textarea{min-height:80px}
.form-submit{margin-top:20px}
.form-aside{display:flex;flex-direction:column;gap:24px}
.form-aside img{width:100%;border:1px solid rgba(255,255,255,.06);opacity:.6}
.form-info{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);padding:28px}
.form-info h4{font-size:14px;font-weight:700;color:#fff;margin-bottom:12px}
.form-info p{font-size:13px;color:rgba(255,255,255,.4);line-height:1.6;margin-bottom:4px}
.sticky-cta{position:fixed;bottom:0;left:0;right:0;z-index:190;transform:translateY(100%);transition:transform .4s var(--ez)}
.sticky-cta.show{transform:none}
.sticky-inner{max-width:var(--mx);margin:0 auto;padding:12px 56px;display:flex;align-items:center;justify-content:flex-end;gap:12px;background:rgba(255,255,255,.97);backdrop-filter:blur(24px);border-top:1px solid var(--g1);box-shadow:0 -4px 32px rgba(0,0,0,.06)}
@media(max-width:768px){.sticky-inner{padding:10px 16px;justify-content:center}.sticky-mobile{display:flex!important;gap:0;width:100%}.sticky-mobile .btn{flex:1;justify-content:center;padding:14px 8px;font-size:11px}}
.docs-pat{position:absolute;inset:0;background-image:linear-gradient(var(--g1) 1px,transparent 1px);background-size:100% 60px;pointer-events:none;opacity:.3}
.cn[data-val]{transition:all .3s}`;

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>PKGFF-24230V1 — Pin lithium 24V 230Ah cho xe nâng điện | PKG Battery</title>
<meta name="description" content="Bình ắc quy pin lithium công nghiệp 24V 230Ah cho xe nâng điện. Công nghệ LiFePO4, BMS thông minh, sạc nhanh 2-4 giờ. Yêu cầu báo giá ngay."/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<style>
${v1Styles}
${css}
</style>
</head>
<body>
${top}
${bottom}
<script src="./script.js"><\/script>
</body>
</html>`;

fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
console.log('✅ Built product-detail-v3/index.html successfully!');
console.log('Size:', (Buffer.byteLength(html) / 1024).toFixed(1), 'KB');
