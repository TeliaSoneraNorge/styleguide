import React, { useEffect, useRef, useState } from 'react';
import { TextField } from './index';
import { Icon } from '../../index';
import { Button } from '../../business/Button';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: TextField,
  title: 'Component library/Molecules/TextField',
  decorators: [withDesign],
};

export const Default = () => {
  const [state, setstate] = useState('');
  const [openFieldInstructions, setOpenFieldInstructions] = useState(false);

  return (
    <>
      <h3>TextField</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <TextField
            label="Field label"
            value={state}
            onChange={(e) => setstate(e.target.value)}
            placeholder="Placeholder text"
            error={state === 'error'}
            success={state === 'success'}
            helpText={state === 'error' ? state : ''}
          />
          <TextField label="Field label" helpText="Help or instructions" />
          <TextField label="Field label" helpText={<div style={{ textAlign: 'end' }}>Help on right side</div>} />
          <TextField label="Field label" error={true} helpText="Error message" />
          <TextField label="Field label" success={true} helpText="Success message" />
          <TextField label="Field label" kind="purpur" success={true} helpText="Help or instructions" />
        </div>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <TextField label="Field label" leftContent={<Icon icon="search" />} />
          <TextField
            label="Field label"
            helpText="Help or instructions"
            rightContent={<Button size="compact" kind="secondary-text" icon="close" onClick={action('button')} />}
          />
          <TextField label="Field label" helpText={<div style={{ textAlign: 'end' }}>Help on right side</div>} />
          <TextField label="Field label" error={true} helpText="Error message" />
          <TextField label="Field label" success={true} helpText="Success message" />
        </div>
        <div style={{ width: '30%' }}>
          <TextField label="Field label" leftContent={<Icon icon="search" />} disabled={true} />
          <TextField
            label="Field label"
            helpText="Help or instructions"
            rightContent={
              <Button size="compact" kind="secondary-text" icon="close" onClick={action('button')} disabled={true} />
            }
            disabled={true}
          />
          <TextField
            label="Field label"
            helpText={<div style={{ textAlign: 'end' }}>Help or instructions</div>}
            disabled={true}
          />
        </div>
      </div>
      <br />
      <p>Textfield with Field instructions</p>
      <div style={{ width: '30%' }}>
        <TextField
          label="Field label"
          fieldInstructionsProps={{
            label: 'Why?',
            description: 'This is this a description for the text field',
            open: openFieldInstructions,
            setOpen: setOpenFieldInstructions,
          }}
          onBlur={() => setOpenFieldInstructions(false)}
        />
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
          <TextField size="compact" label="Field label" helpText="Help or instructions" />
          <TextField
            size="compact"
            label="Field label"
            helpText={<div style={{ textAlign: 'end' }}>Help or instructions</div>}
          />
          <TextField size="compact" label="Field label" error={true} helpText="Error message" />
          <TextField size="compact" label="Field label" success={true} helpText="Success message" />
        </div>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <TextField size="compact" label="Field label" leftContent={<Icon icon="search" />} />
          <TextField
            size="compact"
            label="Field label"
            helpText="Help or instructions"
            rightContent={<Button size="compact" kind="secondary-text" icon="close" onClick={action('button')} />}
          />
          <TextField
            size="compact"
            label="Field label"
            helpText={<div style={{ textAlign: 'end' }}>Help or instructions</div>}
          />
          <TextField size="compact" label="Field label" error={true} helpText="Error message" />
          <TextField size="compact" label="Field label" success={true} helpText="Success message" />
        </div>
        <div style={{ width: '30%' }}>
          <TextField size="compact" label="Field label" leftContent={<Icon icon="search" />} disabled={true} />
          <TextField
            size="compact"
            label="Field label"
            helpText="Help or instructions"
            rightContent={
              <Button size="compact" kind="secondary-text" icon="close" onClick={action('button')} disabled={true} />
            }
            disabled={true}
          />
          <TextField
            size="compact"
            label="Field label"
            helpText={<div style={{ textAlign: 'end' }}>Help or instructions</div>}
            disabled={true}
          />
        </div>
      </div>
    </>
  );
};

export const focusOnMount = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <h1>Focus onMount</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <TextField size="default" label="Focus onMount label" placeholder="Placeholder text" inputRef={inputRef} />
        </div>
      </div>
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
