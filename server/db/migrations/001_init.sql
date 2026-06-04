-- Staton weboldal — adatbázis séma / Datenbankschema
-- Idempotens: a szerver indításkor lefuttatja.

CREATE TABLE IF NOT EXISTS projects (
  id          SERIAL PRIMARY KEY,
  slug        TEXT NOT NULL UNIQUE,
  category    TEXT NOT NULL,            -- 'bridge' | 'rail' | 'infrastructure' | 'bim' | 'structural'
  title_hu    TEXT NOT NULL,
  title_de    TEXT NOT NULL,
  summary_hu  TEXT NOT NULL,
  summary_de  TEXT NOT NULL,
  location    TEXT NOT NULL,
  client      TEXT,
  year        INTEGER NOT NULL,
  scope_hu    TEXT,
  scope_de    TEXT,
  accent      TEXT NOT NULL DEFAULT '#DA4B1B',
  featured    BOOLEAN NOT NULL DEFAULT FALSE,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS projects_category_idx ON projects (category);
CREATE INDEX IF NOT EXISTS projects_sort_idx ON projects (sort_order DESC, year DESC);

CREATE TABLE IF NOT EXISTS contacts (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  company     TEXT,
  subject     TEXT,
  message     TEXT NOT NULL,
  locale      TEXT NOT NULL DEFAULT 'hu',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
