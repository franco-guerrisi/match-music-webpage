document.addEventListener('DOMContentLoaded', () => {
  // Reveal elements on scroll (Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll('.fade-up');
  elementsToReveal.forEach((el) => observer.observe(el));

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 10, 8, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(234, 88, 12, 0.2)';
      } else {
        navbar.style.background = 'rgba(15, 10, 8, 0.8)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
      }
    });
  }

  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) {
        const isVisible = navLinks.style.display === 'flex';
        if (isVisible) {
          navLinks.style.display = 'none';
        } else {
          navLinks.style.display = 'flex';
          navLinks.style.flexDirection = 'column';
          navLinks.style.position = 'absolute';
          navLinks.style.top = '100%';
          navLinks.style.left = '0';
          navLinks.style.width = '100%';
          navLinks.style.background = 'rgba(15, 10, 8, 0.98)';
          navLinks.style.padding = '24px';
          navLinks.style.gap = '20px';
          navLinks.style.borderBottom = '1px solid rgba(234, 88, 12, 0.3)';
          navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.8)';
        }
      }
    });
  }

  // ======================================================
  // INTERACTIVE APP SHOWCASE LOGIC (15 SCREENS - BILINGUAL)
  // ======================================================
  function getShowcaseData() {
    if (typeof GiglyI18n !== 'undefined') {
      return GiglyI18n.getShowcaseData();
    }
    return (typeof GIGLY_SHOWCASE_DATA !== 'undefined' && GIGLY_SHOWCASE_DATA.es) || {};
  }

  let currentCategory = 'bands';
  let currentScreenIndex = 0;

  const categoryBtns = document.querySelectorAll('.category-tab-btn');
  const subscreenSelector = document.getElementById('subscreen-selector');
  const showcaseImg = document.getElementById('showcase-screen-img');
  const showcaseBadge = document.getElementById('showcase-badge');
  const showcaseTitle = document.getElementById('showcase-title');
  const showcaseDesc = document.getElementById('showcase-desc');
  const showcaseFeatures = document.getElementById('showcase-features');
  const showcaseTechTags = document.getElementById('showcase-tech-tags');

  function renderSubscreens(category) {
    if (!subscreenSelector) return;
    subscreenSelector.innerHTML = '';
    const data = getShowcaseData();
    const screens = data[category] || [];

    screens.forEach((screen, index) => {
      const pill = document.createElement('button');
      pill.className = `subscreen-pill ${index === currentScreenIndex ? 'active' : ''}`;
      pill.textContent = screen.name;
      pill.addEventListener('click', () => {
        currentScreenIndex = index;
        updateSubscreenActive();
        renderScreenDetails(screen);
      });
      subscreenSelector.appendChild(pill);
    });

    if (screens.length > 0) {
      if (currentScreenIndex >= screens.length) {
        currentScreenIndex = 0;
      }
      renderScreenDetails(screens[currentScreenIndex]);
    }
  }

  function updateSubscreenActive() {
    if (!subscreenSelector) return;
    const pills = subscreenSelector.querySelectorAll('.subscreen-pill');
    pills.forEach((pill, idx) => {
      if (idx === currentScreenIndex) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  function renderScreenDetails(screen) {
    if (!screen) return;

    // Fade effect on image
    if (showcaseImg) {
      showcaseImg.style.opacity = '0';
      showcaseImg.style.transform = 'scale(0.98)';
      setTimeout(() => {
        showcaseImg.src = screen.img;
        showcaseImg.alt = screen.title;
        showcaseImg.style.opacity = '1';
        showcaseImg.style.transform = 'scale(1)';
      }, 150);
    }

    if (showcaseBadge) showcaseBadge.textContent = screen.badge;
    if (showcaseTitle) showcaseTitle.textContent = screen.title;
    if (showcaseDesc) showcaseDesc.textContent = screen.desc;

    if (showcaseFeatures && screen.features) {
      showcaseFeatures.innerHTML = screen.features
        .map(
          (feat) => `
          <li>
            <span class="material-symbols-rounded">check_circle</span>
            <span>${feat}</span>
          </li>
        `
        )
        .join('');
    }

    if (showcaseTechTags && screen.tags) {
      showcaseTechTags.innerHTML = screen.tags
        .map((tag) => `<span class="tech-tag">${tag}</span>`)
        .join('');
    }
  }

  // Category Tab click handlers
  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      currentCategory = btn.getAttribute('data-category');
      currentScreenIndex = 0;
      renderSubscreens(currentCategory);
    });
  });

  // Initial render of showcase if present on page
  if (subscreenSelector) {
    renderSubscreens('bands');
  }

  // React to language changes
  window.addEventListener('giglyLanguageChanged', () => {
    if (subscreenSelector) {
      renderSubscreens(currentCategory);
    }
    updatePricingDisplays();
  });

  // ======================================================
  // PRICING TOGGLE & FAQ ACCORDION LOGIC
  // ======================================================
  const btnMonthly = document.getElementById('billing-monthly');
  const btnAnnual = document.getElementById('billing-annual');
  const proPrice = document.getElementById('pro-price-display');
  const proPeriod = document.getElementById('pro-period-display');
  let isAnnualBilling = true;

  function updatePricingDisplays() {
    if (!proPrice || !proPeriod) return;
    const isEn = typeof GiglyI18n !== 'undefined' && GiglyI18n.currentLang === 'en';

    if (isAnnualBilling) {
      proPrice.textContent = isEn ? '€39.99' : '39,99 €';
      proPeriod.textContent = isEn
        ? 'per year (Only €3.33/mo · You save €19.89!)'
        : 'al año (Equivale a 3,33 €/mes · ¡Ahorrás 19,89 €!)';
    } else {
      proPrice.textContent = isEn ? '€4.99' : '4,99 €';
      proPeriod.textContent = isEn
        ? '/ month · Flexible monthly billing, cancel anytime'
        : '/ mes · Facturación mensual sin compromiso';
    }
  }

  if (btnMonthly && btnAnnual) {
    btnMonthly.addEventListener('click', () => {
      isAnnualBilling = false;
      btnMonthly.classList.add('active');
      btnAnnual.classList.remove('active');
      updatePricingDisplays();
    });

    btnAnnual.addEventListener('click', () => {
      isAnnualBilling = true;
      btnAnnual.classList.add('active');
      btnMonthly.classList.remove('active');
      updatePricingDisplays();
    });
  }

  // FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question');

    // Open the first item by default
    if (index === 0) {
      item.classList.add('active');
    }

    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach((f) => {
          f.classList.remove('active');
        });

        // Toggle clicked
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Table of Contents Active Spy for Legal Pages
  const tocLinks = document.querySelectorAll('.legal-toc-link');
  if (tocLinks.length > 0) {
    const sections = document.querySelectorAll('.legal-section');
    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      sections.forEach((sec) => {
        const top = sec.offsetTop - 150;
        if (window.scrollY >= top) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      tocLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    });
  }

  // ======================================================
  // APP STORE "COMING SOON" MODAL HANDLER
  // ======================================================
  function openComingSoonModal() {
    let backdrop = document.getElementById('appstore-coming-soon-modal');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'appstore-coming-soon-modal';
      backdrop.className = 'coming-soon-modal-backdrop';
      backdrop.innerHTML = `
        <div class="coming-soon-card" role="dialog" aria-modal="true" aria-labelledby="cs-modal-title">
          <div class="coming-soon-icon">
            <span class="material-symbols-rounded">phone_iphone</span>
          </div>
          <h3 id="cs-modal-title" data-i18n="appstore.modal.title">App Store · Próximamente</h3>
          <p data-i18n="appstore.modal.desc">Estamos terminando los últimos detalles de la versión para iOS (iPhone y iPad). ¡Muy pronto estará disponible en Apple App Store! Mientras tanto, ya puedes descargar Gigly para Android en Google Play.</p>
          <div class="coming-soon-actions">
            <a href="https://play.google.com/store/apps/details?id=com.gigly.app" target="_blank" rel="noopener noreferrer" class="btn btn-primary" data-i18n="appstore.modal.btn_playstore">
              <span class="material-symbols-rounded">android</span>
              <span>Descargar en Google Play</span>
            </a>
            <button type="button" class="coming-soon-close-btn" data-i18n="appstore.modal.close">Entendido</button>
          </div>
        </div>
      `;
      document.body.appendChild(backdrop);

      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          closeComingSoonModal();
        }
      });
      const closeBtn = backdrop.querySelector('.coming-soon-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', closeComingSoonModal);
      }
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && backdrop.classList.contains('active')) {
          closeComingSoonModal();
        }
      });
    }

    if (typeof GiglyI18n !== 'undefined') {
      GiglyI18n.applyTranslations();
    }

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeComingSoonModal() {
    const backdrop = document.getElementById('appstore-coming-soon-modal');
    if (backdrop) {
      backdrop.classList.remove('active');
    }
    document.body.style.overflow = '';
  }

  // Attach listener to all App Store buttons
  document.addEventListener('click', (e) => {
    const appStoreBtn = e.target.closest('.btn-appstore');
    if (appStoreBtn) {
      e.preventDefault();
      openComingSoonModal();
    }
  });
});

