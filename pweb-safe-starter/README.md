# Pi Web — Safe Demo

This is a **safe** static demo inspired by Pi-related landing pages. It intentionally **does not** collect recovery phrases, private keys, or any sensitive data.

## Deploy to Vercel (recommended)
1. Create a GitHub repo (e.g., `pweb-safe-demo`) and push these files.
2. Go to **vercel.com** → **New Project** → Import your repo.
3. Framework: **Other** (static site). Build command: _none_. Output directory: `/` (root).
4. Deploy. You’ll get a URL like `https://your-app.vercel.app`.

## Deploy to GitHub Pages
1. Create a new repo and push these files.
2. Settings → Pages → Deploy from branch → `main` / root (`/`).
3. Your site will be published at `https://<username>.github.io/<repo>/`.

## Local preview
Just open `index.html` in your browser or use a simple static server:
```bash
python -m http.server 5173
```
Then open http://localhost:5173.

---

**Security Notice**: Never enter your wallet recovery phrase anywhere online. If a site asks for it, it’s unsafe.
