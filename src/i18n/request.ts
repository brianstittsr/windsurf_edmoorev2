import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'es'];

export default getRequestConfig(async () => {
  // Default to 'en' locale - can be enhanced to detect from headers/cookies
  const locale = 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
