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
    <div class="brand"><div class="logo">DR</div> <span>DeFi‑RealEstate</span></div>
    <div class="grow"></div>
    <nav role="navigation" aria-label="Primary">
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
      <a class="badge" href="marketplace.html" data-page="market">🧪 <span data-i18n="demo_mode">Demo data enabled</span></a>
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
