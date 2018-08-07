import React from 'react';
import { CheckBoxWithLabel } from '@telia/styleguide';

const ExamplesOfCheckBox = () => (
    <div>
        <CheckBoxWithLabel label="I am not checked" /><br />
        <CheckBoxWithLabel label="I am checked" checked /><br />
        <CheckBoxWithLabel label="I am with a tooltip" tooltipText="Some hints and stuff" /><br />
    </div>
);

export default ExamplesOfCheckBox;