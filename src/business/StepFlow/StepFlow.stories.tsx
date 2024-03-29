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
  parameters: { layout: 'fullscreen' },
};

export const Default = () => {
  const [state, setState] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const setKey = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

  const step1Valid = true;

  return (
    <div>
      <StepFlow
        title="Step flow"
        description="Commonly used for large forms and orders"
        onSubmit={action('Submit')}
        onCancel={action('Cancel')}
      >
        <StepFlowStep title="Onomatopoetikon" description="An explanatory text for the first step" isValid={step1Valid}>
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

export const WithCustomDescription = () => {
  const [state, setState] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const setKey = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

  return (
    <div>
      <StepFlow
        title="Step flow"
        description={
          <div>
            Commonly used for large forms and orders
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon style={{ marginRight: '1rem', height: '1rem', width: '1rem' }} icon="email" /> Some info about the
              content
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon style={{ marginRight: '1rem', height: '1rem', width: '1rem' }} icon="email" /> Some info about the
              content
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon style={{ marginRight: '1rem', height: '1rem', width: '1rem' }} icon="email" /> Some info about the
              content
            </div>
          </div>
        }
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
      </StepFlow>
    </div>
  );
};

export const WithNavigationBar = () => {
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
        navBar={
          <div>
            <Button label="Back" icon="arrow-left" kind="primary-text" />
          </div>
        }
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

export const WithoutCancel = () => {
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
        navBar={
          <div>
            <Button label="Back" icon="arrow-left" kind="primary-text" />
          </div>
        }
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

export const Grey = () => {
  const [state, setState] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const setKey = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

  return (
    <div>
      <StepFlow
        title="Step flow"
        color="grey"
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
