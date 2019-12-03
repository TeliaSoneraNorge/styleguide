import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, color, select } from '@storybook/addon-knobs';

import { AllBusinessIcons } from './AllBusinessIcons';
import { Icon } from './Icon';
import { IconDefinition } from './IconDefinition';
import { availableIcons } from './availableIcons';

const stories = storiesOf('Business|Icon', module);

stories.addDecorator(withKnobs);

stories.add('Icon', () => (
  <div style={{ padding: '24px' }}>
    <AllBusinessIcons />

    <h1>Icon</h1>

    <p>
      The component <code>{'<AllBusinessIcons />'}</code> (which itself is invisible) must be present and rendered
      somewhere on the page in order for the SVGs to be available to the <code>{'<Icon />'}</code> component.
    </p>

    <p>
      The icon inherits its color from the surrounding element by use of CSS (
      <small>
        <code>fill: currentColor; stroke: currentColor;</code>
      </small>
      ).
    </p>

    <h2>Sample icon</h2>

    <div
      style={{
        transition: 'color 0.15s ease-in-out',
        color: color('Color', '#222'),
      }}
    >
      <Icon icon={select('Sample icon', availableIcons, 'robot') as IconDefinition} />
    </div>

    <h2>All icons</h2>

    <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
      {availableIcons.map((key: IconDefinition) => (
        <li
          key={key}
          style={{
            padding: '8px',
            display: 'inline-block',
            color: color('Color for all icons', '#222'),
          }}
          title={key}
        >
          <Icon style={{ width: '32px', height: '32px' }} icon={key} />
        </li>
      ))}
    </ul>
  </div>
));
