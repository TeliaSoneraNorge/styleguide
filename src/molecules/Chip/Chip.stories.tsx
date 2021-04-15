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
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
      <div>Normal state:</div>
      <div>Active state:</div>
      <div>Disabled state:</div>
      <div>Chip with icon:</div>
    </div>
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
      <Chip label="Chippy" />
      <Chip label="Chippy" active />
      <Chip label="Chippy" disabled />
      <Chip label="Chippy" icon="check-mark" />
    </div>
    <br />
    <h3>Choice Chip - Grey</h3>
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
      <Chip label="Chippy Chippy" color="grey" />

      <Chip label="Chippy" active color="grey" />

      <Chip label="Chippy" disabled color="grey" />

      <Chip label="Chippy" icon="check-mark" color="grey" />
    </div>

    <h3>Square Chip</h3>
    <div>White</div>
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
      <Chip label="Chippy" mode="choice" kind="square" />
      <Chip label="Chippy" mode="choice" disabled kind="square" />
      <Chip label="Chippy" mode="choice" icon="check-mark" kind="square" />
    </div>
    <div>Grey</div>
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
      <Chip label="Chippy" mode="choice" color="grey" kind="square" />
      <Chip label="Chippy" mode="choice" color="grey" disabled kind="square" />
      <Chip label="Chippy" mode="choice" color="grey" icon="check-mark" kind="square" />
    </div>
  </div>
);

export const InputChips = () => (
  <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
    <h3>Input Chip</h3>
    <strong>An input chip will always be active</strong>
    <strong>Default input chip is white with grey border</strong>
    <br />
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
      <div>Normal state:</div>
      <div>Disabled state:</div>
      <div>Chip with icon:</div>
    </div>
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
      <Chip label="Chippy" mode="input" />
      <Chip label="Chippy" mode="input" disabled />
      <Chip label="Chippy" mode="input" icon="check-mark" />
    </div>
    <br />
    <h3>Input Chip - Grey</h3>
    <br />
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
      <Chip label="Chippy Chippy" mode="input" color="grey" />
      <Chip label="Chippy" mode="input" color="grey" disabled />
      <Chip label="Chippy" mode="input" color="grey" icon="check-mark" />
    </div>
    <h3>Square Chip</h3>
    <div>White</div>
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
      <Chip label="Chippy" mode="input" kind="square" />
      <Chip label="Chippy" mode="input" disabled kind="square" />
      <Chip label="Chippy" mode="input" icon="check-mark" kind="square" />
    </div>
    <div>Grey</div>
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
      <Chip label="Chippy" mode="input" color="grey" kind="square" />
      <Chip label="Chippy" mode="input" color="grey" disabled kind="square" />
      <Chip label="Chippy" mode="input" color="grey" icon="check-mark" kind="square" />
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
