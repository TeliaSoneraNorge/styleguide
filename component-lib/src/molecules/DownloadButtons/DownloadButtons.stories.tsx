import React from 'react';
import { DownloadButtons } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library|Molecules/DownloadButtons',
  component: DownloadButtons,
};

export const Default = () => {
  const { Button } = DownloadButtons;
  
  return (
    <DownloadButtons>
      <Button
        href="#"
        src={img.appStoreBadge}
        alt="Available on the App Store"
        title="Available on the App Store"
        aria-label="Available on the App Store"
      />
      <Button
        href="#"
        src={img.googlePlayBadge}
        alt="Android app on Google play"
        title="Android app on Google play"
        aria-label="Android app on Google play"
      />
      <Button
        href="#"
        src={img.windowsPhoneBadge}
        alt="Windows Phone"
        title="Windows Phone"
        aria-label="Windows Phone"
      />
    </DownloadButtons>
  )
};