import React from 'react';

import { TextBoxWithLabel } from '@telia/styleguide';

const TextBoxes = () => (
  <div>
    <TextBoxWithLabel type="text" labelText="Sample input field" hideLabel placeholder="Type something here..." />
    <br />
    <br />
    <TextBoxWithLabel
      type="text"
      labelText="Disabled input field"
      hideLabel
      placeholder="Can't type here, disabled..."
      disabled
    />
    <br />
    <br />
    <TextBoxWithLabel
      type="text"
      labelText="Input field with error"
      hideLabel
      placeholder="Type something here..."
      error
    />
    <br />
    <br />
    <TextBoxWithLabel
      type="text"
      labelText="Small input field"
      hideLabel
      placeholder="Type something here in the smaller textbox..."
      small
    />
  </div>
);

export default TextBoxes;
