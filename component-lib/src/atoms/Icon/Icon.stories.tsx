import React from 'react';
import { color, select } from '@storybook/addon-knobs';

import { Icon } from './Icon';
import { HeartIcon, CheckMarkIcon } from './icons';
import { IconDefinition, availableIcons } from './Icon.generated';
import { colors } from '../../utils/colors';

export default {
  title: 'Component library/Atoms/Icon',
  component: Icon,
};

export const Default = () => (
  <div style={{ padding: '24px' }}>
    <h1>Icon</h1>

    <p>
      The icon inherits its color from the surrounding element by use of CSS (
      <small>
        <code>fill: currentColor</code>
      </small>
      ).
    </p>

    {process.env.NODE_ENV === 'production' ? (
      <p>
        You can also download <a href="telia-styleguide-icons.zip">all icons as a .zip file</a>.
      </p>
    ) : (
      <p>
        You can also download <span style={{ textDecoration: 'line-through' }}>all icons as a .zip file</span>{' '}
        <em>(this is disabled in development mode)</em>.
      </p>
    )}

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

    <h2>Individual icon components</h2>

    <p>
      For size-critical deployments, one can also import each individual icon as a component. This lets webpack and
      other bundlers use tree shaking to avoid including all icons in the bundle when you only need a few.
    </p>

    <pre>{`import { HeartIcon } from '@telia/styleguide';\n\n<HeartIcon\n  style={{ width: '100px', height: '100px' }}\n/>`}</pre>

    <HeartIcon style={{ width: '100px', height: '100px' }} />
  </div>
);

export const InlineIcon = () => (
  <>
    {/* {`import { CheckMarkIcon } from '@telia/styleguide';`} */}

    <CheckMarkIcon style={{ width: '100px', height: '100px', color: '#00CC66' }} />
  </>
);

export const AllIconsFromProps = () => (
  <>
    {/* {`import { Icon } from '@telia/styleguide';`} */}

    <Icon icon="record" style={{ width: '100px', height: '100px', color: colors.corePurple }} />

  </>
);
