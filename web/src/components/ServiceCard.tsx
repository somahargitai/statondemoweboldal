import type { ServiceCopy } from '../i18n/translations';

export function ServiceCard({ service }: { service: ServiceCopy }) {
  return (
    <article className="service-card reveal">
      <div className="service-card__top">
        <span className="service-card__num mono">{service.num}</span>
        <span className="service-card__plus" aria-hidden="true">+</span>
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__body">{service.body}</p>
      <ul className="service-card__tags">
        {service.tags.map((tag) => (
          <li key={tag} className="mono">{tag}</li>
        ))}
      </ul>
    </article>
  );
}
