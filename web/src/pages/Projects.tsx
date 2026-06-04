import { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { useReveal } from '../lib/useReveal';
import { useProjects } from '../components/useProjects';
import { PageHero } from '../components/PageHero';
import { ProjectCard } from '../components/ProjectCard';

const FILTERS = ['all', 'bridge', 'rail', 'structural', 'bim', 'infrastructure'] as const;
type Filter = (typeof FILTERS)[number];

/** Keyed by category so the reveal observer re-scans on every filter change. */
function ProjectGrid({ category }: { category: Filter }) {
  const { t } = useI18n();
  const { projects, status } = useProjects(category);
  const ref = useReveal(70, status);

  if (status === 'loading') return <p className="projects__note mono">{t.projects.loading}</p>;
  if (status === 'error') return <p className="projects__note mono">{t.projects.error}</p>;
  if (projects.length === 0) return <p className="projects__note mono">{t.projects.empty}</p>;

  return (
    <div className="projects__grid" ref={ref}>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}

export function Projects() {
  const { t } = useI18n();
  const [active, setActive] = useState<Filter>('all');

  return (
    <>
      <PageHero
        index="// 02"
        eyebrow={t.projects.eyebrow}
        title={t.projects.heading}
        lead={t.projects.lead}
      />
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`filter-bar__btn mono ${active === f ? 'is-active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f === 'all' ? t.projects.all : t.projects.filters[f]}
              </button>
            ))}
          </div>
          <ProjectGrid key={active} category={active} />
        </div>
      </section>
    </>
  );
}
