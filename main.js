/* ============================================
   AD Construction LLC — Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const expanded = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', expanded);
    });
    // Close menu when a link is tapped
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }
    });
  });

  // Contact form handling
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let valid = true;
      const fields = ['name', 'phone', 'email', 'message'];

      fields.forEach(function (field) {
        const input = form.querySelector('[name="' + field + '"]');
        if (!input) return;
        const group = input.closest('.form-group');
        group.classList.remove('has-error');

        if (!input.value.trim()) {
          group.classList.add('has-error');
          valid = false;
        } else if (field === 'email') {
          const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRe.test(input.value.trim())) {
            group.classList.add('has-error');
            valid = false;
          }
        } else if (field === 'phone') {
          const digits = input.value.replace(/\D/g, '');
          if (digits.length < 7) {
            group.classList.add('has-error');
            valid = false;
          }
        }
      });

      if (!valid) return;

      // Build a mailto fallback so the form works without a backend
      const name = form.querySelector('[name="name"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();

      const subject = encodeURIComponent('Estimate request from ' + name);
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Email: ' + email + '\n\n' +
        'Message:\n' + message
      );
      const mailto = 'mailto:adconstructionllc14@gmail.com?subject=' + subject + '&body=' + body;

      const successBox = document.querySelector('.form-success');
      if (successBox) {
        successBox.classList.add('visible');
        successBox.textContent = 'Thanks ' + name.split(' ')[0] + '! Opening your email to send the request — or call 719-440-4881.';
      }

      // Open user's email client
      window.location.href = mailto;

      form.reset();
      setTimeout(function () {
        if (successBox) successBox.classList.remove('visible');
      }, 8000);
    });
  }

  // Subtle scroll-in animation for cards with stagger (progressive enhancement)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    // Apply reveal class & stagger delay to common card groups
    document.querySelectorAll('.services-grid, .projects-grid, .testimonials-grid, .values-grid, .why-grid, .featured-projects, .services-expanded, .about-stats').forEach(function (group) {
      const items = group.children;
      for (let i = 0; i < items.length; i++) {
        items[i].classList.add('reveal');
        items[i].style.transitionDelay = (i * 80) + 'ms';
        observer.observe(items[i]);
      }
    });

    // Standalone reveal for hero text, section heads, story blocks
    document.querySelectorAll('.section-head, .about-story, .hero-inner, .page-header-inner').forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // Animated number counters for stats
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 1400;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      el.textContent = prefix + current + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }
    requestAnimationFrame(tick);
  }

});
