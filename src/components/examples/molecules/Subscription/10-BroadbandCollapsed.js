import React from 'react';
import { Subscription } from 'component-lib';

const BroadbandCollapsed = () => (
    <Subscription
        id="broadband-subscription-collapsed"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        priceInfo={['pr. md', 'Ingen bindingstid.']}
        additionalInfo={{
            routerPrice: 'Ruter fra 499,-',
            binding: 'ved 12 mnd binding'
        }}
        color="blue"
        size="small"
        isBroadband />
);

export default BroadbandCollapsed;