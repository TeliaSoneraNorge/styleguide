import React from 'react';
import { StatefulAccordionList } from '../AccordionList';
import Button from '../../atoms/Button';
import { Badge } from '../../atoms/Badge';
import { AccordionFlexible } from '../../index';
import { InfiniteIcon } from '../../atoms/Icon/icons/InfiniteIcon';

export default {
  title: 'Component library/Molecules/AccordionFlexible',
  component: AccordionFlexible,
};

const SExampleButton = () => <Button kind="primary" text="Velg" size="small" margin="bottom" onClick={() => {}} />;

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
export const DiscountPriceSubscriptionAccordion = () => {
  return (
    <AccordionFlexible
      titleIcon={<InfiniteIcon />}
      titleIcon2={'heart'}
      titleLeft={'Left'}
      ingressLeft={'Ingress left'}
      previousTitleRight={'Prev'}
      titleRight={'Now'}
      ingressRight={'Ingress Right'}
      badge={null}
      isExpanded={false}
      disclaimers={disclaimers}
    >
      <ul className="list">
        <li className="list__item">Fri bruk av samtaler, SMS og MMS</li>
        <li className="list__item">Ubegrenset fart. Helt opp til 100GB.</li>
        <li className="list__item">Roam Like Home</li>
      </ul>
      <SExampleButton />
    </AccordionFlexible>
  );
};
