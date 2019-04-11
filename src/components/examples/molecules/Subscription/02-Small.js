import React from 'react';
import { Subscription } from 'component-lib';

const SmallSubscription = () => (
    <Subscription
        name="SMART Mini"
        id="smartMini"
        dataAmount={1}
        dataUnit="GB"
        price={249}
        color="pink"
        size="small" />
);

export default SmallSubscription;