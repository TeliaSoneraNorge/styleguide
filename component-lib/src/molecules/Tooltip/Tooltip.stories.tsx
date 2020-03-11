import React from 'react';
import { Tooltip } from '../../index';

export default {
  title: 'Component library|Molecules/Tooltip',
  component: Tooltip,
};

export const Default = () => <Tooltip text="This is a default standalone tooltip." />;

export const ShowInfoTooltip = () => (
  <Tooltip
    buttonContent="?"
    text="This is a standalone tooltip initially expanded with a '?' button content"
    isExpanded
  />
);

export const InContextOfLabel = () => (
  <Tooltip label="Clickable label" text="This is a tooltip in context of a label" isExpanded />
);

export const ComplexContent = () => (
  <Tooltip isExpanded>
    <div>
      Tooltip content might be:
      <ul>
        <li>A simple text string</li>
        <li>A complex Node as in this example</li>
      </ul>
    </div>
  </Tooltip>
);