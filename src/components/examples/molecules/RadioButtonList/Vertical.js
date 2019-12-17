import React, { useState } from 'react';
import { RadioButtonList } from '@telia/styleguide';

const list = [
  { label: 'I am checked', value: '0' },
  { label: 'I am not checked', value: '1' },
  {
    label: 'I have a very very very long content that can wrap on mobile devices and should be right aligned',
    value: '2',
  },
];

const VerticalRadioButtonList = () => {
  const [value, setValue] = useState(0);

  const onClick = e => {
    setValue(Number(e.target.value));
  };

  return (
    <RadioButtonList
      type="vertical"
      selectedIndex={value}
      onChange={onClick}
      name="radiobuttonlist-test-vertical"
      list={list}
    />
  );
};

export default VerticalRadioButtonList;
