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
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ paddingBottom: '10px' }}>
        <Incrementer value={count} setValue={setCount} />
      </div>
    </div>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/HF5bLPBAkWg3rmfcNr2K18/Lozenges?node-id=13%3A21',
  },
};
