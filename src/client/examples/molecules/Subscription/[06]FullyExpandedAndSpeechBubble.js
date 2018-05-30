import React from 'react';
import { Subscription } from '@telia/styleguide';

const feature = {
    icon: '/public/icons/ico_music.svg',
    name: 'Music Freedom',
};

const FullyExpandedAndSpeechBubble = () => (
    <div className="subscription-wrapper">
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
    </div>
);

export default FullyExpandedAndSpeechBubble;