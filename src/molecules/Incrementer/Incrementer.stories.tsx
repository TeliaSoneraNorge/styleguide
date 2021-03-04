import React, { useState } from 'react';
import { Incrementer } from './Incrementer';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: Incrementer,
  title: 'Component library/Molecules/Incrementer',
  decorators: [withDesign],
};

export const Default = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ paddingBottom: '10px' }}>
        <div>
          <div style={{ display: 'flex' }}>
            <div style={{ paddingRight: '1rem' }}>
              <code>size='default'</code>
            </div>
            <div style={{ paddingRight: '1rem' }}>max: 10</div>
            <div style={{ paddingRight: '1rem' }}>min: 0</div>
          </div>
          <Incrementer value={count1} setValue={setCount1} max={10} min={0} />
        </div>
        <br />
        <div style={{ paddingBottom: '2rem' }}>
          <code>kind='secondary'</code>
          <Incrementer value={count} setValue={setCount} kind="secondary" />
        </div>
        <br />
        <div style={{ paddingBottom: '2rem' }}>
          <code>size='compact'</code>
          <Incrementer value={count} setValue={setCount} size="compact" />
        </div>
      </div>
    </div>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/w5gRepPs7LBnW3QIx6Lly7/Incrementer?node-id=2%3A2',
  },
};
