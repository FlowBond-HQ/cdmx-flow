export type PossibleArtist = {
  id: string;
  name: string;
  tagline: string;
  bio: string;
  primaryLink?: { type: 'website' | 'instagram'; url: string; label: string };
  instagramFollowers?: string;
};

export const possibleArtists: PossibleArtist[] = [
  {
    id: 'emmanuel-massu',
    name: 'Emmanuel Massú',
    tagline: 'El Chilo del Trapteño · Cineasta & Rapero',
    bio: 'Cineasta, cantautor y rapero sinaloense, nacido en Culiacán. Con 19 años en el medio ha fusionado el hip hop con paisajes sonoros del norte de México, creando el Trapteño. Co-dirigió el documental Los Plebes (2018), ganador de "Selección Ahora México" en FICUNAM 2021 y distribuido por Cine Buró y Vice Media.',
    instagramFollowers: '11.3K',
  },
  {
    id: 'crissy-j',
    name: 'Crissy J',
    tagline: 'Violinista · DJ · Curadora',
    bio: 'Artista, violinista y DJ multi-género, curadora y activista enfocada en la conciencia y la conexión a través de la música. Ha participado en escenarios internacionales y ha creado experiencias innovadoras que combinan música, arte, comunidad y sanación.',
    primaryLink: { type: 'website', url: 'https://mscrissyj.com/', label: 'mscrissyj.com' },
    instagramFollowers: '45.2K',
  },
];
