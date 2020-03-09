import React from 'react';
import { LightAlert, Container } from '../../index';

export default {
  title: 'Component library|Molecules/LightAlert',
  component: LightAlert,
};

export const Default = () => (
  <LightAlert title="This is a title">
    <p>
      This is a light alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.
    </p>
  </LightAlert>
);

export const InsideContainerNotMargin = () => (
  <div style={{ backgroundColor: '#990AE3' }}>
    <Container whiteBg size="small" noMargin noPadding>
      <LightAlert noMargin title="This is a title">
        <p>
          This is a light alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </LightAlert>
    </Container>
  </div>
);