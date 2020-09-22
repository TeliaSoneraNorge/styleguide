import React from 'react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Business/Button',
};

export const ButtonPrimary = () => (
  <div>
    <h2>Button Primary</h2>
    Default button type is Button primary
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
    <h3>Compact button</h3>
    <Button label="Button" icon="add" compact={true} />
    <br />
    <h3>Button with no parameters</h3>
    <Button />
    <br />
  </div>
);

export const ButtonPrimaryText = () => (
  <div>
    <h3>Normal state</h3>
    <Button type={'primary-text'} label="Button" />
    <h3>Disabled state</h3>
    <Button type={'primary-text'} label="Button" disabled={true} />
    <h3>Button with icon</h3>
    <Button type={'primary-text'} label="Button" icon={'add'} /> <br />
    <h3>Button with icon right</h3>
    <Button type={'primary-text'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button type={'primary-text'} icon={'add'} />
  </div>
);

export const ButtonSecondary = () => (
  <div>
    <h3>Normal state</h3>
    <Button type={'secondary'} label="Button" />
    <h3>Disabled state</h3>
    <Button type={'secondary'} label="Button" disabled={true} />
    <h3>Button with icon</h3>
    <Button type={'secondary'} label="Button" icon={'add'} /> <br />
    <h3>Button with icon right</h3>
    <Button type={'secondary'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button type={'secondary'} icon={'add'} />
  </div>
);

export const ButtonSecondaryText = () => (
  <div>
    <h3>Normal state</h3>
    <Button type={'secondary-text'} label="Button" />
    <h3>Disabled state</h3>
    <Button type={'secondary-text'} label="Button" disabled={true} />
    <h3>Button with icon</h3>
    <Button type={'secondary-text'} label="Button" icon={'add'} /> <br />
    <h3>Button with icon right</h3>
    <Button type={'secondary-text'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button type={'secondary-text'} icon={'add'} />
  </div>
);

export const ButtonGhost = () => (
  <div>
    <h3>Normal state</h3>
    <Button type={'ghost'} label="Button" />
    <h3>Disabled state</h3>
    <Button type={'ghost'} label="Button" disabled={true} />
    <h3>Button with icon</h3>
    <Button type={'ghost'} label="Button" icon={'add'} /> <br />
    <h3>Button with icon right</h3>
    <Button type={'ghost'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button type={'ghost'} icon={'add'} />
  </div>
);

export const ButtonPositive = () => (
  <div>
    <h3>Normal state</h3>
    <Button type={'positive'} label="Button" />
    <h3>Disabled state</h3>
    <Button type={'positive'} label="Button" disabled={true} />
    <h3>Button with icon</h3>
    <Button type={'positive'} label="Button" icon={'add'} /> <br />
    <h3>Button with icon right</h3>
    <Button type={'positive'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button type={'positive'} icon={'add'} />
  </div>
);

export const ButtonNegative = () => (
  <div>
    <h3>Normal state</h3>
    <Button type={'negative'} label="Button" />
    <h3>Disabled state</h3>
    <Button type={'negative'} label="Button" disabled={true} />
    <h3>Button with icon</h3>
    <Button type={'negative'} label="Button" icon={'add'} /> <br />
    <h3>Button with icon right</h3>
    <Button type={'negative'} label="Button" icon={'arrow-right'} iconRight={true} />
    <br />
    <h3>Button ball (with icon and without label)</h3>
    <Button type={'negative'} icon={'add'} />
  </div>
);
