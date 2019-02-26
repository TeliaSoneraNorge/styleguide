import React from 'react';
import { Subscription } from '@telia/styleguide';

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