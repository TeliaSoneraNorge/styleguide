import React from 'react';
import { StatsDisplay, StatsDisplayItem, SvgIcon, Container } from '@telia/styleguide';

const StatsDisplayDemo = () => (
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

export default StatsDisplayDemo;
