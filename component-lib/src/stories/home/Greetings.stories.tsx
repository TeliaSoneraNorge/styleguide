import _ from 'lodash';
import React from 'react';

import { Header } from '../../index';

export default {
  title: 'Introduction',
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export const Greetings = () => (
  <div>
    <Header
      iconName="ico_code-2"
      runningTitle="Greetings, Earthlings!"
      pageTitle="Telia Norge Styleguide"
      withMask={true}
    >
      <p>
        This styleguide offers color schemes, components (both plain HTML and React) and CSS to be used in Telia
        Norway's digital channels.
      </p>
      <p>
        Talk with us in the #styleguide Slack channel and let us know if and how you intend to use the styleguide. Enjoy
        :)
      </p>
    </Header>
  </div>
);
