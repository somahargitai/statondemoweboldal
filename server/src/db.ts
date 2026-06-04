import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import pg from 'pg';
import { env } from './env.js';

const { Pool } = pg;

export const pool = new Pool({ connectionString: env.databaseUrl });

const __dirname = dirname(fileURLToPath(import.meta.url));
// src/ at dev (tsx) and dist/ at runtime both sit one level below the package root.
const dbDir = resolve(__dirname, '..', 'db');

/**
 * Apply the schema and seed on startup. Both scripts are idempotent, so this is
 * safe to run on every boot — no separate migration step needed for this site.
 */
export async function initDb(): Promise<void> {
  const schema = await readFile(resolve(dbDir, 'migrations', '001_init.sql'), 'utf8');
  const seed = await readFile(resolve(dbDir, 'seed.sql'), 'utf8');
  await pool.query(schema);
  await pool.query(seed);
}

/** Retry the first connection a few times so `docker compose up` race conditions resolve. */
export async function waitForDb(retries = 10, delayMs = 1500): Promise<void> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await pool.query('SELECT 1');
      return;
    } catch (err) {
      if (attempt === retries) throw err;
      console.warn(`[db] not ready (attempt ${attempt}/${retries}), retrying…`);
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
}
