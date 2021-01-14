import React, { useState } from 'react';
import { StepFlow } from './StepFlow';
import { StepFlowStep } from './StepFlowStep';

import { action } from '@storybook/addon-actions';
import { TextField } from '../../molecules/TextField';
import { Icon } from '../../atoms/Icon';
import { Button } from '../Button';

export default {
  component: StepFlow,
  title: 'Business/StepFlow',
  subComponents: { StepFlowStep },
};

export const Default = () => {
  const [name, setName] = useState('');

  const step1Valid = !!name.length;
  return (
    <div>
      <Button label="Hello?" />
      <StepFlow
        title="Step flow"
        description="Commonly used for large forms and orders"
        onSubmit={action('Submit')}
        onCancel={action('Cancel')}
      >
        <StepFlowStep title="Step 1" description="An explanatory text for the first step" isValid={step1Valid}>
          <TextField value={name} onChange={(e) => setName(e.target.value)} />
          <TextField value={name} onChange={(e) => setName(e.target.value)} />
          <TextField value={name} onChange={(e) => setName(e.target.value)} />
          <TextField value={name} onChange={(e) => setName(e.target.value)} />
          <TextField value={name} onChange={(e) => setName(e.target.value)} />
        </StepFlowStep>
        <StepFlowStep title="Step 2" isValid={true} disabled={!step1Valid}>
          <TextField />
        </StepFlowStep>
      </StepFlow>
    </div>
  );
};

export const WithTrigger = () => {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const step1Valid = !!name.length;
  return (
    <div>
      <Button label="Open step flow" onClick={() => setOpen(true)} />
      {open ? (
        <StepFlow
          title="Step flow"
          description="Commonly used for large forms and orders"
          onSubmit={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        >
          <StepFlowStep title="Step 1" description="An explanatory text for the first step" isValid={step1Valid}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </StepFlowStep>
          <StepFlowStep title="Step 2" isValid={true} disabled={!step1Valid}>
            <TextField />
          </StepFlowStep>
        </StepFlow>
      ) : null}
    </div>
  );
};

export const WithCustomHeaderContent = () => {
  const [name, setName] = useState('');

  const step1Valid = !!name.length;
  return (
    <div>
      <StepFlow
        title="Step flow"
        description="Commonly used for large forms and orders"
        onSubmit={action('Submit')}
        onCancel={action('Cancel')}
        headerContent={(stuck) =>
          stuck ? (
            <div style={{ marginLeft: 'auto' }}>custom content</div>
          ) : (
            <div style={{ border: '1px solid grey', padding: '1rem', marginLeft: 'auto' }}>
              Custom header content
              <Icon icon="phone" />
            </div>
          )
        }
      >
        <StepFlowStep title="Step 1" description="An explanatory text for the first step" isValid={step1Valid}>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </StepFlowStep>
        <StepFlowStep title="Step 2" isValid={true} disabled={!step1Valid}>
          <TextField />
        </StepFlowStep>
      </StepFlow>
    </div>
  );
};

export const SingleStep = () => {
  const [name, setName] = useState('');

  const step1Valid = !!name.length;
  return (
    <div>
      <StepFlow
        title="Step flow"
        description="Commonly used for large forms and orders"
        onSubmit={action('Submit')}
        onCancel={action('Cancel')}
      >
        <StepFlowStep title="Step 1" description="An explanatory text for the first step" isValid={step1Valid}>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ paddingBottom: '1rem' }}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </StepFlowStep>
      </StepFlow>
    </div>
  );
};
