'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, Check, ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = newLocale === 'en' 
      ? pathnameWithoutLocale 
      : `/${newLocale}${pathnameWithoutLocale}`;
    
    router.push(newPath);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'es', name: 'ES', flag: '🇪🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-md bg-white transition"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLanguage?.flag} {currentLanguage?.name}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center gap-2"
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
                {locale === lang.code && <Check className="ml-auto h-4 w-4 text-blue-700" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
