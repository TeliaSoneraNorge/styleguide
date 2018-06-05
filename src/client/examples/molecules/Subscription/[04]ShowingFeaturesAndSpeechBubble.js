import React from 'react';
import { Subscription } from '@telia/styleguide';

const feature = {
    icon: '/public/icons/ico_music.svg',
    name: 'Music Freedom',
};

const ShowingFeaturesAndSpeechBubble = () => (
    <Subscription
        name="SMART Total"
        id="smartTotal2"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        color="blue"
        size="medium"
        speechBubbleText="Kampanje 60 GB per md. i 2 md."
        highlightedFeature={feature}
        isShowingFeatures />
);

export default ShowingFeaturesAndSpeechBubble;