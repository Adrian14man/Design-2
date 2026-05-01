# AD Construction LLC — Website

Modern, responsive 5-page website for AD Construction LLC (Colorado Springs).
Brand palette pulled directly from the logo: royal blue (#0047BA) on white, with deep navy for hero/footer accents.

## File structure

```
ad-construction/
├── index.html          ← Home page
├── services.html       ← Services page
├── about.html          ← About page
├── projects.html       ← Projects/portfolio page
├── contact.html        ← Contact page (with form + map)
├── css/
│   └── style.css       ← All styling
├── js/
│   └── main.js         ← Mobile nav, form handling, scroll animations
└── images/
    └── logo.png        ← Your logo (already included)
```

## How to deploy

### Quick deploy
1. Upload the entire `ad-construction/` folder to your web host.
2. Make sure `index.html` is in the public root (often `public_html/` or `www/`).
3. Visit your domain — done.

### Free hosting options
- **Netlify** — drag the folder onto netlify.com/drop
- **Vercel** — `vercel deploy` from the folder
- **GitHub Pages** — push to a repo, enable Pages in settings
- **Cloudflare Pages** — connect a repo or upload directly

## Logo

Your logo is already in place at `images/logo.png` and is referenced in the header and footer of every page. The CSS handles sizing automatically — 56px tall on desktop, 44px on mobile, and never stretches.

To replace it later, just drop a new file at the same path with the same name.

## Adding project photos

The project sections currently use styled blue gradient placeholders. To swap in real photos:

1. Drop photos into the `images/` folder (recommend: 800px wide minimum, JPG, optimized).
2. In `index.html` and `projects.html`, find each `<div class="project-img scope-X">[ ... ]</div>`.
3. Replace with: `<img src="images/your-photo.jpg" alt="description" style="height:200px; object-fit:cover; width:100%;">`

## Contact form

The form on the Contact page works without a backend — it opens the user's email client pre-filled with their info, sent to **adconstructionllc14@gmail.com**.

For a more robust setup (server-side delivery), use one of these free form services and update the form's action attribute:
- **Formspree** — formspree.io
- **Netlify Forms** — built-in if hosting on Netlify, just add `netlify` attribute to the form
- **Web3Forms** — web3forms.com

## Brand colors

Defined as CSS variables at the top of `css/style.css`:
- `--blue: #0047BA` — primary brand blue (matches logo)
- `--blue-dark: #003a96` — hover state
- `--blue-light: #5fa3ff` — accent text on dark backgrounds
- `--navy: #0a1628` — deep navy for hero/footer
- `--white`, `--off-white` — surfaces
- `--text`, `--text-muted` — typography

Change them in one place and the whole site updates.

## SEO

Each page has unique title, description, and keyword meta tags targeting:
- Colorado Springs construction
- Colorado Springs remodeling
- painting contractor Colorado Springs
- drywall contractor Colorado Springs
- exterior renovations Colorado Springs

For better local rankings:
1. Submit your site to Google Search Console
2. Create a Google Business Profile (free, huge for local search)
3. Add real customer reviews to the testimonials section
4. Add real before/after project photos with descriptive `alt` text

## Phone & email links

- Click-to-call works on mobile via `tel:7194404881` links
- Email links use `mailto:adconstructionllc14@gmail.com`
- Both are repeated in the header, footer, and contact page
