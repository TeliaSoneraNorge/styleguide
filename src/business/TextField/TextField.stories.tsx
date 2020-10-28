import React from 'react';
import { TextField } from './index';
import { Icon } from '../../index';
import { Button } from '../Button';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: TextField,
  title: 'Business/TextField',
  decorators: [withDesign],
};

export const Default = () => {
  return (
    <>
      <h3>TextField</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <TextField label="Field label" placeholder="Placeholder text" />
          <TextField label="Field label" helpText="Help or instrictions" />
          <TextField label="Field label" helpText={<div style={{ textAlign: 'end' }}>Help or instrictions</div>} />
          <TextField label="Field label" error={true} helpText="Error message" />
          <TextField label="Field label" success={true} helpText="Success message" />
        </div>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <TextField label="Field label" leftContent={<Icon icon="search" />} />
          <TextField
            label="Field label"
            helpText="Help or instrictions"
            rightContent={<Button size="compact" kind="secondary-text" icon="close" onClick={action('button')} />}
          />
          <TextField label="Field label" helpText={<div style={{ textAlign: 'end' }}>Help or instrictions</div>} />
          <TextField label="Field label" error={true} helpText="Error message" />
          <TextField label="Field label" success={true} helpText="Success message" />
        </div>
        <div style={{ width: '30%' }}>
          <TextField label="Field label" leftContent={<Icon icon="search" />} disabled={true} />
          <TextField
            label="Field label"
            helpText="Help or instrictions"
            rightContent={
              <Button size="compact" kind="secondary-text" icon="close" onClick={action('button')} disabled={true} />
            }
            disabled={true}
          />
          <TextField
            label="Field label"
            helpText={<div style={{ textAlign: 'end' }}>Help or instrictions</div>}
            disabled={true}
          />
        </div>
      </div>
    </>
  );
};

export const Compact = () => {
  return (
    <>
      <h3>TextField - compact</h3>
      <a href="https://www.figma.com/file/DY2nAi4QVg4DZWQSGP1A0n/Text-field?node-id=2%3A2"> Figma skisser</a> <p></p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <TextField size="compact" label="Field label" placeholder="Placeholder text" />
          <TextField size="compact" label="Field label" helpText="Help or instrictions" />
          <TextField
            size="compact"
            label="Field label"
            helpText={<div style={{ textAlign: 'end' }}>Help or instrictions</div>}
          />
          <TextField size="compact" label="Field label" error={true} helpText="Error message" />
          <TextField size="compact" label="Field label" success={true} helpText="Success message" />
        </div>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <TextField size="compact" label="Field label" leftContent={<Icon icon="search" />} />
          <TextField
            size="compact"
            label="Field label"
            helpText="Help or instrictions"
            rightContent={<Button size="compact" kind="secondary-text" icon="close" onClick={action('button')} />}
          />
          <TextField
            size="compact"
            label="Field label"
            helpText={<div style={{ textAlign: 'end' }}>Help or instrictions</div>}
          />
          <TextField size="compact" label="Field label" error={true} helpText="Error message" />
          <TextField size="compact" label="Field label" success={true} helpText="Success message" />
        </div>
        <div style={{ width: '30%' }}>
          <TextField size="compact" label="Field label" leftContent={<Icon icon="search" />} disabled={true} />
          <TextField
            size="compact"
            label="Field label"
            helpText="Help or instrictions"
            rightContent={
              <Button size="compact" kind="secondary-text" icon="close" onClick={action('button')} disabled={true} />
            }
            disabled={true}
          />
          <TextField
            size="compact"
            label="Field label"
            helpText={<div style={{ textAlign: 'end' }}>Help or instrictions</div>}
            disabled={true}
          />
        </div>
      </div>
    </>
  );
};

export const QuickSearch = () => {
  return (
    <>
      <h3>TextField - QuickSearch</h3>
      <a href="https://www.figma.com/file/DY2nAi4QVg4DZWQSGP1A0n/Text-field?node-id=2%3A2"> Figma skisser</a> <p></p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <TextField
            placeholder="Søk i..."
            kind="grey"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
          />
          <br />
          <TextField
            placeholder="Søk i..."
            kind="grey"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={<Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />}
          />
          <br />
          <TextField
            placeholder="Søk i..."
            kind="grey"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={
              <div style={{ display: 'flex', paddingRight: '4px' }}>
                <Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />{' '}
                <Button kind="secondary-text" size="compact" icon="filter" onClick={action('clear')} />{' '}
              </div>
            }
          />
        </div>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <TextField
            placeholder="Søk i..."
            kind="white"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
          />
          <br />
          <TextField
            placeholder="Søk i..."
            kind="white"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={<Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />}
          />
          <br />
          <TextField
            placeholder="Søk i..."
            kind="white"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={
              <div style={{ display: 'flex', paddingRight: '4px' }}>
                <Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />{' '}
                <Button kind="secondary-text" size="compact" icon="filter" onClick={action('clear')} />{' '}
              </div>
            }
          />
        </div>
      </div>
      <p>
        Looking for a search field with a dropdown menu to display results? See{' '}
        <a href="https://styleguide.channelapi.telia.no/?path=/story/component-library-molecules-dropdown--with-search-toggle">
          the dropdown with search toggle
        </a>
      </p>
    </>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DY2nAi4QVg4DZWQSGP1A0n/Text-field?node-id=13%3A21',
  },
};

Compact.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DY2nAi4QVg4DZWQSGP1A0n/Text-field?node-id=46%3A178',
  },
};

QuickSearch.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/EBjS8URGPnFXU0SQsVL9la/Quick-search?node-id=2%3A2',
  },
};
