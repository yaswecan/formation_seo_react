export const origin = 'https://labo.example';
export const accueil = {
  path: '/',
  name: 'Les ateliers du Labo',
  title: 'Ateliers', description: 'Une fiche clavier sur Paris',
  intro: 'Découvrez nos activités.',
};
export const ateliers = [
  {
    path: '/ateliers/clavier-mecanique/',
    name: 'Assembler un clavier à Paris',
    title: 'Ateliers', description: 'Une fiche clavier sur Paris',
    intro: 'Un atelier pour découvrir de nouvelles choses.',
    duration: '90 minutes', audience: 'Dès 14 ans, débutants',
    place: 'Paris 19e', price: 'Gratuit, sur inscription',
    image: '/images/clavier.svg',
    alt: 'Une image de clavier sur Paris',
  },
];
export const pages = [accueil, ...ateliers];

export function findPage(pathname) {
  const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
  return pages.find((page) => page.path === normalized);
}
