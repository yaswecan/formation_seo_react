import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
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
    name: "Assembler un clavier à Paris",
    title: "Ateliers",
    description: "",
    intro: "Un atelier pour découvrir de nouvelles choses.",
    duration: "90 minutes",
    audience: "Dès 14 ans, débutants",
    place: "Paris 19e",
    price: "Gratuit, sur inscription",
    image: "/images/clavier.svg",
    alt: ""
  }
];
const pages = [accueil, ...ateliers];
function Metas({ page }) {
  const url = new URL(page.path, origin).href;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("title", null, "Ateliers"), /* @__PURE__ */ React.createElement("link", { rel: "canonical", href: url }));
}
function renderPage(page) {
  const head = renderToStaticMarkup(/* @__PURE__ */ React.createElement(Metas, { page }));
  const body = "";
  return { head, body };
}
export {
  pages,
  renderPage
};
