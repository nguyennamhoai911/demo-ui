// Scroll Reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

// Nav solid on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 60);
  // Sticky CTA
  const sticky = document.getElementById('sticky');
  if (sticky) sticky.classList.toggle('show', window.scrollY > 600);
}, { passive: true });

// Counter animation
const cio = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.val);
    const isFloat = target % 1 !== 0;
    const duration = 1200;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = isFloat ? current.toFixed(1) : Math.round(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    cio.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.cn').forEach(el => cio.observe(el));

// Accordion
document.querySelectorAll('.acc-head').forEach(head => {
  head.addEventListener('click', () => {
    const acc = head.parentElement;
    const wasOpen = acc.classList.contains('open');
    // Close all
    document.querySelectorAll('.acc').forEach(a => a.classList.remove('open'));
    if (!wasOpen) acc.classList.add('open');
  });
});

// Gallery tabs
document.querySelectorAll('.gal-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.gal-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const group = tab.dataset.tab;
    document.querySelectorAll('.gi').forEach(gi => {
      gi.style.display = (group === 'all' || gi.dataset.group === group) ? '' : 'none';
    });
  });
});

// Lightbox
const lb = document.getElementById('lightbox');
document.querySelectorAll('.gi').forEach(gi => {
  gi.addEventListener('click', () => {
    const src = gi.querySelector('img').src;
    lb.querySelector('img').src = src;
    lb.classList.add('open');
  });
});
lb.addEventListener('click', () => lb.classList.remove('open'));
document.querySelector('.lb-close').addEventListener('click', (e) => { e.stopPropagation(); lb.classList.remove('open'); });
