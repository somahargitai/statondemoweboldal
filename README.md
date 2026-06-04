# STATON — weboldal

Kétnyelvű (HU/DE) bemutatkozó weboldal a STATON szerkezetépítő mérnökirodának.
Hidak, vasúti műtárgyak, BIM és mélyépítés — referenciákkal és kapcsolati űrlappal.

> Zweisprachige (HU/DE) Website für das Ingenieurbüro STATON.

## Technológia

| Réteg     | Stack |
| --------- | ----- |
| Frontend  | **React 18 + Vite 6 + TypeScript**, React Router, Framer Motion |
| Backend   | **Express + TypeScript** (`tsx`), node-postgres |
| Adatbázis | **PostgreSQL 16** (Docker) |

```
statonweboldal/
├── web/                # Vite + React + TS frontend
│   └── src/
│       ├── components/ # Header, Footer, kártyák, grafikák
│       ├── pages/      # Home, Services, Projects, About, Contact
│       ├── i18n/       # HU/DE szótár + context
│       ├── lib/        # API-kliens, reveal hook
│       └── styles/     # design system + komponens-stílusok
├── server/             # Express API
│   ├── src/            # index, db, routes (projects, contact)
│   └── db/             # 001_init.sql séma + seed.sql
└── docker-compose.yml  # PostgreSQL
```

## Indítás

Előfeltétel: **Node 20+**, **Docker Desktop** (fusson).

```bash
# 1. Függőségek (gyökérből, npm workspaces)
npm install

# 2. Backend env
cp server/.env.example server/.env      # PowerShell: Copy-Item server/.env.example server/.env

# 3. Postgres indítása (localhost:5433)
npm run db:up

# 4. Frontend + backend egyszerre
npm run dev
```

- Frontend: <http://localhost:5173>
- API:      <http://localhost:4000/api/health>

A szerver induláskor **automatikusan létrehozza a sémát és feltölti a
referencia-projekteket** (`001_init.sql` + `seed.sql`, idempotens) — külön
migrációs lépés nem kell.

## API

| Metódus | Útvonal | Leírás |
| ------- | ------- | ------ |
| `GET`  | `/api/health` | Állapot + DB-kapcsolat. |
| `GET`  | `/api/projects` | Összes projekt. Szűrés: `?category=bridge\|rail\|structural\|bim\|infrastructure`. |
| `GET`  | `/api/projects/:slug` | Egy projekt. |
| `POST` | `/api/contact` | Kapcsolati űrlap mentése. Validál (`name`, `email`, `message`). |

Dev közben a Vite a `/api`-t a `:4000` backendre proxyzza, így a böngésző
mindig azonos eredetű kéréseket lát.

## Hasznos scriptek

| Parancs | Mit csinál |
| ------- | ---------- |
| `npm run dev`        | Backend + frontend párhuzamosan. |
| `npm run dev:web`    | Csak a Vite dev szerver. |
| `npm run dev:server` | Csak az Express API (watch). |
| `npm run build`      | Mindkét workspace production buildje. |
| `npm run typecheck`  | Szigorú TypeScript ellenőrzés mindkét oldalon. |
| `npm run db:up` / `db:down` / `db:logs` | Postgres kezelése. |

## Tartalom szerkesztése

- **Szövegek (HU/DE):** `web/src/i18n/translations.ts`
- **Referencia-projektek:** `server/db/seed.sql` — mentés után `npm run db:up`
  újraindításakor (vagy a szerver újraindításakor) frissül (idempotens `ON CONFLICT`).
- **Színek / tipográfia:** `web/src/index.css` (`:root` változók).

## Production build

```bash
npm run build                 # web → web/dist, server → server/dist
npm --workspace server start  # node dist/index.js (a web/dist-et bármilyen statikus szerver szolgálhatja)
```
