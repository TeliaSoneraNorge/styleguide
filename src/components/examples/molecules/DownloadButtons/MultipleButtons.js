import React from 'react';
import { DownloadButtons } from 'component-lib';

const { Button } = DownloadButtons;

const DefaultDownloadButtons = () => (
    <DownloadButtons>
        <Button
            href="#"
            src={require('../../../../assets/images/app-store-badge.png')}
            alt="Available on the App Store"
            title="Available on the App Store"
            aria-label="Available on the App Store" />
        <Button
            href="#"
            src={require('../../../../assets/images/google-play-badge.png')}
            alt="Android app on Google play"
            title="Android app on Google play"
            aria-label="Android app on Google play" />
        <Button
            href="#"
            src={require('../../../../assets/images/windows-phone-badge.png')}
            alt="Windows Phone"
            title="Windows Phone"
            aria-label="Windows Phone" />
    </DownloadButtons>
);

export default DefaultDownloadButtons;