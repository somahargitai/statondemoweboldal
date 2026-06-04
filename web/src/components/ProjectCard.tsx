import { useI18n } from '../i18n/I18nContext';
import type { Project } from '../lib/api';

/** Distinct line-pattern per category, drawn in the project's accent colour. */
function CategoryArt({ category, accent }: { category: Project['category']; accent: string }) {
  return (
    <svg className="project-card__art" viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <rect width="320" height="200" fill={accent} />
      <g stroke="rgba(255,255,255,0.85)" strokeWidth="1.6" fill="none">
        {category === 'bridge' && (
          <>
            <path d="M0 150 H320" />
            <path d="M40 150 L90 90 L140 150 L190 90 L240 150 L290 90" />
            {[40, 90, 140, 190, 240, 290].map((x) => (
              <line key={x} x1={x} y1="90" x2={x} y2="150" opacity="0.6" />
            ))}
          </>
        )}
        {category === 'rail' && (
          <>
            <path d="M30 40 L150 170 M70 40 L190 170 M110 40 L230 170 M150 40 L270 170 M190 40 L310 170" opacity="0.8" />
            <path d="M0 80 H320 M0 130 H320" strokeWidth="2.4" />
          </>
        )}
        {category === 'structural' && (
          <>
            <rect x="60" y="40" width="200" height="120" />
            <path d="M60 40 L260 160 M260 40 L60 160 M160 40 V160 M60 100 H260" opacity="0.55" />
          </>
        )}
        {category === 'bim' && (
          <>
            <path d="M100 50 L220 50 L260 90 L140 90 Z" />
            <path d="M100 50 L100 150 L140 190 L140 90 M220 50 L220 150 L140 190 M260 90 L260 150 L140 190" opacity="0.6" />
          </>
        )}
        {category === 'infrastructure' && (
          <>
            <path d="M0 120 H320" strokeWidth="2.4" />
            <path d="M40 120 V70 H80 V120 M120 120 V60 H160 V120 M200 120 V80 H240 V120 M280 120 V65 H310" />
            <path d="M0 150 H320" opacity="0.5" strokeDasharray="6 6" />
          </>
        )}
      </g>
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useI18n();
  const title = lang === 'de' ? project.title_de : project.title_hu;
  const summary = lang === 'de' ? project.summary_de : project.summary_hu;
  const scope = lang === 'de' ? project.scope_de : project.scope_hu;
  const categoryLabel = t.projects.filters[project.category] ?? project.category;

  return (
    <article className="project-card reveal">
      <div className="project-card__media">
        <CategoryArt category={project.category} accent={project.accent} />
        <span className="project-card__badge mono">{categoryLabel}</span>
        <span className="project-card__year mono">{project.year}</span>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__summary">{summary}</p>
        <dl className="project-card__meta">
          <div>
            <dt className="mono">{t.projects.locationLabel}</dt>
            <dd>{project.location}</dd>
          </div>
          {project.client && (
            <div>
              <dt className="mono">{t.projects.clientLabel}</dt>
              <dd>{project.client}</dd>
            </div>
          )}
          {scope && (
            <div className="project-card__scope">
              <dt className="mono">{t.projects.scopeLabel}</dt>
              <dd>{scope}</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
