/* Sanjay's AI Automation Hero - Script File */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initChaosInteractions();
  initOrbitInteractions();
  initScrollHeader();
  initFaqAccordion();
  initBackToTop();
  initScrollObserver();
  initSmoothScrollLinks();
});

/**
 * 1. Mobile Menu Navigation Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const header = document.getElementById('site-header');

  if (!toggleBtn || !header) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    header.classList.toggle('nav-active');
  });

  // Close menu if clicking outside
  document.addEventListener('click', (e) => {
    if (header.classList.contains('nav-active') && !header.contains(e.target)) {
      header.classList.remove('nav-active');
    }
  });

  // Close menu on nav item click
  const navLinks = header.querySelectorAll('.site-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-active');
    });
  });
}

/**
 * 2. Before Panel (Chaos Tags) Interactions
 */
function initChaosInteractions() {
  const tags = document.querySelectorAll('.chaos-tag');
  const paths = document.querySelectorAll('.animated-path');
  const stressedImg = document.querySelector('.stressed-image');
  const scribbleIcon = document.querySelector('.scribble-icon');

  tags.forEach((tag, index) => {
    // When hovering over a chaotic task
    tag.addEventListener('mouseenter', () => {
      // Speed up line animation for this tag
      if (paths[index]) {
        paths[index].style.stroke = '#FF5722';
        paths[index].style.strokeWidth = '2.5px';
        paths[index].style.animationDuration = '2s';
        paths[index].style.opacity = '1';
      }
      
      // Make the stressed photo shake slightly to show impact of chaos
      if (stressedImg) {
        stressedImg.style.transform = 'scale(0.98) rotate(1deg)';
        stressedImg.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      }

      if (scribbleIcon) {
        scribbleIcon.style.transform = 'translateX(-50%) rotate(15deg) scale(1.15)';
        scribbleIcon.style.backgroundColor = 'var(--red-light)';
      }
    });

    tag.addEventListener('mouseleave', () => {
      // Reset line styling
      if (paths[index]) {
        paths[index].style.stroke = '#E2E8F0';
        paths[index].style.strokeWidth = '1.5px';
        paths[index].style.animationDuration = '8s';
        paths[index].style.opacity = '0.75';
      }

      // Reset stressed man styling
      if (stressedImg) {
        stressedImg.style.transform = 'none';
        stressedImg.style.borderColor = 'white';
      }

      if (scribbleIcon) {
        scribbleIcon.style.transform = 'translateX(-50%)';
        scribbleIcon.style.backgroundColor = 'var(--bg-card)';
      }
    });

    // Interactive decrement count when clicking (simulating automated fixing!)
    tag.addEventListener('click', () => {
      const counter = tag.querySelector('.tag-counter');
      if (counter) {
        let count = parseInt(counter.textContent);
        if (count > 0) {
          count = Math.max(0, count - Math.floor(Math.random() * 5 + 1));
          counter.textContent = count;
          
          // Flash effect
          tag.style.transform = 'scale(0.9) translateY(0px)';
          setTimeout(() => {
            tag.style.transform = '';
          }, 150);

          if (count === 0) {
            counter.style.display = 'none';
            tag.style.opacity = '0.5';
            tag.style.borderColor = 'rgba(16, 185, 129, 0.4)';
          }
        }
      }
    });
  });
}

/**
 * 3. After Panel (Orbit Cards) Interactions
 */
function initOrbitInteractions() {
  const orbitCards = document.querySelectorAll('.orbit-card');
  const dial = document.querySelector('.central-dial');
  const dialGlow = document.querySelector('.dial-glow');
  const arrowBtn = document.querySelector('.glowing-arrow-btn');
  const flowBeams = document.querySelectorAll('.flow-beams path');

  orbitCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      // Pulse center dial
      if (dial) {
        dial.style.borderColor = 'var(--orange-primary)';
        dial.style.boxShadow = 'var(--shadow-md), 0 0 15px rgba(255, 78, 0, 0.15)';
      }
      if (dialGlow) {
        dialGlow.style.opacity = '0.35';
        dialGlow.style.filter = 'blur(20px)';
      }
    });

    card.addEventListener('mouseleave', () => {
      // Reset center dial
      if (dial) {
        dial.style.borderColor = 'rgba(255, 78, 0, 0.12)';
        dial.style.boxShadow = 'var(--shadow-sm), 0 0 0 6px rgba(255, 78, 0, 0.03)';
      }
      if (dialGlow) {
        dialGlow.style.opacity = '0.1';
        dialGlow.style.filter = 'blur(16px)';
      }
    });
  });

  // Central transformation arrow interaction
  if (arrowBtn) {
    arrowBtn.addEventListener('mouseenter', () => {
      // Accelerate the background flow lines animations
      flowBeams.forEach(beam => {
        const animSpeed = beam.classList.contains('flow-line-main') ? '1s' : '1.5s';
        beam.style.animationDuration = animSpeed;
      });
      // Light up the dial on hover
      if (dial) {
        dial.style.transform = 'translate(-50%, -50%) scale(1.03)';
        dial.style.boxShadow = 'var(--shadow-md), 0 0 25px rgba(255, 78, 0, 0.2)';
      }
    });

    arrowBtn.addEventListener('mouseleave', () => {
      // Reset speed
      flowBeams.forEach(beam => {
        beam.style.animationDuration = '';
      });
      if (dial) {
        dial.style.transform = 'translate(-50%, -50%)';
        dial.style.boxShadow = '';
      }
    });
    
    // Clicking arrow triggers a complete transformation wave animation!
    arrowBtn.addEventListener('click', () => {
      // Flash glowing dial
      if (dialGlow) {
        dialGlow.style.transition = 'none';
        dialGlow.style.opacity = '0.9';
        dialGlow.style.transform = 'scale(1.8)';
        dialGlow.style.filter = 'blur(10px)';
        
        setTimeout(() => {
          dialGlow.style.transition = 'opacity 1s ease, transform 1s ease, filter 1s ease';
          dialGlow.style.opacity = '0.1';
          dialGlow.style.transform = 'scale(1)';
          dialGlow.style.filter = 'blur(16px)';
        }, 100);
      }
      
      // Momentarily resolve all before counts (just as a visual reward!)
      const counters = document.querySelectorAll('.tag-counter');
      counters.forEach(counter => {
        counter.textContent = '0';
        counter.style.backgroundColor = 'var(--green-primary)';
        counter.style.boxShadow = '0 2px 6px rgba(16, 185, 129, 0.4)';
        setTimeout(() => {
          counter.style.display = 'none';
          counter.closest('.chaos-tag').style.opacity = '0.5';
        }, 800);
      });
    });
  }
}

/**
 * 4. Header Scroll styling
 */
function initScrollHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '0.8rem 0';
      header.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.05)';
      header.style.backgroundColor = 'rgba(250, 248, 246, 0.95)';
    } else {
      header.style.padding = '';
      header.style.boxShadow = '';
      header.style.backgroundColor = 'rgba(250, 248, 246, 0.8)';
    }
  });
}

/**
 * 5. FAQ Accordion Interaction
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      // If clicked item wasn't active, expand it
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * 6. Back-to-Top Button Handler
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 7. Intersection Observer for Entrance Scroll Animations
 */
function initScrollObserver() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
}

/**
 * 8. Smooth Scrolling Anchor Links
 */
function initSmoothScrollLinks() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

