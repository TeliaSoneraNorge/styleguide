import React from 'react';
import { RadioButtonList } from '@telia/styleguide';

const list = [
  { label: 'I am checked', value: '0' },
  { label: 'I am not checked', value: '1' },
  {
    label: 'I have a very very very long content that can wrap on mobile devices and should be right aligned',
    value: '2',
  },
];

const VerticalRadioButtonList = () => (
  <RadioButtonList type="vertical" selectedIndex={0} onChange={() => {}} name="radiobutton-test-2" list={list} />
);

export default VerticalRadioButtonList;
