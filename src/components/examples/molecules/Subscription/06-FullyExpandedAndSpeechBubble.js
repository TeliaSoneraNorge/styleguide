import React from 'react';
import { Subscription } from 'component-lib';

const feature = {
    iconName: 'ico_music',
    name: 'Music Freedom',
};

const FullyExpandedAndSpeechBubble = () => (
    <Subscription
        name="SMART Pluss"
        id="smartPluss2"
        dataAmount={6}
        dataUnit="GB"
        price={399}
        color="green"
        size="medium"
        highlightedFeature={feature}
        speechBubbleText="Kampanje 60 GB per md. i 2 md."
        specialMessageText="Listen to as music as you want without using your data quota!"
        isShowingFeatures
        isExpanded />
);

export default FullyExpandedAndSpeechBubble;