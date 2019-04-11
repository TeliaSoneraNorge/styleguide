import React from 'react';
import { Subscription } from 'component-lib';

const feature = {
    iconName: 'ico_music',
    name: 'Music Freedom',
};

const FullyExpandedAndNoSpeechBubble = () => (
    <Subscription
        name="SMART Pluss"
        id="smartPluss"
        dataAmount={6}
        dataUnit="GB"
        price={399}
        color="green"
        size="medium"
        highlightedFeature={feature}
        specialMessageText="Listen to as music as you want without using your data quota!"
        isShowingFeatures
        isExpanded />
);

export default FullyExpandedAndNoSpeechBubble;