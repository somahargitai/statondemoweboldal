import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { useReveal } from '../lib/useReveal';
import { PageHero } from '../components/PageHero';
import './about.css';

export function About() {
  const { t } = useI18n();
  const ref = useReveal();

  return (
    <>
      <PageHero index="// 03" eyebrow={t.about.eyebrow} title={t.about.heading} />

      <section className="section" ref={ref}>
        <div className="container about__body">
          <div className="about__text reveal">
            <p>{t.about.body1}</p>
            <p>{t.about.body2}</p>
          </div>
          <aside className="about__aside reveal">
            <div className="about__spec mono">
              <span>EST.</span>
              <span>2007</span>
            </div>
            <div className="about__spec mono">
              <span>HQ</span>
              <span>Berlin · Budapest</span>
            </div>
            <div className="about__spec mono">
              <span>NORM</span>
              <span>EC0–EC8 · BASt · Ril</span>
            </div>
            <div className="about__spec mono">
              <span>BIM</span>
              <span>Revit · SOFiSTiK</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--projects">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t.about.valuesHeading}</span>
          </div>
          <div className="values__grid">
            {t.about.values.map((v, i) => (
              <article key={v.title} className="value-card">
                <span className="value-card__num mono">0{i + 1}</span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__body">{v.body}</p>
              </article>
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
