import React, { useState } from 'react';
import { StatsDisplay, StatsDisplayItem, SvgIcon, Container } from '../../index';

export default {
  title: 'Component library|Molecules/StatsDisplay',
  component: StatsDisplay,
};

export const Default = () => (
  <Container size="large">
    <StatsDisplay>
      <StatsDisplayItem heading="21.000" text="KM Fibernett" />
      <StatsDisplayItem iconSvg={<SvgIcon iconName="ico_desktop" color="purple" />} useIcon text="Først med NB-IoT" />
      <StatsDisplayItem heading="99,999" text="% SLA oppetid" />
      <StatsDisplayItem heading="+0,7" text="% Raskere enn TNM" />
      <StatsDisplayItem heading="65,88" text="Petabyte IP-trafikk" />
    </StatsDisplay>
  </Container>
);