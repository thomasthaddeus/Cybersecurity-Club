const { existsSync, readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const root = resolve(__dirname, '..');
const config = JSON.parse(readFileSync(resolve(root, 'template.config.json'), 'utf8'));
const checkOnly = process.argv.includes('--check');

const normalizeUrl = (url) => url.replace(/\/+$/, '');
const siteUrl = normalizeUrl(config.site.url);
const logoPath = `/${config.site.logo}`;

const files = {
  index: resolve(root, 'index.html'),
  manifest: resolve(root, 'public', 'manifest.json'),
  robots: resolve(root, 'public', 'robots.txt'),
};

const replaceMeta = (html, selector, value) => {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(<meta ${escaped} content=")[^"]*(">)`);
  return html.replace(pattern, `$1${value}$2`);
};

let indexHtml = readFileSync(files.index, 'utf8');
indexHtml = replaceMeta(indexHtml, 'name="description"', config.site.description);
indexHtml = replaceMeta(indexHtml, 'name="author"', config.site.name);
indexHtml = replaceMeta(indexHtml, 'property="og:title"', config.site.name);
indexHtml = replaceMeta(indexHtml, 'property="og:description"', config.site.description);
indexHtml = replaceMeta(indexHtml, 'property="og:image"', logoPath);
indexHtml = replaceMeta(indexHtml, 'property="og:url"', siteUrl);
indexHtml = replaceMeta(indexHtml, 'name="twitter:title"', config.site.name);
indexHtml = replaceMeta(indexHtml, 'name="twitter:description"', config.site.description);
indexHtml = replaceMeta(indexHtml, 'name="twitter:image"', logoPath);
indexHtml = indexHtml.replace(/<title>.*<\/title>/, `<title>${config.site.name}</title>`);

const manifest = JSON.parse(readFileSync(files.manifest, 'utf8'));
manifest.short_name = config.site.shortName;
manifest.name = config.site.name;
manifest.start_url = '.';
manifest.icons = manifest.icons.map((icon) => (
  icon.sizes === '512x512' ? { ...icon, src: config.site.logo } : icon
));

const robots = `# robots.txt
# https://www.robotstxt.org/robotstxt.html

User-agent: *
Allow: /
Disallow:

Sitemap: ${siteUrl}/sitemap.xml
`;

const pendingWrites = [
  [files.index, indexHtml],
  [files.manifest, `${JSON.stringify(manifest, null, 2)}\n`],
  [files.robots, robots],
];

if (checkOnly) {
  const stale = pendingWrites.filter(([path, content]) => !existsSync(path) || readFileSync(path, 'utf8') !== content);
  if (stale.length > 0) {
    console.error(`Template metadata is out of sync: ${stale.map(([path]) => path).join(', ')}`);
    process.exit(1);
  }
  process.exit(0);
}

for (const [path, content] of pendingWrites) {
  writeFileSync(path, content);
}

console.log('Template metadata synchronized.');
