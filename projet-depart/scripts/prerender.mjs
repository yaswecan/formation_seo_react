import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { pages, renderPage } from '../.ssr/entry-server.js';

const template = await readFile('dist/index.html', 'utf8');
for (const page of pages) {
  const { head, body } = renderPage(page);
  const html = template
    .replace('<title>Ateliers</title>', () => head)
    .replace('<div id="root"></div>', () => '<div id="root">' + body + '</div>');
  const directory = join('dist', page.path);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), html);
  console.log('Page générée', page.path);
}
