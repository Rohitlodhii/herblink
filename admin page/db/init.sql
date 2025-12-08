-- Run this to create the registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  location TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Insert sample rows
INSERT INTO registrations (type, name, email, location, status)
VALUES
('producer', 'Green Valley Produce', 'contact@greenvalley.example', 'Iowa, USA', 'pending'),
('farmer', 'Miguel Santos', 'miguel@farm.example', 'Co. Cork, Ireland', 'pending'),
('manufacturer', 'TasteTech Foods', 'hello@tastetech.example', 'Berlin, Germany', 'approved'),
('laborator', 'LabCheck Ltd', 'info@labcheck.example', 'Delhi, India', 'pending');

-- Complaints table for admin to review and resolve
CREATE TABLE IF NOT EXISTS complaints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_number TEXT NOT NULL UNIQUE,
  category TEXT,
  description TEXT NOT NULL,
  reporter_name TEXT,
  reporter_contact TEXT,
  resolved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
