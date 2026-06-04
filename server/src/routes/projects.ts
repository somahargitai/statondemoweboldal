import { Router } from 'express';
import { pool } from '../db.js';

export const projectsRouter = Router();

const CATEGORIES = ['bridge', 'rail', 'infrastructure', 'bim', 'structural'];

projectsRouter.get('/', async (req, res) => {
  const { category } = req.query;
  try {
    if (typeof category === 'string' && category !== 'all') {
      if (!CATEGORIES.includes(category)) {
        return res.status(400).json({ error: 'unknown category' });
      }
      const { rows } = await pool.query(
        `SELECT * FROM projects WHERE category = $1 ORDER BY sort_order DESC, year DESC`,
        [category],
      );
      return res.json(rows);
    }
    const { rows } = await pool.query(
      `SELECT * FROM projects ORDER BY sort_order DESC, year DESC`,
    );
    res.json(rows);
  } catch (err) {
    console.error('[projects] query failed', err);
    res.status(500).json({ error: 'internal error' });
  }
});

projectsRouter.get('/:slug', async (req, res) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM projects WHERE slug = $1`, [
      req.params.slug,
    ]);
    if (rows.length === 0) return res.status(404).json({ error: 'not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error('[projects] query failed', err);
    res.status(500).json({ error: 'internal error' });
  }
});
