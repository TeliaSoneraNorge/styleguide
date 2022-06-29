import React, { useRef } from 'react';
import { Step } from './_Step';
import StepIndicatorPaging from './StepIndicatorPaging';
import Button from '../Button';

import { StepData } from './Data/Data';

export default {
  title: 'Component library/Atoms/Step Indicator Paging',
  component: StepIndicatorPaging,
};

const row = {
  display: 'block',
  marginTop: '2em',
  marginBottom: '2em',
};

let stepIndicatorLineRef: any;

const onCompleteStepClick = (number: number) => {
  (stepIndicatorLineRef.current as any).onStepComplete(number);
};

const onIncompleteStepClick = (number: number) => {
  (stepIndicatorLineRef.current as any).onStepIncomplete(number);
};

export const Default = () => {
  stepIndicatorLineRef = useRef();

  const StepIndicatorLineRef = (props: any) => {
    return (
      <StepIndicatorPaging
        steps={props.steps}
        navigationCompletesPreviousSteps={true}
        enablePagingOnlyOnEdgeSteps={true}
        ref={stepIndicatorLineRef}
        contentContainerCssClass={'container container--small'}
      />
    );
  };

  return (
    <>
      <div style={row}>
        <StepIndicatorPaging
          initialStepNumber={0}
          steps={StepData.filter((_, i) => i < 8)}
          navigationCompletesPreviousSteps={false}
          navigationClickable={true}
          pageSize={5}
          completeButtonId={'buttonComplete'}
          previousButtonId={'buttonPrevious'}
          contentContainerCssClass={'container container--small'}
        />
      </div>
      {/* <div style={row}>
        <StepIndicatorLineRef steps={stepDataWithComponentChildren.filter((_, i) => i < 8)} />
      </div> */}
    </>
  );
};

export const stepDataWithComponentChildren: Step[] = [
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
