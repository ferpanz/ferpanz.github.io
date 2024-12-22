const proyectos = [
  {
    titulo: "Senses App",
    descripcion:
      "App facilitadora de turnos. Permite elegir las diversas ofertas, días y horarios, y genera un mensaje de Whatsapp con la info necesaria para que el administrador se ponga en contacto con su cliente.",
    link: "https://sensesapp.netlify.app/",
    fecha: "",
    imagen: "senses.jpeg",
    tecnologias: ["HTMl","CSS","Bootstrap", "Angular"],
  },
  {
    titulo: "IPET N°98 Luis de Tejeda",
    descripcion:
      "Página del I.P.E.T. N°98 Luis de Tejeda de la ciudad de Río Tercero. La página tiene como objetivo dar presencia en la red a la institución con sus ofertas educativas.",
    link: "https://ipet98.netlify.app/",
    fecha: "",
    imagen: "ipet98.png",
    tecnologias: ["HTMl","CSS","Bootstrap", "Angular"],
  },
  {
    titulo: "Portfolio personal",
    descripcion:
      "Portfolio basado en la propuesta del canal de Youtube 'Punto Json'. Contiene información personal básica presentando mis habilidades tecnológicas y los proyectos en los que he trabajado.",
    link: "https://ferpanz.github.io",
    fecha: "",
    imagen: "Logo.png",
    tecnologias: ["HTMl","CSS","Javascript"],
  },
    
];

const informacionPersonal = {
  nombre: "Fernán Barberón",
  subtitulo: "Desarrollador Front-End",
  imagen: "img/Logo.png",
  otros: [
    ["Nacionalidad", "Argentino"],
    [
      "Edad",
      new Date(new Date() - new Date("1981/07/22")).getFullYear()-1970 + " años",
    ],
  ],
  idiomas: [
    ["Español", "Nativo"],
  ],
  tecnologias: [
    ["Html", 9],["Css", 9],["Javascript", 8],["Typescript", 6],["Angular", 7],
    ["Bootstrap", 8],
  ],
  redes: [
    ["telegram", "https://t.me/ferpanz"],
    ["linkedin", "https://www.linkedin.com/in/fern%C3%A1n-barber%C3%B3n-a36576171?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bx%2FGfK5wgRIqDvWCFUU0YHg%3D%3D"],
    ["mastodon", "https://mastodon.social/@ferpanz"],
    ["fediverso", "https://fediverse.tv/c/ferpanz_/videos"],
    ["instagram", "https://www.instagram.com/fernanbarberon1/"],
    ["mail", "mailto:ferpanz@gmail.com"]
  ]
};
