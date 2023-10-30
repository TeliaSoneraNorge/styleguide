import React from 'react';
import { Tooltip, TooltipColor, TooltipPosition } from './Tooltip';
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
    <Tooltip label="This is a tooltip" color={TooltipColor.Grey}>
      <Button label="hover me" />
    </Tooltip>
    <br />
    <br />
    <h4>Purple tooltip</h4>
    <Tooltip label="This is a tooltip" color={TooltipColor.Purple}>
      <Button label="hover me" />
    </Tooltip>
    <br />
    <br />
  </div>
);

export const TooltipLongText = () => (
  <div>
    <h2>Tooltip</h2>
    <div style={{ paddingLeft: '200px' }}>
      <h3>Tooltip with long text</h3>
      <Tooltip
        position={TooltipPosition.Right}
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
        position={TooltipPosition.Right}
        label="It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word"
      >
        <Icon icon="info" style={{ height: '1.5rem' }} />
      </Tooltip>
      <br />
      <Tooltip
        position={TooltipPosition.Left}
        label="It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word"
      >
        <Icon icon="info" className="text-corePurple500" />
      </Tooltip>

      <Tooltip
        label={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>Klikk for søk i Min Bedrift</div>
            <div># + K</div>
          </div>
        }
      >
        <Button kind="secondary-text" label="Søk i Min Bedrift" />
      </Tooltip>
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
);

export const TooltipPositions = () => (
  <div>
    {' '}
    <h2>Tooltip positions</h2>
    <div style={{ paddingLeft: '150px' }}>
      <h4>Right tooltip</h4>
      <Tooltip label="This is a tooltip" position={TooltipPosition.Right}>
        <Button label="hover me" />
      </Tooltip>
      <br />
      <h4>Bottom tooltip</h4>
      <Tooltip label="This is a tooltip" position={TooltipPosition.Bottom}>
        <Button label="hover me" />
      </Tooltip>
      <br />
      <h4>Bottom-start tooltip</h4>
      <Tooltip label="This is a tooltip" position={TooltipPosition.BottomStart}>
        <Button label="hover me" />
      </Tooltip>
      <br />
      <h4>Bottom-end tooltip</h4>
      <Tooltip label="This is a tooltip" position={TooltipPosition.BottomEnd}>
        <Button label="hover me" />
      </Tooltip>
      <br />
      <h4>Left tooltip</h4>
      <Tooltip label="This is a tooltip" position={TooltipPosition.Left}>
        <Button label="hover me" />
      </Tooltip>
      <br />
      <h4>Top tooltip</h4>
      <Tooltip label="This is a tooltip" position={TooltipPosition.Top}>
        <Button label="hover me" />
      </Tooltip>
      <br />
      <h4>Top-start tooltip</h4>
      <Tooltip label="This is a tooltip" position={TooltipPosition.TopStart}>
        <Button label="hover me" />
      </Tooltip>
      <br />
      <h4>Top-end tooltip</h4>
      <Tooltip label="This is a tooltip" position={TooltipPosition.TopEnd}>
        <Button label="hover me" />
      </Tooltip>
      <br />
      <br />
    </div>
  </div>
);
