import React from 'react';
import { Subscription } from 'component-lib';

const ThreeDigitsMBSubscription = () => (
    <Subscription
        name="SMART Mini"
        id="smartMini"
        dataAmount={200}
        dataUnit="MB"
        price={99}
        priceInfo={['pr. md', 'Ingen bindingstid.']}
        color="light-orange"
        size="small" />
);

export default ThreeDigitsMBSubscription;