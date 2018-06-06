import React from 'react';
import { Subscription } from '@telia/styleguide';

const feature = {
    icon: '/public/icons/ico_music.svg',
    name: 'Music Freedom',
};

const B2BExpanded = () => (
    <Subscription
        name="SMART Bedrift"
        id="smart-bedrift-expanded"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        color="purple"
        size="small"
        highlightedFeature={feature}
        specialMessageText="Listen to as music as you want without using your data quota!"
        isExpanded
        isShowingFeatures />
);

export default B2BExpanded;