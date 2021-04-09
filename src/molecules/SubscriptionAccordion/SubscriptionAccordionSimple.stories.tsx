import React, { useState } from 'react';
import SubscriptionAccordionSimple from './SubscriptionAccordionSimple';
import Button from './../../atoms/Button';

export default {
  title: 'Component library/Molecules/SubscriptionAccordionSimple',
  component: SubscriptionAccordionSimple,
};

const SExampleButton = () => <Button kind="primary" text="Velg" size="small" margin="bottom" onClick={() => {}} />;

export const StandaloneSubscriptionAccordionSimple = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionAccordionSimple
      id="smart20"
      title="Beholde eksisterende mobilabonnement"
      isExpanded={isExpanded}
      onOpen={() => setIsExpanded(!isExpanded)}
    >
      <ul className="list">
        <li className="list__item">Fri bruk av samtaler, SMS og MMS</li>
        <li className="list__item">Roam Like Home</li>
      </ul>
      <SExampleButton />
    </SubscriptionAccordionSimple>
  );
};
