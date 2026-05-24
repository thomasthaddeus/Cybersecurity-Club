const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');
const templateConfig = require('./template.config.json');

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: process.env.SITE_URL || templateConfig.site.url });

  const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));
  sitemap.pipe(writeStream);

  templateConfig.navigation.forEach((item) => {
    sitemap.write({ url: item.path, changefreq: item.path === '/' ? 'daily' : 'weekly', priority: item.path === '/' ? 1.0 : 0.8 });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
