import { Pool } from "pg";

// Next.js hot-reloads modules in dev; without a global handle we would leak a
// new pool on every reload until Postgres refuses connections.
const globalForPool = globalThis as unknown as { waitlistPool?: Pool };

// DATABASE_URL is the name the spec calls for and the one we prefer. The others
// are what Vercel's storage integrations actually inject depending on the
// prefix chosen when the database is connected — without them a mis-picked
// prefix silently falls back to not persisting anything.
function connectionString(): string | undefined {
  return (
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.STORAGE_URL ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL_NON_POOLING ||
    undefined
  );
}

export function getPool(): Pool | null {
  const url = connectionString();
  if (!url) return null;

  if (!globalForPool.waitlistPool) {
    globalForPool.waitlistPool = new Pool({
      connectionString: url,
      // Hosted Postgres (Vercel/Neon) requires TLS; local Postgres generally
      // has no cert, so only ask for SSL when the URL isn't localhost.
      ssl: /localhost|127\.0\.0\.1/.test(url)
        ? undefined
        : { rejectUnauthorized: false },
    });
  }

  return globalForPool.waitlistPool;
}
