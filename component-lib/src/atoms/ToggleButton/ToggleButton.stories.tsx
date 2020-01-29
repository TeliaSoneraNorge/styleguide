import React from 'react';
import ToggleButton from './ToggleButton';

export default {
  title: 'Component library|Atoms/Toggle Button',
  component: ToggleButton,
};

export const Default = () => <ToggleButton id="example-1" labelText="Example with short label text" defaultChecked />;

export const ToggleOnLeftSide = () => <ToggleButton id="example-4" labelText="This is the label text" toggleOnLeftSide />;

export const ToggleOnLeftSideWithDescriptionText = () => (

  <ToggleButton
    id="example-5"
    labelText="This is the label text"
    toggleOnLeftSide
    descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  />

);

export const WithDescriptionText = () => (

  <ToggleButton
    id="example-3"
    labelText="This is the label text"
    descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  />
  
);

export const WithLongLabelText = () => <ToggleButton id="example-2" labelText="Example with a much longer label text, like really really long, yeah?" />