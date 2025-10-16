# GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio` (or your preferred name)
3. Make it **public** (required for free GitHub Pages)
4. Don't initialize with README (we already have files)

### 2. Initialize Git and Push Code
```bash
# In your portfolio directory
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 3. Deploy to GitHub Pages
```bash
# Deploy the portfolio
npm run deploy
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch and **/ (root)** folder
6. Click **Save**

### 5. Access Your Portfolio
Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/portfolio/`

## Important Notes

- **Repository Name**: The repository name determines your URL
- **Base Path**: Currently set to `/portfolio/` in `vite.config.js`
- **Updates**: Run `npm run deploy` whenever you make changes
- **Custom Domain**: You can add a custom domain in GitHub Pages settings

## Deployment Commands

```bash
# Build and deploy in one command
npm run deploy

# Or step by step
npm run build
npm run deploy
```

## Troubleshooting

- If images don't load, check the `base` path in `vite.config.js`
- Make sure repository is public for free GitHub Pages
- Check GitHub Pages settings if site doesn't appear after 10 minutes

## Alternative: Custom Domain

If you have a custom domain:
1. Add `CNAME` file in `public/` folder with your domain
2. Update DNS settings to point to GitHub Pages
3. Remove or modify the `base: '/portfolio/'` in `vite.config.js`
