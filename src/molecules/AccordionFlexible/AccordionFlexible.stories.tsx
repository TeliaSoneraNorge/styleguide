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

export const MinimumLeftHeading = () => {
  return (
    <AccordionFlexible titleLeft={'Bredbånd og TV'}>
      <ul className="list">
        <li className="list__item">Fri bruk av samtaler, SMS og MMS</li>
        <li className="list__item">Ubegrenset fart. Helt opp til 100GB.</li>
        <li className="list__item">Roam Like Home</li>
      </ul>
      <SExampleButton />
    </AccordionFlexible>
  );
};

export const MinimumRightHeading = () => {
  return (
    <AccordionFlexible titleRight={'Bredbånd og TV'}>
      <ul className="list">
        <li className="list__item">Fri bruk av samtaler, SMS og MMS</li>
        <li className="list__item">Ubegrenset fart. Helt opp til 100GB.</li>
        <li className="list__item">Roam Like Home</li>
      </ul>
      <SExampleButton />
    </AccordionFlexible>
  );
};

export const SimpleNoIconNoBadgeNoIngress = () => {
  return (
    <AccordionFlexible titleLeft={'Bredbånd og TV'} titleRight={'799,- md'} expand={false} disclaimers={disclaimers}>
      <ul className="list">
        <li className="list__item">Fri bruk av samtaler, SMS og MMS</li>
        <li className="list__item">Ubegrenset fart. Helt opp til 100GB.</li>
        <li className="list__item">Roam Like Home</li>
      </ul>
      <SExampleButton />
    </AccordionFlexible>
  );
};

export const MultipleIconsWithBadge = () => {
  return (
    <AccordionFlexible
      icons={[<InfiniteIcon />, 'internet']}
      titleLeft={'Bredbånd og TV'}
      ingressLeft={'Få rabatt ved å velge både TV og bredbånd fra Telia'}
      previousTitleSuffixRight={'fra'}
      previousTitleRight={'999'}
      titleRight={'799,- md'}
      ingressRight={'Ingress Right'}
      badge={<Badge status="offer" text="Pa kkeTi lbud Her" />}
      expand={true}
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

export const NoIconWithBadge = () => {
  return (
    <AccordionFlexible
      icons={null}
      titleLeft={'Bredbånd og TV'}
      ingressLeft={'Få rabatt ved å velge både TV og bredbånd fra Telia'}
      previousTitleSuffixRight={'fra'}
      previousTitleRight={'999'}
      titleRight={'799,- md'}
      ingressRight={'Ingress Right'}
      badge={<Badge status="offer" text="Pa kkeTi lbud Her" />}
      expand={true}
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

export const MultipleIconsNoBadge = () => {
  return (
    <AccordionFlexible
      icons={null}
      titleLeft={'Bredbånd og TV'}
      ingressLeft={'Få rabatt ved å velge både TV og bredbånd fra Telia'}
      previousTitleSuffixRight={'fra'}
      previousTitleRight={'999'}
      titleRight={'799,- md'}
      ingressRight={
        'Rabatten varer ut hele året, fra og med 21. juli, til og med 22. juli neste år. Ingen andre tilbud matcher dette!'
      }
      badge={null}
      expand={true}
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

export const MultipleIconsWithCustomBadgeObjectWithScrollTo = () => {
  return (
    <AccordionFlexible
      icons={null}
      titleLeft={'Bredbånd og TV'}
      ingressLeft={
        'Få rabatt ved å velge både TV og bredbånd fra Telia. Få enda mer rabatt om du bestiller nå i dag, dette er en lang ingress'
      }
      previousTitleSuffixRight={'fra'}
      previousTitleRight={'999'}
      titleRight={'799,- md'}
      ingressRight={
        'Rabatten varer ut hele året, fra og med 21. juli, til og med 22. juli neste år. Ingen andre tilbud matcher dette!'
      }
      badge={{ status: 'offer', text: 'Pakketilbud!' }}
      expand={true}
      scrollToOnOpen={true}
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

export const TonOfIcons = () => {
  return (
    <AccordionFlexible
      icons={['internet', 'internet', 'heart', 'robot', 'heart', 'robot']}
      titleLeft={'Bredbånd og TV'}
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
