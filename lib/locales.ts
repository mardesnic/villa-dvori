export const LOCALES = [
  { code: 'en', flag: '/images/flags/gb.svg', label: 'English' },
  { code: 'pl', flag: '/images/flags/pl.svg', label: 'Polski' },
  { code: 'cs', flag: '/images/flags/cz.svg', label: 'Čeština' },
  { code: 'hu', flag: '/images/flags/hu.svg', label: 'Magyar' },
  { code: 'de', flag: '/images/flags/de.svg', label: 'Deutsch' },
  { code: 'fr', flag: '/images/flags/fr.svg', label: 'Français' },
  { code: 'it', flag: '/images/flags/it.svg', label: 'Italiano' },
  { code: 'sl', flag: '/images/flags/si.svg', label: 'Slovenščina' },
  { code: 'hr', flag: '/images/flags/hr.svg', label: 'Hrvatski' },
] as const;

export type LocaleCode = (typeof LOCALES)[number]['code'];
