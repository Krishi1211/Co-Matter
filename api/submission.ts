import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createPool, Pool } from '@neondatabase/serverless';

// NOTE: Set `DATABASE_URL` in Vercel environment variables to your Neon connection string.
// If you want, you can also set `NEON_DATABASE_URL` and mirror it into `DATABASE_URL`.
function getPool(): Pool {
  const connectionString = process.env.DATABASE_URL ?? process.env.NEON_DATABASE_URL;
  if (!connectionString) {
    throw new Error('Missing DATABASE_URL / NEON_DATABASE_URL env var. Please set it in Vercel.');
  }
  return createPool(connectionString);
}

let pool: Pool | null = null;
function getOrCreatePool() {
  if (!pool) pool = getPool();
  return pool;
}

const CREATE_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS submissions (
  id BIGSERIAL PRIMARY KEY,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  country TEXT NOT NULL,
  job_title TEXT NOT NULL,
  subject TEXT NOT NULL,
  segment_interest TEXT[] NOT NULL,
  message TEXT NOT NULL,
  stay_in_touch BOOLEAN NOT NULL,
  privacy_acknowledged BOOLEAN NOT NULL
);
`;

async function ensureTableExists() {
  await getOrCreatePool().query(CREATE_TABLE_SQL);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body;

  const required = [
    'firstName',
    'lastName',
    'email',
    'company',
    'country',
    'jobTitle',
    'subject',
    'message',
    'privacyAcknowledged',
  ];

  const missing = required.filter((key) => body[key] === undefined || body[key] === null || body[key] === '');
  if (missing.length > 0) {
    return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}` });
  }

  try {
    await ensureTableExists();

    const segmentInterest = Array.isArray(body.segmentInterest)
      ? body.segmentInterest
      : typeof body.segmentInterest === 'string'
      ? body.segmentInterest.split(',').map((v) => v.trim())
      : [];

    await getOrCreatePool().query(
      `INSERT INTO submissions (
          first_name,
          last_name,
          email,
          company,
          country,
          job_title,
          subject,
          segment_interest,
          message,
          stay_in_touch,
          privacy_acknowledged
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        body.firstName,
        body.lastName,
        body.email,
        body.company,
        body.country,
        body.jobTitle,
        body.subject,
        segmentInterest,
        body.message,
        Boolean(body.stayInTouch),
        Boolean(body.privacyAcknowledged),
      ]
    );

    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error('submission error', error);
    return res.status(500).json({ error: 'Failed to save submission' });
  }
}
