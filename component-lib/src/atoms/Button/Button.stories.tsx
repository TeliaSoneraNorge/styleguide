import React from 'react';
import Button from './Button';
import { Link } from '../../index';

export default {
  title: 'Component library|Atoms/Buttons',
  component: Button,
};

export const Default = () => (
  <>
  <Button component={Link} href="#" text="Button Link" />
  <Button component={Link} href="#" text="Button Link" icon="insurance" />
  <br/><br/>
  <Button component={'button'} text="Button" />
  <Button component={'button'} text="Button" icon="police" />
  <br/><br/>
  <Button component={'div'} text="Button Div" />
  <Button component={'div'} text="Button Div" icon="info" />
  </>
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

export const ButtonInForms = () => (
  <>
    <Button text="Type Button" />
    <Button text="Type Reset" type="reset" />
    <Button text="Type Submit" type="submit" />
  </>
);

export const LinkButton = () => (
   <Button text="Link button" kind="link" />
);