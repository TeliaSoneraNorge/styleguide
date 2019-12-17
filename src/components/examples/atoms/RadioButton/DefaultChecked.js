import React from 'react';
import { RadioButton } from '@telia/styleguide';

// { label, name, value, checked, disabled, onChange, children }) => (
const DefaultCheckedRadioButton = () => (
  <RadioButton name="radioGroup" value="1" onChange={() => {}} checked={true} label="Checked radio button" />
);

export default DefaultCheckedRadioButton;
