import React from 'react';
import { Subscription } from '@telia/styleguide';

const feature = {
    iconName: 'ico_music',
    name: 'Music Freedom',
};

const B2BCollapsedShowingFeaturesAndSpeechBubble = () => (
    <Subscription
        name="SMART Bedrift"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        id="smart-bedrift-expanded"
        color="purple"
        size="medium"
        speechBubbleText="Kampanje 60 GB per md. i 2 md."
        highlightedFeature={feature}
        specialMessageText="Listen to as music as you want without using your data quota!"
        isShowingFeatures />
);

export default B2BCollapsedShowingFeaturesAndSpeechBubble;