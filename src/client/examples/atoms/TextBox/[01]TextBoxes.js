import React from 'react';

import { TextBox } from '@telia/styleguide';

const TextBoxes = () =>
    <div>
        <TextBox
            type="text"
            placeholder="Type something here..." />
        <br /><br />
        <TextBox
            type="text"
            placeholder="Can't type here, disabled..."
            disabled />
        <br /><br />
        <TextBox
            type="text"
            placeholder="Type something here..."
            error />
    </div>;

export default TextBoxes;