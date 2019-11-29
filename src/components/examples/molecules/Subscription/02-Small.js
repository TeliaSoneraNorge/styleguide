import React, { useState } from 'react';
import { Subscription } from '@telia/styleguide';

const SmallSubscription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      name="SMART Mini"
      id="smartMini"
      dataAmount={1}
      dataUnit="GB"
      price={249}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      color="pink"
      size="small"
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    />
  );
};

export default SmallSubscription;
