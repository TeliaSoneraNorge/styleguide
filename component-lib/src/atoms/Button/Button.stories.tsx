import React from 'react';
import Button from './Button';

export default {
  title: 'Component library|Atoms/Buttons',
  component: Button,
};

export const Default = () => (
  <Button text="Default button" />
);

export const Normal = () => (
  <>
    <Button text="Default button" />
    <Button text="Primary button" kind="primary" />
    <Button text="Disabled button" isDisabled={true} />
  </>
);

export const Small = () => (
  <>
    <Button text="Default button" size="small" />
    <Button text="Primary button" kind="primary" size="small" />
    <Button text="Disabled button" isDisabled={true} size="small" />
  </>
);

export const Loading = () => (
  <>
    <Button text="Default button" isProcessing={true} processingText="Working" />
    <Button text="Default button" isProcessing={true} processingText="Working" kind="primary" />
  </>
);

export const Various = () => (
  <>
    <Button text="Confirm" />
    <Button text="Inverted button" kind="inverted" />
    <Button text="Negative button" kind="negative" />
    <Button text="Cancel button" kind="cancel" />
  </>
);

export const LinkButton = () => (
   <Button text="Link button" kind="link" />
);