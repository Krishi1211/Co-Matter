import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import XLSX from 'xlsx';
import { Pool } from '@neondatabase/serverless';

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

const neonPool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;

app.use(cors());
app.use(express.json());

const EXCEL_FILENAME = 'submissions.xlsx';
const SHEET_NAME = 'Submissions';

function buildHeaderRow() {
  return [
    'Timestamp',
    'First Name',
    'Last Name',
    'Email',
    'Company',
    'Country',
    'Job Title',
    'Subject',
    'Segment Interest',
    'Message',
    'Stay in Touch',
    'Privacy Acknowledged',
  ];
}

function buildRow(data) {
  return [
    new Date().toISOString(),
    data.firstName ?? '',
    data.lastName ?? '',
    data.email ?? '',
    data.company ?? '',
    data.country ?? '',
    data.jobTitle ?? '',
    data.subject ?? '',
    Array.isArray(data.segmentInterest) ? data.segmentInterest.join(', ') : data.segmentInterest ?? '',
    data.message ?? '',
    data.stayInTouch ? 'Yes' : 'No',
    data.privacyAcknowledged ? 'Yes' : 'No',
  ];
}

async function ensureWorkbook(filePath) {
  const headers = buildHeaderRow();

  try {
    const file = await fs.readFile(filePath);
    const workbook = XLSX.read(file, { type: 'buffer' });
    const sheet = workbook.Sheets[SHEET_NAME] ?? workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });

    // Ensure headers exist
    if (rows.length === 0 || rows[0]?.[0] !== headers[0]) {
      rows.unshift(headers);
      const newSheet = XLSX.utils.aoa_to_sheet(rows);
      workbook.Sheets[SHEET_NAME] = newSheet;
      if (!workbook.SheetNames.includes(SHEET_NAME)) {
        workbook.SheetNames.push(SHEET_NAME);
      }
      XLSX.writeFile(workbook, filePath);
    }

    return workbook;
  } catch (err) {
    // File doesn't exist or can't be read; create new workbook
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.aoa_to_sheet([headers]);
    XLSX.utils.book_append_sheet(workbook, sheet, SHEET_NAME);
    XLSX.writeFile(workbook, filePath);
    return workbook;
  }
}

async function ensureNeonTableExists() {
  if (!neonPool) return;

  await neonPool.query(`
    CREATE TABLE IF NOT EXISTS submissions (
      id BIGSERIAL PRIMARY KEY,
      submitted_at timestamptz NOT NULL DEFAULT now(),
      first_name text NOT NULL,
      last_name text NOT NULL,
      email text NOT NULL,
      company text NOT NULL,
      country text NOT NULL,
      job_title text NOT NULL,
      subject text NOT NULL,
      segment_interest text[] NOT NULL,
      message text NOT NULL,
      stay_in_touch boolean NOT NULL,
      privacy_acknowledged boolean NOT NULL
    );
  `);
}

async function appendSubmission(data) {
  if (neonPool) {
    await ensureNeonTableExists();

    const segmentInterest = Array.isArray(data.segmentInterest)
      ? data.segmentInterest
      : typeof data.segmentInterest === 'string'
      ? data.segmentInterest.split(',').map((v) => v.trim())
      : [];

    await neonPool.query(
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
        data.firstName,
        data.lastName,
        data.email,
        data.company,
        data.country,
        data.jobTitle,
        data.subject,
        segmentInterest,
        data.message,
        Boolean(data.stayInTouch),
        Boolean(data.privacyAcknowledged),
      ]
    );

    return;
  }

  const filePath = path.resolve(process.cwd(), EXCEL_FILENAME);
  const workbook = await ensureWorkbook(filePath);

  const sheet = workbook.Sheets[SHEET_NAME] ?? workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  const row = buildRow(data);

  rows.push(row);

  const newSheet = XLSX.utils.aoa_to_sheet(rows);
  workbook.Sheets[SHEET_NAME] = newSheet;
  if (!workbook.SheetNames.includes(SHEET_NAME)) {
    workbook.SheetNames.push(SHEET_NAME);
  }

  XLSX.writeFile(workbook, filePath);
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/submission', async (req, res) => {
  try {
    const body = req.body;

    // Basic server-side validation for required fields
    const required = ['firstName', 'lastName', 'email', 'company', 'country', 'jobTitle', 'subject', 'message', 'privacyAcknowledged'];
    const missing = required.filter((key) => body[key] === undefined || body[key] === null || body[key] === '');
    if (missing.length > 0) {
      return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}` });
    }

    await appendSubmission(body);

    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error('Failed to save submission', error);
    return res.status(500).json({ error: 'Failed to save submission' });
  }
});

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend server listening on http://localhost:${PORT}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    // eslint-disable-next-line no-console
    console.error(`Port ${PORT} is already in use. If you have another server running, stop it or set PORT to a different value.`);
  } else {
    // eslint-disable-next-line no-console
    console.error('Server error:', error);
  }
  process.exit(1);
});
