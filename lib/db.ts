import { Pool } from "pg";

// Next.js hot-reloads modules in dev; without a global handle we would leak a
// new pool on every reload until Postgres refuses connections.
const globalForPool = globalThis as unknown as { waitlistPool?: Pool };

export function getPool(): Pool | null {
  if (!process.env.DATABASE_URL) return null;

  if (!globalForPool.waitlistPool) {
    globalForPool.waitlistPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      // Hosted Postgres (Vercel/Neon) requires TLS; local Postgres generally
      // has no cert, so only ask for SSL when the URL isn't localhost.
      ssl: /localhost|127\.0\.0\.1/.test(process.env.DATABASE_URL)
        ? undefined
        : { rejectUnauthorized: false },
    });
  }

  return globalForPool.waitlistPool;
}
