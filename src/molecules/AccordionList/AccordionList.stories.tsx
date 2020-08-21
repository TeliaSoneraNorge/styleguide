import React from 'react';
import { AccordionList, StatefulAccordionList } from '../../index';

export default {
  title: 'Component library/Molecules/AccordionList',
  component: AccordionList,
};

export const ListOfAccordions = () => (
  <AccordionList
    accordionItems={[
      {
        id: 'example-1',
        title: 'A closed accordion heading',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
      },
      {
        id: 'example-2',
        title: 'An open accordion heading',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
      },
      {
        id: 'example-3',
        title: 'Accordion with icon and preamble',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
        icon: 'ico_mobile_o',
        text: 'Ønsker du å gi dine ansatte større frihet, og samtidig sikre selskapets…',
      },
    ]}
    isExpandedAccordionIndex={1}
  />
);

export const ListOfStatefulAccordions = () => (
  <StatefulAccordionList
    accordionItems={[
      {
        id: 'example-1',
        title: 'A closed accordion heading',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
      },
      {
        id: 'example-2',
        title: 'An open accordion heading',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
      },
      {
        id: 'example-5',
        title: 'Accordion with icon',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
        icon: 'ico_mobile_o',
      },
      {
        id: 'example-3',
        title: 'Accordion with icon and preamble',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
        icon: 'ico_mobile_o',
        text: 'Ønsker du å gi dine ansatte større frihet, og samtidig sikre selskapets…',
      },
      {
        id: 'example-4',
        title: 'Accordion with log in button',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
        text: 'Ønsker du å gi dine ansatte større frihet, og samtidig sikre selskapets…',
        button: 'Log in',
      },
      {
        id: 'example-5',
        title: 'Accordion with image and primary button',
        text: 'Pris 399,-',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
        imageUrl:
          'http://images.ctfassets.net/iz15t1lxx44v/gLAqNl3tdeysGeEGWEkK0/60db223c08c108cb9fd2c9c698be04de/ideal-wallet-case-black-iphone-8-7-6-6s1.png?h=40',
        button: 'Legg til',
        buttonType: 'primary',
      },
    ]}
    isExpandedAccordionIndex={1}
  />
);

export const ListOfStatefulAccordionsNoBorder = () => (
  <StatefulAccordionList
    noBorder
    accordionItems={[
      {
        id: 'example-1',
        title: 'A closed accordion heading',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
      },
      {
        id: 'example-2',
        title: 'An open accordion heading',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
      },
      {
        id: 'example-5',
        title: 'Accordion with icon',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
        icon: 'ico_mobile_o',
      },
      {
        id: 'example-3',
        title: 'Accordion with icon and preamble',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
        icon: 'ico_mobile_o',
        text: 'Ønsker du å gi dine ansatte større frihet, og samtidig sikre selskapets…',
      },
      {
        id: 'example-4',
        title: 'Accordion with log in button',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
        text: 'Ønsker du å gi dine ansatte større frihet, og samtidig sikre selskapets…',
        button: 'Log in',
      },
      {
        id: 'example-5',
        title: 'Accordion with image and primary button',
        text: 'Pris 399,-',
        children:
          'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.',
        imageUrl:
          'http://images.ctfassets.net/iz15t1lxx44v/gLAqNl3tdeysGeEGWEkK0/60db223c08c108cb9fd2c9c698be04de/ideal-wallet-case-black-iphone-8-7-6-6s1.png?h=40',
        button: 'Legg til',
        buttonType: 'primary',
      },
    ]}
    isExpandedAccordionIndex={1}
  />
);
