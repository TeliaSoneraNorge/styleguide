import React from 'react';
import { Button, ButtonKind } from './Button';

export default {
  component: Button,
  title: 'Business/Button',
};

const kinds: ButtonKind[] = ['primary', 'primary-text', 'secondary', 'secondary-text', 'ghost', 'positive', 'negative'];

const renderButtons = (kind: ButtonKind, size?: 'compact') => {
  return (
    <>
      <h3>Normal state</h3>
      <Button kind={kind} size={size} label="Button" />
      <br />
      <h3>Disabled state</h3>
      <Button kind={kind} size={size} label="Button" disabled={true} />
      <br />
      <h3>Button with icon</h3>
      <Button kind={kind} size={size} label="Button" icon={'add'} />
      <br />
      <h3>Button with icon right</h3>
      <Button kind={kind} size={size} label="Button" icon={'arrow-right'} iconRight={true} />
      <br />
      <h3>Button ball (with icon and without label)</h3>
      <Button kind={kind} size={size} icon={'add'} />
      <br />
      <h3>Button with action</h3>
      <Button kind={kind} size={size} label="Click" onClick={() => alert('Hi')} />
      <br />
      <h3>Button with link </h3>
      <Button kind={kind} size={size} label="Button" href="https://en.wikipedia.org/wiki/Success" />
      <h3>Button with link and target props</h3>
      <Button kind={kind} size={size} label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
      <br />
      <h3>Button with no parameters</h3>
      <Button kind={kind} size={size} />
      <br />
    </>
  );
};

export const ButtonPrimary = () => (
  <div>
    <h2>Button Primary</h2>
    Default button kind is Button primary
    <br />
    {renderButtons('primary')}
  </div>
);

export const ButtonPrimaryText = () => (
  <div>
    <h2>Button Primary Text</h2>
    {renderButtons('primary-text')}
  </div>
);

export const ButtonSecondary = () => (
  <div>
    <h2>Button Secondary</h2>
    {renderButtons('secondary')}
  </div>
);

export const ButtonSecondaryText = () => (
  <div>
    <div>
      <h2>Button Secondary Text</h2>
      {renderButtons('secondary-text')}
    </div>
  </div>
);

export const ButtonGhost = () => (
  <div>
    <div>
      <h2>Button Ghost</h2>
      {renderButtons('ghost')}
    </div>
  </div>
);

export const ButtonPositive = () => (
  <div>
    <h2>Button Positive</h2>
    {renderButtons('positive')}
  </div>
);

export const ButtonNegative = () => (
  <div>
    <h2>Button Negative</h2>
    {renderButtons('negative')}
  </div>
);

export const ButtonCompact = () => (
  <div>
    <h2>Button compact</h2>
    {renderButtons('primary', 'compact')}
  </div>
);
