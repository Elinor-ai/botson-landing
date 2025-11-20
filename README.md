# Botson AI Landing Page

Marketing site for Botson AI, built with Next.js (App Router) and Tailwind CSS. The contact form uses a server action with Nodemailer (Gmail SMTP) to deliver messages.

## Quick Start
- Requires Node.js 18+ and npm.
- Install dependencies: `npm install`
- Create `.env.local` (see Environment below).
- Run locally: `npm run dev` then open http://localhost:3000

## Environment
Create a `.env.local` file in the project root:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

Gmail App Password steps (required; a normal password will not work):
1) In your Google Account, enable 2-Step Verification.
2) In Security settings, open “App passwords”, create a new password (name it e.g. "Botson Site"), and copy the 16-character code.
3) Use that code (with or without spaces) as `EMAIL_PASS`.

Security note: never commit `.env.local` to version control.

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – run the built app
- `npm run lint` – lint the codebase

## Implementation Notes
- Contact form logic lives in `src/app/actions.js` (server action) and `src/app/page.js` (client form).
- Emails are sent from and delivered to `EMAIL_USER`, with `replyTo` set to the submitter’s email when provided.
