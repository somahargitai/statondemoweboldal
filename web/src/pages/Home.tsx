import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';
import { useReveal } from '../lib/useReveal';
import { useProjects } from '../components/useProjects';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { TrussGraphic } from '../components/TrussGraphic';
import './home.css';

const stats = [
  { value: '18+', key: 'stat1Label' as const },
  { value: '120', key: 'stat2Label' as const },
  { value: '24', key: 'stat3Label' as const },
];

function Hero() {
  const { t } = useI18n();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="eyebrow hero__eyebrow" variants={item}>
            {t.hero.tagline}
          </motion.span>
          <motion.h1 className="display hero__title" variants={item}>
            {t.hero.title1}
            <br />
            <span className="hero__title-accent">{t.hero.title2}</span>
          </motion.h1>
          <motion.p className="hero__lead" variants={item}>
            {t.hero.lead}
          </motion.p>
          <motion.div className="hero__actions" variants={item}>
            <Link to="/kapcsolat" className="btn">
              {t.hero.ctaPrimary} <span className="arrow">→</span>
            </Link>
            <Link to="/referenciak" className="btn btn--ghost">
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__panel-head mono">
            <span>FIG. 01 — TRAGWERK</span>
            <span>STATON</span>
          </div>
          <TrussGraphic className="hero__truss" />
          <div className="hero__panel-foot mono">
            <span>EC2 · ZTV-ING</span>
            <span>M 1:200</span>
          </div>
        </motion.div>
      </div>

      <div className="container hero__stats">
        {stats.map((s) => (
          <div key={s.key} className="hero__stat">
            <span className="hero__stat-value">{s.value}</span>
            <span className="hero__stat-label mono">{t.hero[s.key]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Intro() {
  const { t } = useI18n();
  const ref = useReveal();
  return (
    <section className="section section--dark intro" ref={ref}>
      <div className="container intro__inner">
        <span className="eyebrow reveal">{t.intro.eyebrow}</span>
        <h2 className="intro__heading reveal">{t.intro.heading}</h2>
        <p className="intro__body reveal">{t.intro.body}</p>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const { t } = useI18n();
  const ref = useReveal();
  return (
    <section className="section services" ref={ref} id="szolgaltatasok">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="section-head__title">{t.services.heading}</h2>
        </div>
        <div className="services__grid">
          {t.services.items.map((s) => (
            <ServiceCard key={s.key} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const { t } = useI18n();
  const { projects, status } = useProjects();
  const ref = useReveal(90, status);
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="section section--projects" ref={ref}>
      <div className="container">
        <div className="section-head section-head--row reveal">
          <div>
            <span className="eyebrow">{t.projects.eyebrow}</span>
            <h2 className="section-head__title">{t.projects.heading}</h2>
          </div>
          <Link to="/referenciak" className="btn btn--ghost section-head__link">
            {t.projects.viewAll} <span className="arrow">→</span>
          </Link>
        </div>

        {status === 'loading' && <p className="projects__note mono">{t.projects.loading}</p>}
        {status === 'error' && <p className="projects__note mono">{t.projects.error}</p>}
        {status === 'ready' && (
          <div className="projects__grid projects__grid--featured">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CtaBand() {
  const { t } = useI18n();
  const ref = useReveal();
  return (
    <section className="section--dark cta-band" ref={ref}>
      <div className="container cta-band__inner reveal">
        <h2 className="cta-band__title">{t.contact.heading}</h2>
        <Link to="/kapcsolat" className="btn">
          {t.nav.cta} <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesPreview />
      <FeaturedProjects />
      <CtaBand />
    </>
  );
}
