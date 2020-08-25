import React, { useState } from 'react';
import { Alert, StatefulAlert, Button, Container } from '../../index';

export default {
  title: 'Component library/Molecules/Alert',
  component: Alert,
};

export const Default = () => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
  <Alert kind="info">
    <p>
      This is a info alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const Negative = () => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
  <Alert kind="negative">
    <p>
      This is a negative alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const Positive = () => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
  <Alert kind="positive">
    <p>
      This is a positive alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const PositiveLarge = () => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
  <Alert kind="positive" size="large">
    <p>
      This is a positive alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const PositiveLargeMinimizable = () => (
  // @ts-expect-error ts-migrate(2769) FIXME: Property 'minimizable' does not exist on type 'Int... Remove this comment to see the full error message
  <StatefulAlert kind="positive" size="large" minimizedText="CLICK" minimizable>
    <p>
      This is a positive alert. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </StatefulAlert>
);

export const PositiveLargeWithBorders = () => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
  <Alert kind="positive" size="large-with-borders">
    <p>
      This is a positive alert with borders. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </Alert>
);

export const Warning = () => (
  // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
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

      {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message */}
      <Alert kind="positive" scrollTo={shouldScroll}>
        <p>
          With scroll to. Click button. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </Alert>
    </div>
  );
};