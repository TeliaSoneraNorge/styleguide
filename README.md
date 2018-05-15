# Development

## Getting started

- Clone the repository
- Install dependencies: `npm install`
- Run in development mode: `npm run dev`
- Go to this URL in your browser: `http://localhost:3000/`

## Adding a new component

- Add a folder called `YourComponentName` in `src/components/atoms|molecules|organisms`
- Inside the new folder, add a `YourComponentName.jsx` React component file
- Expose your React component in `src/components/index.js`
- Add a `YourComponent.pcss` file for your PostCSS
- Once you have a first draft, run `npm run dev` (you may need to stop/start that process if it was already running, or run `npm run gen` to refresh the meta-info)

## Serving the styleguide locally for consumption from another local web app

- Install `http-server` globally with npm (https://www.npmjs.com/package/http-server)
- Go to you local styleguide folder in your terminal and type `http-server ./ --cors`
- Include stylesheet in your project `<link rel="stylesheet" href="http://local-styleguide:8080/css/bundle.components.css">`

## Exporting to another project

- Make sure the server is running, then run `npm run build` to generate the styleguide
- `npm run export -- PATH` where `PATH` is the path to your project


# The Styleguide website/channel

The styleguide is a living styleguide, and therefore is [a running web app](http://telia-styleguide.herokuapp.com)
which is styled accordingly. It is currently running on Heroku.

## Deployment

- Install the Heroku CLI. See the [Heroku Website](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) for details
- Make sure your Heroku account has access to the styleguide Heroku app
- Add a remote for the heroku app: `heroku git:remote -a telia-styleguide -r heroku`
- To deploy, run: `npm run deploy:prod`


# React component library

The React component library can be [found on NPM as a JavaScript module](https://www.npmjs.com/package/@telia/styleguide).

## Exporting/Publishing

- Manual export: `npm run build:library`
- NPM publish: `npm publish --access=public` (you need access to the Telia NPM organization)

## Usage

- In your project import styles `import '@telia/styleguide/es/index.css';`
- Then import components `import { Button } from '@telia/styleguide';`


# Other

## Useful links

- [The styleguide](http://telia-styleguide.herokuapp.com)
- [Telia Company full guidelines](http://brandhub.teliacompany.com/)
- [Telia Company styleguide](http://digitalstyle.teliacompany.com/)

## Versioning

Notify all "breaking changes" or major changes in the #styleguide Slack Channel and update VERSIONS.md.
