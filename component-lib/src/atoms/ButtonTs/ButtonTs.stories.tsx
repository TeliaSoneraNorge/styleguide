import React from 'react';
import ButtonTs from './ButtonTs';

export default {
  title: 'Component library|Atoms/ButtonsTs',
  // component: ButtonTs,
};

export const Default = () => (
  <>
    <ButtonTs text="Link button" href={"https://www.telia.no/"} target="_self" />
    <ButtonTs text="Button" />
  </>
);