# v4.tanmaypatel.com


This website is built using [Astro 2.0](https://astro.build/) was coded using da facto [Visual Studio Code](https://code.visualstudio.com/). Styling is powered by [tailwindcss](https://tailwindcss.com/) along with [Sass](https://sass-lang.com/) as the CSS pre-processor, with textured background from [Subtle Patterns](http://subtlepatterns.com/). The emblem is created in SVG and its animations are done using [GreenSock's TweenLite](https://greensock.com/gsap) & Friends. Fonts used in the site are [Roboto](https://fonts.google.com/specimen/Roboto), [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) and [Lato](https://fonts.google.com/specimen/Lato), being loaded using [Fontsource](https://fontsource.org/) and the icons used are from [FontAweome](https://fontawesome.com/)!
Site is hosted on [Cloudflare Pages](https://pages.cloudflare.com/) mapped to the domain name configured on [Cloudflare](https://www.cloudflare.com/) for performance improvement and security.

## 🚀 Project Structure

Inside of the project, there are following folders and files as with any Astro project:

```
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
