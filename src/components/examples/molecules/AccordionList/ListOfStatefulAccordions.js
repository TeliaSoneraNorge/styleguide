import React from 'react';
import { StatefulAccordionList } from '@telia/styleguide';

/**Status: Add possibility for passing objects to the right content area */

const ListOfStatefulAccordions = () => (
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
    ]}
    isExpandedAccordionIndex={1}
  />
);

export default ListOfStatefulAccordions;
