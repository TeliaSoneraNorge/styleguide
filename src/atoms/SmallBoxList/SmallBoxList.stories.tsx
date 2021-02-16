import React, { useState } from 'react';
import SmallBoxList from './SmallBoxList';

export default {
  title: 'Component library/Atoms/SmallBoxList',
  component: SmallBoxList,
};

const boxes = [
  { name: '64 GB', id: '64-gb' },
  { name: '128 GB', id: '128-gb' },
  { name: '256 GB', id: '256-gb' },
];

const differentLengths = [
  { name: '64 GB lorem ipsum', id: '64-gb' },
  { name: '128 GB', id: '128-gb' },
  { name: '256 GB lorem', id: '256-gb' },
];

export const Default = () => {
  const [selected, setSelected] = useState<string>();
  return <SmallBoxList selected={selected} onSelect={setSelected} boxes={boxes} />;
};

export const UnevenTextLengths = () => {
  const [selected, setSelected] = useState<string>();
  return <SmallBoxList selected={selected} onSelect={setSelected} boxes={differentLengths} />;
};
