# Complaint API

This document explains how to use the Complaint endpoints added to the backend.

## Model

Prisma model `Complaint`:
- `id` (string, uuid, primary key)
- `name` (string, required)
- `complaintType` (string, required)
- `complaintImage` (string, optional)
- `description` (string, optional)
- `createdAt` / `updatedAt` (timestamps)

## Routes

Base: `/complaints` (prefixed by the API base, e.g. `/api/complaints` if `apiRouter` is mounted at `/api`).

- `POST /complaints` — create a complaint  
  Body (JSON):
  ```json
  {
    "name": "John Doe",
    "complaintType": "Delay",
    "complaintImage": "https://example.com/image.jpg",
    "description": "Package arrived late"
  }
  ```
  Responses:
  - `201` with `{ success, message, data }` on success
  - `400` if `name` or `complaintType` is missing

- `GET /complaints` — list complaints (newest first)  
  Responses:
  - `200` with `{ success, count, data }`

- `GET /complaints/:id` — fetch a single complaint by id  
  Responses:
  - `200` with `{ success, data }`
  - `404` if not found

## Setup

1) Ensure the Prisma schema has the `Complaint` model (already added in `prisma/schema.prisma`).  
2) Regenerate the client after schema changes:  
   ```bash
   npx prisma generate
   ```  
   (or run `npx prisma migrate dev --name add_complaint` if you still need to apply the migration to your DB).

## Files touched
- `prisma/schema.prisma` — `Complaint` model
- `src/controllers/complaint/complaint.controller.ts` — handlers
- `src/routes/complaint.route.ts` — router
- `src/routes/route.ts` — router registration

