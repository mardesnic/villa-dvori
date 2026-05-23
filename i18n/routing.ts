import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'hr', 'pl', 'fr', 'cs', 'de', 'sl', 'it'],
  defaultLocale: 'en',
});
