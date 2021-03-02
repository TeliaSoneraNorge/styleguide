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
      <div>
        <p>Textfield with FieldInstructions</p>
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
              description: 'This is this a description for the text field',
              open: openFieldInstructions,
              setOpen: setOpenFieldInstructions,
            }}
            onBlur={() => setOpenFieldInstructions(false)}
          />

          <br />
          <p style={{ marginBottom: '60px' }}>Standalone FieldInstruction - always open</p>
          <FieldInstructions
            label="Why?"
            description="This is this a description for the text field"
            open={true}
            position="right"
          />
          <br />
          <p style={{ marginBottom: '60px' }}>Standalone FieldInstruction</p>
          <FieldInstructions
            label="Why?"
            description="This is this a description for the text field"
            position="right"
          />
        </div>
      </div>
    </>
  );
};
