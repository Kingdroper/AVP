# AVP Project Page

Static landing page for *Action with Visual Primitives* (AVP), in
DreamBooth/Imagen style: dark theme, gradient accents, scroll-reveal
animations, and video tiles you can swap in later.

## Local preview

No build step — just open `index.html` in a browser, or serve locally:

```bash
cd AVP
python3 -m http.server 8000
# then visit http://localhost:8000
```

(A real HTTP server is recommended over `file://` so the browser doesn't
block any future video loads.)

## Project layout

```
AVP/
├── index.html               ← main page
├── .nojekyll                ← tells GitHub Pages to skip Jekyll
├── README.md                ← you are here
└── static/
    ├── css/style.css        ← all styling
    ├── js/main.js           ← scroll reveal + bibtex copy
    ├── images/
    │   ├── framework.png    ← AVP framework figure
    │   └── primitives.png   ← visual-primitive taxonomy figure
    └── videos/
        └── README.md        ← instructions for adding demo clips
```

## Editing tips

| Want to … | Where |
|---|---|
| Update title / abstract | `index.html`, top of `<header class="hero">` and `#abstract` section |
| Change author list | `index.html`, `.authors` block |
| Update paper / code / video buttons | `index.html`, `.cta` block (replace the `href="#"` placeholders) |
| Update BibTeX | `index.html`, `#bibtex-block` |
| Swap a video placeholder for a real clip | see `static/videos/README.md` |
| Re-color | edit CSS variables at the top of `static/css/style.css` |

## Deploying to GitHub Pages

You said the final URL will be `https://kingdroper.github.io/AVP`.
Recommended setup:

1. Create a new GitHub repo named `avp` (lowercase, matches the URL).
2. From this `AVP/` directory:

   ```bash
   cd /Users/weilongguo/Desktop/code/papers/anyvla_01/AVP
   git init
   git add .
   git commit -m "Initial AVP project page"
   git branch -M main
   git remote add origin git@github.com:Kingdroper/AVP.git
   git push -u origin main
   ```

3. On GitHub: repo → **Settings → Pages** → set **Source = main / root**.
4. Wait ~30 s; the site appears at
   `https://kingdroper.github.io/AVP/`.

`.nojekyll` is already present, so directories that start with `_`
(if any are added later) will be served as-is.

## Things still using placeholders

- **Paper button** (`href="#"`) — link to arXiv / OpenReview when ready
- **Code button** (`href="#"`) — link to the code repo when public
- **Author profile links** (each `<a href="#">`) — set to each author's
  homepage when you want them clickable
- **Demo video tiles** — see `static/videos/README.md`
- **BibTeX `booktitle`** — currently `Conference on Robot Learning (CoRL)`,
  update to whatever venue the paper appears at
- Author affiliation footnote: currently lists `Anyverse Dynamics` and
  `Tsinghua University`; adjust if other affiliations are added

## Custom domain (optional)

If you later want `avp.your-org.com` instead of `*.github.io/avp`:

1. Add a `CNAME` file in this directory containing your domain.
2. Point a DNS `CNAME` record at `<your-username>.github.io`.
3. Enable HTTPS in repo Settings → Pages.
