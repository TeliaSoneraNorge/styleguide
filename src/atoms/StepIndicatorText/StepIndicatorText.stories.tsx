import React from 'react';
import { Step } from './Step';
import StepIndicatorText from './StepIndicatorText';

export default {
  title: 'Component library/Atoms/Step Indicator Text',
  component: StepIndicatorText,
};

export const Default = () => {
  const wrapperStyle = {
    width: '700px',
    display: 'flex',
    justifyContent: 'flexStart',
  };

  return (
    <>
      <div style={wrapperStyle}>
        <StepIndicatorText activeStep={0} steps={stepData.filter((_, i) => i <= 5)} />
      </div>
    </>
  );
};

const stepData: Step[] = [
  {
    title: 'Step 1',
    url: '',
    isComplete: false,
    onActivateStep: null,
  },
  {
    title: 'Step 2',
    url: '',
    isComplete: false,
    onActivateStep: null,
  },
  {
    title: 'Step 3',
    url: '',
    isComplete: false,
    onActivateStep: null,
  },
  {
    title: 'Step 4',
    url: '',
    isComplete: false,
    onActivateStep: null,
  },
  {
    title: 'Step 5',
    url: '',
    isComplete: false,
    onActivateStep: null,
  },
  {
    title: 'Step 6',
    url: '',
    isComplete: false,
    onActivateStep: null,
  },
  {
    title: 'Step 7',
    url: '',
    isComplete: false,
    onActivateStep: null,
  },
  {
    title: 'Step 8',
    url: '',
    isComplete: false,
    onActivateStep: null,
  },
  {
    title: 'Step 9',
    url: '',
    isComplete: false,
    onActivateStep: null,
  },
];
