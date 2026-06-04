import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { Logo } from './Logo';

export function Footer() {
  const { t } = useI18n();
  const year = 2026;

  return (
    <footer className="site-footer section--dark">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Logo />
          <p className="site-footer__blurb">{t.footer.blurb}</p>
        </div>

        <div className="site-footer__col">
          <h4 className="site-footer__heading mono">{t.footer.nav}</h4>
          <Link to="/szolgaltatasok">{t.nav.services}</Link>
          <Link to="/referenciak">{t.nav.projects}</Link>
          <Link to="/rolunk">{t.nav.about}</Link>
          <Link to="/kapcsolat">{t.nav.contact}</Link>
        </div>

        <div className="site-footer__col">
          <h4 className="site-footer__heading mono">{t.footer.contact}</h4>
          <a href="mailto:info@staton.eu">info@staton.eu</a>
          <a href="tel:+4915112345678">+49 151 1234 5678</a>
          <span>Berlin · Budapest</span>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span className="mono">© {year} STATON — {t.footer.rights}</span>
        <span className="mono">{t.footer.madeIn}</span>
      </div>
    </footer>
  );
}
