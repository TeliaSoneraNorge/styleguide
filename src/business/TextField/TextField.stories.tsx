import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextField } from './index';
import { Icon } from '../../index';
import { Button } from '../Button';
import { action } from '@storybook/addon-actions';

storiesOf('Business/TextField', module)
  .add('Default', () => {
    return (
      <>
        <h3>TextField</h3>
        <a href="https://www.figma.com/file/DY2nAi4QVg4DZWQSGP1A0n/Text-field?node-id=2%3A2"> Figma skisser</a> <p></p>
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
  })
  .add('Compact', () => {
    return (
      <>
        <h3>TextField - compact</h3>
        <a href="https://www.figma.com/file/DY2nAi4QVg4DZWQSGP1A0n/Text-field?node-id=2%3A2"> Figma skisser</a> <p></p>
        <p></p>
        <TextField />
      </>
    );
  });
