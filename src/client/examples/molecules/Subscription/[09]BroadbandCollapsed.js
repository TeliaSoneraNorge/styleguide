import React from 'react';
import { Subscription } from '@telia/styleguide';

const BroadbandCollapsed = () => (
    <Subscription
        id="broadband-subscription-collapsed"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        color="blue"
        size="small"
        isBroadband />
);

export default BroadbandCollapsed;