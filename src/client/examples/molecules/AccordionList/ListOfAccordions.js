import React from 'react';
import { AccordionList } from '@telia/styleguide';

const ListOfAccordions = () => (
    <AccordionList
        accordionItems={[
            {
                id: 'example-1',
                title: 'A closed accordion heading',
                children: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.'
            },
            {
                id: 'example-2',
                title: 'An open accordion heading',
                children: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.'
            }
        ]}
        isExpandedAccordionIndex={1} />
);

export default ListOfAccordions;