import React from 'react';
import { Breadcrumbs, Container } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Molecules/Breadcrumbs',
  component: Breadcrumbs,
};

export const Default = () => (
  <Container size="large" className="banner--background-grey">
    <Breadcrumbs></Breadcrumbs>
  </Container>
);
