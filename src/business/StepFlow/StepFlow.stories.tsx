import React, { useState } from 'react';
import { StepFlow } from './StepFlow';
import { StepFlowStep } from './StepFlowStep';

import { action } from '@storybook/addon-actions';
import { TextField } from '../../molecules/TextField';

export default {
  component: StepFlow,
  title: 'Business/StepFlow',
  subComponents: { StepFlowStep },
};

export const Default = () => {
  const [name, setName] = useState('');

  return (
    <StepFlow
      title="Step flow"
      description="Commonly used for large forms and orders"
      onSubmit={action('Submit')}
      onCancel={action('Cancel')}
    >
      <StepFlowStep title="Step 1" description="An explanatory text for the first step" isValid={true}>
        <TextField value={name} onChange={(e) => setName(e.target.value)} />
        <TextField value={name} onChange={(e) => setName(e.target.value)} />
        <TextField value={name} onChange={(e) => setName(e.target.value)} />
        <TextField value={name} onChange={(e) => setName(e.target.value)} />
        <TextField value={name} onChange={(e) => setName(e.target.value)} />
      </StepFlowStep>
      <StepFlowStep title="Step 2" isValid={true}>
        <TextField />
      </StepFlowStep>
    </StepFlow>
  );
};
