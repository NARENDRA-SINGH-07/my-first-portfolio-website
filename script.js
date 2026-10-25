// JAVASCRIPT
  // ── Loader ──
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hide');
    }, 1000);
  });

  // ── Scroll progress bar ──
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById('progress-bar').style.width = (scrollTop / height * 100) + '%';
  });

  // ── Navbar scroll ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));

  // ── Hamburger / mobile menu ──
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── Fade-up on scroll ──
  const fadeEls = document.querySelectorAll('.fade-up');
  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => fadeObs.observe(el));

  // ── Animate skill progress bars ──
  const progressBars = document.querySelectorAll('.progress-fill');
  const skillObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.width + '%';
        skillObs.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });
  progressBars.forEach(bar => skillObs.observe(bar));

  // ── Contact form ──
  function submitForm() {
    const name  = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const msg   = document.getElementById('formMsg').value.trim();
    if (!name || !email || !msg) {
      alert('Please fill in all fields before sending.');
      return;
    }
    const success = document.getElementById('formSuccess');
    success.style.display = 'flex';
    document.getElementById('formName').value = '';
    document.getElementById('formEmail').value = '';
    document.getElementById('formMsg').value = '';
    setTimeout(() => { success.style.display = 'none'; }, 4000);
  }