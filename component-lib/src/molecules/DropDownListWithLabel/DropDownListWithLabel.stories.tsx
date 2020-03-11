import React from 'react';
import { DropDownListWithLabel } from '../../index';

export default {
  title: 'Component library|Molecules/DropDownListWithLabel',
  component: DropDownListWithLabel,
};

export const Default = () => {
  const options = ['Apple iPhone 6 128 GB', 'Apple iPhone 7 128 GB', 'Samsung Galaxy S8'];
  
  return (
    <DropDownListWithLabel
      options={options}
      selectedOption={options[1]}
      changeSelectedOption={() => {}}
      label="Select your mobile phone"
      visibleLabel
    />
  )
};

export const DropDownListDisabled = () => {
  const options = ['Apple iPhone 6 128 GB', 'Apple iPhone 7 128 GB', 'Samsung Galaxy S8'];
  
  return (
    <DropDownListWithLabel
      options={options}
      selectedOption={options[1]}
      changeSelectedOption={() => {}}
      label="Select your mobile phone"
      disabled
      visibleLabel
    />
  )
};

export const WithLabel = () => {
  const options = [
    { name: 'Apple iPhone 6 128 GB', value: 'A' },
    { name: 'Apple iPhone 7 128 GB', value: 'B' },
    { name: 'Samsung Galaxy S8', value: 'C' },
  ];
  
  return (
    <DropDownListWithLabel
      options={options}
      selectedOption="B"
      changeSelectedOption={() => {}}
      label="Select your mobile phone"
      visibleLabel
    />
  )
};

export const TextToRightWithLabel = () => {
  const options = ['1.', '2.', '3.', '4.', '5.'];
  
  return (
    <DropDownListWithLabel
      options={options}
      selectedOption={options[1]}
      changeSelectedOption={() => {}}
      label="option"
      labelMode="text-to-right"
      visibleLabel
    />
  )
};