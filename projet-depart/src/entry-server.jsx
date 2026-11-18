import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import App from './App.jsx';
import Metas from './Metas.jsx';
export { pages } from './catalogue.js';

export function renderPage(page) {
  const head = renderToStaticMarkup(<Metas page={page} />);
  const body = '';
  return { head, body };
}
