import React, { useRef } from 'react';
import { Step } from './_Step';
import StepIndicatorPaging from './StepIndicatorPaging';
import Button from '../Button';

import { StepData } from './Data/Data';

export default {
  title: 'Component library/Atoms/Step Indicator Paging',
  component: StepIndicatorPaging,
};

let stepIndicatorPagingRef: any;

const onCompleteStepClick = (number: number) => {
  (stepIndicatorPagingRef.current as any).onStepComplete(number);
};

const onPreviousStepClick = (number: number) => {
  (stepIndicatorPagingRef.current as any).onPreviousStepClick(number);
};

export const AsDesigned = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={0}
      steps={StepData().filter((_, i) => i < 5)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const InitialStep3 = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={6}
      steps={StepData().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const WithPaging = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={0}
      steps={StepData().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const NavigationClicksDoesNotCompleteStepsWithPaging = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={0}
      steps={StepData().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={false}
      navigationClickable={true}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const DisabledNavigationClicksWithPaging = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={0}
      steps={StepData().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={false}
      navigationClickable={false}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const WithChildrenAsComponentsNoPaging = () => {
  stepIndicatorPagingRef = useRef();

  return (
    <StepIndicatorPaging
      steps={stepDataWithComponentChildren.filter((_, i) => i < 4)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      enableArrowsOnlyOnEdgeSteps={true}
      pageSize={5}
      //hideStepNumbers={false}
      ref={stepIndicatorPagingRef}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const WithChildrenAsComponentsWithPaging = () => {
  stepIndicatorPagingRef = useRef();

  return (
    <StepIndicatorPaging
      steps={stepDataWithComponentChildren.filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      enableArrowsOnlyOnEdgeSteps={true}
      pageSize={5}
      //hideStepNumbers={false}
      ref={stepIndicatorPagingRef}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const WithChildrenAsComponentsSmallPageSize = () => {
  stepIndicatorPagingRef = useRef();
  return (
    <StepIndicatorPaging
      steps={stepDataWithComponentChildren.filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      enableArrowsOnlyOnEdgeSteps={true}
      pageSize={3}
      //hideStepNumbers={false}
      ref={stepIndicatorPagingRef}
      contentContainerCssClass={'container container--small'}
    />
  );
};

const stepDataWithComponentChildren: Step[] = [
  {
    title: 'Step 1',
    url: '',
    isComplete: true,
    children: (
      <div>
        <h2>Step 1...</h2>
        <Button text={'Prev'} onClick={() => onPreviousStepClick(0)} />
        <Button text={'Next/Complete1'} onClick={() => onCompleteStepClick(0)} />
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
        <Button text={'Prev'} onClick={() => onPreviousStepClick(1)} />
        <Button text={'Next/Complete2'} onClick={() => onCompleteStepClick(1)} />
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
        <Button text={'Prev'} onClick={() => onPreviousStepClick(2)} />
        <Button text={'Next/Complete3'} onClick={() => onCompleteStepClick(2)} />
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
        <Button text={'Prev'} onClick={() => onPreviousStepClick(3)} />
        <Button text={'Next/Complete4'} onClick={() => onCompleteStepClick(3)} />
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
        <Button text={'Prev'} onClick={() => onPreviousStepClick(4)} />
        <Button text={'Next/Complete5'} onClick={() => onCompleteStepClick(4)} />
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
        <Button text={'Prev'} onClick={() => onPreviousStepClick(5)} />
        <Button text={'Next/Complete6'} onClick={() => onCompleteStepClick(5)} />
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
        <Button text={'Prev'} onClick={() => onPreviousStepClick(6)} />
        <Button text={'Next/Complete6'} onClick={() => onCompleteStepClick(6)} />
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
        <Button text={'Prev'} onClick={() => onPreviousStepClick(7)} />
        <Button text={'Next/Complete6'} onClick={() => onCompleteStepClick(7)} />
      </div>
    ),
  },
];
