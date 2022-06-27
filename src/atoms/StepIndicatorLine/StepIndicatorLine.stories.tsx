import React, { useRef } from 'react';
import { Step } from './Step';
import StepIndicatorLine from './StepIndicatorLine';
import Button from '../Button';

export default {
  title: 'Component library/Atoms/Step Indicator Line',
  component: StepIndicatorLine,
};

const row = {
  display: 'block',
  'margin-top': '2em',
  'margin-bottom': '2em',
};

let stepIndicatorLineRef: any;

const onCompleteStepClick = (number: number) => {
  (stepIndicatorLineRef.current as any).onStepComplete(number);
};

const onIncompleteStepClick = (number: number) => {
  (stepIndicatorLineRef.current as any).onStepIncomplete(number);
};

const onValidateStep = (steps: Step[], number: number) => {
  if (number == 3) {
    return false;
  }
  return true; //Optional to return anything, must return false to invalidate step navigation
};

export const Default = () => {
  stepIndicatorLineRef = useRef();

  const StepIndicatorLineRef = (props: any) => {
    return (
      <StepIndicatorLine
        steps={props.steps}
        navigationCompletesPreviousSteps={true}
        displayArrowsOnEdgeSteps={true}
        ref={stepIndicatorLineRef}
      />
    );
  };

  return (
    <>
      <div style={row}>
        <StepIndicatorLine
          activeStepNumber={0}
          steps={stepData.filter((_, i) => i < 8)}
          navigationCompletesPreviousSteps={false}
          navigationClickable={false}
          displayArrowsOnEdgeSteps={true}
          completeButtonId={'buttonComplete'}
          incompleteButtonId={'buttonPrevious'}
        />
      </div>
      <div style={row}>
        <StepIndicatorLineRef steps={stepDataWithComponentChildren.filter((_, i) => i < 8)} />
      </div>
    </>
  );
};

const stepData: Step[] = [
  {
    title: 'Step 1',
    url: '',
    isComplete: false,
    children:
      '<h1>Hello 1</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Next/Complete1</button>',
  },
  {
    title: 'Step 2',
    url: '',
    isComplete: false,
    children:
      '<h1>Hello 2</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Next/Complete2</button>',
  },
  {
    title: 'Step 3',
    url: '',
    isComplete: false,
    onValidateStep: onValidateStep,
    children:
      '<h1>Hello 3</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Next/Complete3</button>',
  },
  {
    title: 'Step 4',
    url: '',
    isComplete: false,
    children:
      '<h1>Hello 4</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Next/Complete4</button>',
  },
  {
    title: 'Step 5',
    url: '',
    isComplete: false,
    children:
      '<h1>Hello 5</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Next/Complete5</button>',
  },
  {
    title: 'Step 6',
    url: '',
    isComplete: false,
    children:
      '<h1>Hello 6</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Next/Complete6</button>',
  },
  {
    title: 'Step 7',
    url: '',
    isComplete: false,
    children:
      '<h1>Hello 7</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Next/Complete7</button>',
  },
  {
    title: 'Step 8',
    url: '',
    isComplete: false,
    children:
      '<h1>Hello 8</h1><button id="buttonPrevious">Prev</button> <button id="buttonComplete">Next/Complete8</button>',
  },
];

const stepDataWithComponentChildren: Step[] = [
  {
    title: 'Step 1',
    url: '',
    isComplete: false,
    children: (
      <div>
        <h2>Step 1...</h2>
        <Button text={'Prev'} onClick={() => onIncompleteStepClick(1)} />
        <Button text={'Next/Complete1'} onClick={() => onCompleteStepClick(1)} />{' '}
      </div>
    ),
  },
  {
    title: 'Step 2',
    url: '',
    isComplete: false,
    children: (
      <div>
        <h2>Step 2...</h2>
        <Button text={'Prev'} onClick={() => onIncompleteStepClick(2)} />
        <Button text={'Next/Complete2'} onClick={() => onCompleteStepClick(2)} />{' '}
      </div>
    ),
  },
  {
    title: 'Step 3',
    url: '',
    isComplete: false,
    children: (
      <div>
        <h2>Step 3...</h2>
        <Button text={'Prev'} onClick={() => onIncompleteStepClick(3)} />
        <Button text={'Next/Complete3'} onClick={() => onCompleteStepClick(3)} />{' '}
      </div>
    ),
  },
  {
    title: 'Step 4',
    url: '',
    isComplete: false,
    children: (
      <div>
        <h2>Step 4...</h2>
        <Button text={'Prev'} onClick={() => onIncompleteStepClick(4)} />
        <Button text={'Next/Complete4'} onClick={() => onCompleteStepClick(4)} />{' '}
      </div>
    ),
  },
  {
    title: 'Step 5',
    url: '',
    isComplete: false,
    children: (
      <div>
        <h2>Step 5...</h2>
        <Button text={'Prev'} onClick={() => onIncompleteStepClick(5)} />
        <Button text={'Next/Complete5'} onClick={() => onCompleteStepClick(5)} />{' '}
      </div>
    ),
  },
  {
    title: 'Step 6',
    url: '',
    isComplete: false,
    children: (
      <div>
        <h2>Step 6...</h2>
        <Button text={'Prev'} onClick={() => onIncompleteStepClick(6)} />
        <Button text={'Next/Complete6'} onClick={() => onCompleteStepClick(6)} />{' '}
      </div>
    ),
  },
  {
    title: 'Step 7',
    url: '',
    isComplete: false,
    children: (
      <div>
        <h2>Step 7...</h2>
        <Button text={'Prev'} onClick={() => onIncompleteStepClick(7)} />
        <Button text={'Next/Complete6'} onClick={() => onCompleteStepClick(7)} />{' '}
      </div>
    ),
  },
  {
    title: 'Step 8',
    url: '',
    isComplete: false,
    children: (
      <div>
        <h2>Step 8...</h2>
        <Button text={'Prev'} onClick={() => onIncompleteStepClick(8)} />
        <Button text={'Next/Complete6'} onClick={() => onCompleteStepClick(8)} />{' '}
      </div>
    ),
  },
];