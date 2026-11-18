export const origin = 'https://labo.example';
export const accueil = {
  path: '/',
  name: 'Les ateliers du Labo',
  title: 'Ateliers', description: '',
  intro: 'Découvrez nos activités.',
};
export const ateliers = [
  {
    path: '/ateliers/clavier-mecanique/',
    name: 'Atelier 01',
    title: 'Atelier clavier à Paris 19e | Le Labo', description: 'En 90 minutes, assemble une touche de clavier mécanique. Atelier gratuit à Paris 19e, dès 14 ans. Matériel fourni.',
    intro: 'En 90 minutes, assemble une touche de clavier mécanique. Atelier gratuit à Paris 19e, dès 14 ans. Matériel fourni.',
    duration: '90 minutes', audience: 'Dès 14 ans, débutants',
    place: 'Paris 19e', price: 'Gratuit, sur inscription',
    image: '/images/clavier.svg',
    alt: 'clavier',
  },
];
export const pages = [accueil, ...ateliers];

export function findPage(pathname) {
  const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
  return pages.find((page) => page.path === normalized);
}
