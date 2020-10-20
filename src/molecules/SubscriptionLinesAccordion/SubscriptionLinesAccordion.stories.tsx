import React, { useState } from 'react';
import SubscriptionLinesAccordion from './SubscriptionLinesAccordion';
import { StatefulAccordionList } from '../AccordionList';
import { InfiniteIcon } from '../../atoms/Icon/icons/InfiniteIcon';
import Button from '../../atoms/Button';

export default {
  title: 'Component library/Molecules/SubscriptionLinesAccordion',
  component: SubscriptionLinesAccordion,
};

const disclaimers = (
  <StatefulAccordionList
    accordionItems={[
      {
        id: 'example-1',
        title: 'Om data',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
      },
      {
        id: 'example-2',
        title: 'Utland',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
      },
      {
        id: 'example-3',
        title: 'Abonnementsvilkår',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
      },
    ]}
    isExpandedAccordionIndex={-1}
  />
);

const Footer = () => <Button style={{ margin: '0.5rem 0rem 0.5rem 3rem' }} href="#" kind="link" text="Se utregning" />;

export const Normal = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionLinesAccordion
      dataAmount={20}
      dataUnit="GB"
      id="smart20"
      price={529}
      priceInfo={['pr. md']}
      moneySaved={400}
      normalPrice={1347}
      numberOfSubscriptions={3}
      isExpanded={isExpanded}
      feature={{
        iconName: 'product-music-freedom',
        name: 'Music Freedom',
      }}
      disclaimers={disclaimers}
      footer={<Footer />}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      <ul className="list">
        <li className="list__item">Fri bruk av samtaler, SMS og MMS</li>
        <li className="list__item">Roam Like Home</li>
      </ul>
    </SubscriptionLinesAccordion>
  );
};

export const Inverted = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionLinesAccordion
      dataAmount={20}
      dataUnit="GB"
      id="smart20"
      price={529}
      priceInfo={['pr. md']}
      moneySaved={400}
      normalPrice={1347}
      numberOfSubscriptions={3}
      isInverted={true}
      isExpanded={isExpanded}
      feature={{
        iconName: 'product-music-freedom',
        name: 'Music Freedom',
      }}
      disclaimers={disclaimers}
      scrollToOnOpen={true}
      footer={<Footer />}
      onOpen={() => setIsExpanded(!isExpanded)}
    >
      <ul className="list">
        <li className="list__item">Fri bruk av samtaler, SMS og MMS</li>
        <li className="list__item">Ubegrenset fart. Helt opp til 100GB.</li>
        <li className="list__item">Roam Like Home</li>
      </ul>
    </SubscriptionLinesAccordion>
  );
};

export const WithIcon = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionLinesAccordion
      dataAmountIcon={<InfiniteIcon />}
      dataUnit="GB"
      id="smart20"
      price={529}
      priceInfo={['pr. md']}
      moneySaved={400}
      normalPrice={1347}
      numberOfSubscriptions={3}
      isInverted={true}
      isExpanded={isExpanded}
      feature={{
        iconName: 'infinite',
        name: 'Ubegrenset data',
      }}
      disclaimers={disclaimers}
      footer={<Footer />}
      onOpen={() => setIsExpanded(!isExpanded)}
    >
      <ul className="list">
        <li className="list__item">Fri bruk av samtaler, SMS og MMS</li>
        <li className="list__item">Roam Like Home</li>
      </ul>
    </SubscriptionLinesAccordion>
  );
};
