# alxwnth.com

My tiny homepage. Uses the awesomeness of [11ty](https://www.11ty.dev/) with [Nunjucks](https://mozilla.github.io/nunjucks/) to keep things nice and tidy. Since there is only a single page and just a handful of styles, they are minified and embedded as internal CSS. The favicon and font are passed via passthrough copy. No SASS or complicated build processes. Macros and components are used to keep things DRY. The background is [The Great Wave off Kanagawa](https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa), converted into ASCII art by me.

## Running locally

To serve the site locally, do

```
npm i
npm run dev
```

## Building for production

To build a bundle for production, do

```
npm i
npm run build
```

## License

The source code in this repository is licensed under the GNU Affero General Public License. See [LICENSE](/LICENSE) for full terms.
