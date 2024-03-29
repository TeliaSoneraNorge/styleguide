import React from 'react';
import Button from './Button';

export default {
  title: 'Component library/Atoms/Buttons',
  component: Button,
};

export const Default = () => (
  <>
    <Button text="Default button" />
  </>
);

export const Normal = () => (
  <>
    <Button text="Default button" />
    <Button text="Primary button" kind="primary" />
    <Button text="Disabled button" isDisabled={true} />
    <br />
    <br />
    <Button text="Inverted button" kind="inverted" />
    <Button text="Negative button" kind="negative" />
    <br />
    <br />
    <Button text="Voca normal" kind="voca-normal" />
    <Button text="Voca inverted" kind="voca-inverted" />
    <Button text="Voca purple" kind="voca-purple" />
    <Button text="Voca purple inverted" kind="voca-purple-inverted" />
  </>
);

export const WithIcon = () => (
  <>
    <Button text="Default button" icon="map" />
    <Button text="Default button" iconPlacement="right" icon="map" />
    <Button text="Primary button" icon="star" kind="primary" />
    <Button text="Disabled button" icon="games" isDisabled={true} />
    <br />
    <br />
    <Button text="Inverted button" kind="inverted" icon="tv" />
    <Button text="Negative button" kind="negative" icon="wrench" />
    <br />
    <br />
    <Button text="Default button" isProcessing={true} icon="alert" processingText="Working" />
    <Button text="Default button" isProcessing={true} icon="cloud" processingText="Working" kind="primary" />
  </>
);

export const AsLink = () => (
  <>
    <Button component="link" href="#" text="Button with <a> tag" />
  </>
);

export const Small = () => (
  <>
    <Button text="Default button" size="small" />
    <Button text="Primary button" kind="primary" size="small" />
    <Button text="Disabled button" isDisabled={true} size="small" />
  </>
);

export const ExtraSmall = () => (
  <>
    <Button text="Legg til" kind="voca-purple" size="xs" icon="cart" />
    <Button text="Legg til" kind="primary" size="xs" icon="cart" />
    <Button text="Legg til" isDisabled={true} size="xs" icon="cart" />
  </>
);

export const Loading = () => (
  <>
    <Button text="Default button" isProcessing={true} processingText="Working" />
    <Button text="Default button" isProcessing={true} processingText="Working" kind="primary" />
  </>
);

export const ButtonInForms = () => (
  <>
    <Button text="Type Button" />
    <Button text="Type Reset" type="reset" />
    <Button text="Type Submit" type="submit" />
  </>
);

export const CancelButton = () => (
  <>
    <Button text="Cancel button" kind="cancel" />
  </>
);

export const LinkButton = () => <Button text="Link button" kind="link" />;

export const SecondLinkButton = () => <Button text="Second Link button" kind="secondLink" />;
