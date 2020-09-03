import React from 'react';
import Label from './Label';

export default {
  title: 'Component library/Atoms/Label',
  component: Label,
};

export const Default = () => <Label text="This is a label" />;

export const GrayTextLabel = () => <Label text="This is a gray-text label" isUsingGrayText />;