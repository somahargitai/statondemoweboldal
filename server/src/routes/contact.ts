import { Router } from 'express';
import { pool } from '../db.js';

export const contactRouter = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

contactRouter.post('/', async (req, res) => {
  const body = req.body ?? {};

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const message = str(body.message, 4000);
  const company = typeof body.company === 'string' ? body.company.trim().slice(0, 160) : null;
  const subject = typeof body.subject === 'string' ? body.subject.trim().slice(0, 200) : null;
  const locale = body.locale === 'de' ? 'de' : 'hu';

  const errors: Record<string, string> = {};
  if (!name) errors.name = 'required';
  if (!email || !EMAIL_RE.test(email)) errors.email = 'invalid';
  if (!message) errors.message = 'required';

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({ error: 'validation', fields: errors });
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO contacts (name, email, company, subject, message, locale)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, created_at`,
      [name, email, company || null, subject || null, message, locale],
    );
    res.status(201).json({ ok: true, id: rows[0].id });
  } catch (err) {
    console.error('[contact] insert failed', err);
    res.status(500).json({ error: 'internal error' });
  }
});
