import React from 'react';
import { origin } from './catalogue.js';

export default function Metas({ page }) {
  const url = new URL(page.path, origin).href;
  return (
    <>
      <title>Ateliers</title>
      <link rel="canonical" href={url} />
    </>
  );
}
