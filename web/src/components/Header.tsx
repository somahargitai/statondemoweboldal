import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
    { to: '/szolgaltatasok', label: t.nav.services },
    { to: '/referenciak', label: t.nav.projects },
    { to: '/rolunk', label: t.nav.about },
    { to: '/kapcsolat', label: t.nav.contact },
  ];

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner container">
        <Link to="/" className="site-header__brand" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="site-header__nav" aria-label="Fő navigáció">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `site-header__link ${isActive ? 'is-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageToggle />
          <Link to="/kapcsolat" className="btn site-header__cta">
            {t.nav.cta}
          </Link>
          <button
            type="button"
            className={`site-header__burger ${open ? 'is-open' : ''}`}
            aria-label="Menü"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <div className={`mobile-nav ${open ? 'is-open' : ''}`}>
        <nav className="mobile-nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="mobile-nav__link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-nav__footer">
          <LanguageToggle />
          <Link to="/kapcsolat" className="btn" onClick={() => setOpen(false)}>
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
