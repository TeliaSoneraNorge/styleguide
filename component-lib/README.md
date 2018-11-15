# Telia Styleguide - React component library

This is a React component library of the Atomic Design components found in the Telia Styleguide.

- The styleguide can be [found on the web](http://telia-styleguide.herokuapp.com).
- The React component library can be [found on NPM as a JavaScript module](https://www.npmjs.com/package/@telia/styleguide).

# Development

## Getting started

- Install dependencies: `npm install`
- Build the library: `npm run build:library`

## Exporting/Publishing

- MAKE SURE YOU ARE IN THE `component-lib` FOLDER AND NOT IN THE WEBSITE ROOT!
- Bump the version.
- Local test: `npm run publish:local-test`
- NPM publish: `npm publish --access=public` (you need access to the Telia NPM organization)

## Usage

- In your project import styles `import '@telia/styleguide/dist/index.css';`
- Then import components `import { Button } from '@telia/styleguide';`

# Other

## Versioning

Notify all "breaking changes" or major changes in the #styleguide Slack Channel and update VERSIONS.md.
