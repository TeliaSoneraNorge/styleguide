import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'Component library|Atoms/Toggle Switch',
  component: ToggleSwitch,
};

export const Default = () => {

  const [active, setActive] = useState<'left' | 'right'>('left');

  const exampleContainerStyle = {
    backgroundColor: '#f6f6f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
  };

  return (

    <div style={exampleContainerStyle}>
      <ToggleSwitch
        active={active}
        leftLabel="Beholde nummer"
        rightLabel="Nytt nummer"
        leftOnClickHandler={() => setActive('left')}
        rightOnClickHandler={() => setActive('right')}
      />
    </div>

  )
}