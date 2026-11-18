# Mon enquête SEO

Prénom : Raphael
Date, URL de la fiche clavier, version de Chrome : 18/11/2026 · http://localhost:4173/ateliers/clavier-mecanique/ · Google Chrome 157.0.8103.79

## 0 · QCM de positionnement

01 · B — « Construire son clavier à Paris » répond le mieux à la recherche.
02 · C — Réseau › Document › Réponse montre ce que le serveur a envoyé.
03 · A — Un lien avec `href` porte l’adresse de destination dans le HTML.
04 · B — Lighthouse permet d’auditer une page locale.

## 1 · Ce que j’ai vu

- Ex. 1 · Dans Réseau → Document → Réponse, la racine contenait : `<div id="root"></div>` — aucun texte, la chaîne « Atelier 01 » n’y apparaît pas.
- Ex. 1 · Dans Éléments, le titre était dans cette balise : `<div class="big">Atelier 01</div>` — React l’a ajoutée après réception du document.
- Ex. 2 · Après avoir changé `name` en « Assembler un clavier à Paris », je lisais sur la fiche « Assembler un clavier à Paris » et dans l’onglet « Ateliers » : le grand titre vient de `atelier.name` dans `App.jsx`, alors que l’onglet utilise le `<title>` fixe de `Metas.jsx`.
- TP 1 · Le « Voir » est devenu `<a href="/ateliers/clavier-mecanique/">Assembler un clavier à Paris</a>` : Tab + Entrée ouvre la fiche. Son grand titre est désormais un `<h1 class="big">` et « Infos pratiques » un `<h2 class="sub">` ; le mémo reste un bouton.
- TP 1 · Title de l’accueil / title de la fiche / description de la fiche : « Ateliers créatifs à Paris 19e | Le Labo du quartier » / « Atelier clavier à Paris 19e | Le Labo » / « En 90 minutes, assemble une touche de clavier mécanique. Atelier gratuit à Paris 19e, dès 14 ans. Matériel fourni. » Ces trois textes viennent de `src/catalogue.js` et sont insérés par `src/Metas.jsx` ; la canonique reste inchangée.

- TP 1 · À 390 px, la durée, le lieu, le niveau et le prix restent visibles (la règle qui masquait `.facts` a été supprimée) ; le schéma se réduit à la largeur de l’écran et porte un `alt` descriptif.

## 2 · Quand le titre et le bouton fonctionnent

Ex. 3 · Observe les deux modes dans Manip_rendu.html.

| Mode | Je peux lire le titre avant « Lancer React » ? | Le mémo répond avant ? | Le mémo répond après ? |
| --- | --- | --- | --- |
| Racine vide | Non : le document ne contient que `<div id="root"></div>`. | Non : aucun bouton n’existe avant le script. | Oui : `createRoot` affiche la fiche et le bouton devient cliquable. |
| Fiche pré-rendue | Oui : « Atelier clavier » est déjà dans le HTML reçu. | Non : le bouton est visible mais inerte. | Oui : `hydrateRoot` rattache le clic au HTML existant. |

À décider en binôme : pour cinq fiches stables, le pré-rendu (SSG) suffit et livre le texte dès la réponse ; si les places doivent être recalculées à chaque requête, il faut passer au rendu serveur (SSR), qui calcule le HTML à chaque visite tout en gardant le texte disponible immédiatement. Le CSR seul laisse une racine vide jusqu’à l’exécution du script.
Hydratation : le mémo commence à répondre précisément au moment du clic sur « Lancer React » en mode fiche pré-rendue, quand `hydrateRoot` a rattaché les gestionnaires d’événements au bouton déjà présent.

TP 2 · H1 copié dans la réponse HTTP après pré-rendu : `<h1 class="big">Assembler un clavier à Paris</h1>` (présent dans `dist/ateliers/clavier-mecanique/index.html`, généré par `renderToString(<App page={page} />)` dans `src/entry-server.jsx`).
Bouton mémo, avant puis après le clic : « Ajouter à mon mémo » puis « Retirer de mon mémo » (le clic fonctionne après l’hydratation).
Contenu lu avec JavaScript coupé : le titre, l’introduction, le schéma et son texte alternatif, ainsi que les informations pratiques (90 minutes, dès 14 ans/débutants, Paris 19e, gratuit sur inscription). Seul le bouton mémo ne répond plus.

TP 2 · `/robots.txt` autorise tout (`Allow: /`) et annonce `https://labo.example/sitemap.xml` ; ce sitemap contient l’accueil et la fiche clavier. Une requête vers `/inconnue/` renvoie un statut 404.

## 3 · Ce que j’ai corrigé

Joins les deux audits Lighthouse mobiles de la fiche clavier. Utilise exactement la même URL.
Noms des fichiers et scores SEO observés : `audits/lighthouse-avant.html` (SEO **83**) et `audits/lighthouse-apres.html` (SEO **100**), deux audits Navigation · Mobile · SEO sur `http://localhost:4174/ateliers/clavier-mecanique/`. Les contrôles `meta-description` et `image-alt` passent de 0 à 1.

| Contrôle | Avant | Fichier modifié | Après (extrait ou observation) |
| --- | --- | --- | --- |
| Meta description | Contrôle `meta-description` à 0 : aucun résumé dans le `<head>`. | `src/catalogue.js` et `src/Metas.jsx` | Contrôle à 1 : `<meta name="description" content="En 90 minutes, assemble une touche de clavier mécanique. Atelier gratuit à Paris 19e, dès 14 ans. Matériel fourni.">` est dans la réponse Document. |
| Texte alternatif de l’image | Contrôle `image-alt` à 0 : `<img class="schema" src="/images/clavier.svg" />`. | `src/catalogue.js` et `src/App.jsx` | Contrôle à 1 : `alt="Schéma d’une touche de clavier mécanique : le capuchon, l’interrupteur et la plaque de fixation avant assemblage."`, avec `width="720" height="280"`. |

À justifier : le test sans JavaScript montre que le h1, l’introduction, le schéma et les informations pratiques sont déjà dans la réponse HTTP. Le rôle de React n’est donc pas de fournir le texte indexable ici, mais d’hydrater ce HTML pour rendre le bouton mémo interactif ; un audit SEO seul ne mesure pas cette interaction.

Prochaine amélioration et test pour la vérifier : générer `sitemap.xml` automatiquement à partir du tableau `ateliers` ; pour vérifier, ajouter une fiche, relancer `npm run actualiser` et contrôler qu’une nouvelle entrée `<url>` apparaît dans `/sitemap.xml`.
Search Console simulée : CTR de A = … ; CTR de B = … ; les clics …
Mon hypothèse et le filtre pour la tester :
Outil qui indique si la page est indexée sur un site publié :

## 4 · Ma fiche photo

URL et statut HTTP :
Lien vers la fiche depuis l’accueil :
Title, h1 et canonique copiés dans la réponse Document :
Entrée de la fiche photo dans sitemap.xml :
À 390 px, je vois … (joindre une capture ou décrire le test réalisé) :
Sans JS je peux lire … ; après réactivation du JS, le bouton …
J’ai choisi le pré-rendu pour ces fiches parce que …
