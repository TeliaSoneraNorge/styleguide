import React from 'react';
import { Accordion } from '../../index';

export default {
  title: 'Component library|Molecules/Accordion',
  component: Accordion,
};

export const Default = () => (
  <Accordion title="Lorem ipsum">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ipsum posuere blandit ornare. Phasellus
    consequat aliquet pellentesque. Curabitur est nulla, rhoncus non turpis in, dignissim consectetur nunc. Vestibulum
    fringilla dolor nulla, non blandit turpis aliquet vel. Suspendisse potenti.
  </Accordion>
);

export const ExpandedAccordion = () => (
  <Accordion title="Lorem ipsum" isExpanded={true}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ipsum posuere blandit ornare. Phasellus
    consequat aliquet pellentesque. Curabitur est nulla, rhoncus non turpis in, dignissim consectetur nunc. Vestibulum
    fringilla dolor nulla, non blandit turpis aliquet vel. Suspendisse potenti.
  </Accordion>
);
