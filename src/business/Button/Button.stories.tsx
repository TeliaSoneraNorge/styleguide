import React from 'react';
import { Button } from './Button';

export default {
  title: 'Business/Button',
  component: Button,
};

export const ButtonPrimary = () => (
  <div>
    <h2>Button Primary</h2>
    Default button kind is Button primary
    <br />
    <h3>Normal state</h3>
    <Button label="Button" /> <Button label="Button" size="compact" />
    <br />
    <h3>Disabled state</h3>
    <Button label="Button" disabled={true} />
    <h3>Active state</h3>
    <Button label="Button" active={true} />
    <br />
    <h3>Button with icon</h3>
    <Button label="Button" icon={'add'} />
    <Button label="Button" icon={'add'} size="compact" />
    <br />
    <h3>Button with icon right</h3>
    <Button label="Button" icon={'arrow-right'} iconRight={true} />
    <Button label="Button" icon={'arrow-right'} iconRight={true} size="compact" />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button icon={'add'} ariaLabel="add" />
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
    <br />
    <h3>Button with a lot of text should not wrap</h3>
    <Button label="This is a long button text" />
    <br />
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
    <Button kind="primary-text" icon={'add'} ariaLabel="add" />
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

export const ExpressivePurple = () => (
  <div>
    <h2>Expressive Purple</h2>
    <h3>Normal state</h3>
    <Button kind="expressive-purple" label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind="expressive-purple" label="Button" disabled={true} />
    <br />
    <h3>Active state</h3>
    <Button kind="expressive-purple" label="Button" active={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind="expressive-purple" label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind="expressive-purple" label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind="expressive-purple" icon={'add'} ariaLabel="add" />
    <br />
    <h3>Button with action</h3>
    <Button kind="expressive-purple" label="Click" onClick={() => alert('Hi')} />
    <br />
    <h3>Button with link </h3>
    <Button kind="expressive-purple" label="Button" href="https://en.wikipedia.org/wiki/Success" />
    <h3>Button with link and target props</h3>
    <Button kind="expressive-purple" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
    <br />
    <h3>Button with no parameters</h3>
    <Button kind="expressive-purple" />
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
    <Button kind="secondary" icon={'add'} ariaLabel="add" />
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
      <Button kind="secondary-text" icon={'add'} ariaLabel="add" />
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
      <Button kind="ghost" icon={'add'} ariaLabel="add" />
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

export const ButtonOutlined = () => (
  <div>
    <div>
      <h2>Button Outlined</h2>
      <h3>Normal state</h3>
      <Button kind="outlined" label="Button" />
      <br />
      <h3>Disabled state</h3>
      <Button kind="outlined" label="Button" disabled={true} />
      <br />
      <h3>Active state</h3>
      <Button kind="outlined" label="Button" active={true} />
      <br />
      <h3>Button with icon</h3>
      <Button kind="outlined" label="Button" icon={'add'} />
      <br />
      <h3>Button with icon right</h3>
      <Button kind="outlined" label="Button" icon={'arrow-right'} iconRight={true} />
      <br />
      <h3>Button ball (with icon and without label)</h3>
      <Button kind="outlined" icon={'add'} ariaLabel="add" />
      <br />
      <h3>Button with action</h3>
      <Button kind="outlined" label="Click" onClick={() => alert('Hi')} />
      <br />
      <h3>Button with link </h3>
      <Button kind="outlined" label="Button" href="https://en.wikipedia.org/wiki/Success" />
      <h3>Button with link and target props</h3>
      <Button kind="outlined" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
      <br />
      <h3>Button with no parameters</h3>
      <Button kind="outlined" />
    </div>
  </div>
);

export const ButtonWhite = () => (
  <div style={{ background: 'lightblue' }}>
    <div>
      <h2>Button Outlined</h2>
      <h3>Normal state</h3>
      <Button kind="white" label="Button" />
      <br />
      <h3>Disabled state</h3>
      <Button kind="white" label="Button" disabled={true} />
      <br />
      <h3>Active state</h3>
      <Button kind="white" label="Button" active={true} />
      <br />
      <h3>Button with icon</h3>
      <Button kind="white" label="Button" icon={'add'} />
      <br />
      <h3>Button with icon right</h3>
      <Button kind="white" label="Button" icon={'arrow-right'} iconRight={true} />
      <br />
      <h3>Button ball (with icon and without label)</h3>
      <Button kind="white" icon={'add'} ariaLabel="add" />
      <br />
      <h3>Button with action</h3>
      <Button kind="white" label="Click" onClick={() => alert('Hi')} />
      <br />
      <h3>Button with link </h3>
      <Button kind="white" label="Button" href="https://en.wikipedia.org/wiki/Success" />
      <h3>Button with link and target props</h3>
      <Button kind="white" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
      <br />
      <h3>Button with no parameters</h3>
      <Button kind="white" />
    </div>
  </div>
);

export const ButtonGreen = () => (
  <div>
    <h2>Button Green</h2>
    <h3>Normal state</h3>
    <Button kind="green" label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind="green" label="Button" disabled={true} />
    <br />
    <h3>Active state</h3>
    <Button kind="green" label="Button" active={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind="green" label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind="green" label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind="green" icon={'add'} ariaLabel="add" />
    <br />
    <h3>Button with action</h3>
    <Button kind="green" label="Click" onClick={() => alert('Hi')} />
    <br />
    <h3>Button with link </h3>
    <Button kind="green" label="Button" href="https://en.wikipedia.org/wiki/Success" />
    <h3>Button with link and target props</h3>
    <Button kind="green" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
    <br />
    <h3>Button with no parameters</h3>
    <Button kind="green" />
  </div>
);

export const ButtonRed = () => (
  <div>
    <h2>Button Red</h2>
    <h3>Normal state</h3>
    <Button kind="red" label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind="red" label="Button" disabled={true} />
    <br />
    <h3>Active state</h3>
    <Button kind="red" label="Button" active={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind="red" label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind="red" label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind="red" icon={'add'} ariaLabel="add" />
    <br />
    <h3>Button with action</h3>
    <Button kind="red" label="Click" onClick={() => alert('Hi')} />
    <br />
    <h3>Button with link </h3>
    <Button kind="red" label="Button" href="https://en.wikipedia.org/wiki/Success" />
    <h3>Button with link and target props</h3>
    <Button kind="red" label="Button" href="https://en.wikipedia.org/wiki/Success" target="_blank" />
    <br />
    <h3>Button with no parameters</h3>
    <Button kind="red" />
  </div>
);
