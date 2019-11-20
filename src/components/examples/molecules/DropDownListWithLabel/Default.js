import React from 'react';
import { DropDownListWithLabel } from '@telia/styleguide';

const options = ['Apple iPhone 6 128 GB', 'Apple iPhone 7 128 GB', 'Samsung Galaxy S8'];

const DefaultDropDownListWithLabel = () => (
  <DropDownListWithLabel
    options={options}
    selectedOption={options[1]}
    changeSelectedOption={() => {}}
    label="Select your mobile phone"
    visibleLabel
  />
);

export default DefaultDropDownListWithLabel;
