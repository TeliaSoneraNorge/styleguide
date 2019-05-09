import React from 'react';
import { Subscription } from 'component-lib';

const SmallSubscription = () => (
    <Subscription
        name="SMART Mini"
        id="smartMini"
        dataAmount={1}
        dataUnit="GB"
        price={249}
        priceInfo={['pr. md', 'Ingen bindingstid.']}
        color="pink"
        size="small" />
);

export default SmallSubscription;