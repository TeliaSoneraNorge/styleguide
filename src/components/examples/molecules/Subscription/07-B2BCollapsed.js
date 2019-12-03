import React, { useState } from 'react';
import { Subscription } from '@telia/styleguide';

const feature = {
  iconName: 'ico_music',
  name: 'Music Freedom',
};

const B2BCollapsed = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      name="SMART Bedrift"
      id="smart-bedrift-collapsed"
      dataAmount={40}
      dataUnit="GB"
      price={699}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      color="purple"
      size="small"
      highlightedFeature={feature}
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    />
  );
};

export default B2BCollapsed;
