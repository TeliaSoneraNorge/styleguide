import React, { useState } from 'react';
import { StepFlow } from './StepFlow';
import { StepFlowStep } from './StepFlowStep';

import { action } from '@storybook/addon-actions';
import { TextField } from '../../molecules/TextField';
import { Icon } from '../../atoms/Icon';
import { Button } from '../Button';
import { Card, CardBody, CardDivider, CardHeader } from '../Card';

export default {
  component: StepFlow,
  title: 'Business/StepFlow',
  subComponents: { StepFlowStep },
};

export const Default = () => {
  const [state, setState] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const setKey = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

  const step1Valid = true;

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
          {Object.entries(state).map(([key, val]) => (
            <div style={{ paddingBottom: '1rem' }}>
              <TextField value={val} onChange={(e) => setKey(key, e.target.value)} />
            </div>
          ))}
        </StepFlowStep>
        <StepFlowStep title="Step 2" isValid={true} disabled={!step1Valid}>
          <TextField />
        </StepFlowStep>
      </StepFlow>
    </div>
  );
};

export const WithAdditionalContent = () => {
  const [state, setState] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const setKey = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

  return (
    <div>
      <Button label="Hello?" />
      <StepFlow
        title="Step flow"
        description="Commonly used for large forms and orders"
        onSubmit={action('Submit')}
        onCancel={action('Cancel')}
        additionalContent={
          <Card>
            <CardHeader> This can be a cart </CardHeader>
            <CardBody>
              Its a custom component though. You can place anything you want here
              <CardDivider />
              This compoent will render below the step content on small screens. Try adjusting the screensize in the
              toolbare above
            </CardBody>
          </Card>
        }
      >
        <StepFlowStep title="Step 1" description="An explanatory text for the first step" isValid={true}>
          {Object.entries(state).map(([key, val]) => (
            <div style={{ paddingBottom: '1rem' }}>
              <TextField value={val} onChange={(e) => setKey(key, e.target.value)} />
            </div>
          ))}
        </StepFlowStep>
        <StepFlowStep title="Step 2" isValid={true} disabled={false}>
          <TextField />
        </StepFlowStep>
      </StepFlow>
    </div>
  );
};

export const WithTrigger = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const setKey = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

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
          <StepFlowStep title="Step 1" description="An explanatory text for the first step" isValid={true}>
            {Object.entries(state).map(([key, val]) => (
              <div style={{ paddingBottom: '1rem' }}>
                <TextField value={val} onChange={(e) => setKey(key, e.target.value)} />
              </div>
            ))}
          </StepFlowStep>
          <StepFlowStep title="Step 2" isValid={true} disabled={false}>
            <TextField />
          </StepFlowStep>
        </StepFlow>
      ) : null}
    </div>
  );
};

export const WithCustomHeaderContent = () => {
  const [state, setState] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const setKey = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

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
        <StepFlowStep title="Step 1" description="An explanatory text for the first step" isValid={true}>
          {Object.entries(state).map(([key, val]) => (
            <div style={{ paddingBottom: '1rem' }}>
              <TextField value={val} onChange={(e) => setKey(key, e.target.value)} />
            </div>
          ))}
        </StepFlowStep>
        <StepFlowStep title="Step 2" isValid={true} disabled={false}>
          <TextField />
        </StepFlowStep>
      </StepFlow>
    </div>
  );
};

export const SingleStep = () => {
  const [state, setState] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const setKey = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

  return (
    <div>
      <StepFlow
        title="Step flow"
        description="Commonly used for large forms and orders"
        onSubmit={action('Submit')}
        onCancel={action('Cancel')}
      >
        <StepFlowStep title="Step 1" description="An explanatory text for the first step" isValid={true}>
          {Object.entries(state).map(([key, val]) => (
            <div style={{ paddingBottom: '1rem' }}>
              <TextField value={val} onChange={(e) => setKey(key, e.target.value)} />
            </div>
          ))}
        </StepFlowStep>
      </StepFlow>
    </div>
  );
};
