import React from 'react';
import Menu from './Menu';

export default {
  title: 'Component library|Atoms/Alert Text MENU',
  component: Menu,
};

export const Default = () => {
  console.log('Menu', Menu);

  return <Menu>Chat is closed</Menu>;
};
