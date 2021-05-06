import React, { useState } from 'react';
import SubscriptionLinesAccordion from './SubscriptionLinesAccordion';
import { StatefulAccordionList } from '../AccordionList';
import { InfiniteIcon } from '../../atoms/Icon/icons/InfiniteIcon';
import Button from '../../atoms/Button';

export default {
  title: 'Component library/Molecules/SubscriptionLinesAccordion',
  component: SubscriptionLinesAccordion,
};

const ACCORDIONS = (
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
        title: 'Om abonnementet',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
      },
      {
        id: 'example-4',
        title: 'Se utregning',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
      },
    ]}
    isExpandedAccordionIndex={-1}
  />
);

const SUBSCRIPTIONS = [
  {
    dataAmount: 20,
    dataUnit: 'GB',
    id: 'smart20',
    price: 529,
    priceInfo: ['pr. md'],
    description1: 'Du sparer 400,- pr md.',
    description2: 'Normalpris 1647,- pr md.',
    isInverted: true,
    feature: {
      iconName: 'infinite',
      name: 'Ubegrenset data',
    },
  },
  {
    dataAmount: 10,
    dataUnit: 'GB',
    id: 'smart10',
    price: 120,
    priceInfo: ['pr. md'],
    description1: 'Du sparer 300,- pr md.',
    description2: 'Normalpris 1247,- pr md.',
    isInverted: false,
  },
  {
    dataAmount: 5,
    dataUnit: 'GB',
    id: 'smart5',
    price: 120,
    priceInfo: ['pr. md'],
    description1: 'Du sparer 150,- pr md.',
    isInverted: false,
  },
  {
    dataAmount: 3,
    dataUnit: 'GB',
    id: 'smart3',
    price: 120,
    priceInfo: ['pr. md'],
    isInverted: false,
  },
];

const CHILDREN = (
  <>
    <ul className="list">
      <li className="list__item">Fri bruk av samtaler, SMS og MMS</li>
      <li className="list__item">Roam Like Home</li>
    </ul>
    <Button style={{ margin: '1.5rem 0' }} kind="primary" text="Velg og fortsett"></Button>
    {ACCORDIONS}
  </>
);

export const Normal = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionLinesAccordion
      dataAmount={20}
      dataUnit="GB"
      id="smart20"
      price={529}
      priceInfo={['pr. md']}
      description1="Du sparer 400,- pr md."
      description2="Normalpris 1647,- pr md."
      numberOfSubscriptions={3}
      isExpanded={isExpanded}
      feature={{
        iconName: 'product-music-freedom',
        name: 'Music Freedom',
      }}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {CHILDREN}
    </SubscriptionLinesAccordion>
  );
};

export const ExtraData = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionLinesAccordion
      dataAmount={20}
      dataUnit="GB"
      extraDataAmount={5}
      extraDataUnit="GB"
      id="smart20"
      price={529}
      priceInfo={['pr. md']}
      description1="Du sparer 400,- pr md."
      description2="Normalpris 1647,- pr md."
      numberOfSubscriptions={3}
      isExpanded={isExpanded}
      feature={{
        iconName: 'product-music-freedom',
        name: 'Music Freedom',
      }}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {CHILDREN}
    </SubscriptionLinesAccordion>
  );
};

export const DoubleData = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionLinesAccordion
      dataAmount={20}
      dataUnit="GB"
      doubleDataAmount={5}
      id="smart20"
      price={529}
      priceInfo={['pr. md']}
      description1="Du sparer 400,- pr md."
      numberOfSubscriptions={3}
      isExpanded={isExpanded}
      feature={{
        iconName: 'product-music-freedom',
        name: 'Music Freedom',
      }}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {CHILDREN}
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
      description1="Du sparer 400,- pr md."
      description2="Normalpris 1647,- pr md."
      numberOfSubscriptions={3}
      isInverted={true}
      isExpanded={isExpanded}
      feature={{
        iconName: 'product-music-freedom',
        name: 'Music Freedom',
      }}
      scrollToOnOpen={true}
      onOpen={() => setIsExpanded(!isExpanded)}
    >
      {CHILDREN}
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
      description1="Du sparer 400,- pr md."
      description2="Normalpris 1647,- pr md."
      numberOfSubscriptions={3}
      isInverted={true}
      isExpanded={isExpanded}
      feature={{
        iconName: 'infinite',
        name: 'Ubegrenset data',
      }}
      onOpen={() => setIsExpanded(!isExpanded)}
    >
      {CHILDREN}
    </SubscriptionLinesAccordion>
  );
};

export const MultipleWithFooter = () => {
  const [expandedSubscriptionIndex, setExpandedSubscriptionIndex] = useState(-1);

  return (
    <>
      {SUBSCRIPTIONS.map((subscription, index) => (
        <SubscriptionLinesAccordion
          key={index}
          dataAmount={subscription.dataAmount}
          dataUnit={subscription.dataUnit}
          id={subscription.id}
          price={subscription.price}
          priceInfo={subscription.priceInfo}
          description1={subscription.description1}
          description2={subscription.description2}
          numberOfSubscriptions={3}
          isExpanded={expandedSubscriptionIndex === index}
          isInverted={subscription.isInverted}
          feature={{
            iconName: 'product-music-freedom',
            name: 'Music Freedom',
          }}
          onOpen={() => {
            expandedSubscriptionIndex === index
              ? setExpandedSubscriptionIndex(-1)
              : setExpandedSubscriptionIndex(index);
          }}
          footer={<span>Footer here</span>}
        >
          {CHILDREN}
        </SubscriptionLinesAccordion>
      ))}
    </>
  );
};
