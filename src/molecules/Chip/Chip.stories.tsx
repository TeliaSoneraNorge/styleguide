import React from 'react';
import { Chip } from './index';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: Chip,
  title: 'Component library/Molecules/Chip',
  decorators: [withDesign],
};

export const ChoiceChips = () => (
  <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
    <h3>Choice Chip</h3>
    <strong>Default chip is white with grey border</strong>
    <br />
    <div style={{ paddingBottom: '10px' }}>
      Normal state:
      <Chip label="Chippy" />
    </div>
    <div style={{ paddingBottom: '10px' }}>
      Active state:
      <Chip label="Chippy" active />
    </div>
    <div style={{ paddingBottom: '10px' }}>
      Disabled state:
      <Chip label="Chippy" disabled />
    </div>
    <div style={{ paddingBottom: '10px' }}>
      Chip with icon:
      <Chip label="Chippy" icon="check-mark" />
    </div>
    <br />
    <br />
    <h3>Choice Chip - Grey</h3>
    <div style={{ paddingBottom: '10px' }}>
      Normal state:
      <Chip label="Chippy" kind="grey" />
    </div>
    <div style={{ paddingBottom: '10px' }}>
      Active state:
      <Chip label="Chippy" active kind="grey" />
    </div>
    <div style={{ paddingBottom: '10px' }}>
      Disabled state:
      <Chip label="Chippy" disabled kind="grey" />
    </div>
  </div>
);

export const InputChips = () => (
  <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
    <h3>Input Chip</h3>
    <strong>An input chip will always be active</strong>
    <strong>Default input chip is white with grey border</strong>
    <br />
    <div style={{ paddingBottom: '10px' }}>
      Normal state:
      <Chip label="Chippy" mode="input" />
    </div>
    <div style={{ paddingBottom: '10px' }}>
      Disabled state:
      <Chip label="Chippy" mode="input" disabled />
    </div>
    <div style={{ paddingBottom: '10px' }}>
      Chip with icon:
      <Chip label="Chippy" mode="input" icon="check-mark" />
    </div>
    <br />
    <br />
    <h3>Input Chip - Grey</h3>
    <br />
    <div style={{ paddingBottom: '10px' }}>
      Normal state:
      <Chip label="Chippy" mode="input" kind="grey" />
    </div>
    <div style={{ paddingBottom: '10px' }}>
      Disabled state:
      <Chip label="Chippy" mode="input" kind="grey" disabled />
    </div>
    <div style={{ paddingBottom: '10px' }}>
      Chip with icon:
      <Chip label="Chippy" mode="input" kind="grey" icon="check-mark" />
    </div>
  </div>
);

ChoiceChips.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/E4qyw4OeADmgYAofHceD9Z/Chips?node-id=2%3A2',
  },
};

InputChips.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/E4qyw4OeADmgYAofHceD9Z/Chips?node-id=2%3A2',
  },
};
