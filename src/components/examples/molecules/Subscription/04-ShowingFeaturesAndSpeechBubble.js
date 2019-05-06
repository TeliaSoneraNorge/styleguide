import React from 'react';
import { Subscription } from 'component-lib';

const features = {
    highlightedFeature: {
        iconName: 'ico_music',
        name: 'Music Freedom'
    },
    speechBubbleText: 'Kampanje 60 GB per md. i 2 md.',
    buttonText: 'Gå videre'
};

const ShowingFeaturesAndSpeechBubble = () => (
    <Subscription
        name="SMART Total"
        id="smartTotal2"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        priceInfo={['pr. md', 'Ingen bindingstid.']}
        allPricesLink={{
            url: '#',
            text: 'Se alle priser'
        }}
        color="blue"
        size="medium"
        features={features}
        isShowingFeatures />
);

export default ShowingFeaturesAndSpeechBubble;