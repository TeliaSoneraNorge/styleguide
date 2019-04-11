import React from 'react';
import { TextArea } from 'component-lib';

const TextAreaExamples = () => (
    <div>
        <TextArea placeholder="This is normal textarea..." />
        <br /><br />
        <TextArea placeholder="This one is disabled..." disabled />
        <br /><br />
        <TextArea placeholder="And this one is marked as error..." error />
    </div>
);

export default TextAreaExamples;