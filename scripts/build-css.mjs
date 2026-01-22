import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// CSS files to bundle (order matters - tokens first)
const cssFiles = [
  'src/tokens/tokens.css',
  'src/components/Button/Button.css',
  'src/components/Card/Card.css',
  'src/components/Icon/Icon.css',
];

// Ensure dist directory exists
mkdirSync(join(rootDir, 'dist'), { recursive: true });

// Read and concatenate all CSS files
const combinedCSS = cssFiles
  .map((file) => {
    const filePath = join(rootDir, file);
    const content = readFileSync(filePath, 'utf-8');
    return `/* ${file} */\n${content}`;
  })
  .join('\n\n');

// Write combined CSS to dist
const outputPath = join(rootDir, 'dist', 'styles.css');
writeFileSync(outputPath, combinedCSS);

console.log(`✓ CSS bundled to ${outputPath}`);
