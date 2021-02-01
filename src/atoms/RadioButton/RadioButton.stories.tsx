import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Component library/Atoms/Radio Button',
  component: RadioButton,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <p>Default radio button:</p>
      <RadioButton
        label={`I am ${checked ? '' : 'not'} checked`}
        checked={checked}
        setChecked={() => setChecked(!checked)}
      />
      <RadioButton label="I am checked" checked />
    </>
  );
};
