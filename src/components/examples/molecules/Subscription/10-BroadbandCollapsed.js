import React from 'react';
import { Subscription } from 'component-lib';

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