import { getPool } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Used only when DATABASE_URL is unset, so local development still produces a
// sensible position number instead of always saying "number 1".
const devSignups = new Set<string>();

export async function POST(request: Request) {
  let email: unknown;

  try {
    ({ email } = await request.json());
  } catch {
    return Response.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return Response.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const normalized = email.trim().toLowerCase();
  const pool = getPool();

  // No database yet (local development): log and succeed so the page still
  // works end to end.
  if (!pool) {
    const alreadyOnList = devSignups.has(normalized);
    devSignups.add(normalized);
    console.log(`[waitlist] signup (no DATABASE_URL set): ${normalized}`);

    return Response.json({
      ok: true,
      alreadyOnList,
      position: devSignups.size,
      message: alreadyOnList
        ? "You're already on the list."
        : "You're on the list.",
    });
  }

  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS waitlist_signups (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `);

    const inserted = await pool.query(
      `INSERT INTO waitlist_signups (email)
       VALUES ($1)
       ON CONFLICT (email) DO NOTHING
       RETURNING id`,
      [normalized],
    );

    // No row returned means the email was already present.
    const alreadyOnList = inserted.rowCount === 0;

    const counted = await pool.query<{ count: string }>(
      "SELECT COUNT(*) AS count FROM waitlist_signups",
    );

    return Response.json({
      ok: true,
      alreadyOnList,
      position: Number(counted.rows[0].count),
      message: alreadyOnList
        ? "You're already on the list."
        : "You're on the list.",
    });
  } catch (error) {
    console.error("[waitlist] signup failed:", error);
    return Response.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
