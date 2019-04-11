import React from 'react';
import { Subscription } from 'component-lib';

const feature = {
    iconName: 'ico_music',
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