const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://yourwebsite.com' });

  const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));
  sitemap.pipe(writeStream);

  // Add your routes here
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/about-us', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/events', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/resources', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/join-us', changefreq: 'monthly', priority: 0.6 });
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.6 });

  // Additional routes can be added here

  sitemap.end();

  await streamToPromise(writeStream);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
