# Co▪Matter

This is a code bundle for Co▪Matter.

## Running locally

1. Install dependencies:

```bash
npm install
```

2. Start the backend (local -> saves to `submissions.xlsx`):

```bash
npm run serve
```

3. Start the frontend:

```bash
npm run dev
```

Then open http://localhost:5173 and submit the contact form.

## Deploying to Vercel (Neon Postgres backend)

This project deploys as a static site with a serverless function (`/api/submission`) that writes submissions into a Neon Postgres database.

### 1) Create a Neon Project

- Create a Neon project at https://neon.tech/
- Copy the Postgres connection string (starts with `postgresql://`).

### 2) Set up Vercel

- Push this repo to GitHub.
- Create a new Vercel project from the repo.

### 3) Set the Environment Variable

In the Vercel dashboard, set:

- `DATABASE_URL` = your Neon Postgres connection string

### 4) Deploy

Vercel will build the site and the form will post to `/api/submission`.
