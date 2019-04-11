import React from 'react';
import { Subscription } from 'component-lib';

const feature = {
    iconName: 'ico_music',
    name: 'Music Freedom',
};

const B2BExpandedNoSpeechBubble = () => (
    <Subscription
        name="SMART Bedrift"
        id="smart-bedrift-expanded"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        color="purple"
        size="medium"
        highlightedFeature={feature}
        specialMessageText="Listen to as music as you want without using your data quota!"
        isExpanded
        isShowingFeatures />
);

export default B2BExpandedNoSpeechBubble;