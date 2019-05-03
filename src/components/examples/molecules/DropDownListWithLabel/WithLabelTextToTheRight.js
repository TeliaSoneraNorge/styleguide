import React from 'react';
import { DropDownListWithLabel } from 'component-lib';

const options = [
    '1.',
    '2.',
    '3.',
    '4.',
    '5.',
];

const RightDropDownListWithLabel = () => (
    <DropDownListWithLabel
        options={options}
        selectedOption={options[1]}
        changeSelectedOption={() => {}}
        label="option"
        labelMode="text-to-right"
        visibleLabel />
);

export default RightDropDownListWithLabel;