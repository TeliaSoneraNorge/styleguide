import React, { useState } from 'react';
import SubscriptionCompactAccordion from './SubscriptionCompactAccordion';
import { StatefulAccordionList } from '../AccordionList';
import Button from '../../atoms/Button';
import { Icon, IconDefinition } from '../../atoms/Icon';
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
    name: '20 Mbps – Telia X Start',
    title: 'Ubegrenset data',
    price: 499,
    priceInfo: ['/md.'],
  },
  {
    id: 'rask',
    name: '440 Mbps – Telia X Basis',
    title: 'Ubegrenset data',
    price: 549,
    priceInfo: ['/md.'],
    ribbon: {
      text: 'Mest populær',
      backgroundColor: '#55168c',
      color: '#fff',
    },
  },
  {
    id: 'max',
    name: '1000 Mbps – Telia X Max',
    title: 'Ubegrenset data',
    price: 699,
    priceInfo: ['/md.'],
    tagLineIcon: 'speedometer-max' as IconDefinition,
  },
];

const CHILDREN = (
  <>
    <ul className="list">
      <li className="list__item">Fri bruk av samtaler, SMS og MMS</li>
      <li className="list__item">Roam Like Home</li>
    </ul>
    <Button style={{ margin: '1.5rem 0' }} kind="voca-purple" text="Velg og fortsett"></Button>
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

export const NormalAsArticle = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      tag="article"
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

export const WithRibbon = () => {
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
      ribbon={{
        text: 'Mest populær',
        backgroundColor: '#EDC8FF',
        color: '#3F005E',
      }}
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};

export const WithRibbonRight = () => {
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
      ribbon={{
        text: 'Mest populær',
        backgroundColor: '#EDC8FF',
        color: '#3F005E',
        position: 'right',
      }}
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};
export const WithRibbonLeft = () => {
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
      ribbon={{
        text: 'Mest populær',
        backgroundColor: '#EDC8FF',
        color: '#3F005E',
        position: 'left',
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
      priceInfo={['/md.']}
      ribbon={{
        text: 'Mest populær',
        backgroundColor: '#EDC8FF',
        color: '#3F005E',
        position: 'right',
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

export const SelectedWithAll = () => {
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
      priceInfo={['/md.']}
      ribbon={{
        text: 'Mest populær',
        backgroundColor: '#EDC8FF',
        color: '#3F005E',
        position: 'left',
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
          priceStriketrough={index === 0 ? 549 : undefined}
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
      footer={FOOTERCHILDREN}
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
      footer={FOOTERCHILDREN}
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

export const DarkPurple = () => {
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
      variant="dark-purple"
    >
      <ul>
        <li>Fri bruk av samtaler, SMS og MMS</li>
        <li>Roam Like Home</li>
      </ul>
      <Button style={{ margin: '1.5rem 0' }} kind="voca-normal" text="Velg og fortsett"></Button>
    </SubscriptionCompactAccordion>
  );
};

export const WithFamilyDiscount = () => {
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
      familyDiscountInfo="100,- i rabatt for hvert ekstra abonnement"
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};

export const MultipleAccordions = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>();

  return (
    <div>
      <SubscriptionCompactAccordion
        name="Telia X - Normal"
        title="20 Mbit/s"
        id="smart20"
        price={499}
        priceInfo={['/md.']}
        isExpanded={expandedIndex === 0}
        onOpen={() => {
          setExpandedIndex(expandedIndex === 0 ? undefined : 0);
        }}
      >
        {CHILDREN}
      </SubscriptionCompactAccordion>
      <SubscriptionCompactAccordion
        name="Telia X - Normal"
        title="20 Mbit/s"
        id="smart20"
        price={499}
        priceInfo={['/md.']}
        isExpanded={expandedIndex === 1}
        onOpen={() => {
          setExpandedIndex(expandedIndex === 1 ? undefined : 1);
        }}
      >
        {CHILDREN}
      </SubscriptionCompactAccordion>
    </div>
  );
};

export const FooterRibbon = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      name="Telia X - Normal"
      title="20 Mbit/s"
      id="smart20"
      price={499}
      priceInfo={['/md.']}
      isExpanded={isExpanded}
      footer={FOOTERCHILDREN}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
      footerRibbon={{
        text: 'Du får familierabatt på dette abonnementet',
        icon: 'savings',
      }}
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};

export const DiscountInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      name="Telia X - Normal"
      title="20 Mbit/s"
      id="smart20"
      price={499}
      priceStriketrough={699}
      priceInfo={['/md.']}
      isExpanded={isExpanded}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
      footerRibbon={{
        text: 'Du får familierabatt på dette abonnementet',
        icon: 'savings',
      }}
      disountInfo={
        <div style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic', marginTop: '1rem' }}>
          <Icon icon="check-mark" />
          <Paragraph style={{ margin: 0 }}>50,- i rabatt de første 12 md. uten binding.</Paragraph>
        </div>
      }
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};

export const WithPriceStrikethrough = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      name="Telia X - Normal"
      title="20 Mbit/s"
      id="smart20"
      price={499}
      priceStriketrough={699}
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

export const WithPriceStrikethroughBack = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      name="Telia X - Normal"
      title="20 Mbit/s"
      id="smart20"
      price={499}
      priceSuffix="ord. pris"
      priceStriketrough={699}
      priceStriketroughPosition="right"
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

export const WithPricePrefix = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      name="Telia X - Normal"
      title="20 Mbit/s"
      id="smart20"
      price={499}
      pricePrefix="fra"
      priceStriketrough={699}
      priceStriketroughPosition="right"
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

export const WithFullWidthContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionCompactAccordion
      name="Telia X - Normal"
      title="20 Mbit/s"
      id="smart20"
      price={499}
      pricePrefix="fra"
      priceStriketrough={699}
      priceStriketroughPosition="right"
      priceInfo={['/md.']}
      isExpanded={isExpanded}
      onOpen={() => {
        setIsExpanded(!isExpanded);
      }}
      fullWidthContent
    >
      {CHILDREN}
    </SubscriptionCompactAccordion>
  );
};
