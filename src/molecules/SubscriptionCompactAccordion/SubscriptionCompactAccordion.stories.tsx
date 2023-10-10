import React, { useState } from 'react';
import SubscriptionCompactAccordion from './SubscriptionCompactAccordion';
import { StatefulAccordionList } from '../AccordionList';
import Button from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import Paragraph from '../../atoms/Paragraph';

export default {
  title: 'Component library/Molecules/SubscriptionCompactAccordion',
  component: SubscriptionCompactAccordion,
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
    id: 'normal',
    name: 'Telia X - Normal',
    title: '20 Mbit/s',
    price: 499,
    priceInfo: ['/md.'],
    tagLine: 'Hverdagsbruk',
    tagLineIcon: 'speedometer-normal',
  },
  {
    id: 'rask',
    name: 'Telia X - Rask',
    title: '200 Mbit/s',
    price: 549,
    priceInfo: ['/md.'],
    tagLine: 'Strømmeglede',
    tagLineIcon: 'speedometer-rask',
    ribbon: {
      text: 'Mest populær',
      backgroundColor: '#EDC8FF',
      color: '#3F005E',
    },
  },
  {
    id: 'max',
    name: 'Telia X - Max',
    title: '1000 Mbit/s',
    price: 699,
    priceInfo: ['/md.'],
    tagLine: 'Kvalitetsbevissthet',
    tagLineIcon: 'speedometer-max',
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

const FOOTERCHILDREN = (
  <>
    <Paragraph>50,- i rabatt de første 12 md. uten binding. </Paragraph>
    <div>
      <Icon icon="cloud-connect" />
      <Icon icon="broken-phone" />
      <Icon icon="sms" />
    </div>
  </>
);

export const Normal = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      name="Telia X - Normal"
      title="20 Mbit/s"
      id="smart20"
      price={499}
      priceInfo={['/md.']}
      isExpanded={isExpanded}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};

export const withFooter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      name="Telia X - Normal"
      title="20 Mbit/s"
      id="smart20"
      price={499}
      footer={FOOTERCHILDREN}
      priceInfo={['/md.']}
      isExpanded={isExpanded}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};

export const WithStriketrough = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      name="Telia X - Normal"
      title="40 Mbit/s"
      strikethrough="20 Mbit/s"
      id="smart20"
      price={499}
      priceInfo={['/md.']}
      isExpanded={isExpanded}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};

export const WithTagline = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      id="smart20"
      name="Telia X - Normal"
      title="20 Mbit/s"
      tagLine="Hverdagsbruk"
      price={499}
      priceInfo={['/md.']}
      isExpanded={isExpanded}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};

export const WithAll = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      id="smart20"
      name="Telia X - Normal"
      title="40 Mbit/s"
      strikethrough="20 Mbit/s"
      tagLine="Hverdagsbruk"
      tagLineIcon="speedometer"
      discountLine="Spar 350,-"
      footer={FOOTERCHILDREN}
      price={1297}
      priceStriketrough={1647}
      priceStriketroughInfo="/md."
      priceInfo={['/md.']}
      ribbon={{
        text: 'Mest populær',
        backgroundColor: '#EDC8FF',
        color: '#3F005E',
      }}
      isExpanded={isExpanded}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};

export const Multiple = () => {
  const [expandedSubscriptionIndex, setExpandedSubscriptionIndex] = useState(-1);

  return (
    <>
      {SUBSCRIPTIONS.map((subscription, index) => (
        <SubscriptionCompactAccordion
          key={index}
          {...subscription}
          isExpanded={expandedSubscriptionIndex === index}
          onOpen={() => {
            expandedSubscriptionIndex === index
              ? setExpandedSubscriptionIndex(-1)
              : setExpandedSubscriptionIndex(index);
          }}
        >
          {CHILDREN}
        </SubscriptionCompactAccordion>
      ))}
    </>
  );
};

export const Black = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      id="smart20"
      name="Telia X - Normal"
      title="40 Mbit/s"
      strikethrough="20 Mbit/s"
      price={499}
      priceInfo={['/md.']}
      isExpanded={isExpanded}
      scrollToOnOpen={true}
      onOpen={() => setIsExpanded(!isExpanded)}
      variant="black"
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};

export const Purple = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      name="Telia X - Normal"
      title="20 Mbit/s"
      id="smart20"
      price={499}
      strikethrough="10 Mbit/s"
      priceInfo={['/md.']}
      isExpanded={isExpanded}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
      variant="purple"
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};
