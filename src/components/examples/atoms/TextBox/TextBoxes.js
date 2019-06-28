import React from 'react';

import { TextBox } from '@telia/styleguide';

const TextBoxes = () => (
  <div>
    <TextBox type="text" placeholder="Type something here..." />
    <br />
    <br />
    <TextBox type="text" placeholder="Can't type here, disabled..." disabled />
    <br />
    <br />
    <TextBox type="text" placeholder="Type something here..." error />
    <br />
    <br />
    <TextBox type="text" placeholder="Type something here in the smaller textbox..." small />
  </div>
);

export default TextBoxes;
