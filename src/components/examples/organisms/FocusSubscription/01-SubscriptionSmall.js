import React from 'react';
import { FocusSubscription } from '@telia/styleguide';

const SubscriptionSmall = () => (
    <FocusSubscription id="smartMini"
        name="SMART Mini"
        dataAmount={1}
        dataUnit="GB"
        price={249}
        color="pink" />
);

export default SubscriptionSmall;
