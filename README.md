# Age of Empires 2: Definitive Edition Rating Charts

Live at: https://ratings.aoe2.se/

Random Map: https://ratings.aoe2.se
Deathmatch: https://ratings.aoe2.se/deathmatch

Stats are updated automatically, every day via github actions.

Moved from: https://github.com/thbrown/aoe2-de-rating-charts

## Tech

- Data from aoe2.net API (https://aoe2.net/#api)
- Charts by Plotly (https://plotly.com/)
- Static site generated by next.js (https://nextjs.org/)
- Hosted on Github pages (https://pages.github.com/)

## Development

`npm install`
`npm run dev`

## Deployment

Generate static site

`npm run build && npm run export`

The static site is exported to `/docs`.

After that, you can see the production static app using a webserver.

For example:

1. Install serve globally, you only need to do this once `npm install -g serve`
1. Navigate the the site's root directory `cd ./docs`
1. Serve the site `serve -p 3000`
1. Visit `localhost:3000` in your browser

## Github Pages

The site is currently deployed using github pages on a custom domain.

If you attempt to use github pages without a custom domain, the page will be stuck on the loading screen and you'll see a bunch of 404 errors in the web console. To fix this you need to edit 'env-config.js' and 'next.config.js' to tell the app where it can find its assets.

For Example:
**next.config.js**
replace `assetPrefix: !debug ? "" : ""` with `"process.env.BACKEND_URL": prod ? "/aoe2-de-rating-charts" : ""`
**env-config.js**
replace `assetPrefix: !debug ? "" : ""` with `assetPrefix: !debug ? "/aoe2-de-rating-charts" : ""`

If you want to use a different custom domain, instead of modifying the cname file in the /docs directory, you'll need to update the cname script in 'package.json' as github action builds are invoked after every push and the docs folder, which contains the built site, is overridden.
