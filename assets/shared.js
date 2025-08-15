// Small utilities shared across pages
function $id(id){ return document.getElementById(id); }
function storageGet(key, fallback){ try{ const v = localStorage.getItem(key); return v? JSON.parse(v): fallback; }catch{ return fallback; } }
function storageSet(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch{} }
function prefersReducedMotion(){ return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

// Injects the shared header and footer into the page
function injectHeaderFooter(activePage) {
  const headerHTML = `
<header>
  <div class="nav">
    <a href="index.html" class="brand" aria-label="Home"><div class="logo">DR</div> <span>DeFi‑RealEstate</span></a>
    <div class="grow"></div>
    <button class="menu-btn" id="menuBtn" aria-label="Menu" aria-expanded="false" aria-controls="primaryNav">☰</button>
    <nav role="navigation" aria-label="Primary" id="primaryNav">
      <a href="index.html" data-page="home" data-i18n="nav_home">Home</a>
      <a href="dividends.html" data-page="dividends" data-i18n="nav_dividends">Dividend Tracker</a>
      <a href="growth.html" data-page="growth" data-i18n="nav_growth">Growth & Forecast</a>
      <a href="marketplace.html" data-page="market" data-i18n="nav_market">Marketplace</a>
      <a href="admin.html" data-page="admin" data-i18n="nav_admin">Admin</a>
    </nav>
    <div class="controls">
      <select id="langSel" aria-label="Language">
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  </div>
</header>`;
  const footerHTML = `
<footer role="contentinfo">
  <div class="foot">
  <div>© <span id="yr"></span> DeFi‑RealEstate • <span data-i18n="foot_rights">All rights reserved.</span></div>
  <div class="muted">Made for demo — mock data only. · <a href="https://sonnil.github.io/DeFi-RealEstate/" target="_blank" rel="noopener">Live site</a> · <a href="https://github.com/Sonnil/DeFi-RealEstate/issues" target="_blank" rel="noopener">Report issue</a></div>
  </div>
</footer>`;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  // Mobile menu toggle
  try{
    const navWrap = document.querySelector('header .nav');
    const btn = document.getElementById('menuBtn');
    if(btn && navWrap){
      btn.addEventListener('click', ()=>{
        const open = navWrap.classList.toggle('show-menu');
        btn.setAttribute('aria-expanded', String(open));
      });
      // Close when a nav link is clicked (on small screens)
      const links = navWrap.querySelectorAll('nav a');
      links.forEach(a=>a.addEventListener('click', ()=>{
        if(navWrap.classList.contains('show-menu')){
          navWrap.classList.remove('show-menu');
          btn.setAttribute('aria-expanded','false');
        }
      }));
    }
  }catch{}
  if (typeof initHeader === 'function') initHeader(activePage);
}

// Modal helpers (optional usage by marketplace)
function openModal(modalId, backdropId){
  const modal = $id(modalId); const backdrop = $id(backdropId);
  if(!modal||!backdrop) return;
  backdrop.classList.add('show'); modal.classList.add('show');
  // Focus trap
  const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const first = focusable[0]; const last = focusable[focusable.length-1];
  function trap(e){
    if(e.key === 'Tab'){
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    } else if(e.key === 'Escape'){ closeModal(modalId, backdropId); }
  }
  modal.dataset.trap = '1';
  document.addEventListener('keydown', trap);
  modal.__trapHandler = trap;
  setTimeout(()=>first?.focus(), 0);
}
function closeModal(modalId, backdropId){
  const modal = $id(modalId); const backdrop = $id(backdropId);
  if(!modal||!backdrop) return;
  backdrop.classList.remove('show'); modal.classList.remove('show');
  if(modal.__trapHandler){ document.removeEventListener('keydown', modal.__trapHandler); delete modal.__trapHandler; }
}

// Shared validation/formatting helpers
function onlyDigits(s){ try{return (s||"").replace(/\D/g,"");}catch{return "";} }
function luhnCheck(num){
  const s = onlyDigits(num); if(!s || s.length<13 || s.length>19) return false;
  let sum=0, alt=false; for(let i=s.length-1;i>=0;i--){ let n=s.charCodeAt(i)-48; if(n<0||n>9) return false; if(alt){ n*=2; if(n>9)n-=9; } sum+=n; alt=!alt; }
  return sum%10===0;
}
function validExpiry(exp){
  if(!exp) return false; const m=String(exp).match(/^(\d{2})\s*\/\s*(\d{2}|\d{4})$/); if(!m) return false;
  let mm=parseInt(m[1],10), yy=parseInt(m[2],10); if(mm<1||mm>12) return false; if(yy<100) yy+=2000;
  const now=new Date(); const y=now.getFullYear(), mon=now.getMonth()+1;
  return (yy>y) || (yy===y && mm>=mon);
}
function formatCardNumber(val){
  const s=onlyDigits(val).slice(0,19); return s.replace(/(.{4})/g,'$1 ').trim();
}
