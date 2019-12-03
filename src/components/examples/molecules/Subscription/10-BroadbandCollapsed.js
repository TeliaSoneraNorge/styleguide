import React, { useState } from 'react';
import { Subscription } from '@telia/styleguide';

const BroadbandCollapsed = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      id="broadband-subscription-collapsed"
      dataAmount={40}
      dataUnit="GB"
      price={699}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      additionalInfo={{
        routerPrice: 'Ruter fra 499,-',
        binding: 'ved 12 mnd binding',
      }}
      color="blue"
      size="small"
      isBroadband
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    />
  );
};

export default BroadbandCollapsed;
