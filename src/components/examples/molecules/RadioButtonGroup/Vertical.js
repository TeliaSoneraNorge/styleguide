import React, { useState } from 'react';
import { RadioButtonGroup } from '@telia/styleguide';

const list = [
  { label: 'I am checked', value: '0' },
  { label: 'I am not checked', value: '1' },
  {
    label:
      'I have a very very very long content that can wrap on mobile devices and should be still at the bottom of the list',
    value: '2',
  },
];

const RadioButtonGroupVertical = () => {
  const [value, setValue] = useState(0);

  const onClick = e => {
    setValue(e.target.value);
  };

  return (
    <RadioButtonGroup
      list={list}
      selectedValue={value ? value : '1'}
      name="radiobutton-group-vertical"
      type="vertical"
      onChange={onClick}
    />
  );
};

export default RadioButtonGroupVertical;
