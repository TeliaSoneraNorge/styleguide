# Telia Styleguide

This is a React component library of the Atomic Design components found in the Telia Styleguide. This is a living styleguide, showing the components which should be used in Telia Norway's web applications to achieve a common look & feel, and therefore user experience.

- The styleguide can be [found on the web](https://styleguide.channelapi.telia.no/).
- The React component library can be [found on NPM as a JavaScript module](https://www.npmjs.com/package/@telia/styleguide).

## Usage

1. Install the styleguide package: `npm install --save @telia/styleguide`

2. Import the CSS styles. Use `import '@telia/styleguide/dist/index.css';` for the full CSS or
   `import '@telia/styleguide/dist/components.css';` if you only need the components themselves
   without the global styles. If you are using the business components, you need
   `import '@telia/styleguide/business.css';`. If you _only_ use the business components, you
   don't need the other CSS files.

3. Import and use a component: `import { Button } from '@telia/styleguide';` and `<Button text="Default button" />`.

## Development

### Getting started

1. Install dependencies: `npm install`
2. Start Storybook: `npm run storybook`
3. Open a browser at `http://localhost:6006/`

### Adding a new component

All new components should employ TypeScript.

1. Add a folder called `YourComponentName` in `src/atoms|molecules|organisms`

2. In the new folder, create a new file `YourComponentName.tsx` React component file

3. Write thorough docblocks above the function itself and all the parameters/props.

4. Optionally add React PropTypes as well if the component is to be used in a non-TypeScript environment.

5. Export the new component from `src/index.ts`.

6. If the new component requires CSS, add a new file `YourComponentName.pcss` alongside the TSX source file. This will be included automatically.

7. Add a new storybook file `YourComponentName.stories.tsx` with detailed examples of the new component in use (look at the existing components for examples).

### CSS classes

All classes should be prefixed with "`telia`"

We also use the [BEM-pattern](http://getbem.com/naming/): `block__elements--modifiers`

- Component elements should be preceded with "`__`"
  - Example: `telia-[component-name]__header`
- Component modifiers should be preceded with "`--`"
  - Example: "`telia-[component-name]--compact`"

### Add new icons

`NOTE: This section needs revision`

1. Copy the new icons into the folder `assets/icons/dropHereNewIcons`

2. Build the library: `npm run icons`. Note that the original icons are _optimized and moved_ from the _drop here_ folder. The files that cannot be processed successfully remain in the _drop folder_

3. Run `npm run build`, `npm run storybook` and check if your icon appears here: [http://localhost:6006/?path=/docs/component-library-atoms-icon--default](http://localhost:6006/?path=/docs/component-library-atoms-icon--default)

## Consuming the local, development styleguide in other local web apps

Use `npm link` to test a modified Telia Norge Styleguide component locally in telia-no-min-side project.

```bash
#  in Telia Norge Styleguide directory
npm run build:icons
npm run build
cd dist
npm link

# in your project directory
npm link @telia/styleguide
npm start
```

Now whenever you change anything in Telia Norge Styleguide, rerun `npm run build` and your project should pick up the changes.

When you're finished, unlink the Telia Norge Styleguide:

```bash
# in your project directory
npm unlink --no-save @telia/styleguide
npm install

# in Telia Norge Styleguide directory
npm unlink -g
```

#### To publish locally

1. Local test: `npm run publish:local-test`

## Deployment

We use Github Actions for build and deploy and the pipelines can be found at [https://github.com/TeliaSoneraNorge/styleguide/actions](https://github.com/TeliaSoneraNorge/styleguide/actions).
If you do not have access here and think you should have, post in the `#styleguide` channel on slack.

When a new feature/branch is merged to master, a new build of Storybook is automatically deployed. 
TODO: Add step in pipeline to post message to the Slack channel `#styleguide-deploy` to verify when the deploy has completed.

### React component library package

After the deploy of the website is complete you can in the "Publish to npm" action trigger a version
update. You can choose between major, minor and patch version update. See `VERSIONS.md` for more
details on which to choose.

Remember to write a description in `VERSIONS.md` if it is a noteworthy change.

## Other

### Useful links

- [The styleguide](https://styleguide.channelapi.telia.no/#/)
- [Telia Company full guidelines](https://brandhub.teliacompany.com/)
- [Telia Company styleguide](https://digitalstyle.teliacompany.com/)

### Versioning

Notify all "breaking changes" or major changes in the #styleguide Slack Channel and update VERSIONS.md.
