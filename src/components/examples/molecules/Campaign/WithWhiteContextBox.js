import React from 'react';
import { Campaign } from '@telia/styleguide';

const WithWhiteContextBox = () => (
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

export default WithWhiteContextBox;
