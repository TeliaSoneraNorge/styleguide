import React, { useState } from 'react';
import SubscriptionAccordion from './SubscriptionAccordion';
import { StatefulAccordionList } from '../AccordionList';

export default {
  title: 'Component library/Molecules/SubscriptionAccordion',
  component: SubscriptionAccordion,
};

const disclaimers = (
  // @ts-expect-error ts-migrate(2769) FIXME: Object literal may only specify known properties, ... Remove this comment to see the full error message
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

export const StandaloneSubscriptionAccordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
    <SubscriptionAccordion
      name="20 GB"
      id="smart20"
      price={529}
      priceInfo={['pr. md']}
      isExpanded={isExpanded}
      feature={{
        iconName: "product-music-freedom",
        name: "Music Freedom"
      }}
      disclaimers={disclaimers}
      onOpen={() => setIsExpanded(!isExpanded)}
    >
      <ul className="list">
          <li className="list__item">
            Fri bruk av samtaler, SMS og MMS
          </li>
          <li className="list__item">
            Roam Like Home
          </li>
      </ul>
    </SubscriptionAccordion>
  );
};

export const InvertedSubscriptionAccordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
    <SubscriptionAccordion
      name="Telia X"
      id="smartX"
      price={549}
      priceInfo={['pr. md']}
      isInverted={true}
      isExpanded={isExpanded}
      feature={{
        iconName: "infinite",
        name: "Ubegrenset data"
      }}
      disclaimers={disclaimers}
      scrollToOnOpen={true}
      onOpen={() => setIsExpanded(!isExpanded)}
    >
      <ul className="list">
          <li className="list__item">
            Fri bruk av samtaler, SMS og MMS
          </li>
          <li className="list__item">
            Ubegrenset fart. Helt opp til 100GB.
          </li>
          <li className="list__item">
            Roam Like Home
          </li>
      </ul>
    </SubscriptionAccordion>
  );
};

export const DiscountSubscriptionAccordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
    <SubscriptionAccordion
      name="Telia X"
      id="smartX"
      price={549}
      priceInfo={['pr. md']}
      isExpanded={isExpanded}
      feature={{
        iconName: "infinite",
        name: "Ubegrenset data"
      }}
      discount={{
        price: 1891,
        description: "i rabatt på tlf"
      }}
      disclaimers={disclaimers}
      onOpen={() => setIsExpanded(!isExpanded)}
    >
      <ul className="list">
          <li className="list__item">
            Fri bruk av samtaler, SMS og MMS
          </li>
          <li className="list__item">
            Ubegrenset fart. Helt opp til 100GB.
          </li>
          <li className="list__item">
            Roam Like Home
          </li>
      </ul>
    </SubscriptionAccordion>
  );
};