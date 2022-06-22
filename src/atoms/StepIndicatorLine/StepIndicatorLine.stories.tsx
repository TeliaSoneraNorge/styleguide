import React from 'react';
import { Step } from './Step';
import StepIndicatorLine from './StepIndicatorLine';

export default {
  title: 'Component library/Atoms/Step Indicator Line',
  component: StepIndicatorLine,
};

const wrapperStyle = {
  width: '700px',
  display: 'flex',
  justifyContent: 'flexStart',
  border: 'solid 1px red',
};

export const Default = () => {
  const data = stepData.filter((_, i) => i < 7);

  const onValidateStep = (steps: Step[], number: number) => {
    return true; //Optional to return anything, must return false to invalidate step navigation
  };

  return (
    <>
      <div style={wrapperStyle}>
        <StepIndicatorLine
          steps={data}
          onActiveStepChangeValidator={onValidateStep}
          completeButtonId={'step0Next'}
          incompleteButtonId={'step0Previous'}
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
    children: '<h1>Hello1</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 2',
    url: '',
    isComplete: false,
    onActivateStep: null,
    onCompleteButtonId: 'step0Next',
    onIncompleteButtonId: 'step0Previous',
    children: '<h1>Hello2 </h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 3',
    url: '',
    isComplete: false,
    onActivateStep: null,
    onCompleteButtonId: 'step0Next',
    onIncompleteButtonId: 'step0Previous',
    children: '<h1>Hello 3</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 4',
    url: '',
    isComplete: false,
    onActivateStep: null,
    onCompleteButtonId: 'step0Next',
    onIncompleteButtonId: 'step0Previous',
    children: '<h1>Hello4</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 5',
    url: '',
    isComplete: false,
    onActivateStep: null,
    onCompleteButtonId: 'step0Next',
    onIncompleteButtonId: 'step0Previous',
    children: '<h1>Hello 5</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 6',
    url: '',
    isComplete: false,
    onActivateStep: null,
    children: '<h1>Hello 6</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 7',
    url: '',
    isComplete: false,
    onActivateStep: null,
    children: '<h1>Hello 7</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 8',
    url: '',
    isComplete: false,
    onActivateStep: null,
    children: '<h1>Hello 8</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
  {
    title: 'Step 9',
    url: '',
    isComplete: false,
    onActivateStep: null,
    children: '<h1>Hello 9</h1><button id="step0Next">Next</button> <button id="step0Previous">Previous</button>',
  },
];
