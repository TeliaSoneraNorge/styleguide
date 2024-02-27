import React, { useState } from 'react';
import ColorPicker, { Color } from './ColorPicker';

export default {
  title: 'Component library/Atoms/ColorPicker',
  component: ColorPicker,
};

const colors = [
  { name: 'Grey', color: 'grey', id: 'grey' },
  { name: 'Light', color: '#FFDAAF', id: 'light' },
  { name: 'Black', color: '#000', id: 'black' },
];

export const Default = () => {
  const [selected, setSelected] = useState<Color>();
  return (
    <ColorPicker selected={selected} onSelect={(id) => setSelected(colors.find((c) => c.id === id))} colors={colors} />
  );
};

export const Medium = () => {
  const [selected, setSelected] = useState<Color>();
  return (
    <ColorPicker
      size="m"
      showSelected={false}
      selected={selected}
      onSelect={(id) => setSelected(colors.find((c) => c.id === id))}
      colors={colors}
    />
  );
};

export const Small = () => {
  const [selected, setSelected] = useState<Color>();
  return (
    <ColorPicker
      size="s"
      selected={selected}
      showSelected={false}
      onSelect={(id) => setSelected(colors.find((c) => c.id === id))}
      colors={colors}
    />
  );
};

export const SmallWithLabel = () => {
  const [selected, setSelected] = useState<Color>();
  return (
    <ColorPicker
      size="s"
      showSelected
      selected={selected}
      onSelect={(id) => setSelected(colors.find((c) => c.id === id))}
      colors={colors}
    />
  );
};
