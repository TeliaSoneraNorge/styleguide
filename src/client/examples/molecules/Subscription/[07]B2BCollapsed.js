import React from 'react';
import { Subscription } from '@telia/styleguide';

const feature = {
    icon: '/public/icons/ico_music.svg',
    name: 'Music Freedom',
};

const B2BCollapsed = () => (
    <Subscription
        name="SMART Bedrift"
        id="smart-bedrift-collapsed"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        color="purple"
        size="small"
        highlightedFeature={feature} />
);

export default B2BCollapsed;