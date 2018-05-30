import React from 'react';
import { Subscription } from '@telia/styleguide';

const StandaloneSubscription = () => (
    <Subscription
        name='SMART Foobar'
        id='smartFoobar'
        dataAmount={1}
        dataUnit='GB'
        price={249}
        color='green'
        isStandalone
    />
);

export default StandaloneSubscription;