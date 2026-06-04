import { useState, type FormEvent } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { PageHero } from '../components/PageHero';
import { submitContact } from '../lib/api';
import './contact.css';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const { t, lang } = useI18n();
  const [state, setState] = useState<SubmitState>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      company: String(data.get('company') ?? '').trim(),
      subject: String(data.get('subject') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
      locale: lang,
    };

    // client-side mirror of the server validation
    const errs: Record<string, string> = {};
    if (!payload.name) errs.name = t.contact.required;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errs.email = t.contact.invalidEmail;
    if (!payload.message) errs.message = t.contact.required;
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      setState('idle');
      return;
    }

    setFieldErrors({});
    setState('sending');
    try {
      const result = await submitContact(payload);
      if (result.ok) {
        setState('success');
        form.reset();
      } else {
        setFieldErrors(result.fields ?? {});
        setState('idle');
      }
    } catch {
      setState('error');
    }
  }

  return (
    <>
      <PageHero
        index="// 04"
        eyebrow={t.contact.eyebrow}
        title={t.contact.heading}
        lead={t.contact.lead}
      />

      <section className="section contact">
        <div className="container contact__inner">
          <div className="contact__form-wrap">
            {state === 'success' ? (
              <div className="contact__success" role="status">
                <span className="contact__success-mark">✓</span>
                <p>{t.contact.success}</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={onSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">{t.contact.name} *</label>
                  <input id="name" name="name" type="text" autoComplete="name" />
                  {fieldErrors.name && <span className="field__error">{t.contact.required}</span>}
                </div>

                <div className="field">
                  <label htmlFor="email">{t.contact.email} *</label>
                  <input id="email" name="email" type="email" autoComplete="email" />
                  {fieldErrors.email && (
                    <span className="field__error">{t.contact.invalidEmail}</span>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="company">{t.contact.company}</label>
                  <input id="company" name="company" type="text" autoComplete="organization" />
                </div>

                <div className="field">
                  <label htmlFor="subject">{t.contact.subject}</label>
                  <input id="subject" name="subject" type="text" />
                </div>

                <div className="field">
                  <label htmlFor="message">{t.contact.message} *</label>
                  <textarea id="message" name="message" rows={6} />
                  {fieldErrors.message && (
                    <span className="field__error">{t.contact.required}</span>
                  )}
                </div>

                {state === 'error' && (
                  <p className="contact__form-error">{t.contact.errorGeneric}</p>
                )}

                <button type="submit" className="btn" disabled={state === 'sending'}>
                  {state === 'sending' ? t.contact.sending : t.contact.submit}
                  <span className="arrow">→</span>
                </button>
              </form>
            )}
          </div>

          <aside className="contact__aside">
            <div className="contact__info">
              <span className="contact__info-label mono">{t.contact.officeLabel}</span>
              <p>STATON Ingenieure<br />Friedrichstraße 12<br />10117 Berlin, DE</p>
            </div>
            <div className="contact__info">
              <span className="contact__info-label mono">{t.contact.emailLabel}</span>
              <a href="mailto:info@staton.eu">info@staton.eu</a>
            </div>
            <div className="contact__info">
              <span className="contact__info-label mono">{t.contact.phoneLabel}</span>
              <a href="tel:+4915112345678">+49 151 1234 5678</a>
            </div>
            <div className="contact__map" aria-hidden="true">
              <svg viewBox="0 0 320 200" fill="none">
                <rect width="320" height="200" fill="var(--paper-2)" />
                <path d="M0 70 H320 M0 130 H320 M90 0 V200 M210 0 V200" stroke="var(--line)" strokeWidth="1.4" />
                <path d="M0 100 L110 70 L210 130 L320 95" stroke="var(--accent)" strokeWidth="2" strokeDasharray="5 5" />
                <circle cx="150" cy="100" r="7" fill="var(--accent)" />
                <circle cx="150" cy="100" r="14" stroke="var(--accent)" strokeWidth="1.4" opacity="0.5" />
              </svg>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
