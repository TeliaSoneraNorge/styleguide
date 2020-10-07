import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

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
