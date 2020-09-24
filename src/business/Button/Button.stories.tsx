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
    <br />
    <h3>Button with no parameters</h3>
    <Button />
    <br />
  </div>
);

export const ButtonPrimaryText = () => (
  <div>
    <h3>Normal state</h3>
    <Button kind={'primary-text'} label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind={'primary-text'} label="Button" disabled={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind={'primary-text'} label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind={'primary-text'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind={'primary-text'} icon={'add'} />
    <br />
    <h3>Compact button</h3>
    <Button kind={'primary-text'} label="Button" compact={true} />
    <br />
  </div>
);

export const ButtonSecondary = () => (
  <div>
    <h3>Normal state</h3>
    <Button kind={'secondary'} label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind={'secondary'} label="Button" disabled={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind={'secondary'} label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind={'secondary'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind={'secondary'} icon={'add'} />
    <br />
    <h3>Compact button</h3>
    <Button kind={'secondary'} label="Button" compact={true} />
  </div>
);

export const ButtonSecondaryText = () => (
  <div>
    <h3>Normal state</h3>
    <Button kind={'secondary-text'} label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind={'secondary-text'} label="Button" disabled={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind={'secondary-text'} label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind={'secondary-text'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind={'secondary-text'} icon={'add'} />
  </div>
);

export const ButtonGhost = () => (
  <div>
    <h3>Normal state</h3>
    <Button kind={'ghost'} label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind={'ghost'} label="Button" disabled={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind={'ghost'} label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind={'ghost'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind={'ghost'} icon={'add'} />
  </div>
);

export const ButtonPositive = () => (
  <div>
    <h3>Normal state</h3>
    <Button kind={'positive'} label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind={'positive'} label="Button" disabled={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind={'positive'} label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind={'positive'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind={'positive'} icon={'add'} />
  </div>
);

export const ButtonNegative = () => (
  <div>
    <h3>Normal state</h3>
    <Button kind={'negative'} label="Button" />
    <br />
    <h3>Disabled state</h3>
    <Button kind={'negative'} label="Button" disabled={true} />
    <br />
    <h3>Button with icon</h3>
    <Button kind={'negative'} label="Button" icon={'add'} />
    <br />
    <h3>Button with icon right</h3>
    <Button kind={'negative'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button kind={'negative'} icon={'add'} />
  </div>
);

export const ButtonCompact = () => (
  <div>
    <h3>Normal state</h3>
    <Button label="Button" compact={true} />
    <br />
    <h3>Disabled state</h3>
    <Button label="Button" disabled={true} compact={true} />
    <br />
    <h3>Button with icon</h3>
    <Button label="Button" icon={'add'} compact={true} />
    <br />
    <h3>Button with icon right</h3>
    <Button label="Button" icon={'arrow-right'} iconRight={true} compact={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button icon={'add'} compact={true} />
  </div>
);
