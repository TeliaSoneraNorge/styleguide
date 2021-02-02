import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

export default {
  component: RadioButton,
  title: 'Component library/Atoms/Radio Button',
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <p>Default radio button:</p>
      <RadioButton
        label={`I am ${checked ? '' : 'not'} checked`}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <RadioButton label="I am checked" checked />
      <RadioButton label="I am not checked" />
    </>
  );
};
