import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import { findPage } from './catalogue.js';
import './style.css';

const root = document.getElementById('root');
const page = findPage(window.location.pathname);
const app = <App page={page} />;
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
