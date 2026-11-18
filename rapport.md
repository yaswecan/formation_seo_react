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

## 2 · Quand le titre et le bouton fonctionnent

Ex. 3 · Observe les deux modes dans Manip_rendu.html.

| Mode | Je peux lire le titre avant « Lancer React » ? | Le mémo répond avant ? | Le mémo répond après ? |
| --- | --- | --- | --- |
| Racine vide | | | |
| Fiche pré-rendue | | | |

TP 2 · H1 copié dans la réponse HTTP après pré-rendu :
Bouton mémo, avant puis après le clic :
Contenu lu avec JavaScript coupé :

## 3 · Ce que j’ai corrigé

Joins les deux audits Lighthouse mobiles de la fiche clavier. Utilise exactement la même URL.
Noms des fichiers et scores SEO observés :

| Contrôle | Avant | Fichier modifié | Après (extrait ou observation) |
| --- | --- | --- | --- |
| Meta description | | | |
| Texte alternatif de l’image | | | |

Prochaine amélioration et test pour la vérifier :
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
