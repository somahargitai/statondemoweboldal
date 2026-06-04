import express from 'express';
import cors from 'cors';
import { env } from './env.js';
import { initDb, waitForDb, pool } from './db.js';
import { projectsRouter } from './routes/projects.js';
import { contactRouter } from './routes/contact.js';

const app = express();

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json({ limit: '64kb' }));

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok' });
  } catch {
    res.status(503).json({ status: 'db_unavailable' });
  }
});

app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);

async function main() {
  await waitForDb();
  await initDb();
  console.log('[db] ready & seeded');
  app.listen(env.port, () => {
    console.log(`[staton] API listening on http://localhost:${env.port}`);
  });
}

main().catch((err) => {
  console.error('[staton] fatal startup error', err);
  process.exit(1);
});
