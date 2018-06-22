import React from 'react';
import { Subscription } from '@telia/styleguide';

const BroadbandExpanded = () => (
    <Subscription
        id="broadband-subscription-expanded"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        color="blue"
        size="small"
        isExpanded
        isBroadband />
);

export default BroadbandExpanded;