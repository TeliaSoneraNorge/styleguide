import React from 'react';

import { AccordionFlexible } from '../../index';
import { Badge } from '../../atoms/Badge';
import Button from '../../atoms/Button';
import { InfiniteIcon } from '../../atoms/Icon/icons/InfiniteIcon';
import { StatefulAccordionList } from '../AccordionList';

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
    <AccordionFlexible title={'Bredbånd og TV'}>
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

export const TitleLeftAndRightOnly = () => {
  return (
    <AccordionFlexible title={'Bredbånd og TV'} titleRight={'799,- md'} expand={false} disclaimers={disclaimers}>
      <ul className="list">
        <li className="list__item">Fri bruk av samtaler, SMS og MMS</li>
        <li className="list__item">Ubegrenset fart. Helt opp til 100GB.</li>
        <li className="list__item">Roam Like Home</li>
      </ul>
      <SExampleButton />
    </AccordionFlexible>
  );
};

export const AllContentFieldsFilledAndDoExpandOnLoad = () => {
  return (
    <AccordionFlexible
      icons={[<InfiniteIcon />, 'internet', 'robot']}
      title={'Bredbånd og TV'}
      ingress={'Få rabatt ved å velge både TV og bredbånd fra Telia'}
      titleRightLineThrough={'999'}
      titleRight={'799,- md'}
      ingressRight={'Ingress Right'}
      badge={<Badge status="communication-light" text="Pakketilbud Her" />}
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

export const AllTextsAndBadgeAndDoExpandOnLoad = () => {
  return (
    <AccordionFlexible
      icons={null}
      title={'Bredbånd og TV'}
      ingress={'Få rabatt ved å velge både TV og bredbånd fra Telia'}
      titleRightLineThrough={'999'}
      titleRight={'799,- md'}
      ingressRight={'Ingress Right'}
      badge={<Badge status="offer" text="Pakketilbud Her" />}
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

export const AllTextsAndDoExpandOnLoad = () => {
  return (
    <AccordionFlexible
      icons={null}
      title={'Bredbånd og TV'}
      ingress={'Få rabatt ved å velge både TV og bredbånd fra Telia'}
      titleRightLineThrough={'999'}
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

export const AllTextsWithCustomBadgeAndScrollToOnOpen = () => {
  return (
    <AccordionFlexible
      icons={null}
      title={'Bredbånd og TV'}
      ingress={
        'Få rabatt ved å velge både TV og bredbånd fra Telia. Få enda mer rabatt om du bestiller nå i dag, dette er en lang ingress'
      }
      titleRightLineThrough={'999'}
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

export const TonOfIconsWithOnClickEvents = () => {
  return (
    <AccordionFlexible
      icons={['internet', 'internet', 'heart', 'robot', 'heart', 'robot']}
      onClosing={() => {
        alert('Hello on closing');
      }}
      onOpening={() => {
        alert('Hello on opening');
      }}
      title={'Bredbånd og TV'}
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

export const AsDesigned = () => {
  return (
    <AccordionFlexible
      icons={['internet', 'robot']}
      title={'Bredbånd og TV'}
      ingress={'Få rabatt ved å velge både TV og bredbånd fra Telia'}
      titleRight={'Fra 298,-/md.'}
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
