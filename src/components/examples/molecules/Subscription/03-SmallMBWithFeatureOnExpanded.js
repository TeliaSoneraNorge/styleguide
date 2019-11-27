import React, { useState } from 'react';
import { Button, Subscription } from '@telia/styleguide';

const features = {
  button: <Button text="Gå videre" kind="primary" onClick={() => {}} />,
};

const ThreeDigitsMBSubscription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      name="SMART Mini"
      id="smartMini"
      dataAmount={200}
      dataUnit="MB"
      price={99}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      color="light-orange"
      size="small"
      features={features}
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    />
  );
};

export default ThreeDigitsMBSubscription;
