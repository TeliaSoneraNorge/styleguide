import React from 'react';
import { Campaign } from '../../index';

export default {
  title: 'Component library|Molecules/Campaign',
  component: Campaign,
};

export const Default = () => (
  <Campaign
    headingText="Music Freedom"
    buttonText="Kjøp nå"
    desktopBackgroundImage="https://placekitten.com/g/632/400"
    mobileBackgroundImage="https://placekitten.com/g/400/800"
    backgroundImageAltText="Cat staring at the camera looking cut"
  >
    Music Freedom is a <strong>really cool</strong> product. Buy it!
  </Campaign>
);

export const WithWhiteBodyText = () => (
  <Campaign
    headingText="Music Freedom"
    buttonText="Kjøp nå"
    desktopBackgroundImage="https://placekitten.com/g/632/400"
    mobileBackgroundImage="https://placekitten.com/g/400/800"
    backgroundImageAltText="Cat staring at the camera looking cut"
    isUsingWhiteText
  >
    Music Freedom is a <strong>really cool</strong> product. Buy it!
  </Campaign>
);

export const WithWhiteContextBox = () => (
  <Campaign
    headingText="Music Freedom"
    buttonText="Kjøp nå"
    desktopBackgroundImage="https://placekitten.com/g/632/400"
    mobileBackgroundImage="https://placekitten.com/g/400/800"
    backgroundImageAltText="Cat staring at the camera looking cut"
    isUsingWhiteContentBox
  >
    Music Freedom is a <strong>really cool</strong> product. Buy it!
  </Campaign>
);