import React, { useState } from "react";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
const origin = "https://labo.example";
const accueil = {
  path: "/",
  name: "Les ateliers du Labo",
  title: "Ateliers",
  description: "",
  intro: "Découvrez nos activités."
};
const ateliers = [
  {
    path: "/ateliers/clavier-mecanique/",
    name: "Atelier 01",
    title: "Atelier clavier à Paris 19e | Le Labo",
    description: "En 90 minutes, assemble une touche de clavier mécanique. Atelier gratuit à Paris 19e, dès 14 ans. Matériel fourni.",
    intro: "En 90 minutes, assemble une touche de clavier mécanique. Atelier gratuit à Paris 19e, dès 14 ans. Matériel fourni.",
    duration: "90 minutes",
    audience: "Dès 14 ans, débutants",
    place: "Paris 19e",
    price: "Gratuit, sur inscription",
    image: "/images/clavier.svg",
    alt: "clavier"
  }
];
const pages = [accueil, ...ateliers];
function Fiche({ page }) {
  const [memo, setMemo] = useState(false);
  return /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("p", { className: "kicker" }, "Fiche atelier"), /* @__PURE__ */ React.createElement("h1", { className: "big" }, page.name), /* @__PURE__ */ React.createElement("p", { className: "lead" }, page.intro), /* @__PURE__ */ React.createElement("img", { className: "schema", src: page.image, alt: page.alt, width: "720", height: "280" }), /* @__PURE__ */ React.createElement("h2", { className: "sub" }, "Infos pratiques"), /* @__PURE__ */ React.createElement("ul", { className: "facts" }, /* @__PURE__ */ React.createElement("li", null, page.duration), /* @__PURE__ */ React.createElement("li", null, page.audience), /* @__PURE__ */ React.createElement("li", null, page.place), /* @__PURE__ */ React.createElement("li", null, page.price)), /* @__PURE__ */ React.createElement("button", { type: "button", "aria-pressed": memo, onClick: () => setMemo(!memo) }, memo ? "Retirer de mon mémo" : "Ajouter à mon mémo"));
}
function Accueil({ page }) {
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("p", { className: "kicker" }, "Le programme"), /* @__PURE__ */ React.createElement("h1", { className: "big" }, page.name), /* @__PURE__ */ React.createElement("p", { className: "lead" }, page.intro), /* @__PURE__ */ React.createElement("h2", { className: "sub" }, "À découvrir"), /* @__PURE__ */ React.createElement("ul", { className: "events" }, ateliers.map((atelier) => /* @__PURE__ */ React.createElement("li", { key: atelier.path }, /* @__PURE__ */ React.createElement("a", { href: atelier.path }, atelier.name)))));
}
function App({ page }) {
  if (!page) return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", null, "Page introuvable"), /* @__PURE__ */ React.createElement("a", { href: "/" }, "Accueil"));
  return /* @__PURE__ */ React.createElement("div", { className: "shell" }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("a", { className: "brand", href: "/" }, "Le Labo du quartier"), /* @__PURE__ */ React.createElement("span", null, "Paris 19e")), /* @__PURE__ */ React.createElement("main", null, page.path === "/" ? /* @__PURE__ */ React.createElement(Accueil, { page }) : /* @__PURE__ */ React.createElement(Fiche, { page })), /* @__PURE__ */ React.createElement("footer", null, "Le Labo du quartier · Ateliers numériques"));
}
function Metas({ page }) {
  const url = new URL(page.path, origin).href;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("title", null, page.title), /* @__PURE__ */ React.createElement("meta", { name: "description", content: page.description }), /* @__PURE__ */ React.createElement("link", { rel: "canonical", href: url }));
}
function renderPage(page) {
  const head = renderToStaticMarkup(/* @__PURE__ */ React.createElement(Metas, { page }));
  const body = renderToString(/* @__PURE__ */ React.createElement(App, { page }));
  return { head, body };
}
export {
  pages,
  renderPage
};
