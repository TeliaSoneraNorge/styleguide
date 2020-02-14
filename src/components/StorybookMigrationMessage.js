import React from 'react';
import { Header } from '../../component-lib/src/index';

export const StorybookMigrationMessage = () => (
  <div>
    <Header pageTitle="No longer here">
      <p>This content has been migrated to Storybook.</p>

      <p>
        We are in the process of migrating
        <br />
        the styleguide web page to Storybook.
      </p>

      <p>
        Things might get a bit messy during the transition.
        <br />
        Apologies for the inconvenience!
      </p>

      <p>
        Storybook can be found here: <br />
        <a href="https://styleguide.channelapi.telia.no/storybook/">
          https://styleguide.channelapi.telia.no/storybook/
        </a>
      </p>
    </Header>
  </div>
);

export default StorybookMigrationMessage;
