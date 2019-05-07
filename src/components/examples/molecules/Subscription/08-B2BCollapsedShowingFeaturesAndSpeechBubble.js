import React from 'react';
import { Button, Subscription } from 'component-lib';

const features = {
    speechBubbleText: 'Kampanje 60 GB per md. i 2 md.',
    specialMessageText: 'Listen to as music as you want without using your data quota!',
    highlightedFeature: {
        iconName: 'ico_music',
        name: 'Music Freedom',
    },
    button: <Button text="Gå videre" kind="primary" onClick={() => {}} />
};

const B2BCollapsedShowingFeaturesAndSpeechBubble = () => (
    <Subscription
        name="SMART Bedrift"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        priceInfo={['pr. md', 'Ingen bindingstid.']}
        allPricesLink={{
            url: '#',
            text: 'Se alle priser'
        }}
        id="smart-bedrift-expanded"
        color="purple"
        size="medium"
        features={features}
        isShowingFeatures />
);

export default B2BCollapsedShowingFeaturesAndSpeechBubble;