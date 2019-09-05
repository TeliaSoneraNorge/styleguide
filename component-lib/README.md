# Telia Styleguide - React component library

This is a React component library of the Atomic Design components found in the Telia Styleguide.

- The styleguide can be [found on the web](http://telia-styleguide.herokuapp.com).
- The React component library can be [found on NPM as a JavaScript module](https://www.npmjs.com/package/@telia/styleguide).

# Development 

## Getting started

- Install dependencies: `npm install`
- Build the library: `npm run build`

## Add new icons

- Copy the new icons into the folder `component-lib/assets/icons/dropHereNewIcons`
- Build the library: (from component-lib) `npm run icons`
- Note that the original icons where _optimized and moved_ from the _drop here_ folder. 
The files which couldn't be processed successfully remain in the _drop folder_
- Check that the new optimized version of the icons look as expected in _styleguide-web_. 
(Go up to the main folder, `npm run build`, `npm run start` and check [http://localhost:3000/#/image-assets](http://localhost:3000/#/image-assets) )
- Commit the changes to git

## Exporting/Publishing

- MAKE SURE YOU ARE IN THE `component-lib` FOLDER AND NOT IN THE WEBSITE ROOT!
- Bump the version.
- NPM publish: `npm run deploy:prod` or `npm publish dist --access=public` (you need access to the Telia NPM organization, Note: since 1.20.0, we just need to publish dist folder)

To test locally;
- Local test: `npm run publish:local-test`

## Usage

- In your project import styles `import '@telia/styleguide/dist/index.css';`
- Then import components `import { Button } from '@telia/styleguide';`

# Other

## Versioning

Notify all "breaking changes" or major changes in the #styleguide Slack Channel and update VERSIONS.md.
