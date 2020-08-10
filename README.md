# Telia Styleguide

This is a living styleguide, showing the Atomic Design components which should be used in Telia Norway's web applications
to achieve a common look & feel, and therefore user experience.

- The styleguide can be [found on the web](http://styleguide.channelapi.telia.no/#/).
- The React component library can be [found on NPM as a JavaScript module](https://www.npmjs.com/package/@telia/styleguide).

# Development

## Getting started

- Clone the repository

### The out-going, pre-storybook styleguide

- Build the component library: `npm run build:component-lib; npm run build:css`
- Install dependencies: `npm install`
- Run in development mode: `npm run dev`
- Go to this URL in your browser: `http://localhost:3000/`

### The new, storybook-based styleguide

- cd component-lib/
- Install dependencies: `npm install`
- Run in development mode: `npm run storybook`
- - Go to this URL in your browser: `http://localhost:6006/`


## Adding a new component

- Add a folder called `YourComponentName` in `component-lib/src/atoms|molecules|organisms`
- Inside the new folder, add a `YourComponentName.jsx` React component file
    - In the description above you component, add `Category: <component-category>` for it to be displayed in the components page of the website. List of available categories are fount in `src/component-categories.js`.
- Add PropTypes to your component with documentation (you can look at Button component for inspiration)
- Expose your React component in `component-lib/src/index.js`
- Add a `YourComponent.pcss` file for your PostCSS
- Add examples of usage of your component to `src/client/examples/atoms|molecules|organisms` (again you can look at Button examples)

## Serving the styleguide locally for consumption from another local web app

- Install `http-server` globally with npm (https://www.npmjs.com/package/http-server)
- Go to you local styleguide folder in your terminal and type `http-server ./ --cors`
- Include stylesheet in your project `<link rel="stylesheet" href="http://local-styleguide:8080/css/bundle.components.css">`

# Deployment

We use concourse for build and deploy and the pipeline can be found at [https://concourse.common-services.telia.io/teams/channel-api/pipelines/styleguide](https://concourse.common-services.telia.io/teams/channel-api/pipelines/styleguide).
If you do not have access here and think you should have, post in the `#styleguide` channel  on slack.

## Website
When a feature is merged to master, a new version of the website is automatically deployed.
You can check #styleguide-deploy to verify when the deploy has completed.

# React component library

After the deploy of the website is complete you can in the concourse pipeline trigger a version update of the component-lib.
You can choose between major, minor and patch version update. See `VERSIONS.md` for more details on which to choose.
- To trigger the version update in concourse, click on the task that matches you version update and press the pluss sign in the top-right corner.
- Remember write a description in `VERSIONS.md` if it's a noteworthy change

# Other

## Useful links

- [The styleguide](http://styleguide.channelapi.telia.no/#/)
- [Telia Company full guidelines](http://brandhub.teliacompany.com/)
- [Telia Company styleguide](http://digitalstyle.teliacompany.com/)

## Versioning

Notify all "breaking changes" or major changes in the #styleguide Slack Channel and update VERSIONS.md.
