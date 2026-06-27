/* ============================================
   Atelier Bleu — Complete Vanilla JavaScript
   ============================================ */

// ============================================
// STATE
// ============================================
const state = {
  mobileMenuOpen: false,
  activeFilter: 'all',
  currentSlide: 0,
  slideDirection: 'right',
  autoplayTimer: null,
  baPosition: 50,
  isDragging: false,
  cursorX: -100,
  cursorY: -100,
  cursorRingX: -100,
  cursorRingY: -100,
  rafId: null,
};

// ============================================
// DATA
// ============================================

const portfolioData = [
  { id:'proj-1', title:'The Azure Penthouse', category:'residential', image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80', description:'A striking private residence overlooking the Arabian Sea, featuring deep navy velvet upholstery, white Statuario marble, and custom satin-brass architectural reveals.', details:{ location:'Marine Drive, Mumbai', area:'5,800 sq.ft.', year:'2025', style:'Modern Luxury / Yacht-Inspired' } },
  { id:'proj-2', title:'Valkyrie Executive Lounge', category:'commercial', image:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80', description:'A bespoke corporate workspace and VIP salon crafted for a prominent venture group, finished with silver oak panelling and integrated intelligent lighting.', details:{ location:'BKC, Mumbai', area:'8,400 sq.ft.', year:'2025', style:'Minimalist Corporate Elite' } },
  { id:'proj-3', title:'Atelier Bleu Mansion', category:'residential', image:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', description:'An expansive high-society villa with double-height glass facades, floating marble staircases, and a private wellness wing tailored in calm monochrome shades.', details:{ location:'DLF Phase V, Gurugram', area:'12,500 sq.ft.', year:'2024', style:'Contemporary Grandeur' } },
  { id:'proj-4', title:'Lumina Coastal Estate', category:'residential', image:'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80', description:'A waterfront villa showcasing master suites that merge with the ocean horizon, detailed with silver-threaded silk textiles and hand-brushed oak cabinetry.', details:{ location:'Alibaug, Maharashtra', area:'7,200 sq.ft.', year:'2025', style:'Maritime Sophistication' } },
  { id:'proj-5', title:'The Blue Hera Yacht', category:'yacht', image:'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80', description:'Interior commission for a custom 45-meter luxury superyacht, deploying weightless composite panels, marine-grade blue suede, and polished platinum trim.', details:{ location:'Monaco Harbor', area:'Cabin & Deck Commission', year:'2024', style:'Ultra-Luxury Nautical' } },
  { id:'proj-6', title:'The Sapphire Conservatory', category:'hospitality', image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', description:'A premium Michelin-star restaurant lounge characterized by deep blue fluted leather booths, a backlit quartzite bar, and a crystalline drop-ceiling sculpture.', details:{ location:'Chanakyapuri, New Delhi', area:'4,500 sq.ft.', year:'2024', style:'Art Deco Revival' } }
];

const testimonialsData = [
  { id:'test-1', name:'Aditya Birla', role:'Managing Director', company:'Birla Capital Holdings', quote:'Atelier Bleu did not just design our penthouse; they orchestrated an architectural symphony. Every angle feels deliberately aligned, every material is of impeccable grade. The blue and white marble integration is a masterclass in custom tailoring.', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80' },
  { id:'test-2', name:'Dr. Ananya Iyer', role:'Founder', company:'Iyer Neurological Institute', quote:'The design process was highly intellectual and precise. The studio operates with an Apple-level attention to micro-details. The custom lighting systems and acoustic panels they engineered create a profound sense of tranquility.', avatar:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80' },
  { id:'test-3', name:'Ranveer Singhania', role:'Chairman', company:'Singhania Real Estate Group', quote:'Our waterfront villa is now a landmark. Atelier Bleu transformed a raw concrete frame into an absolute masterpiece of maritime luxury. The before-and-after change was breathtaking, and their execution time was precise.', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80' }
];

const processData = [
  { number:'01', title:'Architectural Blueprinting', subtitle:'Strategic spatial choreography', description:'We map out physical flows, sightlines, and light behavior on pristine architectural grids, defining the structural potential of your space.' },
  { number:'02', title:'The Material Synthesis', subtitle:'Curation of the elite tactile library', description:'We source exclusive blue quartzite, French silk-blend textiles, and flawless custom metals to compose a bespoke sensory and color palette.' },
  { number:'03', title:'Intelligent Technical Layering', subtitle:'Acoustic & systemic micro-engineering', description:'We embed hidden state-of-the-art systems: low-profile ambient LED micro-coves, sound-absorbing architectural panels, and responsive smart home triggers.' },
  { number:'04', title:'The Atelier Unveiling', subtitle:'Pristine styling and final realization', description:'Our elite white-glove team curates the final landscape\u2014adjusting luminaire color temperatures, setting custom furnishings, and delivering turn-key perfection.' }
];

const statsData = [
  { id:'stat-1', value:124, suffix:'+', label:'Elite Commissions', sublabel:'Penthouses, villas, and yachts completed globally.' },
  { id:'stat-2', value:4.8, suffix:'B+', label:'Property Value Tailored', sublabel:'Total assets redesigned with high-end premium finishes.' },
  { id:'stat-3', value:16, suffix:'', label:'Global Design Laurels', sublabel:'Awwwards, AD100, and architectural design recognitions.' },
  { id:'stat-4', value:100, suffix:'%', label:'Bespoke Craftsmanship', sublabel:'Every piece of joinery, textile, and millwork is custom.' }
];

const awardsData = [
  { year:'2025', title:'Best Residential Interior Design', category:'The Azure Penthouse', institution:'AD100 Excellence Awards' },
  { year:'2024', title:'Outstanding Luxury Commercial Space', category:'Valkyrie Executive Lounge', institution:'Asia Design Prize' },
  { year:'2024', title:'Best Yacht Interior Innovation', category:'The Blue Hera Yacht', institution:'Monaco Superyacht Show Awards' },
  { year:'2023', title:'Elite Studio of the Year', category:'Comprehensive Portfolio', institution:'Indian Luxury Architecture Awards' }
];

const faqData = [
  { id:'faq-1', question:'How does the design commissioning process work with Atelier Bleu?', answer:'Our workflow begins with a private 1-on-1 consultation to understand your structural requirements. We then draft a full spatial concept and high-fidelity 3D renders alongside hand-picked material samples. Upon authorization, our elite craftsmen execute the build with fully managed turnkey delivery.' },
  { id:'faq-2', question:'What geographic locations do you service for luxury commissions?', answer:'While our main creative studios are situated in Mumbai and New Delhi, we routinely cater to high-net-worth clients across Europe (London, Monaco), the Middle East (Dubai), and premium estates across India (Alibaug, Goa, Gurugram, Bengaluru).' },
  { id:'faq-3', question:'Can you work with existing under-construction structures?', answer:'Absolutely. We specialize in taking raw, concrete under-construction structures and completely retrofitting them with premium partitions, custom steel framing, custom smart ceilings, and refined structural details.' },
  { id:'faq-4', question:'Do you design custom custom-tailored furniture pieces?', answer:'Yes, every sofa, console, dining table, and wardrobe is engineered in-house. We work with Italian stone quarries, Belgian weavers, and local master woodworkers to create signature items that will never be duplicated.' }
];

// ============================================
// UTILITY HELPERS
// ============================================

function throttle(fn, wait) {
  let last = 0;
  return function(...args) {
    const now = performance.now();
    if (now - last > wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}

function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

// ============================================
// 1. PAGE LOADER
// ============================================

function runLoader() {
  const loader = document.getElementById('page-loader');
  const percent = document.getElementById('loader-percent');
  if (!loader) return;

  var start = performance.now();
  var duration = 2600;
  var holdStart = null;

  function step(now) {
    var elapsed = now - start;
    var p = Math.min(100, Math.floor((elapsed / duration) * 100));
    if (percent) percent.textContent = String(p).padStart(3, '0') + '%';

    if (p < 100) {
      requestAnimationFrame(step);
    } else {
      // Small pause at 100% before exit
      if (!holdStart) { holdStart = now; requestAnimationFrame(step); return; }
      if (now - holdStart < 400) { requestAnimationFrame(step); return; }

      loader.classList.add('exit');
      setTimeout(function() {
        loader.style.display = 'none';
        // Trigger hero stagger entrance after loader
        document.querySelectorAll('.stagger-item').forEach(function(el) {
          el.classList.add('animate');
        });
        document.querySelectorAll('.hero-rule-anim').forEach(function(el) {
          el.classList.add('animate');
        });
        // Init cursor after page is visible
        setTimeout(setupCustomCursor, 200);
      }, 1000);
    }
  }

  requestAnimationFrame(step);
}

// ============================================
// 2. SCROLL PROGRESS
// ============================================

function setupScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  const onScroll = throttle(() => {
    const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    bar.style.transform = 'scaleX(' + Math.min(progress, 1) + ')';
  }, 16);

  window.addEventListener('scroll', onScroll, { passive: true });
}

// ============================================
// 3. CUSTOM CURSOR (with spring physics)
// ============================================

function setupCustomCursor() {
  // Skip on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
  // Skip if already initialized
  if (document.querySelector('.cursor-dot')) return;

  // Hide native cursor
  document.documentElement.classList.add('cursor-hidden');

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);

  // Spring physics - smooth lerp-based lag follower
  let ringX = -100, ringY = -100;
  const LERP_FACTOR = 0.12;

  function springStep() {
    var dx = state.cursorX - ringX;
    var dy = state.cursorY - ringY;
    ringX += dx * LERP_FACTOR;
    ringY += dy * LERP_FACTOR;

    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
      state.rafId = requestAnimationFrame(springStep);
    } else {
      state.rafId = null;
    }
  }

  document.addEventListener('mousemove', function(e) {
    state.cursorX = e.clientX;
    state.cursorY = e.clientY;
    dot.style.left = state.cursorX + 'px';
    dot.style.top = state.cursorY + 'px';
    dot.style.opacity = '1';
    ring.style.opacity = '1';

    if (!state.rafId) {
      ringX = state.cursorX;
      ringY = state.cursorY;
      state.rafId = requestAnimationFrame(springStep);
    }
  });

  document.addEventListener('mouseenter', function() {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });

  document.addEventListener('mouseleave', function() {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    if (state.rafId) {
      cancelAnimationFrame(state.rafId);
      state.rafId = null;
    }
  });

  // Hover interactions
  const hoverables = $$('a, button, input, select, textarea, [role="button"], .hover-interactive');
  hoverables.forEach(function(el) {
    el.addEventListener('mouseenter', function() { ring.classList.add('hover'); });
    el.addEventListener('mouseleave', function() { ring.classList.remove('hover'); });
  });
}

// ============================================
// 4. NAVBAR SCROLL
// ============================================

function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = throttle(function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, 16);

  window.addEventListener('scroll', onScroll, { passive: true });
}

// ============================================
// 5. MOBILE MENU
// ============================================

function setupMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    menu.classList.toggle('open', state.mobileMenuOpen);
    toggle.classList.toggle('open', state.mobileMenuOpen);
    toggle.setAttribute('aria-expanded', String(state.mobileMenuOpen));

    if (menuIcon && closeIcon) {
      menuIcon.style.display = state.mobileMenuOpen ? 'none' : 'block';
      closeIcon.style.display = state.mobileMenuOpen ? 'block' : 'none';
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && state.mobileMenuOpen) {
      state.mobileMenuOpen = false;
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    }
  });

  // Close on link click
  $$('.mobile-menu-item', menu).forEach(function(link) {
    link.addEventListener('click', function() {
      state.mobileMenuOpen = false;
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
  });

  // Mobile book button
  const mobileBook = document.getElementById('mobile-book');
  if (mobileBook) {
    mobileBook.addEventListener('click', function() {
      scrollToSection('consultation');
      state.mobileMenuOpen = false;
      menu.classList.remove('open');
      toggle.classList.remove('open');
      if (menuIcon && closeIcon) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
  }
}

// ============================================
// 6. SCROLL REVEAL (IntersectionObserver)
// ============================================

function setupScrollReveal() {
  const reveals = $$('.reveal');
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(function(el) { observer.observe(el); });
}

// ============================================
// 7. PORTFOLIO + MODAL
// ============================================

function renderProjects(filter) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const items = filter === 'all'
    ? portfolioData
    : portfolioData.filter(function(p) { return p.category === filter; });

  grid.innerHTML = items.map(function(p) {
    return '<div class="project" data-id="' + p.id + '" role="button" tabindex="0" aria-label="View details for ' + p.title + '">' +
      '<div class="project-image-wrap">' +
        '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy" crossorigin="anonymous" />' +
        '<div class="project-image-overlay"></div>' +
      '</div>' +
      '<div class="project-card glass-panel">' +
        '<div class="project-card-top">' +
          '<span class="project-card-style">' + p.details.style + '</span>' +
          '<span class="project-card-area">' + p.details.area + '</span>' +
        '</div>' +
        '<h3 class="project-card-title">' + p.title + '</h3>' +
        '<div class="project-card-location">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
          '<span>' + p.details.location + '</span>' +
        '</div>' +
        '<div class="project-card-cta">' +
          '<span>Technical Brief</span>' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  // Click handlers for projects
  $$('.project', grid).forEach(function(el) {
    el.addEventListener('click', function() {
      const id = el.getAttribute('data-id');
      const proj = portfolioData.find(function(p) { return p.id === id; });
      if (proj) openModal(proj);
    });
  });
}

function openModal(project) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  if (!modal || !body) return;

  var lastFocused = document.activeElement;

  body.innerHTML =
    '<div class="modal-image">' +
      '<img src="' + project.image + '" alt="' + project.title + '" crossorigin="anonymous" />' +
      '<div class="modal-image-overlay"></div>' +
      '<div class="modal-badge glass-panel">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>' +
        '<span>SITE COMMISSION</span>' +
      '</div>' +
    '</div>' +
    '<div class="modal-details">' +
      '<div>' +
        '<div class="modal-details-header">' +
          '<div>' +
            '<span class="modal-details-style">' + project.details.style + '</span>' +
            '<h3 class="modal-details-title">' + project.title + '</h3>' +
          '</div>' +
          '<button class="modal-close" id="modal-close-btn" aria-label="Close modal">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="modal-description">' +
          '<p>' + project.description + '</p>' +
        '</div>' +
        '<div class="modal-specs">' +
          '<div><span class="modal-spec-label">LOCATION</span><span class="modal-spec-value">' + project.details.location + '</span></div>' +
          '<div><span class="modal-spec-label">SPATIAL AREA</span><span class="modal-spec-value">' + project.details.area + '</span></div>' +
          '<div><span class="modal-spec-label">COMPLETION YEAR</span><span class="modal-spec-value">' + project.details.year + '</span></div>' +
          '<div><span class="modal-spec-label">DESIGN TAILORING</span><span class="modal-spec-value">100% Hand-Crafted</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="modal-actions">' +
        '<button class="btn-modal-close" id="modal-close-alt">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>' +
          'Close Brief' +
        '</button>' +
      '</div>' +
    '</div>';

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus trap: gather focusable elements inside modal
  var focusableEls = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  var firstFocus = focusableEls[0];
  var lastFocus = focusableEls[focusableEls.length - 1];

  function closeModalHandler() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', keyHandler);
    if (lastFocused) lastFocused.focus();
  }

  function keyHandler(e) {
    if (e.key === 'Escape') {
      closeModalHandler();
      return;
    }
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === firstFocus) {
        e.preventDefault();
        if (lastFocus) lastFocus.focus();
      }
    } else {
      if (document.activeElement === lastFocus) {
        e.preventDefault();
        if (firstFocus) firstFocus.focus();
      }
    }
  }

  document.addEventListener('keydown', keyHandler);

  if (firstFocus) firstFocus.focus();

  var closeBtn = document.getElementById('modal-close-btn');
  var closeAlt = document.getElementById('modal-close-alt');
  if (closeBtn) closeBtn.addEventListener('click', closeModalHandler);
  if (closeAlt) closeAlt.addEventListener('click', closeModalHandler);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModalHandler();
  });
}

function setupPortfolio() {
  renderProjects('all');

  const filters = $$('.filter');
  filters.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filters.forEach(function(b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      state.activeFilter = btn.getAttribute('data-filter') || 'all';
      renderProjects(state.activeFilter);
    });
  });
}

