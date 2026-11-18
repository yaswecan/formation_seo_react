export const origin = 'https://labo.example';
export const accueil = {
  path: '/',
  name: 'Les ateliers du Labo',
  title: 'Ateliers créatifs à Paris 19e | Le Labo du quartier',
  description: 'Découvre les ateliers du Labo du quartier à Paris 19e : clavier mécanique et photo au smartphone. Sessions gratuites de 60 à 90 minutes, dès 14 ans.',
  intro: 'Le Labo du quartier propose des ateliers courts et gratuits à Paris 19e, dès 14 ans. Viens fabriquer, photographier et apprendre avec du matériel fourni.',
};
export const ateliers = [
  {
    path: '/ateliers/clavier-mecanique/',
    name: 'Assembler un clavier à Paris',
    title: 'Atelier clavier à Paris 19e | Le Labo',
    description: 'En 90 minutes, assemble une touche de clavier mécanique. Atelier gratuit à Paris 19e, dès 14 ans. Matériel fourni.',
    intro: 'Assemble une touche de clavier mécanique en 90 minutes dans notre atelier de Paris 19e. Matériel fourni et débutants bienvenus dès 14 ans.',
    duration: '90 minutes', audience: 'Dès 14 ans, débutants',
    place: 'Paris 19e', price: 'Gratuit, sur inscription',
    image: '/images/clavier.svg',
    alt: 'Schéma d’une touche de clavier mécanique : le capuchon, l’interrupteur et la plaque de fixation avant assemblage.',
  },
];
export const pages = [accueil, ...ateliers];

export function findPage(pathname) {
  const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
  return pages.find((page) => page.path === normalized);
}
