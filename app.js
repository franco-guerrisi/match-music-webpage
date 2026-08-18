document.addEventListener('DOMContentLoaded', () => {
  // Reveal elements on scroll (Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll('.fade-up');
  elementsToReveal.forEach((el) => observer.observe(el));

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(15, 10, 8, 0.95)';
      navbar.style.borderBottom = '1px solid rgba(234, 88, 12, 0.2)';
    } else {
      navbar.style.background = 'rgba(15, 10, 8, 0.8)';
      navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    }
  });

  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(15, 10, 8, 0.95)';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid rgba(234, 88, 12, 0.2)';
      }
    });
  }

  // ======================================================
  // INTERACTIVE APP SHOWCASE DATA & LOGIC (15 SCREENS)
  // ======================================================
  const showcaseData = {
    bands: [
      {
        id: 'band_profile',
        name: 'Ficha de Banda',
        img: 'assets/screens/Bandprofileview.png',
        badge: 'Ficha Oficial de Banda',
        title: 'Perfil Integral de Banda',
        desc: 'Presenta tu banda al mundo con fotografías inmersivas en alta resolución, etiquetas de géneros musicales, ubicación geolocalizada y botón para captar seguidores al instante.',
        features: [
          'Traducción instantánea de biografía con el botón Translate',
          'Acceso directo a chat mediante Contact Band',
          'Código QR interactivo para compartir tu perfil en redes',
        ],
        tags: ['React Native', 'Expo Router', 'Live Translation'],
      },
      {
        id: 'apply_roles',
        name: 'Audiciones & Vacantes',
        img: 'assets/screens/Apply to roles.png',
        badge: 'Geo-Audiciones & Reclutamiento',
        title: 'Búsqueda de Músicos y Postulaciones',
        desc: 'Publica las necesidades de tu agrupación y recibe solicitudes de músicos calificados con indicación del nivel de destreza requerido (Advanced, Professional).',
        features: [
          'Postulación directa con un solo toque enviando el perfil de músico',
          'Filtrado por instrumentos y nivel de habilidad requeridos',
          'Enlaces de redirección directos a plataformas externas (YouTube)',
        ],
        tags: ['Smart Matching', 'PostGIS', 'Enlaces a YouTube'],
      },
      {
        id: 'bands_explore',
        name: 'Explorador de Bandas',
        img: 'assets/screens/Bandsview.png',
        badge: 'Directorio Global',
        title: 'Explora Agrupaciones Musicales',
        desc: 'Encuentra agrupaciones locales y nacionales mediante filtros por nombre o habilidad técnica, organizadas con etiquetas de género y sinopsis.',
        features: [
          'Búsqueda predictiva instantánea',
          'Filtrado por múltiples géneros musicales',
          'Acceso rápido a cartelera de conciertos y eventos',
        ],
        tags: ['BTree Indexing', 'Real-Time Filter', 'Mobile UI'],
      },
      {
        id: 'discover_musicians',
        name: 'Descubre Músicos',
        img: 'assets/screens/DiscoverMusicians.png',
        badge: 'Red de Conexiones',
        title: 'Conecta con Músicos por Instrumento y Ciudad',
        desc: 'Accede al catálogo de instrumentistas clasificados por instrumento, ciudad de residencia y especialidad musical para armar tu proyecto soñado.',
        features: [
          'Botón directo para conectar y abrir chat',
          'Hashtags temáticos (#rock, #metal, #funk, #clásica)',
          'Exploración de perfiles completos de instrumentistas por ciudad',
        ],
        tags: ['Networking', 'Geolocalización', 'Búsqueda por Rol'],
      },
      {
        id: 'band_admin',
        name: 'Gestión de Puestos',
        img: 'assets/screens/Band management and open positions.png',
        badge: 'Panel de Liderazgo',
        title: 'Administración de Miembros y Vacantes',
        desc: 'Control total de tu banda desde la sección My Account: añade integrantes, asigna roles de permisos y gestiona ofertas de audición abiertas.',
        features: [
          'Invita a nuevos miembros con un enlace directo',
          'Cierra o elimina puestos de audición con un clic',
          'Bandeja de solicitudes de unión pendientes',
        ],
        tags: ['Role-Based Access', 'Band Admin', 'Permissions'],
      },
    ],
    events: [
      {
        id: 'events_list',
        name: 'Cartelera de Conciertos',
        img: 'assets/screens/Eventsview.png',
        badge: 'Agenda en Vivo',
        title: 'Cartelera de Eventos y Shows',
        desc: 'Explora la cartelera completa de conciertos en vivo, festivales y sesiones acústicas con filtros por fecha y destacando eventos promocionados.',
        features: [
          'Distinción de eventos destacados y promocionados con estrella',
          'Alternancia instantánea entre vista de Lista y Mapa',
          'Creación de nuevos eventos con el botón (+)',
        ],
        tags: ['Events Engine', 'Stripe Tiering', 'Live Calendar'],
      },
      {
        id: 'event_detail',
        name: 'Ficha de Evento (Tickets)',
        img: 'assets/screens/Eventdetailview.png',
        badge: 'Ticketera Integrada',
        title: 'Detalle de Concierto y Venta de Boletos',
        desc: 'Consulta el cartel, recinto, horario, duración y compra tus entradas directamente desde la app con procesamiento seguro de Stripe.',
        features: [
          'Botón Buy Tickets con precio asignado por el organizador y confirmación inmediata',
          'Guardado de eventos en favoritos',
          'Compartir evento en redes sociales y apps de mensajería',
        ],
        tags: ['Stripe Checkout', 'Pago Seguro con Stripe', 'Social Share'],
      },
      {
        id: 'map_pins',
        name: 'Pines PostGIS',
        img: 'assets/screens/Map_location_pin_types.png',
        badge: 'Geolocalización Espacial',
        title: 'Mapa Interactivo con Pines por Tipo',
        desc: 'Visualiza todos los eventos a tu alrededor mediante un radio de proximidad circular con 3 tipos de pines: eventos normales, promocionados y múltiples por sala.',
        features: [
          '3 tipos de pines: eventos normales, destacados con estrella y eventos múltiples (+1)',
          'Búsqueda geoespacial ultra rápida con PostGIS ST_DWithin',
          'Botón GPS para centrar en tu posición en tiempo real',
        ],
        tags: ['PostGIS', 'Google Maps SDK', 'Spatial Query'],
      },
      {
        id: 'map_multi',
        name: 'Eventos Agrupados',
        img: 'assets/screens/Map_multi_events_pin.png',
        badge: 'Recintos Múltiples',
        title: 'Drawer de Múltiples Eventos por Sala',
        desc: 'Al tocar un pin con badge (+1), se despliega una tarjeta inferior con la programación completa de ese mismo recinto o festival.',
        features: [
          'Navegación entre conciertos de una misma sala',
          'Información de hora, artista y fecha sin salir del mapa',
          'Cierre rápido del drawer con un toque',
        ],
        tags: ['Cluster Pins', 'Bottom Sheet', 'UX Fluid'],
      },
      {
        id: 'special_invite',
        name: 'Invitación Especial',
        img: 'assets/screens/Special invitation event card.png',
        badge: 'Viral & Social',
        title: 'Invitaciones Personalizadas Estilo Ticket',
        desc: 'Invita a tus amigos con una tarjeta de diseño exclusivo que incluye tu nombre, recinto, fecha y un mensaje inspirador para llenar tus conciertos.',
        features: [
          'Diseño visual atractivo estilo entrada de concierto',
          'Compartir directo en WhatsApp, Instagram Stories y Telegram',
          'Incrementa la asistencia con invitaciones personalizadas',
        ],
        tags: ['Viral Loops', 'Deep Links', 'Social Invites'],
      },
    ],
    messages: [
      {
        id: 'messages',
        name: 'Bandeja de Entrada (Chats)',
        img: 'assets/screens/MessagesView.png?v=2',
        badge: 'Colaboración en Vivo',
        title: 'Mensajería Directa y Band Inbox',
        desc: 'Comunícate con organizadores, promotores y músicos con alternancia rápida entre tu bandeja Personal y el Inbox oficial de tu Banda.',
        features: [
          'WebSockets para entrega instantánea de mensajes',
          'Soporte multi-administrador en la bandeja de la banda',
          'Previsualización de estados de conversación en tiempo real',
        ],
        tags: ['WebSockets', 'Band Inbox', 'PostgreSQL Triggers'],
      },
    ],
    analytics: [
      {
        id: 'analytics_dash',
        name: 'Dashboard Analítico',
        img: 'assets/screens/Analyticsview.png',
        badge: 'Métricas en Tiempo Real',
        title: 'Dashboard Analítico Profesional',
        desc: 'Supervisa en tiempo real el rendimiento de tu proyecto: visualizaciones, eventos publicados, tasa de engagement y veces guardado.',
        features: [
          'Selector para alternar entre perfil de artista y bandas',
          'Métricas de crecimiento y evolución en tiempo real',
          'Botón Exportar PRO para reportes a discográficas y patrocinadores',
        ],
        tags: ['Analytics Engine', 'Counter Caching', 'Real-Time'],
      },
      {
        id: 'my_account',
        name: 'Mi Cuenta',
        img: 'assets/screens/AccountView.png',
        badge: 'Centro de Control',
        title: 'Panel Principal de Cuenta de Usuario',
        desc: 'Tu cuartel general: consulta tu contador de seguidores, estadísticas globales de eventos, pestañas de gestión de bandas y acceso rápido a configuración.',
        features: [
          'Pestaña de Eventos propios para consultar shows activos y el historial completo',
          'Código QR de perfil listo para compartir en redes',
          'Acceso directo a New Event, View Analytics y Settings',
        ],
        tags: ['Profile Hub', 'Historial de Eventos', 'QR Generation'],
      },
    ],
    ui: [
      {
        id: 'settings',
        name: 'Ajustes y Suscripción',
        img: 'assets/screens/Settingsview.png',
        badge: 'Preferencias & Legal',
        title: 'Configuración Integral de la App',
        desc: 'Gestiona las notificaciones push, cambia o consulta tu plan de suscripción (Freemium / PRO), revisa facturas de Stripe y selecciona el idioma de la app (Español / Inglés).',
        features: [
          'Gestión y cambio de plan de suscripción (Freemium vs Gigly PRO)',
          'Soporte multilingüe con opciones de idioma disponibles (Español e Inglés)',
          'Control granular de notificaciones push y acceso a políticas legales',
        ],
        tags: ['Settings API', 'Planes & Suscripción', 'Multi-idioma (ES/EN)'],
      },
      {
        id: 'dark_mode',
        name: 'Ficha en Dark Mode',
        img: 'assets/screens/DarkMode_ON.png',
        badge: 'Dark Theme Elegante',
        title: 'Modo Oscuro para Ambientes Nocturnos',
        desc: 'Una experiencia visual refinada con fondo oscuro profundo y contrastes en naranja neón, ideal para usar en camerinos, conciertos y escenarios con poca luz.',
        features: [
          'Ahorro de batería en pantallas OLED',
          'Alto contraste y legibilidad óptima en conciertos',
          'Transición suave entre temas claro y oscuro',
        ],
        tags: ['OLED Dark Theme', 'UI Contrast', 'Color Tokens'],
      },
    ],
  };

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
    const screens = showcaseData[category] || [];

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
      renderScreenDetails(screens[currentScreenIndex]);
    }
  }

  function updateSubscreenActive() {
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

    if (showcaseFeatures) {
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

    if (showcaseTechTags) {
      showcaseTechTags.innerHTML = screen.tags
        .map((tag) => `<span class="tech-tag">${tag}</span>`)
        .join('');
    }
  }

  // Category Tab click handler
  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      currentCategory = btn.getAttribute('data-category');
      currentScreenIndex = 0;
      renderSubscreens(currentCategory);
    });
  });

  // Initial render of showcase if on main page
  if (subscreenSelector) {
    renderSubscreens('bands');
  }

  // ======================================================
  // PRICING TOGGLE & FAQ ACCORDION LOGIC
  // ======================================================
  const btnMonthly = document.getElementById('billing-monthly');
  const btnAnnual = document.getElementById('billing-annual');
  const proPrice = document.getElementById('pro-price-display');
  const proPeriod = document.getElementById('pro-period-display');

  if (btnMonthly && btnAnnual) {
    btnMonthly.addEventListener('click', () => {
      btnMonthly.classList.add('active');
      btnAnnual.classList.remove('active');
      if (proPrice) proPrice.textContent = '4,99 €';
      if (proPeriod) proPeriod.textContent = '/ mes · Facturación mensual sin compromiso';
    });

    btnAnnual.addEventListener('click', () => {
      btnAnnual.classList.add('active');
      btnMonthly.classList.remove('active');
      if (proPrice) proPrice.textContent = '39,99 €';
      if (proPeriod) proPeriod.textContent = 'al año (Equivale a 3,33 €/mes · ¡Ahorrás 19,89 €!)';
    });
  }

  // FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question');
    const icon = item.querySelector('.material-symbols-rounded');

    // Open the first item by default
    if (index === 0) {
      item.classList.add('active');
      if (icon) icon.textContent = 'expand_less';
    }

    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all
        faqItems.forEach((f) => {
          f.classList.remove('active');
          const fIcon = f.querySelector('.material-symbols-rounded');
          if (fIcon) fIcon.textContent = 'expand_more';
        });

        // Toggle clicked
        if (!isActive) {
          item.classList.add('active');
          if (icon) icon.textContent = 'expand_less';
        }
      });
    }
  });
});
