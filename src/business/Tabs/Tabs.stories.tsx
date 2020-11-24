import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs, Tab } from './index';

storiesOf('Business/Tabs', module)
  .add('Underlined', () => {
    return (
      <>
        <br />
        <p>
          The <code>Tab</code> items accept a path or a value, and will render an <code>ancor</code> or{' '}
          <code>button accordingly</code>. <br />
          Either way you need to spesify the click handler. This is to support any routing framework
        </p>
        <br />
        <h2>Ancor tabs</h2>
        <TabsWithPath />
        <h3>centered</h3>
        <TabsWithPath centered={true} />
        <h3>Full width version</h3>
        <TabsWithPath fullWidth={true} />

        <h2>Button tabs</h2>
        <TabsWithValue />
        <h3>Centered</h3>
        <TabsWithValue centered={true} />
        <h3>Full width</h3>
        <TabsWithValue fullWidth={true} />
      </>
    );
  })
  .add('Outlined', () => {
    return (
      <>
        <br />
        <p>
          The <code>Tab</code> items accept a path or a value, and will render an <code>ancor</code> or{' '}
          <code>button accordingly</code>. <br />
          Either way you need to spesify the click handler. This is to support any routing framework
        </p>
        <br />
        <h2>Ancor tabs</h2>
        <TabsWithPath outlined={true} />
        <h3>centered</h3>
        <TabsWithPath outlined={true} centered={true} />
        <h3>Full width version</h3>
        <TabsWithPath outlined={true} fullWidth={true} />
        <br />
        <br />
        <h2>Button tabs</h2>
        <TabsWithValue outlined={true} />
        <h3>Centered</h3>
        <TabsWithValue outlined={true} centered={true} />
        <h3>Full width</h3>
        <TabsWithValue outlined={true} fullWidth={true} />
      </>
    );
  })
  .add('Black', () => {
    return (
      <>
        <br />

        <h2>Ancor tabs underlined</h2>
        <TabsWithPath color="black" />
        <h3>centered</h3>
        <TabsWithPath centered={true} color="black" />
        <h3>Full width version</h3>
        <TabsWithPath fullWidth={true} color="black" />
        <br />
        <br />
        <h2>Ancor tabs underlined outlined</h2>
        <TabsWithPath outlined={true} color="black" />
        <h3>Centered</h3>
        <TabsWithPath outlined={true} centered={true} color="black" />
        <h3>Full width</h3>
        <TabsWithPath outlined={true} fullWidth={true} color="black" />
      </>
    );
  });

const TabsWithPath = (props: {
  fullWidth?: boolean;
  outlined?: boolean;
  centered?: boolean;
  color?: 'purple' | 'black';
}) => {
  const [active, setActive] = useState<string>('/one');
  return (
    <Tabs
      onClick={(v) => setActive(v)}
      currentValue={active}
      outlined={props.outlined}
      centered={props.centered}
      fullWidth={props.fullWidth}
      color={props.color}
    >
      <Tab path="/one" label="One" />
      <Tab path="/two" label="Two" />
      <Tab path="/three" label="Three" />
      <Tab path="/four" label="Four" />
    </Tabs>
  );
};

const TabsWithValue = (props: { fullWidth?: boolean; outlined?: boolean; centered?: boolean }) => {
  const [active, setActive] = useState<string>('1');

  return (
    <Tabs
      onClick={(v) => setActive(v)}
      currentValue={active}
      outlined={props.outlined}
      centered={props.centered}
      fullWidth={props.fullWidth}
    >
      <Tab value={'1'} label="One" />
      <Tab value={'2'} label="Two" />
      <Tab value={'3'} label="Three" />
      <Tab value={'4'} label="Four" />
    </Tabs>
  );
};
