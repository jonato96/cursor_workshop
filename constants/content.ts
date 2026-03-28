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
    /** Shown in header and footer */
    nameLine: "Jonathan · ARTIC",
    shortLabel: "ARTIC",
    tagline: "Tecnología que impulsa negocios locales",
  },

  nav: {
    primaryCtaLabel: "Contáctame",
    primaryCtaHref: "mailto:mail@mail.com?subject=Consulta%20ARTIC",
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Misión", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Contacto", href: "#contact" },
    ] as const,
  },

  hero: {
    headlineSegments: [
      { text: "Tu negocio local, ", emphasis: "none" as const },
      { text: "listo para crecer online", emphasis: "gradient" as const },
    ],
    subtitle:
      "Diseño e implemento soluciones tech prácticas para tiendas, servicios y marcas en tu ciudad: más clientes, menos fricción y procesos que sí se usan.",
    primaryCtaLabel: "Contáctame",
    primaryCtaHref: "mailto:mail@mail.com?subject=Consulta%20ARTIC",
    secondaryCtaLabel: "Ver servicios",
    secondaryCtaHref: "#services",
    highlights: [
      { label: "Enfoque", value: "Negocios locales" },
      { label: "Entrega", value: "Estrategia + implementación" },
      { label: "Stack", value: "Web, datos, automatización" },
      { label: "Comunidad", value: "Quito y LATAM" },
    ],
  },

  about: {
    title: "Misión",
    lead:
      "Soy Jonathan. En ARTIC combino criterio de producto y ejecución técnica para que negocios locales den el salto digital sin perder su esencia.",
    body:
      "Trabajo con pymes que quieren vender mejor, organizar citas y pedidos, o dejar de depender solo del boca a boca. Te acompaño desde la estrategia hasta entregables concretos—landings, integraciones y automatizaciones—con lenguaje claro y plazos realistas.",
    calloutTitle: "Cómo trabajamos",
    calloutBody:
      "Diagnóstico breve, propuesta cerrada y hitos semanales. Priorizamos lo que mueve ventas y dejamos el código mantenible para tu equipo o proveedores futuros.",
  },

  services: {
    title: "Lo que hacemos",
    subtitle:
      "Tres pilares pensados para resultados medibles en tu operación diaria.",
    items: [
      {
        id: "presencia",
        icon: "Globe" as const,
        title: "Presencia y captación",
        description:
          "Sitios y landings rápidas, mensaje claro y SEO local para que te encuentren quienes ya buscan lo que ofreces.",
      },
      {
        id: "automatizacion",
        icon: "Workflow" as const,
        title: "Automatización operativa",
        description:
          "Menos tareas manuales: formularios, confirmaciones, avisos y enlaces con tus herramientas para ahorrar tiempo al equipo.",
      },
      {
        id: "datos",
        icon: "BarChart3" as const,
        title: "Claridad con datos",
        description:
          "Paneles simples y reportes que te dicen qué canal rinde y dónde invertir el siguiente esfuerzo.",
      },
    ],
  },

  finalCta: {
    title: "Hablemos de tu próximo paso digital",
    description:
      "Cuéntame qué vendes, a quién quieres llegar y qué te frena hoy. Respondemos con una propuesta concreta, sin relleno.",
    buttonLabel: "Contáctame",
    buttonHref: "mailto:mail@mail.com?subject=Consulta%20ARTIC",
  },

  footer: {
    email: "mail@mail.com",
    emailHref: "mailto:mail@mail.com",
    /** Reemplaza 593XXXXXXXXX por tu número internacional sin + ni espacios */
    whatsappUrl: "https://wa.me/593XXXXXXXXX",
    whatsappLabel: "WhatsApp",
    linkedinUrl: "https://www.linkedin.com/in/jsnchezlucas/",
    linkedinLabel: "LinkedIn",
    legalNote: "Servicios profesionales. Precios y alcance según proyecto.",
    copyrightEntity: "Jonathan · ARTIC",
  },
} as const;
