import React from 'react';
import { TextAreaWithLabel } from '@telia/styleguide';

const TextAreaExamples = () => (
  <div>
    <TextAreaWithLabel labelText="A sample textarea" hideLabel placeholder="This is normal textarea..." />
    <br />
    <br />
    <TextAreaWithLabel labelText="A disabled textarea" hideLabel placeholder="This one is disabled..." disabled />
    <br />
    <br />
    <TextAreaWithLabel
      labelText="A textarea with an error"
      hideLabel
      placeholder="And this one is marked as error..."
      error="An unexpected error occured"
    />
  </div>
);

export default TextAreaExamples;
