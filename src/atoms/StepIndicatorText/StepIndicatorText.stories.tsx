import React, { useState } from 'react';
import { Step } from './Step';
import StepIndicatorText from './StepIndicatorText';
import StepComponentContainer from './StepComponentContainer';

export default {
  title: 'Component library/Atoms/Step Indicator Text',
  component: StepIndicatorText,
};

const wrapperStyle = {
  width: '700px',
  display: 'flex',
  justifyContent: 'flexStart',
};

export const Default = () => {
  const data = stepData.filter((_, i) => i < 7);

  const [currentNumber, setCurrentNumber] = useState(0);
  const [steps, setSteps] = useState(data);

  const onActiveStepChanged = (number: number) => {
    setCurrentNumber(number);
  };

  const completeStep = () => {
    steps[currentNumber].isActive = false;
    steps[currentNumber].isComplete = true;
    if (currentNumber < steps.length - 1) {
      steps[currentNumber + 1].isActive = true;
      steps[currentNumber + 1].isComplete = false;

      setCurrentNumber(currentNumber + 1);
    }
    setSteps([...steps]);
  };

  const incompleteStep = () => {
    steps[currentNumber].isActive = false;
    steps[currentNumber].isComplete = false;
    if (currentNumber > 0) {
      setCurrentNumber(currentNumber - 1);
      steps[currentNumber - 1].isActive = true;
      steps[currentNumber - 1].isComplete = false;
    }
    setSteps([...steps]);
  };

  const RenderContent = () => {
    return (
      <>
        <h1>Hello world</h1>
        <p>Some text... </p>
        <p>Current step: {currentNumber}</p>
        <button onClick={() => completeStep()}>Completed step</button>
        <button onClick={() => incompleteStep()}>Previous</button>
      </>
    );
  };

  return (
    <>
      <div style={wrapperStyle}>
        <StepComponentContainer steps={steps} content={<RenderContent />} onActiveStepChanged={onActiveStepChanged} />
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
    content: "Hello world <button onclick='stepInidicatorTextOnStepChange();'>Test</button>",
  },
  {
    title: 'Step 2',
    url: '',
    isComplete: false,
    onActivateStep: null,
    content: '<h2>Hello world in h2</h2>',
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
