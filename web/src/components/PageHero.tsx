import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead?: string;
  index: string;
}

export function PageHero({ eyebrow, title, lead, index }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="container page-hero__inner">
        <span className="page-hero__index mono">{index}</span>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="page-hero__title display">{title}</h1>
          {lead && <p className="page-hero__lead">{lead}</p>}
        </motion.div>
      </div>
    </section>
  );
}
