/* ══════════════════════════════════════════════════════════════
   TARSILA RUBIA CLINIC — app.js
   ══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── GoatCounter: delegated click listener ─────────────────── */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-gc-event]');
    if (!el) return;
    var name = el.getAttribute('data-gc-event');
    if (!name) return;
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: name, title: name, event: true });
    }
  });

  /* ── Nav scroll behavior ───────────────────────────────────── */
  var nav = document.getElementById('tc-nav');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 48) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); /* run once on load */
  }

  /* ── Floating WhatsApp button ──────────────────────────────── */
  var floatWa = document.getElementById('tc-float-wa');
  if (floatWa) {
    var onScrollFloat = function () {
      if (window.scrollY > 300) {
        floatWa.classList.add('visible');
      } else {
        floatWa.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', onScrollFloat, { passive: true });
    onScrollFloat();
  }

  /* ── Hamburger menu ────────────────────────────────────────── */
  var hamburger = document.getElementById('tc-hamburger');
  var overlay   = document.getElementById('tc-menu-overlay');
  if (hamburger && overlay) {
    hamburger.addEventListener('click', function () {
      var expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      overlay.classList.toggle('open', !expanded);
      document.body.classList.toggle('menu-open', !expanded);
    });

    /* Close on overlay link click */
    overlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        overlay.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        hamburger.setAttribute('aria-expanded', 'false');
        overlay.classList.remove('open');
        document.body.classList.remove('menu-open');
        hamburger.focus();
      }
    });
  }

  /* ── Scroll-reveal via IntersectionObserver ────────────────── */
  if ('IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('[data-reveal]');
    if (revealEls.length) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });
      revealEls.forEach(function (el) { observer.observe(el); });
    }
  }
})();
