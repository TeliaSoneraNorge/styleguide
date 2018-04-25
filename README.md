# Development

## Getting started

- Clone the repository
- Install dependencies: `npm install`
- Run in development mode: `npm run dev`
- Go to this URL in your browser: `http://localhost:3000/`

## Adding a new component

- Add a folder called `YourComponentName` in `src/components/atoms|molecules|organisms`
- Inside the new folder, add a `YourComponentName.jsx` file for a React component, or a `YourComponentName.html` for a HTML component (you currently cannot mix the two)
  - React components also must be exposed via `src/components/index.js`
- Add a `YourComponent.pcss` file for your PostCSS
- Once you have a first draft, run `npm run dev` (you may need to stop/start that process if it was already running, or run `npm run gen` to refresh the meta-info)

## Serving the styleguide locally

- Install http-server globally with npm (https://www.npmjs.com/package/http-server)
- Go to you local styleguide folder in your terminal and type "http-server ./ --cors"
- Include stylesheet in you project `<link rel="stylesheet" href="http://local-styleguide:8080/css/bundle.components.css">`

## Exporting to another project

- If the server isn't already run it then `npm run build` to generate the styleguide.
- `npm run export -- PATH` where `PATH` is the path to your project.

## Exporting react components
- `npm run build:library`

## Using react components
- In your project import styles `import 'telia-styleguide/es/index.css'`
- Then import components `import { Button } 'telia-styleguide/es/index'`

# Deploy
- npm run deploy:prod

## Heroku

- Install the heroku CLI. See the [Heroku Website](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) for details
- Make sure your heroku account has access to the styleguide heroku app
- Add a remote for the heroku app: `heroku git:remote -a telia-styleguide -r heroku`
- Now just run: `npm run deploy:prod`

# Useful links

- [Telia Company full guidelines](http://brandhub.teliacompany.com/)
- [Telia Company styleguide](http://digitalstyle.teliacompany.com/)

# Versioning

Notify all "breaking changes" or major changes in the #styleguide Slack Channel and update VERSIONS.md.
