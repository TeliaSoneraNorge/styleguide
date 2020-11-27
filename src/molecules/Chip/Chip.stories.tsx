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
      <Chip label="Chippy" size="compact" />
      <Chip label="Chippy" size="compact" active />
      <Chip label="Chippy" size="compact" disabled />
      <Chip label="Chippy" size="compact" icon="check-mark" />
    </div>
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
      <Chip label="Chippy" />
      <Chip label="Chippy" active />
      <Chip label="Chippy" disabled />
      <Chip label="Chippy" icon="check-mark" />
    </div>
    <br />
    <br />
    <h3>Choice Chip - Grey</h3>
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
      <Chip label="Chippy" size="compact" kind="grey" />

      <Chip label="Chippy" size="compact" active kind="grey" />

      <Chip label="Chippy" size="compact" disabled kind="grey" />

      <Chip label="Chippy" size="compact" icon="check-mark" kind="grey" />
    </div>
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '25% 25% 25% 25%' }}>
      <Chip label="Chippy" size="compact" kind="grey" />

      <Chip label="Chippy" active kind="grey" />

      <Chip label="Chippy" disabled kind="grey" />

      <Chip label="Chippy" icon="check-mark" kind="grey" />
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
      <Chip label="Chippy" mode="input" size="compact" />
      <Chip label="Chippy" mode="input" size="compact" disabled />
      <Chip label="Chippy" mode="input" size="compact" icon="check-mark" />
    </div>

    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
      <Chip label="Chippy" mode="input" />
      <Chip label="Chippy" mode="input" disabled />
      <Chip label="Chippy" mode="input" icon="check-mark" />
    </div>
    <br />
    <br />
    <h3>Input Chip - Grey</h3>
    <br />
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
      <Chip label="Chippy" mode="input" kind="grey" size="compact" />
      <Chip label="Chippy" mode="input" kind="grey" size="compact" disabled />
      <Chip label="Chippy" mode="input" kind="grey" size="compact" icon="check-mark" />
    </div>
    <div style={{ paddingBottom: '1rem', display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
      <Chip label="Chippy" mode="input" kind="grey" />
      <Chip label="Chippy" mode="input" kind="grey" disabled />
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
