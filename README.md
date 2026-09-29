# hormicode.com

Static landing page for Hormicode LLC, served by GitHub Pages (see `CNAME`).
No framework or build step: plain HTML, CSS and JavaScript.

| File | Purpose |
|---|---|
| `index.html` | The page. English text lives here. |
| `css/style.css` | Styles. Colors are CSS variables in `:root` (light) and `html.dark` (dark). |
| `js/theme.js` | Light/dark toggle. Default: dark. Saved in `localStorage` (`hormicode-theme`). |
| `js/i18n.js` | EN/ES toggle. Spanish dictionary (`ES`). Saved in `localStorage` (`hormicode-lang`); `?lang=es` forces Spanish. |
| `assets/img/` | Logos, favicons and Open Graph image, copied from the brand kit (`../docs/marca`, outside the repo). |

## Editing text

Every translatable element has `data-i18n="key"`. Change the English in `index.html`
and the same key in the `ES` object in `js/i18n.js`. A key missing from `ES` falls back to English.

## Cache

`index.html` loads `css/style.css?v=N`, `js/theme.js?v=N` and `js/i18n.js?v=N`.
After changing any of those files, bump `N` so browsers download the new version.
