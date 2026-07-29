import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kinelski.pl',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith('/404') &&
        !page.endsWith('/admin') &&
        !page.includes('/admin-data/') &&
        !page.endsWith('/monografia'),
      serialize(item) {
        const isHomepage = item.url === 'https://kinelski.pl/';
        const isPrimary = ['/badania', '/kariera', '/projekty', '/publikacje', '/monografie'].some((path) =>
          item.url.endsWith(path)
        );
        item.changefreq = isHomepage ? 'weekly' : isPrimary ? 'monthly' : 'yearly';
        item.priority = isHomepage ? 1 : isPrimary ? 0.8 : 0.6;
        item.lastmod = new Date('2026-07-29');
        return item;
      },
    }),
  ],
});
