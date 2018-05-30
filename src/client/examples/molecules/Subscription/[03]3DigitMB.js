import React from 'react';
import { Subscription } from '@telia/styleguide';

const ThreeDigitsMBSubscription = () => (
    <div className='subscription-wrapper'>
        <Subscription
            name='SMART Mini'
            id='smartMini'
            dataAmount={200}
            dataUnit='MB'
            price={99}
            color='light-orange'
            size='small'
        />
    </div>
);

export default ThreeDigitsMBSubscription;