// ============================================
// 8. STATS COUNTER
// ============================================

function renderStats() {
  const grid = document.getElementById('stats-grid');
  if (!grid) return;

  grid.innerHTML = statsData.map(function(s, i) {
    return '<div class="stat-card reveal' + (i > 0 ? ' reveal-delay-' + i : '') + '">' +
      '<div>' +
        '<div class="stat-number"><span class="stat-count" data-value="' + s.value + '">0</span><span class="stat-suffix">' + s.suffix + '</span></div>' +
        '<span class="stat-label">' + s.label + '</span>' +
      '</div>' +
      '<p class="stat-sublabel">' + s.sublabel + '</p>' +
      '<div class="stat-decor"></div>' +
      '<div class="stat-decor-2"></div>' +
    '</div>';
  }).join('');

  // Counter animation on reveal
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const countEl = entry.target.querySelector('.stat-count');
        if (countEl && !countEl.dataset.animated) {
          countEl.dataset.animated = 'true';
          animateCounter(countEl, parseFloat(countEl.dataset.value));
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  // After render, we need to re-run reveal observer for stats cards
  // The global reveal observer handles visual reveal; counters handled here
  $$('.stat-card').forEach(function(el) { observer.observe(el); });
}

function animateCounter(el, end) {
  let start = 0;
  const duration = 2000;
  const startTime = performance.now();
  const isInt = Number.isInteger(end);

  function step(now) {
    const p = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const current = start + (end - start) * eased;
    el.textContent = isInt ? String(Math.floor(current)) : current.toFixed(1);

    if (p < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = String(end);
    }
  }

  requestAnimationFrame(step);
}

// ============================================
// 9. PROCESS STEPS
// ============================================

function renderProcess() {
  const grid = document.getElementById('process-grid');
  if (!grid) return;

  grid.innerHTML = processData.map(function(s, i) {
    return '<div class="step reveal reveal-delay-' + i + '">' +
      '<div class="step-number-ring">PH-' + s.number + '</div>' +
      '<span class="step-number">' + s.number + '</span>' +
      '<span class="step-subtitle">' + s.subtitle + '</span>' +
      '<h3 class="step-title">' + s.title + '</h3>' +
      '<p class="step-desc">' + s.description + '</p>' +
      '<div class="step-corner-bl"></div>' +
      '<div class="step-corner-br"></div>' +
    '</div>';
  }).join('');
}

// ============================================
// 10. BEFORE/AFTER COMPARISON
// ============================================

function setupBeforeAfter() {
  const container = document.getElementById('ba-container');
  const beforeWrap = document.getElementById('before-wrapper');
  const handle = document.getElementById('ba-handle');
  const percent = document.getElementById('ba-percent');
  if (!container || !beforeWrap || !handle) return;

  var dragging = false;

  function update(clientX) {
    const rect = container.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    state.baPosition = pct;
    beforeWrap.style.clipPath = 'polygon(0 0, ' + pct + '% 0, ' + pct + '% 100%, 0 100%)';
    handle.style.left = pct + '%';
    container.setAttribute('aria-valuenow', String(Math.round(pct)));
    if (percent) percent.textContent = String(Math.round(pct));
  }

  handle.addEventListener('mousedown', function(e) { e.preventDefault(); dragging = true; });

  window.addEventListener('mousemove', function(e) {
    if (dragging) update(e.clientX);
  });

  window.addEventListener('mouseup', function() { dragging = false; });

  // Touch
  handle.addEventListener('touchstart', function(e) { e.preventDefault(); dragging = true; }, { passive: false });

  window.addEventListener('touchmove', function(e) {
    if (dragging && e.touches.length > 0) update(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', function() { dragging = false; });

  // Click to move
  container.addEventListener('click', function(e) {
    if (e.target.closest('#ba-handle')) return;
    update(e.clientX);
  });

  // Keyboard
  handle.addEventListener('keydown', function(e) {
    var step = 5;
    var pct = state.baPosition;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { pct = Math.min(100, pct + step); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { pct = Math.max(0, pct - step); }
    else return;
    e.preventDefault();
    update(container.getBoundingClientRect().left + (pct / 100) * container.offsetWidth);
  });
}

// ============================================
// 11. TESTIMONIALS CAROUSEL
// ============================================

function renderTestimonials() {
  const track = document.getElementById('carousel-track');
  const dots = document.getElementById('carousel-dots');
  if (!track) return;

  // Slides
  track.innerHTML = testimonialsData.map(function(t) {
    return '<div class="carousel-slide" data-index="' + t.id + '">' +
      '<svg viewBox="0 0 24 24" fill="currentColor" class="quote-icon"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z"/></svg>' +
      '<div class="avatar-wrap">' +
        '<div class="avatar-ring"></div>' +
        '<img src="' + t.avatar + '" alt="' + t.name + '" class="avatar-img" loading="lazy" crossorigin="anonymous" />' +
      '</div>' +
      '<div class="quote-text">' +
        '<p>"' + t.quote + '"</p>' +
        '<div style="margin-top:1rem">' +
          '<span class="quote-name">' + t.name + '</span>' +
          '<span class="quote-role">' + t.role + ' // ' + t.company + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  // Dots
  dots.innerHTML = testimonialsData.map(function(_, i) {
    return '<button class="carousel-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '" aria-label="Go to testimonial ' + (i + 1) + '"></button>';
  }).join('');

  showSlide(0);
}

function showSlide(index) {
  const slides = $$('.carousel-slide');
  const dots = $$('.carousel-dot');
  if (slides.length === 0) return;

  // Remove active from all
  slides.forEach(function(s, i) {
    s.classList.remove('active');
    s.classList.remove('exit-left');
    s.classList.remove('exit-right');
  });
  dots.forEach(function(d) { d.classList.remove('active'); });

  state.currentSlide = (index + slides.length) % slides.length;

  slides[state.currentSlide].classList.add('active');
  if (dots[state.currentSlide]) dots[state.currentSlide].classList.add('active');
}

function setupTestimonials() {
  renderTestimonials();

  const prev = document.getElementById('carousel-prev');
  const next = document.getElementById('carousel-next');
  const dots = document.getElementById('carousel-dots');
  const track = document.getElementById('carousel-track');

  if (prev) {
    prev.addEventListener('click', function() {
      showSlide(state.currentSlide - 1);
      resetAutoplay();
    });
  }

  if (next) {
    next.addEventListener('click', function() {
      showSlide(state.currentSlide + 1);
      resetAutoplay();
    });
  }

  // Dot clicks
  if (dots) {
    dots.addEventListener('click', function(e) {
      var dot = e.target.closest('.carousel-dot');
      if (dot) {
        showSlide(parseInt(dot.getAttribute('data-index')));
        resetAutoplay();
      }
    });
  }

  // Autoplay
  function startAutoplay() {
    state.autoplayTimer = setInterval(function() {
      showSlide(state.currentSlide + 1);
    }, 6000);
  }

  function resetAutoplay() {
    if (state.autoplayTimer) {
      clearInterval(state.autoplayTimer);
    }
    startAutoplay();
  }

  if (track) {
    track.addEventListener('mouseenter', function() {
      if (state.autoplayTimer) clearInterval(state.autoplayTimer);
    });
    track.addEventListener('mouseleave', function() {
      startAutoplay();
    });
  }

  startAutoplay();
}

// ============================================
// 12. AWARDS
// ============================================

function renderAwards() {
  const table = document.getElementById('awards-table');
  if (!table) return;

  table.innerHTML = awardsData.map(function(a, i) {
    return '<div class="award-row reveal reveal-delay-' + i + '">' +
      '<div class="award-row-left">' +
        '<span class="award-year">[' + a.year + ']</span>' +
        '<div class="award-info">' +
          '<span class="award-icon">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7"/><path d="M4 22h16"/><path d="M10 22V7l-4-2 2-4 4 2 4-2 2 4-4 2v15"/></svg>' +
          '</span>' +
          '<h3 class="award-name">' + a.title + '</h3>' +
        '</div>' +
      '</div>' +
      '<div class="award-row-right">' +
        '<span class="award-category">' + a.category + '</span>' +
        '<span class="award-institution">' + a.institution + '</span>' +
      '</div>' +
      '<div class="award-accent"></div>' +
    '</div>';
  }).join('');
}

// ============================================
// 13. FAQ ACCORDION
// ============================================

function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;

  list.innerHTML = faqData.map(function(f) {
    return '<div class="faq-item">' +
      '<button class="faq-trigger" aria-expanded="false" data-id="' + f.id + '">' +
        '<span class="faq-trigger-left">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-icon"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
          '<span class="faq-question">' + f.question + '</span>' +
        '</span>' +
        '<span class="faq-chevron">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
        '</span>' +
      '</button>' +
      '<div class="faq-answer-wrap">' +
        '<div class="faq-answer-inner">' +
          '<div class="faq-answer">' +
            '<p>' + f.answer + '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  // Accordion logic
  $$('.faq-trigger', list).forEach(function(btn) {
    btn.addEventListener('click', function() {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      var wrap = btn.nextElementSibling;

      // Close all
      $$('.faq-trigger', list).forEach(function(b) {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });

      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        if (wrap) wrap.classList.add('open');
      }
    });
  });
}

// ============================================
// 14. SMOOTH SCROLL
// ============================================

function scrollToSection(id) {
  var target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function setupSmoothScroll() {
  // All anchor links
  $$('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var href = a.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Book buttons
  var bookBtn = document.getElementById('book-btn');
  var heroBook = document.getElementById('hero-book');
  if (bookBtn) bookBtn.addEventListener('click', function() { scrollToSection('consultation'); });
  if (heroBook) heroBook.addEventListener('click', function() { scrollToSection('consultation'); });

  // To top
  var toTop = document.getElementById('to-top');
  if (toTop) {
    toTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ============================================
// 15. ABOUT SVG DRAW ANIMATION
// ============================================

function setupAboutSVG() {
  var circle = document.querySelector('.sketch-svg .sketch-circle');
  var cross = document.querySelector('.sketch-svg .sketch-cross');
  if (!circle && !cross) return;

  var elements = [];
  if (circle) { circle.style.strokeDasharray = '260'; circle.style.strokeDashoffset = '260'; elements.push(circle); }
  if (cross) { cross.style.strokeDasharray = '350'; cross.style.strokeDashoffset = '350'; elements.push(cross); }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        elements.forEach(function(el, i) {
          el.style.transition = 'stroke-dashoffset 2s ease-in-out ' + (i * 0.2) + 's';
          el.style.strokeDashoffset = '0';
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  var sketch = document.querySelector('.sketch-card');
  if (sketch) observer.observe(sketch);

  // About image reveal
  var reveal = document.getElementById('about-reveal');
  if (reveal) {
    var imgObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          reveal.style.transition = 'transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)';
          reveal.style.transform = 'scaleY(0)';
          reveal.style.transformOrigin = 'top';
          imgObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    imgObserver.observe(reveal.closest('.about-image-wrap') || reveal);
  }
}

// ============================================
// INIT
// ============================================

function init() {
  // Phase 1: Static renders
  renderStats();
  renderProcess();
  renderAwards();
  renderFAQ();

  // Phase 2: Setup interactions
  setupMobileMenu();
  setupNavbarScroll();
  setupScrollProgress();
  setupPortfolio();
  setupBeforeAfter();
  setupTestimonials();
  setupSmoothScroll();

  // Phase 3: Animation observers
  setupScrollReveal();
  setupAboutSVG();

  // Phase 4: Loader (triggers cursor & hero after completion)
  runLoader();
}

// Start
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
