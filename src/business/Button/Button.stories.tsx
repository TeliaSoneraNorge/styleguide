import React from 'react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Business/Button',
};
export const ButtonPrimary = () => (
  <div>
    <h2>Button Primary</h2>
    Default button kind is Button primary
    <br />
    <h3>Normal state</h3>
    <Button label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button label="Button" disabled={true} />
    <h3>Active state</h3>
    <Button label="Button" active={true} />
    <br />
    <h3>Button with icon</h3>
    <Button label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button icon={'add'} />
    <br />
    <h3>Button with action</h3>
    <Button label="Click" onClick={() => alert('Hi')} />
    <br />
    <h3>Button with link </h3>
    <Button label="Button" href="https://en.wikipedia.org/wiki/Success" />
    <h3>Button with link and target props</h3>
    <Button label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
    <br />
    <h3>Button with no parameters</h3>
    <Button />
  </div>
);

export const ButtonPrimaryText = () => (
  <div>
    <h2>Button Primary Text</h2>
    <h3>Normal state</h3>
    <Button kind="primary-text" label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind="primary-text" label="Button" disabled={true} />
    <br />
    <h3>Active state</h3>
    <Button kind="primary-text" label="Button" active={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind="primary-text" label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind="primary-text" label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind="primary-text" icon={'add'} />
    <br />
    <h3>Button with action</h3>
    <Button kind="primary-text" label="Click" onClick={() => alert('Hi')} />
    <br />
    <h3>Button with link </h3>
    <Button kind="primary-text" label="Button" href="https://en.wikipedia.org/wiki/Success" />
    <h3>Button with link and target props</h3>
    <Button kind="primary-text" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
    <br />
    <h3>Button with no parameters</h3>
    <Button kind="primary-text" />
  </div>
);

export const ButtonSecondary = () => (
  <div>
    <h2>Button Secondary</h2>
    <h3>Normal state</h3>
    <Button kind="secondary" label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind="secondary" label="Button" disabled={true} />
    <br />
    <h3>Active state</h3>
    <Button kind="secondary" label="Button" active={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind="secondary" label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind="secondary" label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind="secondary" icon={'add'} />
    <br />
    <h3>Button with action</h3>
    <Button kind="secondary" label="Click" onClick={() => alert('Hi')} />
    <br />
    <h3>Button with link </h3>
    <Button kind="secondary" label="Button" href="https://en.wikipedia.org/wiki/Success" />
    <h3>Button with link and target props</h3>
    <Button kind="secondary" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
    <br />
    <h3>Button with no parameters</h3>
    <Button kind="secondary" />
  </div>
);

export const ButtonSecondaryText = () => (
  <div>
    <div>
      <h2>Button Secondary Text</h2>
      <h3>Normal state</h3>
      <Button kind="secondary-text" label="Button" />
      <br />
      <h3>Disabled state</h3>
      <Button kind="secondary-text" label="Button" disabled={true} />
      <br />
      <h3>Active state</h3>
      <Button kind="secondary-text" label="Button" active={true} />
      <br />
      <h3>Button with icon</h3>
      <Button kind="secondary-text" label="Button" icon={'add'} />
      <br />
      <h3>Button with icon right</h3>
      <Button kind="secondary-text" label="Button" icon={'arrow-right'} iconRight={true} />
      <br />
      <h3>Button ball (with icon and without label)</h3>
      <Button kind="secondary-text" icon={'add'} />
      <br />
      <h3>Button with action</h3>
      <Button kind="secondary-text" label="Click" onClick={() => alert('Hi')} />
      <br />
      <h3>Button with link </h3>
      <Button kind="secondary-text" label="Button" href="https://en.wikipedia.org/wiki/Success" />
      <h3>Button with link and target props</h3>
      <Button kind="secondary-text" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
      <br />
      <h3>Button with no parameters</h3>
      <Button kind="secondary-text" />
    </div>
  </div>
);

export const ButtonGhost = () => (
  <div>
    <div>
      <h2>Button Ghost</h2>
      <h3>Normal state</h3>
      <Button kind="ghost" label="Button" />
      <br />
      <h3>Disabled state</h3>
      <Button kind="ghost" label="Button" disabled={true} />
      <br />
      <h3>Active state</h3>
      <Button kind="ghost" label="Button" active={true} />
      <br />
      <h3>Button with icon</h3>
      <Button kind="ghost" label="Button" icon={'add'} />
      <br />
      <h3>Button with icon right</h3>
      <Button kind="ghost" label="Button" icon={'arrow-right'} iconRight={true} />
      <br />
      <h3>Button ball (with icon and without label)</h3>
      <Button kind="ghost" icon={'add'} />
      <br />
      <h3>Button with action</h3>
      <Button kind="ghost" label="Click" onClick={() => alert('Hi')} />
      <br />
      <h3>Button with link </h3>
      <Button kind="ghost" label="Button" href="https://en.wikipedia.org/wiki/Success" />
      <h3>Button with link and target props</h3>
      <Button kind="ghost" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
      <br />
      <h3>Button with no parameters</h3>
      <Button kind="ghost" />
    </div>
  </div>
);

export const ButtonPositive = () => (
  <div>
    <h2>Button Positive</h2>
    <h3>Normal state</h3>
    <Button kind="positive" label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind="positive" label="Button" disabled={true} />
    <br />
    <h3>Active state</h3>
    <Button kind="positive" label="Button" active={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind="positive" label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind="positive" label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind="positive" icon={'add'} />
    <br />
    <h3>Button with action</h3>
    <Button kind="positive" label="Click" onClick={() => alert('Hi')} />
    <br />
    <h3>Button with link </h3>
    <Button kind="positive" label="Button" href="https://en.wikipedia.org/wiki/Success" />
    <h3>Button with link and target props</h3>
    <Button kind="positive" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
    <br />
    <h3>Button with no parameters</h3>
    <Button kind="positive" />
  </div>
);

export const ButtonNegative = () => (
  <div>
    <h2>Button Negative</h2>
    <h3>Normal state</h3>
    <Button kind="negative" label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind="negative" label="Button" disabled={true} />
    <br />
    <h3>Active state</h3>
    <Button kind="negative" label="Button" active={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind="negative" label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind="negative" label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind="negative" icon={'add'} />
    <br />
    <h3>Button with action</h3>
    <Button kind="negative" label="Click" onClick={() => alert('Hi')} />
    <br />
    <h3>Button with link </h3>
    <Button kind="negative" label="Button" href="https://en.wikipedia.org/wiki/Success" />
    <h3>Button with link and target props</h3>
    <Button kind="negative" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
    <br />
    <h3>Button with no parameters</h3>
    <Button kind="negative" />
  </div>
);

export const ButtonCompact = () => (
  <div>
    <h2>Button compact</h2>
    <h3>Normal state</h3>
    <Button size="compact" label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button size="compact" label="Button" disabled={true} />
    <br />
    <h3>Active state</h3>
    <Button size="compact" label="Button" active={true} />
    <br />
    <h3>Button with icon</h3>
    <Button size="compact" label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button size="compact" label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button size="compact" icon={'add'} />
    <br />
    <h3>Button with action</h3>
    <Button size="compact" label="Click" onClick={() => alert('Hi')} />
    <br />
    <h3>Button with link </h3>
    <Button size="compact" label="Button" href="https://en.wikipedia.org/wiki/Success" />
    <h3>Button with link and target props</h3>
    <Button size="compact" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
    <br />
    <h3>Button with no parameters</h3>
    <Button size="compact" />
  </div>
);
