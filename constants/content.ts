/**
 * Single source of truth for site copy and links.
 * Update marketing text and URLs here only.
 */

export const siteMeta = {
  title: "Jonathan · ARTIC — Soluciones tech para negocios locales",
  description:
    "ARTIC ayuda a negocios locales a vender más con sistemas digitales claros: presencia web, automatización y datos. Consultoría y ejecución con Jonathan.",
} as const;

export type ServiceIconName = "Globe" | "Workflow" | "BarChart3";

export const content = {
  brand: {
    nameLine: "Jonathan · ARTIC",
    shortLabel: "ARTIC",
    /** Primera línea del hero: marca antes del titular */
    heroBrandLine: "ARTIC — tecnología para negocios locales",
    tagline: "Menos estrés operativo. Más clientes que regresan.",
  },

  nav: {
    primaryCtaLabel: "Contáctame",
    primaryCtaHref: "mailto:mail@mail.com?subject=Consulta%20ARTIC",
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Misión", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Proceso", href: "#process" },
      { label: "Resultados", href: "#proof" },
      { label: "Trabajo", href: "#work" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#cta" },
    ] as const,
  },

  hero: {
    headlineSegments: [
      { text: "Convierte visitas en ", emphasis: "none" as const },
      { text: "ventas repetibles", emphasis: "gradient" as const },
    ],
    subtitle:
      "Para tiendas y servicios en tu ciudad: web que vende, procesos que se cumplen solos y números que entiendes sin ser técnico.",
    primaryCtaLabel: "Contáctame",
    primaryCtaHref: "mailto:mail@mail.com?subject=Consulta%20ARTIC",
    secondaryCtaLabel: "Ver proceso",
    secondaryCtaHref: "#process",
    /** Línea de apoyo bajo CTAs — sin cajas ni estadísticas */
    footnote:
      "Respuesta orientativa en 24 h · propuestas por fases, sin letra pequeña fantasiosa",
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80",
    imageAlt:
      "Interior de un negocio local con equipo atendiendo clientes, luz natural",
  },

  about: {
    title: "Por qué existe ARTIC",
    lead:
      "La mayoría de negocios locales no fallan por falta de ganas: fallan porque el digital está disperso, lento o desconectado del día a día.",
    body:
      "Soy Jonathan. Acompaño a dueñas y equipos a ordenar la presencia online, automatizar lo repetitivo y ver qué canal realmente paga. Hablo claro, cierro alcances por escrito y priorizo entregas que tu staff pueda usar el lunes siguiente.",
    calloutTitle: "Principio de trabajo",
    calloutBody:
      "Primero el ingreso y la operación; el resto es consecuencia. Si una funcionalidad no reduce fricción o no acerca a una venta, no está en la primera versión.",
  },

  services: {
    title: "Qué desbloqueamos contigo",
    subtitle:
      "Tres frentes. Un mismo objetivo: que el digital trabaje para tu caja, no al revés.",
    items: [
      {
        id: "presencia",
        icon: "Globe" as const,
        title: "Presencia que vende",
        description:
          "Landings y sitios rápidos, mensaje claro y SEO local para captar a quien ya busca tu categoría en el mapa.",
      },
      {
        id: "automatizacion",
        icon: "Workflow" as const,
        title: "Operación sin cuellos de botella",
        description:
          "Formularios, confirmaciones, recordatorios y pasos automáticos entre herramientas para liberar horas del equipo.",
      },
      {
        id: "datos",
        icon: "BarChart3" as const,
        title: "Decisiones con contexto",
        description:
          "Indicadores simples para saber qué anuncio, horario o promoción está pagando—sin dashboards que nadie abre.",
      },
    ],
  },

  process: {
    title: "Cómo funciona",
    subtitle:
      "Un proceso claro reduce sorpresas. Siempre sabes en qué fase vamos y qué recibes al final.",
    steps: [
      {
        id: "1",
        label: "01",
        title: "Diagnóstico express",
        description:
          "Reunión corta, revisión de canales actuales y objetivo de negocio. Sales con hipótesis y una foto honesta de brechas.",
      },
      {
        id: "2",
        label: "02",
        title: "Propuesta cerrada",
        description:
          "Alcance, cronograma, entregables y precio por fase. Sin dependencias ocultas ni “lo vemos después”.",
      },
      {
        id: "3",
        label: "03",
        title: "Construcción iterativa",
        description:
          "Hitos semanales, entregas revisables y ajustes según uso real. Priorizamos lo que impacta ingresos primero.",
      },
      {
        id: "4",
        label: "04",
        title: "Puesta en marcha y manuales",
        description:
          "Go-live acompañado, checklist de contingencia y guías breves para tu equipo. El conocimiento no se queda en una sola cabeza.",
      },
    ],
  },

  testimonials: {
    title: "Quién ya lo notó",
    subtitle:
      "Historias reales de operadores que necesitaban orden, no otro logo bonito.",
    items: [
      {
        id: "t1",
        quote:
          "Pasamos de anotar pedidos en tres chats a un solo flujo. El primer mes recuperamos el tiempo que perdíamos los fines de semana.",
        name: "María Elena V.",
        role: "Fundadora",
        company: "Cafetería en Quito",
      },
      {
        id: "t2",
        quote:
          "Por fin entendimos qué anuncio traía clientes de verdad. Recortamos gasto en una plataforma y duplicamos reservas en la otra.",
        name: "Andrés P.",
        role: "Director",
        company: "Clínica de estética",
      },
      {
        id: "t3",
        quote:
          "Jonathan no vende humo: te dice qué no hace falta todavía. Eso nos ahorró meses de scope inflado.",
        name: "Lucía R.",
        role: "Gerente",
        company: "Distribuidora local",
      },
    ],
  },

  portfolio: {
    title: "Ejemplos de impacto",
    subtitle:
      "Proyectos tipo los que podríamos construir contigo—nombres genéricos para proteger a los clientes.",
    items: [
      {
        id: "p1",
        title: "Retail urbano — captación local",
        category: "Web + SEO local",
        outcome: "+38% consultas cualificadas en 10 semanas",
        description:
          "Landing enfocada en una sola promesa, fichas de producto rápidas y seguimiento de llamadas desde el sitio. Integración con WhatsApp sin fricción.",
        imageSrc:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Interior de tienda de ropa con buena iluminación",
      },
      {
        id: "p2",
        title: "Servicio con cita previa",
        category: "Automatización + recordatorios",
        outcome: "−22% ausencias a la cita",
        description:
          "Formulario inteligente, confirmaciones automáticas y recordatorio 24 h antes. El staff ya no persigue por teléfono cada reserva.",
        imageSrc:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Recepción moderna de clínica o consultorio",
      },
      {
        id: "p3",
        title: "Marca en crecimiento regional",
        category: "Panel de rendimiento",
        outcome: "Decisiones semanales con 4 KPI claros",
        description:
          "Conectamos campañas y CRM liviano para ver coste por lead y conversión por sucursal. Reporte automático los lunes.",
        imageSrc:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Persona revisando métricas en portátil en oficina",
      },
    ],
  },

  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Transparencia antes del primer pago.",
    items: [
      {
        id: "f1",
        question: "¿Trabajan solo con negocios en Quito?",
        answer:
          "El foco es negocios locales en Ecuador y la región, con reuniones remotas cuando tiene sentido. Lo importante es que haya decisión y un contacto operativo disponible.",
      },
      {
        id: "f2",
        question: "¿Cuánto tarda un primer entregable?",
        answer:
          "Depende del alcance, pero una landing enfocada suele estar en producción en 3–5 semanas si los contenidos llegan a tiempo. El proceso arranca con hitos semanales explícitos.",
      },
      {
        id: "f3",
        question: "¿Me atan a un proveedor eternamente?",
        answer:
          "Documentamos, usamos stack estándar y entregamos accesos. Puedes mantenerlo internamente o con otro equipo; el código y las integraciones no son una caja negra.",
      },
      {
        id: "f4",
        question: "¿Cómo se cotiza?",
        answer:
          "Por fases con precio cerrado o retainer acotado para evolución continua. Si el proyecto no encaja, te lo decimos en el diagnóstico sin rodeos.",
      },
      {
        id: "f5",
        question: "¿Incluye publicidad en redes?",
        answer:
          "Diseñamos embudos y medición. La gestión de pauta puede ser contigo, con un partner o como add-on—siempre con claridad sobre quién optimiza y qué reportes verás.",
      },
    ],
  },

  finalCta: {
    title: "Siguiente paso: tu diagnóstico express",
    description:
      "Cuéntame qué vendes, tu mejor canal hoy y qué te quita el sueño operativo. Te respondemos con una ruta concreta—no con un PDF genérico.",
    buttonLabel: "Escribir ahora",
    buttonHref: "mailto:mail@mail.com?subject=Diagn%C3%B3stico%20ARTIC",
  },

  footer: {
    email: "mail@mail.com",
    emailHref: "mailto:mail@mail.com",
    whatsappUrl: "https://wa.me/593XXXXXXXXX",
    whatsappLabel: "WhatsApp",
    linkedinUrl: "https://www.linkedin.com/in/jsnchezlucas/",
    linkedinLabel: "LinkedIn",
    legalNote:
      "ARTIC presta servicios profesionales de producto y tecnología. Los resultados citados son ilustrativos; cada negocio varía.",
    copyrightEntity: "Jonathan · ARTIC",
    tagline: "Menos fricción. Más ventas repetibles.",
  },
} as const;
