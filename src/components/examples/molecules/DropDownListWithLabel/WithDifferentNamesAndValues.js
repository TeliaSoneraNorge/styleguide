import React from 'react';
import { DropDownListWithLabel } from '@telia/styleguide';

const options = [
    { name: 'Apple iPhone 6 128 GB', value : 'A' },
    { name: 'Apple iPhone 7 128 GB', value : 'B' },
    { name: 'Samsung Galaxy S8', value : 'C' },
];

const DefaultDropDownListWithLabel = () => (
    <DropDownListWithLabel
        options={options}
        selectedOption="B"
        label="Select your mobile phone"
        visibleLabel />
);

export default DefaultDropDownListWithLabel;