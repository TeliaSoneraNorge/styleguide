import React, { useState } from 'react';
import { Alert, StatefulAlert, Button, Container } from '../../index';

export default {
  title: 'Component library|Molecules/Alert',
  component: Alert,
};

export const Default = () => (
  <Alert kind="info">
    <p>
      This is a info alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const Negative = () => (
  <Alert kind="negative">
    <p>
      This is a negative alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const Positive = () => (
  <Alert kind="positive">
    <p>
      This is a positive alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const PositiveLarge = () => (
  <Alert kind="positive" size="large">
    <p>
      This is a positive alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const PositiveLargeMinimizable = () => (
  <StatefulAlert kind="positive" size="large" minimizedText="CLICK" minimizable>
    <p>
      This is a positive alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </StatefulAlert>
);

export const PositiveLargeWithBorders = () => (
  <Alert kind="positive" size="large-with-borders">
    <p>
      This is a positive alert with borders. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const Warning = () => (
  <Alert kind="warning">
    <p>
      This is a warning alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const WithLinks = () => {
  const links = [{ text: 'This link might be of interest', url: '#' }, { text: 'And this one too', url: '#' }];
  
  return (
    <Alert kind="positive" links={links}>
      <p>
        With links. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
    </Alert>
  )
};

export const WithScrollTo = () => {
  const [shouldScroll, setShouldScroll] = useState(false);

  if (shouldScroll) {
    setTimeout(() => {
      setShouldScroll(false)
    }, 1000)
  }

  return (
    <div>
      <Container size="medium">
        <Button onClick={() => setShouldScroll(true)} text="Click me" />
      </Container>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <Alert kind="positive" scrollTo={shouldScroll}>
        <p>
          With scroll to. Click button. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </Alert>
    </div>
  );
};