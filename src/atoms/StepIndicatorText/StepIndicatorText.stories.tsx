import React, { useState } from 'react';
import { Step } from './Step';
import StepIndicatorText from './StepIndicatorText';

export default {
  title: 'Component library/Atoms/Step Indicator Text',
  component: StepIndicatorText,
};

const StepIndicatorPage = (props: any) => {
  const { stepCount } = props;
  const [steps, setSteps] = useState(stepData.filter((_, i) => i < stepCount));

  const [currentActiveStep, setCurrentActiveStep] = useState(1);

  const onStepChange = () => {
    const activeStep = currentActiveStep + 1;
    alert('hell oworld!');

    setCurrentActiveStep(activeStep);

    const previous = steps[activeStep - 1];
    const step = steps[activeStep];

    step.isActive = true;
    previous.isActive = false;
    previous.isComplete = true;

    setSteps(steps);
  };

  (window as any).stepInidicatorTextOnStepChange = onStepChange;
  return (
    <div className="telia-step-indicator-page-sample">
      <StepIndicatorText
        activeStep={currentActiveStep}
        steps={stepData.filter((_, i) => i < 7)}
        onStepNavigationCompletesPreviousSteps={true}
      />
    </div>
  );
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
        <StepIndicatorPage stepCount={7} />
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
    children: "Hello world <button onclick='stepInidicatorTextOnStepChange();'>Test</button>",
  },
  {
    title: 'Step 2',
    url: '',
    isComplete: false,
    onActivateStep: null,
    children: '<h2>Hello world in h2</h2>',
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
