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

  const [state, setState] = useState({ steps: data, currentNumber: 0 });

  const updateState = (steps: Step[], number: number) => {
    const update = {
      steps: steps,
      currentNumber: number,
    };

    console.log('Current step: ' + number);

    setState(update);
  };

  const onActiveStepChanged = (steps: Step[], number: number) => {
    updateState(steps, number);
  };

  const completeStep = () => {
    let currentNumber = state.currentNumber;
    const steps = state.steps;

    console.log('Complete ' + currentNumber);
    steps[currentNumber].isActive = false;
    steps[currentNumber].isComplete = true;
    if (currentNumber < steps.length - 1) {
      currentNumber++;
      steps[currentNumber].isActive = true;
      steps[currentNumber].isComplete = false;
    }

    updateState(steps, currentNumber);
  };

  const incompleteStep = () => {
    let currentNumber = state.currentNumber;
    const steps = state.steps;

    console.log('Incomplete ' + currentNumber);

    steps[currentNumber].isActive = false;
    steps[currentNumber].isComplete = false;
    if (currentNumber > 0) {
      currentNumber--;
      steps[currentNumber].isActive = true;
      steps[currentNumber].isComplete = false;
    }
    updateState(steps, currentNumber);
  };

  return (
    <>
      <div style={wrapperStyle}>
        <StepComponentContainer
          steps={state.steps}
          onCompleteStep={completeStep}
          onIncompleteStep={incompleteStep}
          onActiveStepChanged={onActiveStepChanged}
        />
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
    onCompleteButtonId: 'step0Next',
    onIncompleteButtonId: 'step0Previous',
    content: '<h1>Hello1</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 2',
    url: '',
    isComplete: false,
    onActivateStep: null,
    onCompleteButtonId: 'step0Next',
    onIncompleteButtonId: 'step0Previous',
    content: '<h1>Hello2 </h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 3',
    url: '',
    isComplete: false,
    onActivateStep: null,
    onCompleteButtonId: 'step0Next',
    onIncompleteButtonId: 'step0Previous',
    content: '<h1>Hello 3</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 4',
    url: '',
    isComplete: false,
    onActivateStep: null,
    onCompleteButtonId: 'step0Next',
    onIncompleteButtonId: 'step0Previous',
    content: '<h1>Hello4</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 5',
    url: '',
    isComplete: false,
    onActivateStep: null,
    onCompleteButtonId: 'step0Next',
    onIncompleteButtonId: 'step0Previous',
    content: '<h1>Hello 5</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
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
