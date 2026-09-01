/**
 * Gigly Web - Sistema de Internacionalización (i18n)
 * Soporte completo para Español (ES) e Inglés (EN)
 */

const GIGLY_TRANSLATIONS = {
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.showcase': 'App Showcase',
    'nav.features': 'Características',
    'nav.mission': 'Misión',
    'nav.pricing': 'Planes & Precios',
    'nav.download': 'Descargar App',
    'nav.terms': 'Términos de Servicio',
    'nav.privacy': 'Privacidad',

    // Hero Index
    'hero.badge': 'Optimizado para iOS y Android ⚡',
    'hero.title': 'Toda la música en vivo al alcance de tu mano',
    'hero.subtitle': 'Descubre conciertos locales, eventos en vivo, conecta con bandas y comparte tus propios shows con el <span class="text-gradient">ritmo</span> de Gigly.',
    'hero.btn.appstore': 'App Store',
    'hero.btn.playstore': 'Google Play',
    'hero.btn.plans': 'Ver Planes',

    // Mission Index
    'mission.title': 'Nuestra <span class="text-gradient">Misión</span>',
    'mission.desc': 'Gigly es el punto de encuentro de la música en vivo e independiente. Nuestro objetivo es conectar a bandas, músicos y público facilitando herramientas profesionales para gestionar agrupaciones, descubrir talento cercano y dar visibilidad a los conciertos de cada usuario.',

    // Showcase Section Index
    'showcase.badge': 'Capturas 100% Reales de la App',
    'showcase.title': 'Explora la Experiencia <span class="text-gradient">Gigly Mobile</span>',
    'showcase.desc': 'Descubre todas las pantallas, funcionalidades y flujos diseñados especialmente para músicos, directores y organizadores.',
    'showcase.tab.bands': 'Bandas & Músicos',
    'showcase.tab.events': 'Eventos & Mapa',
    'showcase.tab.messages': 'Mensajería & Chats',
    'showcase.tab.analytics': 'Analíticas & Cuenta',
    'showcase.tab.ui': 'Ajustes & Dark Mode',
    'showcase.btn.viewplans': 'Ver Planes Disponibles →',

    // Features Section Index
    'features.title': 'Capacidades Tecnológicas',
    'features.desc': 'Tecnología de última generación construida para el ritmo de la música independiente.',
    'features.f1.title': 'Geo-Audiciones (PostGIS)',
    'features.f1.desc': 'Encuentra bandas y músicos cercanos con búsquedas espaciales optimizadas por coordenadas exactas y radios de cobertura inteligentes.',
    'features.f2.title': 'Band Inbox & WebSockets',
    'features.f2.desc': 'Mensajería colaborativa en tiempo real. Gestiona la bandeja de entrada de tu banda con múltiples administradores y respuestas instantáneas.',
    'features.f3.title': 'Venta de Boletos con Stripe',
    'features.f3.desc': 'Procesa los pagos de las entradas para tus conciertos directamente en la app de forma rápida y segura a través de Stripe.',
    'features.f4.title': 'Analíticas Pro en Tiempo Real',
    'features.f4.desc': 'Controla visualizaciones, guardados, clics en boletos y estadísticas demográficas de tus seguidores con gráficos avanzados.',
    'features.f5.title': 'Sincronización de Streaming',
    'features.f5.desc': 'Conecta YouTube, Spotify y Apple Music para reproducir el catálogo sonoro de tu proyecto desde la misma app.',
    'features.f6.title': 'Counter Caching Ultrarrápido',
    'features.f6.desc': 'Tiempos de respuesta inmediatos y navegación fluida mediante sincronización optimizada por triggers de base de datos.',

    // Promotion Section Index
    'promo.title': 'Planes y Sistema de Promoción',
    'promo.desc': 'Empieza gratis con el <strong>Modo Freemium</strong> o potencia tu alcance al máximo con <strong>Gigly PRO</strong>.',
    'promo.freemium.name': 'Modo Freemium',
    'promo.freemium.price': 'Gratis',
    'promo.freemium.desc': 'Perfil completo, búsqueda global, mensajería, creación de eventos y postulación a audiciones.',
    'promo.pro.popular': '★ 14 Días Gratis',
    'promo.pro.name': 'Gigly PRO',
    'promo.pro.price': '3,33 €',
    'promo.pro.period': '/mes (Anual)',
    'promo.pro.desc': 'Dashboard de analíticas avanzado, métricas de venta de boletos, demografía de seguidores y reportes.',
    'promo.btn.compare': 'Ver Comparativa Detallada de Planes →',

    // Download CTA Index
    'cta.title': '¿Listo para subir al escenario?',
    'cta.desc': 'Descarga Gigly hoy mismo, publica y comparte tus propios eventos en vivo y conecta directamente con la comunidad de músicos y bandas locales.',
    'cta.btn': 'Descargar Gigly Gratis',

    // Pricing Page (planes/index.html)
    'pricing.hero.badge': 'Suscripciones Transparentes ⚡ Sin Letra Pequeña',
    'pricing.hero.title': 'Conecta con músicos de <span class="text-gradient">todo el mundo</span>',
    'pricing.hero.subtitle': 'Compara los planes y elige la opción que mejor se adapte a tus necesidades. Empieza gratis o desbloquea todo el potencial de tu proyecto con <strong>Gigly PRO</strong>.',
    'pricing.toggle.monthly': 'Facturación Mensual',
    'pricing.toggle.annual': 'Facturación Anual',
    'pricing.toggle.discount': '-33% AHORRO',
    'pricing.freemium.title': 'Modo Freemium',
    'pricing.freemium.tagline': 'Para músicos y artistas que están comenzando',
    'pricing.freemium.price': 'Gratis',
    'pricing.freemium.period': 'Para siempre · Sin tarjeta requerida',
    'pricing.freemium.notice': 'Acceso inmediato a la red global de Gigly',
    'pricing.freemium.f1': '<strong>Perfil de músico completo:</strong> Instrumentos, bio, fotos, enlaces a Spotify y YouTube.',
    'pricing.freemium.f2': '<strong>Búsqueda global:</strong> Encuentra músicos y bandas filtrados por ciudad y estilo.',
    'pricing.freemium.f3': '<strong>Mensajería y chats:</strong> Conversaciones directas en tiempo real con tus conexiones.',
    'pricing.freemium.f4': '<strong>Creación de eventos:</strong> Publica shows locales y participa en eventos de la comunidad.',
    'pricing.freemium.f5': '<strong>Unirte y administrar bandas:</strong> Postúlate a audiciones abiertas en un solo toque.',
    'pricing.freemium.btn': 'Continuar con Freemium',
    'pricing.pro.ribbon': '★ MÁS POPULAR · 14 DÍAS GRATIS',
    'pricing.pro.title': 'Gigly PRO',
    'pricing.pro.tagline': 'El impulso definitivo para bandas consolidadas, directores y managers',
    'pricing.pro.priceAnnual': '39,99 €',
    'pricing.pro.periodAnnual': 'al año (Equivale a 3,33 €/mes · ¡Ahorrás 19,89 €!)',
    'pricing.pro.priceMonthly': '4,99 €',
    'pricing.pro.periodMonthly': '/ mes · Facturación mensual sin compromiso',
    'pricing.pro.trial': '<strong>14 días de prueba gratis</strong> — sin cobros hasta el día 15',
    'pricing.pro.f1': '<strong>Todo lo de Freemium incluido</strong> sin restricciones de uso.',
    'pricing.pro.f2': '<strong>Dashboard de Analíticas Avanzado:</strong> Seguimiento en tiempo real de visualizaciones, interacción y alcance.',
    'pricing.pro.f3': '<strong>Métricas de Venta de Boletos:</strong> Rendimiento comercial de eventos creados.',
    'pricing.pro.f4': '<strong>Demografía de Seguidores:</strong> Conoce la edad, ciudad y géneros preferidos de tu audiencia.',
    'pricing.pro.f5': '<strong>Band Inbox Colaborativo Ilimitado:</strong> Mensajería grupal con múltiples administradores.',
    'pricing.pro.f6': '<strong>Soporte Prioritario:</strong> Atención rápida por parte de nuestro equipo.',
    'pricing.pro.btn': 'Probar 14 Días Gratis',
    'pricing.table.title': 'Comparativa de Funcionalidades',
    'pricing.table.feature': 'Funcionalidad',
    'pricing.table.freemium': 'Freemium',
    'pricing.table.pro': 'Gigly PRO',
    'pricing.table.row1': 'Perfil de músico & enlaces sociales',
    'pricing.table.row2': 'Explorador y búsqueda de músicos',
    'pricing.table.row3': 'Mensajería y chat directo',
    'pricing.table.row4': 'Creación y publicación de eventos',
    'pricing.table.row5': 'Postulación a vacantes y audiciones',
    'pricing.table.row6': 'Dashboard de analíticas en tiempo real',
    'pricing.table.row7': 'Estadísticas demográficas de audiencia',
    'pricing.table.row8': 'Métricas de clics en compra de tickets',
    'pricing.table.row9': 'Band Inbox con múltiples administradores',
    'pricing.table.row10': 'Soporte prioritario',
    'pricing.faq.title': 'Preguntas Frecuentes sobre los Planes',
    'pricing.faq.q1': '¿Cómo funciona la prueba gratuita de 14 días?',
    'pricing.faq.a1': 'Puedes activar Gigly PRO y disfrutar de todas las funcionalidades avanzadas durante 14 días sin costo alguno. No se realizará ningún cargo hasta que termine el periodo de prueba. Puedes cancelar en cualquier momento desde los ajustes de la app.',
    'pricing.faq.q2': '¿Puedo cambiar de plan mensual a anual más tarde?',
    'pricing.faq.a2': 'Sí, puedes actualizar tu suscripción de mensual a anual en cualquier momento desde la sección de Ajustes dentro de la aplicación móvil y disfrutar del 33% de descuento anual.',
    'pricing.faq.q3': '¿Qué métodos de pago se aceptan?',
    'pricing.faq.a3': 'Aceptamos tarjetas de crédito y débito principales (Visa, Mastercard, American Express), así como Apple Pay y Google Pay a través de la pasarela segura de Stripe.',
    'pricing.faq.q4': '¿Puedo usar Gigly gratis para siempre?',
    'pricing.faq.a4': 'Sí, el modo Freemium es totalmente gratuito y te permite crear tu perfil, publicar eventos, chatear y buscar músicos sin ningún límite de tiempo.',

    // Terms of Service
    'terms.title': 'Términos de Servicio',
    'terms.badge': 'Documento Legal Vigente',
    'terms.updated': 'Última actualización: Septiembre de 2026',
    'terms.lead': 'Por favor, lee atentamente estos Términos de Servicio antes de utilizar la aplicación móvil y plataforma Gigly. El uso de nuestros servicios implica la aceptación plena de estas condiciones.',
    'terms.toc.title': 'Contenido del Documento',
    'terms.contact.title': '¿Preguntas sobre los Términos?',
    'terms.contact.desc': 'Nuestro equipo legal y de soporte está a tu disposición.',
    'terms.contact.btn': 'Contactar Soporte Legal',

    // Privacy Policy
    'privacy.title': 'Política de Privacidad',
    'privacy.badge': 'Protección de Datos & RGPD',
    'privacy.updated': 'Última actualización: Septiembre de 2026',
    'privacy.lead': 'Tu privacidad y la seguridad de tus datos son pilares fundamentales en Gigly. Este documento detalla cómo recopilamos, protegemos y gestionamos tu información.',
    'privacy.toc.title': 'Contenido del Documento',
    'privacy.contact.title': '¿Consultas sobre Privacidad?',
    'privacy.contact.desc': 'Puedes contactar a nuestro Delegado de Protección de Datos en cualquier momento.',
    'privacy.contact.btn': 'Escribir a Privacidad',

    // Footer Common
    'footer.slogan': 'Construido para el ritmo de la industria musical independiente.',
    'footer.nav.title': 'Navegación',
    'footer.nav.showcase': 'App Showcase',
    'footer.nav.features': 'Características',
    'footer.nav.pricing': 'Planes & Precios',
    'footer.nav.download': 'Descargar App',
    'footer.legal.title': 'Legal',
    'footer.legal.terms': 'Términos de Servicio',
    'footer.legal.privacy': 'Política de Privacidad',
    'footer.legal.cookies': 'Política de Cookies',
    'footer.support.title': 'Contacto & Soporte',
    'footer.support.email': 'soporte@gigly.app',
    'footer.copyright': '© 2026 Gigly Inc. (Gigly). Todos los derechos reservados.',
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.showcase': 'App Showcase',
    'nav.features': 'Features',
    'nav.mission': 'Mission',
    'nav.pricing': 'Plans & Pricing',
    'nav.download': 'Download App',
    'nav.terms': 'Terms of Service',
    'nav.privacy': 'Privacy',

    // Hero Index
    'hero.badge': 'Optimized for iOS & Android ⚡',
    'hero.title': 'All live music at your fingertips',
    'hero.subtitle': 'Discover local concerts, live events, connect with bands, and share your own shows with the <span class="text-gradient">rhythm</span> of Gigly.',
    'hero.btn.appstore': 'App Store',
    'hero.btn.playstore': 'Google Play',
    'hero.btn.plans': 'View Plans',

    // Mission Index
    'mission.title': 'Our <span class="text-gradient">Mission</span>',
    'mission.desc': 'Gigly is the meeting point for live and independent music. Our mission is to connect bands, musicians, and audiences by delivering professional tools to manage groups, discover nearby talent, and amplify live concert visibility.',

    // Showcase Section Index
    'showcase.badge': '100% Real App Screenshots',
    'showcase.title': 'Explore the <span class="text-gradient">Gigly Mobile</span> Experience',
    'showcase.desc': 'Discover all screens, features, and workflows custom-crafted for musicians, bandleaders, and event organizers.',
    'showcase.tab.bands': 'Bands & Musicians',
    'showcase.tab.events': 'Events & Map',
    'showcase.tab.messages': 'Messaging & Chats',
    'showcase.tab.analytics': 'Analytics & Account',
    'showcase.tab.ui': 'Settings & Dark Mode',
    'showcase.btn.viewplans': 'View Available Plans →',

    // Features Section Index
    'features.title': 'Core Tech Capabilities',
    'features.desc': 'Next-generation technology engineered for the tempo of the independent music scene.',
    'features.f1.title': 'Geo-Auditions (PostGIS)',
    'features.f1.desc': 'Find nearby bands and musicians using high-performance spatial queries with exact coordinates and smart coverage radii.',
    'features.f2.title': 'Band Inbox & WebSockets',
    'features.f2.desc': 'Real-time collaborative messaging. Manage your band’s shared inbox with multiple admins and instant notifications.',
    'features.f3.title': 'Stripe Ticket Sales',
    'features.f3.desc': 'Sell and process concert ticket payments directly inside the app safely and seamlessly via Stripe.',
    'features.f4.title': 'Real-Time PRO Analytics',
    'features.f4.desc': 'Track views, saves, ticket clicks, and follower demographic insights with dynamic charts.',
    'features.f5.title': 'Streaming Sync',
    'features.f5.desc': 'Connect YouTube, Spotify, and Apple Music to showcase your full musical catalog right on your profile.',
    'features.f6.title': 'Ultra-Fast Counter Caching',
    'features.f6.desc': 'Instant response times and silky-smooth navigation powered by database trigger-level counter caching.',

    // Promotion Section Index
    'promo.title': 'Plans & Promotion System',
    'promo.desc': 'Start for free with <strong>Freemium Mode</strong> or supercharge your reach with <strong>Gigly PRO</strong>.',
    'promo.freemium.name': 'Freemium Mode',
    'promo.freemium.price': 'Free',
    'promo.freemium.desc': 'Complete musician profile, global search, real-time messaging, event creation, and audition applications.',
    'promo.pro.popular': '★ 14-Day Free Trial',
    'promo.pro.name': 'Gigly PRO',
    'promo.pro.price': '€3.33',
    'promo.pro.period': '/month (Annual)',
    'promo.pro.desc': 'Advanced analytics dashboard, ticket sales metrics, follower demographics, and exportable reports.',
    'promo.btn.compare': 'View Detailed Plans Comparison →',

    // Download CTA Index
    'cta.title': 'Ready to take the stage?',
    'cta.desc': 'Download Gigly today, publish your live events, and connect directly with local musicians and bands.',
    'cta.btn': 'Download Gigly Free',

    // Pricing Page (planes/index.html)
    'pricing.hero.badge': 'Transparent Pricing ⚡ No Hidden Fees',
    'pricing.hero.title': 'Connect with musicians <span class="text-gradient">worldwide</span>',
    'pricing.hero.subtitle': 'Compare plans and pick the option that fits your career. Start for free or unlock the full power of your musical project with <strong>Gigly PRO</strong>.',
    'pricing.toggle.monthly': 'Monthly Billing',
    'pricing.toggle.annual': 'Annual Billing',
    'pricing.toggle.discount': '-33% SAVINGS',
    'pricing.freemium.title': 'Freemium Mode',
    'pricing.freemium.tagline': 'For emerging musicians, artists, and music fans',
    'pricing.freemium.price': 'Free',
    'pricing.freemium.period': 'Forever · No credit card required',
    'pricing.freemium.notice': 'Instant access to Gigly’s global music network',
    'pricing.freemium.f1': '<strong>Complete musician profile:</strong> Instruments, bio, photos, Spotify and YouTube links.',
    'pricing.freemium.f2': '<strong>Global search:</strong> Discover musicians and bands filtered by city and genre.',
    'pricing.freemium.f3': '<strong>Direct messaging:</strong> Real-time 1-on-1 chats with your musical connections.',
    'pricing.freemium.f4': '<strong>Event creation:</strong> Publish local gigs and join community events.',
    'pricing.freemium.f5': '<strong>Join & manage bands:</strong> Apply to open band auditions in a single tap.',
    'pricing.freemium.btn': 'Get Started with Freemium',
    'pricing.pro.ribbon': '★ MOST POPULAR · 14-DAY TRIAL',
    'pricing.pro.title': 'Gigly PRO',
    'pricing.pro.tagline': 'The ultimate accelerator for active bands, leaders, and managers',
    'pricing.pro.priceAnnual': '€39.99',
    'pricing.pro.periodAnnual': 'per year (Only €3.33/mo · You save €19.89!)',
    'pricing.pro.priceMonthly': '€4.99',
    'pricing.pro.periodMonthly': '/ month · Flexible monthly billing, cancel anytime',
    'pricing.pro.trial': '<strong>14-day free trial</strong> — no charges until day 15',
    'pricing.pro.f1': '<strong>Everything in Freemium included</strong> with zero restrictions.',
    'pricing.pro.f2': '<strong>Advanced Analytics Dashboard:</strong> Live monitoring of views, engagement, and reach.',
    'pricing.pro.f3': '<strong>Ticket Sales Metrics:</strong> Commercial performance of your published events.',
    'pricing.pro.f4': '<strong>Follower Demographics:</strong> Discover audience age, location, and favorite genres.',
    'pricing.pro.f5': '<strong>Unlimited Collaborative Band Inbox:</strong> Shared inbox with multi-admin support.',
    'pricing.pro.f6': '<strong>Priority Support:</strong> Expedited assistance from our product team.',
    'pricing.pro.btn': 'Start 14-Day Free Trial',
    'pricing.table.title': 'Detailed Feature Comparison',
    'pricing.table.feature': 'Feature',
    'pricing.table.freemium': 'Freemium',
    'pricing.table.pro': 'Gigly PRO',
    'pricing.table.row1': 'Musician Profile & Social Links',
    'pricing.table.row2': 'Musician Discovery & Filters',
    'pricing.table.row3': 'Direct 1-on-1 Messaging',
    'pricing.table.row4': 'Event Creation & Publication',
    'pricing.table.row5': 'Audition & Open Role Applications',
    'pricing.table.row6': 'Real-Time Analytics Dashboard',
    'pricing.table.row7': 'Follower Demographic Insights',
    'pricing.table.row8': 'Ticket Purchase Click Metrics',
    'pricing.table.row9': 'Band Inbox with Multiple Admins',
    'pricing.table.row10': 'Priority Customer Support',
    'pricing.faq.title': 'Frequently Asked Questions',
    'pricing.faq.q1': 'How does the 14-day free trial work?',
    'pricing.faq.a1': 'You can activate Gigly PRO and enjoy all advanced features for 14 full days at zero cost. No charges will be made until the trial ends. You can cancel at any time in the app settings.',
    'pricing.faq.q2': 'Can I switch from monthly to annual billing later?',
    'pricing.faq.a2': 'Yes! You can upgrade your subscription from monthly to annual at any time from your account settings and unlock the 33% annual discount.',
    'pricing.faq.q3': 'Which payment methods are accepted?',
    'pricing.faq.a3': 'We accept major credit and debit cards (Visa, Mastercard, American Express), Apple Pay, and Google Pay through Stripe’s encrypted payment gateway.',
    'pricing.faq.q4': 'Can I use Gigly for free forever?',
    'pricing.faq.a4': 'Yes! Freemium mode is 100% free forever and allows you to create your profile, publish events, chat, and find musicians with no time limits.',

    // Terms of Service
    'terms.title': 'Terms of Service',
    'terms.badge': 'Official Legal Agreement',
    'terms.updated': 'Last updated: September 2026',
    'terms.lead': 'Please read these Terms of Service carefully before using the Gigly mobile app and platform. By accessing our services, you agree to be bound by these terms.',
    'terms.toc.title': 'Table of Contents',
    'terms.contact.title': 'Questions regarding our Terms?',
    'terms.contact.desc': 'Our legal and support teams are always available to help.',
    'terms.contact.btn': 'Contact Legal Support',

    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.badge': 'Data Protection & GDPR',
    'privacy.updated': 'Last updated: September 2026',
    'privacy.lead': 'Your privacy and data security are core pillars at Gigly. This document explains how we collect, safeguard, and manage your personal information.',
    'privacy.toc.title': 'Table of Contents',
    'privacy.contact.title': 'Privacy Inquiries?',
    'privacy.contact.desc': 'You can reach our Data Protection Officer at any time.',
    'privacy.contact.btn': 'Email Privacy Team',

    // Footer Common
    'footer.slogan': 'Built for the rhythm of the independent music industry.',
    'footer.nav.title': 'Navigation',
    'footer.nav.showcase': 'App Showcase',
    'footer.nav.features': 'Features',
    'footer.nav.pricing': 'Plans & Pricing',
    'footer.nav.download': 'Download App',
    'footer.legal.title': 'Legal',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.cookies': 'Cookie Policy',
    'footer.support.title': 'Contact & Support',
    'footer.support.email': 'support@gigly-app.com',
    'footer.copyright': '© 2026 Gigly Inc. (Gigly). All rights reserved.',
  }
};

