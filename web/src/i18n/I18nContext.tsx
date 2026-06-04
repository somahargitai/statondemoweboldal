import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { dict, type Dictionary, type Lang } from './translations';

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = 'staton.lang';

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'hu';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'hu' || stored === 'de') return stored;
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'hu';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, t: dict[lang] }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
