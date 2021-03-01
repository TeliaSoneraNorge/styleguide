import React, { useState } from 'react';
import { FieldInstructions } from './index';
import { withDesign } from 'storybook-addon-designs';
import { TextField } from '../TextField';
import { set } from 'lodash/fp';

export default {
  component: FieldInstructions,
  title: 'Component library/Molecules/Field Instructions',
  decorators: [withDesign],
};

export const Default = () => {
  const [state, setState] = useState('');
  const [openFieldInstructions, setOpenFieldInstructions] = useState(false);

  return (
    <>
      <h3>Field Instructions</h3>
      <p>
        The field instructions component should be used together with the <code>TextField</code> component. To use it
        with other components, add <code>FieldInstructionsProps</code> to their props
      </p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <TextField
            label="Field label"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Placeholder text"
            error={state === 'error'}
            success={state === 'success'}
            helpText={state === 'error' ? state : ''}
            fieldInstructionsProps={{
              label: 'Why?',
              description: 'This is is this  a description for the text field',
              open: openFieldInstructions,
              setOpen: setOpenFieldInstructions,
            }}
            onBlur={() => setOpenFieldInstructions(false)}
          />
        </div>
      </div>
    </>
  );
};
