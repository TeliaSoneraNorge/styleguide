import React from 'react';
import { RadioButtonList } from 'component-lib';

const list = [
    { label: 'I am checked', value: '0' },
    { label: 'I am not checked', value: '1' },
];

const HorizontalRadioButtonList = () => (
    <RadioButtonList
        type="horizontal"
        selectedIndex={0}
        name="radiobutton-test"
        list={list} />
);

export default HorizontalRadioButtonList;