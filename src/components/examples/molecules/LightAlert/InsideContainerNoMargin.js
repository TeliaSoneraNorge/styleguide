import React from 'react';
import { LightAlert, Container } from '@telia/styleguide';

const wrapperStyles = {
  backgroundColor: '#990AE3',
};

const InsideContainerNotMargin = () => (
  <div style={wrapperStyles}>
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

export default InsideContainerNotMargin;
