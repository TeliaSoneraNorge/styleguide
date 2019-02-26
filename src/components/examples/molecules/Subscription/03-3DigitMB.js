import React from 'react';
import { Subscription } from '@telia/styleguide';

const ThreeDigitsMBSubscription = () => (
    <Subscription
        name="SMART Mini"
        id="smartMini"
        dataAmount={200}
        dataUnit="MB"
        price={99}
        color="light-orange"
        size="small" />
);

export default ThreeDigitsMBSubscription;