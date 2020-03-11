import React from 'react';
import { InfoBox, Paragraph } from '../../index';

export default {
  title: 'Component library|Molecules/InfoBox',
  component: InfoBox,
};

export const Default = () => (
  <InfoBox title="This is a title">
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </Paragraph>
  </InfoBox>
);