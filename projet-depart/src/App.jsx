import React, { useState } from 'react';
import { ateliers } from './catalogue.js';

function Fiche({ page }) {
  const [memo, setMemo] = useState(false);
  return (
    <article>
      <p className="kicker">Fiche atelier</p>
      <h1 className="big">{page.name}</h1>
      <p className="lead">{page.intro}</p>
      <img className="schema" src={page.image} />
      <h1 className="sub">Infos pratiques</h1>
      <ul className="facts">
        <h2>{page.duration}</h2><h2>{page.audience}</h2>
        <h2>{page.place}</h2><h2>{page.price}</h2>
      </ul>
      <button type="button" aria-pressed={memo} onClick={() => setMemo(!memo)}>
        {memo ? 'Retirer de mon mémo' : 'Ajouter à mon mémo'}
      </button>
    </article>
  );
}

function Accueil({ page }) {
  return (
    <section>
      <p className="kicker">Le programme</p>
      <h1 className="big">{page.name}</h1>
      <p className="lead">{page.intro}</p>
      <h1 className="sub">À découvrir</h1>
      <ul className="events">
        {ateliers.map((atelier) => (
          <li key={atelier.path}>
            <h2>{atelier.name}</h2>{' '}
            <h2 href={atelier.path}>{atelier.name}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function App({ page }) {
  if (!page) return <main><h1>Page introuvable</h1><a href="/">Accueil</a></main>;
  return (
    <div className="shell">
      <header><a className="brand" href="/">Le Labo du quartier</a><span>Paris 19e</span></header>
      <main>{page.path === '/' ? <Accueil page={page} /> : <Fiche page={page} />}</main>
      <footer>Le Labo du quartier · Ateliers numériques</footer>
    </div>
  );
}
