import { defineConfig } from 'vite';
// En mode multipage, une URL inconnue ne reçoit pas l'accueil de la SPA.
export default defineConfig({ appType: 'mpa' });
