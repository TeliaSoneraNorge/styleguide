import React from 'react';
import { RadioButton } from '@telia/styleguide';

// { label, name, value, checked, disabled, onChange, children }) => (
const DefaultUncheckedRadioButton = () => (
  <RadioButton name="radioGroup" value="0" onChange={() => {}} checked={false} label="Unchecked radio button" />
);

export default DefaultUncheckedRadioButton;
