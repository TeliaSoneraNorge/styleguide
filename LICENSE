# Telia Styleguide

This is a living styleguide, showing the Atomic Design components which should be used in Telia Norway's web applications
to achieve a common look & feel, and therefore user experience.

- The styleguide can be [found on the web](http://telia-styleguide.herokuapp.com).
- The React component library can be [found on NPM as a JavaScript module](https://www.npmjs.com/package/@telia/styleguide).

# Development

## Getting started

- Clone the repository
- Install dependencies: `npm install`
- Run in development mode: `npm run dev`
- Go to this URL in your browser: `http://localhost:3000/`

## Adding a new component

- Add a folder called `YourComponentName` in `component-lib/src/atoms|molecules|organisms`
- Inside the new folder, add a `YourComponentName.jsx` React component file
- Add PropTypes to your component with documentation (you can look at Button component for inspiration)
- Expose your React component in `component-lib/src/index.js` (NOTE: in two places)
- Add a `YourComponent.pcss` file for your PostCSS
- Add examples of usage of your component to `src/client/examples/atoms|molecules|organisms` (again you can look at Button examples)

## Serving the styleguide locally for consumption from another local web app

- Install `http-server` globally with npm (https://www.npmjs.com/package/http-server)
- Go to you local styleguide folder in your terminal and type `http-server ./ --cors`
- Include stylesheet in your project `<link rel="stylesheet" href="http://local-styleguide:8080/css/bundle.components.css">`

## Exporting to another project

- Make sure the server is running, then run `npm run build` to generate the styleguide
- `npm run export -- PATH` where `PATH` is the path to your project

# Deployment

## Website

- Install the Heroku CLI. See the [Heroku Website](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) for details
- Make sure your Heroku account has access to the styleguide Heroku app
- Add a remote for the heroku app: `heroku git:remote -a telia-styleguide -r heroku`
- To deploy, run: `npm run deploy:prod`

# React component library

See `README.md` in the `component-lib` folder.

# Other

## Useful links

- [The styleguide](http://telia-styleguide.herokuapp.com)
- [Telia Company full guidelines](http://brandhub.teliacompany.com/)
- [Telia Company styleguide](http://digitalstyle.teliacompany.com/)

## Versioning

Notify all "breaking changes" or major changes in the #styleguide Slack Channel and update VERSIONS.md.
