import React, { useState } from 'react';
import SubscriptionAccordion from './SubscriptionAccordion';
import { StatefulAccordionList } from '../AccordionList';
import { InfiniteIcon } from '../../atoms/Icon/icons/InfiniteIcon';

export default {
  title: 'Component library/Molecules/SubscriptionAccordion',
  component: SubscriptionAccordion,
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

export const StandaloneSubscriptionAccordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
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

export const WithoutFeature = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SubscriptionAccordion
      name="20 GB"
      id="smart20"
      price={529}
      priceInfo={['pr. md']}
      isExpanded={isExpanded}
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

export const SubscriptionAccordionsWithDescription = () => {
  const [currentSubscription, setCurrentSubscription] = useState(null)

  return (
    <>
    <SubscriptionAccordion
      name="500 GB"
      id="smart500"
      description={
        <span style={{ display: "flex", alignItems: "center" }}>
          <InfiniteIcon style={{ marginRight: "0.4rem" }} />
          <span style={{ fontFamily: "Helvetica Neue Medium" }}>med 10mbit/s etter</span>
        </span>
      }
      price={529}
      priceInfo={['pr. md']}
      isExpanded={currentSubscription === "smart500"}
      feature={{
        iconName: "infinite",
        name: "Ubegrenset data med 10mbit/s hastighet etter 500GB"
      }}
      disclaimers={disclaimers}
      onOpen={() => { currentSubscription === "smart500" ? setCurrentSubscription(null) : setCurrentSubscription("smart500") }}
      buttonText="Neste: Velg ruter"
    >
      <ul className="list">
          <li className="list__item">
            Mustic Freedom inkludert
          </li>
          <li className="list__item">
            Bruk i Norge, Norden og Baltikum er inkludert
          </li>
          <li className="list__item">
            Ruter fra 1,-
          </li>
      </ul>
    </SubscriptionAccordion>
    <SubscriptionAccordion
      name="250 GB"
      id="smart250"
      description={
        <span style={{ display: "flex", alignItems: "center" }}>
          <InfiniteIcon style={{ marginRight: "0.4rem" }} />
          <span style={{ fontFamily: "Helvetica Neue Medium" }}>med 10mbit/s etter</span>
        </span>
      }
      price={529}
      priceInfo={['pr. md']}
      isExpanded={currentSubscription === "smart250"}
      feature={{
        iconName: "infinite",
        name: "Ubegrenset data med 10mbit/s hastighet etter 500GB"
      }}
      disclaimers={disclaimers}
      onOpen={() => { currentSubscription === "smart250" ? setCurrentSubscription(null) : setCurrentSubscription("smart250") }}
      buttonText="Neste: Velg ruter"
    >
      <ul className="list">
          <li className="list__item">
            Mustic Freedom inkludert
          </li>
          <li className="list__item">
            Bruk i Norge, Norden og Baltikum er inkludert
          </li>
          <li className="list__item">
            Ruter fra 1,-
          </li>
      </ul>
    </SubscriptionAccordion>
    </>
  );
};