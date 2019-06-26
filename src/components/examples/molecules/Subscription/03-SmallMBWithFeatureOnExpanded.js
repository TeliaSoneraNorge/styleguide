import React from 'react';
import { Button, Subscription } from '@telia/styleguide';

const features = {
    button: <Button text="Gå videre" kind="primary" onClick={() => {}} />
};

const ThreeDigitsMBSubscription = () => (
    <Subscription
        name="SMART Mini"
        id="smartMini"
        dataAmount={200}
        dataUnit="MB"
        price={99}
        priceInfo={['pr. md', 'Ingen bindingstid.']}
        color="light-orange"
        size="small"
        features={features} />
);

export default ThreeDigitsMBSubscription;