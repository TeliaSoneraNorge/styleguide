# Telia Styleguide -- React component library

This is a React component library of the Atomic Design components found in the Telia Styleguide. This is a living styleguide, showing the components which should be used in Telia Norway's web applications to achieve a common look & feel, and therefore user experience.

- The styleguide can be [found on the web](https://styleguide.channelapi.telia.no/).
- The React component library can be [found on NPM as a JavaScript module](https://www.npmjs.com/package/@telia/styleguide).

## Usage

1. `npm install --save @telia/styleguide`
2. `import '@telia/styleguide/dist/index.css';` and/or `import '@telia/styleguide/business.css';`
3. `import { Button } from '@telia/styleguide';`
4. `<Button text="Default button" />`

## Development

### Getting started

1. Install dependencies: `npm install`
2. Start Storybook: `npm run storybook`
3. Open a browser at `http://localhost:6006/`

## Adding a new component

All new components should employ TypeScript.

1. Add a folder called `YourComponentName` in `src/atoms|molecules|organisms`

2. In the new folder, create a new file `YourComponentName.tsx` React component file

3. Write thorough docblocks above the function itself and all the parameters/props.

4. Optionally add PropTypes as well if the component is to be used in a non-TypeScript environment.

5. Export the new component from `src/index.ts`.

6. If the new component requires CSS, add a new file `YourComponentName.pcss` alongside the TSX source file.

7. Add a new storybook file `YourComponentName.stories.tsx` with detailed examples of the new component in use (look at the existing components for examples).

## Add new icons

1. Copy the new icons into the folder `assets/icons/dropHereNewIcons`

2. Build the library: `npm run icons`. Note that the original icons are _optimized and moved_ from the _drop here_ folder. The files that cannot be processed successfully remain in the _drop folder_

3. Check that the new optimized version of the icons look as expected in _styleguide-web_.

4. Run `npm run build`, `npm run storybook` and check [http://localhost:3000/#/image-assets](http://localhost:3000/#/image-assets) )

## Deployment

We use Concourse for build and deploy and the pipeline can be found at [https://concourse.common-services.telia.io/teams/channel-api/pipelines/styleguide](https://concourse.common-services.telia.io/teams/channel-api/pipelines/styleguide).
If you do not have access here and think you should have, post in the `#styleguide` channel on slack.

When a new feature/branch is merged to master, a new build of Storybook is automatically deployed. You can check the Slack channel `#styleguide-deploy` to verify when the deploy has completed.

### React component library package

After the deploy of the website is complete you can in the Concourse pipeline trigger a version update. You can choose between major, minor and patch version update. See `VERSIONS.md` for more details on which to choose.

To trigger the version update in concourse, click on the task that matches you version update and press the plus sign in the top-right corner.

Remember to write a description in `VERSIONS.md` if it is a noteworthy change.

## Other

### Useful links

- [The styleguide](http://styleguide.channelapi.telia.no/#/)
- [Telia Company full guidelines](http://brandhub.teliacompany.com/)
- [Telia Company styleguide](http://digitalstyle.teliacompany.com/)

### Versioning

Notify all "breaking changes" or major changes in the #styleguide Slack Channel and update VERSIONS.md.

---

## WEB SITE README
