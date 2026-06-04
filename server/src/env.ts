import 'dotenv/config';

export const env = {
  databaseUrl:
    process.env.DATABASE_URL ??
    'postgres://staton:staton@localhost:5433/staton_web',
  port: Number(process.env.PORT ?? 4000),
  corsOrigin: (process.env.CORS_ORIGIN ?? 'http://localhost:5173')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
};
