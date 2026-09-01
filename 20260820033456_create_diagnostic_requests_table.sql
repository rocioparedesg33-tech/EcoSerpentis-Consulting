/*
# Create diagnostic_requests table (single-tenant, no auth)

1. New Tables
- `diagnostic_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the requester
  - `email` (text, not null) — corporate email
  - `company` (text, not null) — company name
  - `sector` (text, not null) — selected industry sector
  - `message` (text) — optional message/details
  - `status` (text, default 'pending') — processing status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `diagnostic_requests`.
- Allow anon + authenticated INSERT only (public form submission).
- No SELECT/UPDATE/DELETE for anon (data is private to operators).
*/

CREATE TABLE IF NOT EXISTS diagnostic_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  sector text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE diagnostic_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_diagnostic_requests" ON diagnostic_requests;
CREATE POLICY "anon_insert_diagnostic_requests"
ON diagnostic_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);