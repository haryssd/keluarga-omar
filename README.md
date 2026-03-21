# Keluarga Omar — Pokok Keluarga

A static family tree website built with **Astro**, hosted on **Cloudflare Pages**, with photos stored on **Cloudflare R2**.

---

## Tech Stack

| Layer         | Technology              |
|---------------|-------------------------|
| Framework     | Astro (static output)   |
| Hosting       | Cloudflare Pages        |
| Photo storage | Cloudflare R2           |
| Styling       | Plain CSS (no framework)|
| Data          | JSON file               |

---

## Project Structure

```
keluarga-omar/
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── family.json        ← Edit this to add your real family data
│   ├── components/
│   │   ├── FamilyTree.astro   ← Tree renderer
│   │   └── Modal.astro        ← Person detail modal
│   ├── layouts/
│   │   └── Base.astro         ← HTML shell
│   ├── pages/
│   │   └── index.astro        ← Homepage
│   └── types/
│       └── family.ts          ← TypeScript types
├── astro.config.mjs
├── wrangler.toml
├── package.json
└── tsconfig.json
```

---

## Getting Started (Local Dev)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:4321
```

---

## Adding Your Family Data

Open `src/data/family.json`. It has two sections:

### 1. `people` — define every person

```json
"p1": {
  "name":       "Omar bin Che Daud",
  "initials":   "OC",
  "role":       "Patriarch",
  "generation": 1,
  "deceased":   true,
  "spouse":     "p2",
  "photo":      ""
}
```

- `photo` — leave empty `""` for initials avatar, or paste the R2 public URL once uploaded
- `deceased: true` — shows dashed border + "Al-Fatihah" in the modal
- `spouse` — use the other person's ID (e.g. `"p2"`), or `null` if unmarried

### 2. `tree` — define the relationships

```json
{
  "couple": ["p1", "p2"],
  "children": [
    {
      "couple": ["p10", "p11"],
      "children": [ ... ]
    }
  ]
}
```

Each node is a couple (1 or 2 person IDs) with their `children` array. Nest as deep as needed.

---

## Uploading Photos to Cloudflare R2

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **R2 Object Storage**
2. Create a bucket named `keluarga-omar-photos`
3. Upload each photo (recommended: resize to max 400×400px, WebP format)
4. Enable **Public Access** on the bucket → copy the public URL base
5. In `family.json`, set each person's `photo` field:

```json
"photo": "https://pub-xxxxxxxx.r2.dev/haris.webp"
```

---

## Deploy to Cloudflare Pages

### First-time setup

1. Push this repo to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create a project**
3. Connect your GitHub repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**

Cloudflare Pages will auto-deploy every time you push to `main`. ✅

### Your site URL

After first deploy, your site will be live at:
```
https://keluarga-omar.pages.dev
```

---

## Adding a New Family Member

1. Add the person to `src/data/family.json` under `people`
2. Add them to the `tree` structure under their parent couple's `children`
3. Upload their photo to R2 (optional)
4. Commit and push → Cloudflare auto-deploys

---

## Customising the Family Name

In `src/data/family.json`, change:
```json
"familyName": "Keluarga Omar",
"subtitle":   "Pokok Keluarga · 4 Generasi"
```

---

## License

Personal use only. Built with ❤️ for Keluarga Omar.
