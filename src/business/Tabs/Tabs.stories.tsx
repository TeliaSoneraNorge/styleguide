import React, { useState } from 'react';
import { Tabs, Tab } from './index';

export default {
  title: 'Business/Tabs',
  component: Tabs,
};

export const Compact = () => {
  return (
    <>
      <h3>compact</h3>
      <TabsWithPath compact={true} />
      <br />
      <TabsWithPath compact={true} color="black" />
      <h3>centered</h3>
      <TabsWithPath centered={true} compact={true} />
      <br />
      <TabsWithPath centered={true} compact={true} color="black" />
      <br />
      <h3>compact and narrow</h3>
      <TabsWithPath compact={true} narrow={true} />
      <br />
      <TabsWithPath compact={true} narrow={true} color="black" />

      <h3>compact, narrow and centered</h3>
      <TabsWithPath centered={true} compact={true} narrow={true} />
      <br />
      <TabsWithPath centered={true} compact={true} narrow={true} color="black" />
    </>
  );
};

export const Default = () => {
  return (
    <>
      <br />
      <p>
        The <code>Tab</code> items accept a path or a value, and will render an <code>ancor</code> or{' '}
        <code>button accordingly</code>. <br />
        Either way you need to spesify the click handler. This is to support any routing framework
      </p>
      <br />
      <h3>Ancor tabs</h3>
      <TabsWithPath />
      <br />
      <TabsWithPath color="black" />
      <br />
      <br />
      <h3>Button tabs</h3>
      <TabsWithValue narrow={true} />
      <br />
      <TabsWithPath narrow={true} color="black" />
      <br />
      <br />
      <h3>centered</h3>
      <TabsWithPath centered={true} />
      <br />
      <TabsWithPath centered={true} color="black" />
      <h3>fullWidth</h3>
      <TabsWithPath fullWidth={true} />
      <br />
      <TabsWithPath fullWidth={true} color="black" />
    </>
  );
};

export const Outlined = () => {
  return (
    <>
      <TabsWithPath outlined={true} />
      <br />
      <TabsWithPath outlined={true} color="black" /> <br /> <br />
      <h3>centered</h3>
      <TabsWithPath outlined={true} centered={true} />
      <br />
      <TabsWithPath outlined={true} centered={true} color="black" />
      <br /> <br />
      <h3>Full width version</h3>
      <TabsWithPath outlined={true} fullWidth={true} />
      <br />
      <TabsWithPath outlined={true} fullWidth={true} color="black" />
    </>
  );
};

const TabsWithPath = (props: {
  fullWidth?: boolean;
  outlined?: boolean;
  narrow?: boolean;
  centered?: boolean;
  color?: 'purple' | 'black';
  compact?: boolean;
}) => {
  const [active, setActive] = useState<string>('/one');
  return !props.outlined ? (
    <Tabs
      onClick={(v) => setActive(v)}
      currentValue={active}
      narrow={props.narrow}
      centered={props.centered}
      fullWidth={props.fullWidth}
      color={props.color}
      compact={props.compact}
    >
      <Tab path="/one" label="One" />
      <Tab path="/two" label="Two" />
      <Tab path="/three" label="Three" />
      <Tab path="/four" label="Four" />
    </Tabs>
  ) : (
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

const TabsWithValue = (props: { fullWidth?: boolean; outlined?: boolean; centered?: boolean; narrow?: boolean }) => {
  const [active, setActive] = useState<string>('1');

  return (
    <Tabs
      onClick={(v) => setActive(v)}
      currentValue={active}
      outlined={props.outlined}
      centered={props.centered}
      fullWidth={props.fullWidth}
      narrow={props.narrow}
    >
      <Tab value={'1'} label="One" />
      <Tab value={'2'} label="Two" />
      <Tab value={'3'} label="Three" />
      <Tab value={'4'} label="Four" />
    </Tabs>
  );
};
