export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  primaryLink?: { type: 'website' | 'instagram' | 'linktree'; url: string; label: string };
  instagramFollowers?: string;
  secondaryFollowers?: string;
};

export const team: TeamMember[] = [
  {
    id: 'michelle-young',
    name: 'Michelle Young',
    role: 'Fundadora de ROVE Collective · Co-fundadora de The Box Collective y Flow Vallarta',
    bio: 'Artista multidisciplinaria, productora y especialista en marketing con más de 18 años de experiencia en producción de festivales y más de 12 años en marketing experiencial. Ha trabajado con Refinery29, ENTER, VICE, Disney, YSL, Soho House, Rolling Stone y Amazon. Ha producido activaciones en Coachella, Super Bowl, SXSW, GRAMMYs, NYFW, LAFW y CES, además del Children\'s Hospital Los Angeles Benefit Gala que recaudó $5.5M en una sola noche.',
    primaryLink: { type: 'website', url: 'http://michelleinflow.com', label: 'michelleinflow.com' },
    instagramFollowers: '9.7K',
    secondaryFollowers: '+ 4.5K artist account · 40K+ monthly views',
  },
  {
    id: 'steph-ferrera',
    name: 'Steph Ferrera',
    role: 'Fundadora de FlowBond · Arquitecta de DANZ',
    bio: 'Steph Ferrera diseña sistemas donde la experiencia humana se convierte en valor. Es arquitecta de nuevas economías en la intersección de tecnología, cultura y coordinación humana, enfocada en la tokenización de activos y experiencias del mundo real y en la creación de infraestructuras para el thriving humano a escala. Su trabajo se despliega en ecosistemas globales como BitBasel, Tulum Crypto Fest, LaBitConf, Devconnect, Token2049, Coinfest, ETH Denver y SXSW, donde participa como speaker, organizadora y artista, conectando innovación, comunidad y expresión cultural. Forma parte de una nueva generación de builders que están extendiendo la propiedad digital hacia la realidad física, contribuyendo a iniciativas que vinculan NFTs y artefactos culturales con sistemas de preservación a largo plazo, incluyendo misiones lunares y archivos en el espacio. Está construyendo una nueva capa económica donde la presencia, la interacción y la conexión humana se convierten en activos medibles y escalables.',
    primaryLink: { type: 'linktree', url: 'https://linktr.ee/stepbystephBTM', label: 'linktr.ee/stepbystephBTM' },
    instagramFollowers: '2.8K',
  },
  {
    id: 'luna-tamayo',
    name: 'Luna Tamayo',
    role: 'Productora, actriz y locutora',
    bio: 'Artista multidisciplinaria con sólida trayectoria en medios, cine y artes escénicas. Licenciada en Artes Escénicas por la Universidad de Guadalajara, es productora y conductora de El Resplandor, CPS News y Radiante 98.3, y creadora del pódcast Polytales. Ha participado como actriz en cortometrajes reconocidos en festivales como Shorts México y FICPV. Bilingüe en inglés y español, especialista en comunicación, producción y narrativa de impacto.',
    instagramFollowers: '2.4K',
  },
  {
    id: 'haaz-rugerio',
    name: 'Haaz Rugerio (Tatewari)',
    role: 'DJ y productor',
    bio: 'DJ y productor mexicano de música electrónica basado en la Ciudad de México. Apasionado del arte y la humanidad. Director creativo de Sexico City Camp en AfrikaBurn y productor de eventos enfocado en crear experiencias inmersivas, con especial interés en el diseño de iluminación como elemento central.',
    instagramFollowers: '3.3K',
  },
  {
    id: 'patricio-martinez',
    name: 'Patricio Martínez',
    role: 'Documentalista y cinefotógrafo',
    bio: 'Documentalista, cinefotógrafo y narrador visual radicado en Ciudad de México. Su trabajo explora el territorio, la memoria, la identidad y la relación entre las comunidades y la tierra que habitan. Ha colaborado con National Geographic, The Washington Post, NPR, CNBC, The New York Times y las Naciones Unidas. Su aclamado proyecto RIVUS: El Último Río Vivo documenta el rescate del último río vivo de la Ciudad de México.',
    primaryLink: { type: 'website', url: 'https://www.patriciomtz.com', label: 'patriciomtz.com' },
    instagramFollowers: '900',
  },
  {
    id: 'mariana-garcia',
    name: 'Mariana García (Márians)',
    role: 'Productora, DJ y creadora de experiencias',
    bio: 'Productora, DJ y creadora de experiencias enfocadas en arte, música y experiencia humana. Ha trabajado en destinos como Careyes y Cuixmala, produciendo eventos de alto nivel para figuras internacionales, marcas y comunidades creativas. Su enfoque integra estética, logística y presencia, diseñando espacios donde el arte y el cuerpo generan conexión real.',
    primaryLink: { type: 'website', url: 'https://marians.mx/es', label: 'marians.mx' },
    instagramFollowers: '2.1K',
  },
  {
    id: 'celina-kyle-wolf',
    name: 'Celina Kyle Wolf',
    role: 'Productora de moda y experiencias',
    bio: 'Productora de moda y experiencias con más de 17 años de trayectoria trabajando con marcas globales como Dior, Versace, Oscar de la Renta y Vogue. Integra estética, sostenibilidad y ejecución de alto nivel en proyectos culturales y de moda.',
    instagramFollowers: '6.6K',
  },
  {
    id: 'erman-baradi',
    name: 'Erman Baradi',
    role: 'Cineasta y fundador de Ermantourage',
    bio: 'Cineasta, emprendedor y fundador de Ermantourage, enfocado en conectar personas a través del storytelling y experiencias globales. Ha producido eventos en múltiples ciudades internacionales y ha desarrollado plataformas que conectan industria, comunidad y cultura. Nombrado "Top Networker in Hollywood" por The Huffington Post en 2016.',
    instagramFollowers: '21.8K',
  },
];
