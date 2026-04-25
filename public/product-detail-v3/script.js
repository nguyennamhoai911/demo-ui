/* === Product Detail v3 — Interactive Logic === */
(function(){
  'use strict';

  // Scroll Reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));

  // Nav solid on scroll
  const nav = document.getElementById('nav');
  const stickyDesktop = document.querySelector('.sticky-v3');
  const stickyMobile = document.getElementById('sticky-mobile');
  
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if(nav) nav.classList.toggle('solid', y > 60);
    if(stickyDesktop) stickyDesktop.classList.toggle('show', y > 500);
    if(stickyMobile) stickyMobile.classList.toggle('show', y > 500);
  }, { passive: true });

  // Counter animation
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.val);
      const isFloat = target % 1 !== 0;
      const duration = 1200;
      const start = performance.now();
      const animate = now => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = isFloat ? (target * eased).toFixed(1) : Math.round(target * eased);
        if(p < 1) requestAnimationFrame(animate);
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
      document.querySelectorAll('.acc').forEach(a => a.classList.remove('open'));
      if(!wasOpen) acc.classList.add('open');
    });
  });

  // Gallery tabs
  document.querySelectorAll('.gal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.gal-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const group = tab.dataset.tab;
      document.querySelectorAll('.gi-v3').forEach(gi => {
        gi.style.display = (group === 'all' || gi.dataset.group === group) ? '' : 'none';
      });
    });
  });

  // Hero thumbnail gallery
  const heroImg = document.querySelector('.hero-stage-inner img');
  document.querySelectorAll('.hero-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.hero-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      if(heroImg) {
        heroImg.style.opacity = '0';
        setTimeout(() => {
          heroImg.src = thumb.dataset.src;
          heroImg.style.opacity = '1';
        }, 200);
      }
    });
  });

  // Lightbox v3 with navigation
  const lbImages = [];
  let lbIndex = 0;
  const lb = document.getElementById('lightbox-v3');
  if(lb) {
    const lbImg = lb.querySelector('.lb-main');
    const lbCounter = lb.querySelector('.lb-counter');
    
    document.querySelectorAll('.gi-v3').forEach((gi, i) => {
      const img = gi.querySelector('img');
      if(img) lbImages.push(img.src);
      gi.addEventListener('click', () => {
        lbIndex = i;
        showLb();
      });
    });

    // Hero fullscreen button
    const fsBtn = document.querySelector('.hero-fullscreen');
    if(fsBtn){
      fsBtn.addEventListener('click', () => {
        if(heroImg){
          lbImages.unshift(heroImg.src);
          lbIndex = 0;
          showLb();
        }
      });
    }

    function showLb(){
      if(!lbImages.length) return;
      lbImg.src = lbImages[lbIndex];
      lbCounter.textContent = (lbIndex+1) + ' / ' + lbImages.length;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function hideLb(){
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }
    lb.querySelector('.lb-close').addEventListener('click', hideLb);
    lb.addEventListener('click', e => { if(e.target === lb) hideLb(); });
    lb.querySelector('.lb-prev').addEventListener('click', e => {
      e.stopPropagation();
      lbIndex = (lbIndex - 1 + lbImages.length) % lbImages.length;
      lbImg.src = lbImages[lbIndex];
      lbCounter.textContent = (lbIndex+1) + ' / ' + lbImages.length;
    });
    lb.querySelector('.lb-next').addEventListener('click', e => {
      e.stopPropagation();
      lbIndex = (lbIndex + 1) % lbImages.length;
      lbImg.src = lbImages[lbIndex];
      lbCounter.textContent = (lbIndex+1) + ' / ' + lbImages.length;
    });
    // Keyboard nav
    document.addEventListener('keydown', e => {
      if(!lb.classList.contains('open')) return;
      if(e.key === 'Escape') hideLb();
      if(e.key === 'ArrowLeft') lb.querySelector('.lb-prev').click();
      if(e.key === 'ArrowRight') lb.querySelector('.lb-next').click();
    });
  }

  // Copy specs
  const copyBtn = document.querySelector('.copy-btn');
  if(copyBtn){
    copyBtn.addEventListener('click', () => {
      const table = document.querySelector('.spec-table-v3');
      if(!table) return;
      let text = '';
      table.querySelectorAll('tr').forEach(tr => {
        const cells = tr.querySelectorAll('td, th');
        const row = Array.from(cells).map(c => c.textContent.trim()).join('\t');
        if(row) text += row + '\n';
      });
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.classList.add('copied');
        copyBtn.querySelector('span').textContent = 'Đã copy!';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.querySelector('span').textContent = 'Copy specs';
        }, 2000);
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if(id === '#') return;
      const target = document.querySelector(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
