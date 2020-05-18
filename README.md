# Age of Empires 2: Definitive Edition Rating Charts

Live at: https://thbrown.github.io/aoe2-de-rating-charts/

Stats are updated automatically, every day via github actions.

## Tech

- Data from aoe2.net API (https://aoe2.net/#api)
- Charts by Plotly (https://plotly.com/)
- Static site generated by next.js (https://nextjs.org/)
- Hosted on Github pages (https://pages.github.com/)

## Dev

`npm install`
`npm run dev`

## Deployment

Generate static site

`npm run build && npm run export`

The static site is exported to `/docs`.

## Testing the production build

To make this work, you'll have to replace the references to "aoe2-de-rating-charts" in env-config.js and next.config.js with "" (blank)

After that, you can see the production static app using a webserver.

For example:

1. Install serve globally, you only need to do this once `npm install -g serve`
1. Navigate the the site's root directory `cd ./docs`
1. Serve the site `serve -p 8080`
1. Visit `localhost:8080` in your browser
