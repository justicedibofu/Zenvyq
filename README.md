# ZENVYQ Tech Ltd — Marketing Landing Page

High-performance, brutalist marketing site for **ZENVYQ Tech Ltd** (`zenvyq.tech`), built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Three.js / Canvas 2D fallback, and `@icon-park/react`.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## ⚙️ Environment Variables

Create a `.env.local` file for local development or configure these variables on your hosting environment:

```env
# Public Direct Contact (used across the landing page for WhatsApp & Email links)
# If NEXT_PUBLIC_WHATSAPP_NUMBER is omitted or empty, the WhatsApp buttons automatically hide.
NEXT_PUBLIC_WHATSAPP_NUMBER=2348000000000
NEXT_PUBLIC_CONTACT_EMAIL=contact@zenvyq.tech

# Server-side Contact Form Email Sending (Optional / Resend)
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=contact@zenvyq.tech
```

> **Note on NEXT_PUBLIC_* variables in Next.js:**  
> Next.js inlines variables prefixed with `NEXT_PUBLIC_` at build time. When changing `NEXT_PUBLIC_WHATSAPP_NUMBER` or `NEXT_PUBLIC_CONTACT_EMAIL` on your server/hosting, run `npm run build` again so the new values are baked into the client bundle.

---

## 🌐 Deploying on Interserver Hosting / VPS

`next.config.ts` is configured with `output: "standalone"`, which produces a minimal, self-contained Node.js bundle inside `.next/standalone`.

### Option A: Interserver Linux VPS (Recommended)
1. **Connect via SSH** to your VPS.
2. Ensure Node.js 18+ and `pm2` are installed:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```
3. Clone this repository into your web directory:
   ```bash
   git clone https://github.com/justicedibofu/Zenvyq.git /var/www/zenvyq
   cd /var/www/zenvyq
   ```
4. Create `.env.production` with your live contact details:
   ```bash
   cp .env.example .env.production
   nano .env.production
   ```
5. Install dependencies and build:
   ```bash
   npm install
   npm run build
   ```
6. Start the app with PM2:
   ```bash
   pm2 start npm --name "zenvyq" -- start
   pm2 save
   pm2 startup
   ```
7. Configure Nginx reverse proxy to pass traffic from `zenvyq.tech` to `http://localhost:3000`.

### Option B: Interserver cPanel (Shared Hosting with "Setup Node.js App")
1. In cPanel, navigate to **Software > Setup Node.js App**.
2. Click **Create Application**:
   - **Node.js version**: 18.x or 20.x
   - **Application mode**: Production
   - **Application root**: `zenvyq`
   - **Application startup file**: `node_modules/next/dist/bin/next` (or run `npm run start`)
3. Under **Environment variables**, add:
   - `PORT`: assigned port or default 3000
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: your client's actual phone number (e.g. `234...`)
   - `NEXT_PUBLIC_CONTACT_EMAIL`: `contact@zenvyq.tech`
   - `CONTACT_EMAIL`: `contact@zenvyq.tech`
4. Run `npm install` and `npm run build` via cPanel Terminal or the UI "Run NPM Install" button.

---

## 📋 Content Centralization

All primary content, service offerings, process steps, and brand messaging live in:
📂 [`lib/content.ts`](lib/content.ts)