/**
 * Showcase Bilingual Screen Data (15 Screens)
 */
const GIGLY_SHOWCASE_DATA = {
  es: {
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
        img: 'assets/screens/MessagesView.png',
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
        desc: 'Gestiona las notificaciones push, cambia o consulta tu plan de suscripción (Freemium / PRO), revisa facturas de Stripe y selecciona el idioma de la app.',
        features: [
          'Gestión y cambio de plan de suscripción (Freemium vs Gigly PRO)',
          'Soporte multilingüe con opciones de idioma (Español e Inglés)',
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
  },

  en: {
    bands: [
      {
        id: 'band_profile',
        name: 'Band Profile',
        img: 'assets/screens/Bandprofileview.png',
        badge: 'Official Band Page',
        title: 'Comprehensive Band Profile',
        desc: 'Showcase your band to the world with immersive high-res photography, musical genre tags, geolocation, and instant follower capture.',
        features: [
          'Instant bio translation with the Translate button',
          'Direct chat access via Contact Band',
          'Interactive QR code to share your profile across social networks',
        ],
        tags: ['React Native', 'Expo Router', 'Live Translation'],
      },
      {
        id: 'apply_roles',
        name: 'Auditions & Open Roles',
        img: 'assets/screens/Apply to roles.png',
        badge: 'Geo-Auditions & Recruitment',
        title: 'Musician Search & Audition Applications',
        desc: 'Post your group vacancies and receive applications from skilled musicians with required proficiency levels (Advanced, Professional).',
        features: [
          'Single-tap application submitting your musician profile',
          'Filter by required instruments and skill level',
          'Direct redirection links to external platforms (YouTube)',
        ],
        tags: ['Smart Matching', 'PostGIS', 'YouTube Links'],
      },
      {
        id: 'bands_explore',
        name: 'Band Explorer',
        img: 'assets/screens/Bandsview.png',
        badge: 'Global Directory',
        title: 'Explore Musical Groups',
        desc: 'Find local and national bands using name or technical skill filters, organized with genre tags and overviews.',
        features: [
          'Instant predictive search',
          'Multi-genre filtering',
          'Quick access to live show listings and concert dates',
        ],
        tags: ['BTree Indexing', 'Real-Time Filter', 'Mobile UI'],
      },
      {
        id: 'discover_musicians',
        name: 'Discover Musicians',
        img: 'assets/screens/DiscoverMusicians.png',
        badge: 'Connection Network',
        title: 'Connect with Musicians by Instrument & City',
        desc: 'Access a directory of instrumentalists categorized by instrument, home city, and musical style to build your dream ensemble.',
        features: [
          'Direct button to connect and open a chat',
          'Thematic hashtags (#rock, #metal, #funk, #classical)',
          'Browse full profiles of instrumentalists across cities',
        ],
        tags: ['Networking', 'Geolocation', 'Role-Based Search'],
      },
      {
        id: 'band_admin',
        name: 'Role Management',
        img: 'assets/screens/Band management and open positions.png',
        badge: 'Leadership Panel',
        title: 'Member & Vacancy Administration',
        desc: 'Full control of your band from the My Account tab: add members, assign permission roles, and manage open audition postings.',
        features: [
          'Invite new members with a direct link',
          'Close or remove open audition roles in one click',
          'Pending join requests management inbox',
        ],
        tags: ['Role-Based Access', 'Band Admin', 'Permissions'],
      },
    ],
    events: [
      {
        id: 'events_list',
        name: 'Concert Listings',
        img: 'assets/screens/Eventsview.png',
        badge: 'Live Agenda',
        title: 'Event & Live Show Listings',
        desc: 'Explore the complete calendar of live concerts, festivals, and acoustic sets with date filters and featured event badges.',
        features: [
          'Featured and star-promoted event distinction',
          'Instant switching between List and Map views',
          'Create new events easily via the (+) button',
        ],
        tags: ['Events Engine', 'Stripe Tiering', 'Live Calendar'],
      },
      {
        id: 'event_detail',
        name: 'Event Details (Tickets)',
        img: 'assets/screens/Eventdetailview.png',
        badge: 'Integrated Box Office',
        title: 'Concert Details & Ticket Checkout',
        desc: 'Check lineup, venue, schedule, duration, and buy tickets directly inside the app with secure Stripe checkout.',
        features: [
          'Buy Tickets button with organizer pricing and instant confirmation',
          'Save events to your personal favorites',
          'Share events across social media and messaging apps',
        ],
        tags: ['Stripe Checkout', 'Secure Stripe Payments', 'Social Share'],
      },
      {
        id: 'map_pins',
        name: 'PostGIS Map Pins',
        img: 'assets/screens/Map_location_pin_types.png',
        badge: 'Spatial Geolocation',
        title: 'Interactive Map with Pin Types',
        desc: 'View all gigs around you with a circular proximity radius featuring 3 pin styles: standard, featured, and multi-event venues.',
        features: [
          '3 pin types: standard, star-featured, and grouped (+1) venue pins',
          'Ultra-fast geospatial queries powered by PostGIS ST_DWithin',
          'GPS button to center directly on your real-time location',
        ],
        tags: ['PostGIS', 'Google Maps SDK', 'Spatial Query'],
      },
      {
        id: 'map_multi',
        name: 'Grouped Venue Events',
        img: 'assets/screens/Map_multi_events_pin.png',
        badge: 'Multi-Event Venues',
        title: 'Multi-Event Venue Drawer',
        desc: 'Tapping a pin with a (+1) badge unfolds a bottom sheet showing the full lineup and schedule for that specific venue or festival.',
        features: [
          'Navigate multiple concerts happening at the same location',
          'View artist, time, and date details without leaving the map',
          'Quickly swipe or tap to dismiss the drawer',
        ],
        tags: ['Cluster Pins', 'Bottom Sheet', 'UX Fluid'],
      },
      {
        id: 'special_invite',
        name: 'Special Invitation',
        img: 'assets/screens/Special invitation event card.png',
        badge: 'Viral & Social',
        title: 'Ticket-Style Custom Invitations',
        desc: 'Invite friends with an exclusive ticket-styled card containing your name, venue, date, and custom message to pack your shows.',
        features: [
          'Eye-catching concert pass design',
          'Direct sharing to WhatsApp, Instagram Stories, and Telegram',
          'Boost attendance with personalized social invites',
        ],
        tags: ['Viral Loops', 'Deep Links', 'Social Invites'],
      },
    ],
    messages: [
      {
        id: 'messages',
        name: 'Inbox (Chats)',
        img: 'assets/screens/MessagesView.png',
        badge: 'Live Collaboration',
        title: 'Direct Messaging & Band Inbox',
        desc: 'Communicate with organizers, promoters, and musicians with rapid switching between your Personal tray and official Band Inbox.',
        features: [
          'WebSockets for instantaneous message delivery',
          'Multi-administrator support in the shared band inbox',
          'Real-time conversation status and typing previews',
        ],
        tags: ['WebSockets', 'Band Inbox', 'PostgreSQL Triggers'],
      },
    ],
    analytics: [
      {
        id: 'analytics_dash',
        name: 'Analytics Dashboard',
        img: 'assets/screens/Analyticsview.png',
        badge: 'Real-Time Metrics',
        title: 'Professional Analytics Dashboard',
        desc: 'Monitor real-time project performance: views, published events, engagement rates, and bookmarks.',
        features: [
          'Selector to toggle between Solo artist and Band profiles',
          'Real-time growth and momentum tracking',
          'PRO Export button for labels, sponsors, and venue booking',
        ],
        tags: ['Analytics Engine', 'Counter Caching', 'Real-Time'],
      },
      {
        id: 'my_account',
        name: 'My Account',
        img: 'assets/screens/AccountView.png',
        badge: 'Control Hub',
        title: 'Main User Account Panel',
        desc: 'Your central hub: check follower counters, event stats, band management tabs, and rapid access to settings.',
        features: [
          'My Events tab to check live and past concert history',
          'Profile QR code ready to scan and share on social media',
          'Direct access to New Event, View Analytics, and Settings',
        ],
        tags: ['Profile Hub', 'Event History', 'QR Generation'],
      },
    ],
    ui: [
      {
        id: 'settings',
        name: 'Settings & Billing',
        img: 'assets/screens/Settingsview.png',
        badge: 'Preferences & Legal',
        title: 'Comprehensive App Settings',
        desc: 'Manage push notifications, upgrade or view your subscription plan (Freemium / PRO), review Stripe invoices, and select your app language.',
        features: [
          'Subscription plan management (Freemium vs Gigly PRO)',
          'Multilingual support with language options (Spanish and English)',
          'Granular push notification toggles and direct legal policy access',
        ],
        tags: ['Settings API', 'Plans & Subscription', 'Multilingual (ES/EN)'],
      },
      {
        id: 'dark_mode',
        name: 'Dark Mode View',
        img: 'assets/screens/DarkMode_ON.png',
        badge: 'Sleek Dark Theme',
        title: 'Dark Mode for Night Venues & Stages',
        desc: 'A refined visual experience featuring deep blacks and neon orange accents, optimized for backstage, concert halls, and low-light environments.',
        features: [
          'OLED battery saving efficiency',
          'High contrast and optimal legibility in dark venues',
          'Seamless transitions between light and dark themes',
        ],
        tags: ['OLED Dark Theme', 'UI Contrast', 'Color Tokens'],
      },
    ],
  }
};

/**
 * i18n Controller Object
 */
const GiglyI18n = {
  currentLang: 'es',

  init() {
    // Check localStorage, then browser language, fallback to 'es'
    const savedLang = localStorage.getItem('gigly_lang');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      this.currentLang = savedLang;
    } else {
      const browserLang = navigator.language || navigator.userLanguage || 'es';
      this.currentLang = browserLang.toLowerCase().startsWith('en') ? 'en' : 'es';
    }

    this.applyTranslations();
    this.updateSwitcherUI();
  },

  setLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') return;
    this.currentLang = lang;
    localStorage.setItem('gigly_lang', lang);
    document.documentElement.lang = lang;
    this.applyTranslations();
    this.updateSwitcherUI();

    // Notify other components (e.g. app.js showcase)
    window.dispatchEvent(new CustomEvent('giglyLanguageChanged', { detail: { lang } }));
  },

  get(key) {
    const dict = GIGLY_TRANSLATIONS[this.currentLang] || GIGLY_TRANSLATIONS.es;
    return dict[key] || GIGLY_TRANSLATIONS.es[key] || key;
  },

  getShowcaseData() {
    return GIGLY_SHOWCASE_DATA[this.currentLang] || GIGLY_SHOWCASE_DATA.es;
  },

  applyTranslations() {
    // 1. Text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = this.get(key);
      if (text) {
        el.textContent = text;
      }
    });

    // 2. HTML elements with data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const html = this.get(key);
      if (html) {
        el.innerHTML = html;
      }
    });

    // 3. Placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const placeholder = this.get(key);
      if (placeholder) {
        el.setAttribute('placeholder', placeholder);
      }
    });

    // 4. Bilingual blocks (for comprehensive legal pages)
    document.querySelectorAll('[data-lang-content]').forEach((el) => {
      const targetLang = el.getAttribute('data-lang-content');
      if (targetLang === this.currentLang) {
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });
  },

  updateSwitcherUI() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  },
};

// Auto-initialize when DOM is loaded
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    GiglyI18n.init();

    // Attach click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        GiglyI18n.setLanguage(lang);
      });
    });
  });
}
