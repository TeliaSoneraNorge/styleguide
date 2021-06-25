import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';
import { Icon } from '../../atoms/Icon';

export default {
  component: Tooltip,
  title: 'Business/Tooltip',
};

export const TooltipStyles = () => (
  <div>
    <h2>Tooltip</h2>
    Default tooltip has dark color
    <br />
    <br />
    <h3>Tooltip styles</h3>
    <h4>Dark tooltip</h4>
    <Tooltip label="This is a tooltip">
      <Button label="hover me" />
    </Tooltip>
    <br />
    <br />
    <h4>Grey tooltip</h4>
    <Tooltip label="This is a tooltip" color="grey">
      <Button label="hover me" />
    </Tooltip>
    <br />
    <br />
    <h4>Purple tooltip</h4>
    <Tooltip label="This is a tooltip" color="purple">
      <Button label="hover me" />
    </Tooltip>
    <br />
    <br />
  </div>
);

export const TooltipLongText = () => (
  <div>
    <h2>Tooltip</h2>
    <br />
    <br />
    <h3>Tooltip with long text</h3>
    <Tooltip
      position="right"
      label="It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word"
    >
      <Button label="hover me" />
    </Tooltip>
    <br />
    <br />

    <Tooltip label="It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word">
      <Button label="hover me" />
    </Tooltip>
    <br />
    <br />

    <Tooltip
      position="right"
      label="It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word"
    >
      <Icon icon="info" style={{ height: '1.5rem' }} />
    </Tooltip>
    <div>
      <Tooltip position="right" label="It has roots in a piece of classic">
        <Icon icon="info" className="w-5 text-corePurple500" />
      </Tooltip>
    </div>
  </div>
);

export const TooltipPositions = () => (
  <div>
    {' '}
    <h2>Tooltip positions</h2>
    <h4>Right tooltip</h4>
    <Tooltip label="This is a tooltip" position="right">
      <Button label="hover me" />
    </Tooltip>
    <br />
    <br />
    <h4>Bottom tooltip</h4>
    <Tooltip label="This is a tooltip" position="bottom">
      <Button label="hover me" />
    </Tooltip>
    <br />
    <h4>Bottom-start tooltip</h4>
    <span style={{ paddingLeft: '150px' }}></span>
    <Tooltip label="This is a tooltip" position="bottom-start">
      <Button label="hover me" />
    </Tooltip>
    <h4>Bottom-end tooltip</h4>
    <Tooltip label="This is a tooltip" position="bottom-end">
      <Button label="hover me" />
    </Tooltip>
    <br />
    <br />
    <br />
    <h4>Left tooltip</h4>
    <span style={{ paddingLeft: '150px' }}></span>
    <Tooltip label="This is a tooltip" position="left">
      <Button label="hover me" />
    </Tooltip>
    <br />
    <br />
    <h4>Top tooltip</h4>
    <Tooltip label="This is a tooltip" position="top">
      <Button label="hover me" />
    </Tooltip>
    <br />
    <h4>Top-start tooltip</h4>
    <span style={{ paddingLeft: '150px' }}></span>
    <Tooltip label="This is a tooltip" position="top-start">
      <Button label="hover me" />
    </Tooltip>
    <br />
    <h4>Top-end tooltip</h4>
    <Tooltip label="This is a tooltip" position="top-end">
      <Button label="hover me" />
    </Tooltip>
    <br />
    <br />
  </div>
);
