import { useI18n } from '../i18n/I18nContext';
import type { Lang } from '../i18n/translations';

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const langs: Lang[] = ['hu', 'de'];

  return (
    <div className={`lang-toggle ${className ?? ''}`} role="group" aria-label="Language">
      {langs.map((l) => (
        <button
          key={l}
          type="button"
          className={`lang-toggle__btn ${lang === l ? 'is-active' : ''}`}
          aria-pressed={lang === l}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
