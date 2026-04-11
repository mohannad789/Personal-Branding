# Personal branding site

A small, fast static site for your personal brand. Edit `index.html` to swap in your name, links, and copy.

## Publish on GitHub Pages

1. Create a new repository on GitHub (empty, no README if you will push this project).
2. In this folder:

```bash
git init
git add .
git commit -m "Initial personal branding site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Build and deployment → Source**: choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.

Your site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO/` (or your custom domain if you add one in Pages settings).

## Local preview

Open `index.html` in a browser, or from this directory:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080
