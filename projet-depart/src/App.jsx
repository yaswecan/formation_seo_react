import React, { useState } from 'react';
import { ateliers } from './catalogue.js';

function Fiche({ page }) {
  const [memo, setMemo] = useState(false);
  return (
    <article>
      <p className="kicker">Fiche atelier</p>
      <h1 className="big">{page.name}</h1>
      <p className="lead">{page.intro}</p>
      <img className="schema" src={page.image} alt={page.alt} width='720' height='280' />
      <h2 className="sub">Infos pratiques</h2>
      <ul className="facts">
        <li>{page.duration}</li><li>{page.audience}</li>
        <li>{page.place}</li><li>{page.price}</li>
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
      <h2 className="sub">À découvrir</h2>
      <ul className="events">
        {ateliers.map((atelier) => (
          <li key={atelier.path}>
            <a href={atelier.path}>{atelier.name}</a>
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
