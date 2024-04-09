import React, { useState } from 'react';
import SmallBoxList, { SmallBox } from './SmallBoxList';

export default {
  title: 'Component library/Atoms/SmallBoxList',
  component: SmallBoxList,
};

const boxes = [
  { name: '64 GB', id: '64-gb' },
  { name: '128 GB', id: '128-gb' },
  { name: '256 GB', id: '256-gb' },
];

const boxesWithLink = [
  { name: '64 GB', id: '64-gb', href: '/mobiltelefoner/apple/iphone-15-pro-max/64-gb-svart-titan/' },
  { name: '128 GB', id: '128-gb', href: '/mobiltelefoner/apple/iphone-15-pro-max/128-gb-svart-titan/' },
  { name: '256 GB', id: '256-gb', href: '/mobiltelefoner/apple/iphone-15-pro-max/256-gb-svart-titan/' },
];

const differentLengths = [
  { name: '64 GB lorem ipsum', id: '64-gb' },
  { name: '128 GB', id: '128-gb' },
  { name: '256 GB lorem', id: '256-gb' },
];

const purpleVariants: SmallBox[] = [
  { name: 'SVITSJ', id: 'switch' },
  { name: 'Rabattavtale', id: 'lease' },
  { name: 'Kun telefon', id: 'upfront' },
];

export const Default = () => {
  const [selected, setSelected] = useState<string>();
  return <SmallBoxList selected={selected} onSelect={setSelected} boxes={boxes} />;
};

export const VariantAsLink = () => {
  const [selected, setSelected] = useState<string>();
  return <SmallBoxList selected={selected} onSelect={setSelected} boxes={boxesWithLink} component="link" />;
};

export const UnevenTextLengths = () => {
  const [selected, setSelected] = useState<string>();
  return <SmallBoxList selected={selected} onSelect={setSelected} boxes={differentLengths} />;
};

export const PurpleVariants = () => {
  const [selected, setSelected] = useState<string>();
  return <SmallBoxList type="purple" selected={selected} onSelect={setSelected} boxes={purpleVariants} />;
};
