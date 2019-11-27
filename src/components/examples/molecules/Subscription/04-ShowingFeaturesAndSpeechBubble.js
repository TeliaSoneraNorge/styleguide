import React, { useState } from 'react';
import { Button, Subscription } from '@telia/styleguide';

const features = {
  highlightedFeature: {
    iconName: 'ico_music',
    name: 'Music Freedom',
  },
  speechBubbleText: 'Kampanje 60 GB per md. i 2 md.',
  button: <Button text="Gå videre" kind="primary" onClick={() => {}} />,
};

const ShowingFeaturesAndSpeechBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Subscription
      name="SMART Total"
      id="smartTotal2"
      dataAmount={40}
      dataUnit="GB"
      price={699}
      priceInfo={['pr. md', 'Ingen bindingstid.']}
      allPricesLink={{
        url: '#',
        text: 'Se alle priser',
      }}
      color="blue"
      size="medium"
      features={features}
      isShowingFeatures
      isExpanded={isExpanded}
      onSelect={() => setIsExpanded(true)}
      onClose={() => setIsExpanded(false)}
    />
  );
};

export default ShowingFeaturesAndSpeechBubble;
