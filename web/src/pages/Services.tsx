import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { useReveal } from '../lib/useReveal';
import { PageHero } from '../components/PageHero';
import { ServiceCard } from '../components/ServiceCard';

export function Services() {
  const { t } = useI18n();
  const ref = useReveal();

  return (
    <>
      <PageHero
        index="// 01"
        eyebrow={t.services.eyebrow}
        title={t.services.heading}
        lead={t.intro.body}
      />
      <section className="section" ref={ref}>
        <div className="container">
          <div className="services__grid">
            {t.services.items.map((s) => (
              <ServiceCard key={s.key} service={s} />
            ))}
          </div>
        </div>
      </section>
      <section className="section--dark cta-band">
        <div className="container cta-band__inner">
          <h2 className="cta-band__title">{t.contact.heading}</h2>
          <Link to="/kapcsolat" className="btn">
            {t.nav.cta} <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
