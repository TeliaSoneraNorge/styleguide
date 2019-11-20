import React from 'react';
import { Subscription } from '@telia/styleguide';

const StandaloneSubscription = () => (
  <Subscription
    name="SMART Foobar"
    id="smartFoobar"
    dataAmount={1}
    dataUnit="GB"
    price={249}
    priceInfo={['pr. md', 'Ingen bindingstid.']}
    allPricesLink={{
      url: '#',
      text: 'Se alle priser',
    }}
    color="green"
    isStandalone
  />
);

export default StandaloneSubscription;
