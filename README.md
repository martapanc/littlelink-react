# LittleLink — Astro

A fast, lightweight "link-in-bio" static page built with [Astro](https://astro.build) and Tailwind CSS. Forked from [LittleLink](https://littlelink.io/).

## Customisation

### Profile & metadata

Edit `src/data/data.json`:

```json
{
  "title": "Your Name's Links",
  "author": "Your Name",
  "description": "All my links in one place",
  "icon": "https://...",
  "iconAlt": "Your Name",
  "defaultTheme": "dark",
  "footer": "Some **markdown** text with a [link](https://example.com)."
}
```

### Links

Edit `src/data/links.json` — each entry is an object with:

```json
{
  "title": "GitHub",
  "url": "https://github.com/yourhandle",
  "icon": "github.svg",
  "buttonStyle": "github"
}
```

`icon` is resolved from `public/images/icons/`. `buttonStyle` maps to a CSS class `button-<style>` defined in `src/styles/brands.css`.

### Adding new button styles

Add a new rule in `src/styles/brands.css`:

```css
.button-myplatform {
  background-color: #1da1f2;
  color: white;
}
```

Then reference `"buttonStyle": "myplatform"` in `links.json`.

## Development

```bash
yarn dev      # start dev server at http://localhost:3003
yarn build    # build to dist/
yarn preview  # preview the production build
```

## Deployment

The build output in `dist/` is a plain static site — deploy to any static host:

- **Vercel**: connect the repo, set framework to "Other" (Astro auto-detected)
- **Netlify**: set build command `yarn build`, publish directory `dist`
- **GitHub Pages**: use the [Astro GitHub Pages action](https://docs.astro.build/en/guides/deploy/github/)

## Credits

- [LittleLink](https://littlelink.io/) by [sethcottle](https://github.com/sethcottle) — original project
- Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com)
