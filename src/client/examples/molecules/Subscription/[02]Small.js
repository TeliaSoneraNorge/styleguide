import React from 'react';
import { Subscription } from '@telia/styleguide';

const SmallSubscription = () => (
    <div className='subscription-wrapper'>
        <Subscription
            name='SMART Mini'
            id='smartMini'
            dataAmount={1}
            dataUnit='GB'
            price={249}
            color='pink'
            size='small'
        />
    </div>
);

export default SmallSubscription;