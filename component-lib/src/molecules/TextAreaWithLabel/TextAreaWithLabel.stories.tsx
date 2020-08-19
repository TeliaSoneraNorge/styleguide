import React from 'react';
import { TextAreaWithLabel } from '../../index';

export default {
  title: 'Component library/Molecules/TextAreaWithLabel',
  component: TextAreaWithLabel,
};

export const Default = () => <TextAreaWithLabel labelText="Label for text area" placeholder="Placeholder text here..." />;

export const TextAreaWithError = () => (
  <TextAreaWithLabel
    labelText="Label for text area"
    placeholder="Placeholder text here..."
    error="Unexpected error occured"
  />
);


export const DisabledTextArea = () => (
  <TextAreaWithLabel labelText="Label for text area" placeholder="Placeholder text here..." disabled />
); 