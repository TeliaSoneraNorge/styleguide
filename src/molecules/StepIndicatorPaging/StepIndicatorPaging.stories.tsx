import React, { useRef } from 'react';
import StepIndicatorPaging from './StepIndicatorPaging';

import { StepData } from './Data/StepData';
import { StepDataWithUrls } from './Data/StepDataWithUrls';
import { StepDataWithComponents } from './Data/StepDataWithComponents';
import { StepDataNoChildrenWithUrls } from './Data/StepDataNoChildrenWithUrls';

export default {
  title: 'Component library/Molecules/Step Indicator Paging',
  component: StepIndicatorPaging,
};

let stepIndicatorPagingRef: any;

const onCompleteStepClick = (number: number) => {
  (stepIndicatorPagingRef.current as any).onStepComplete(number);
};

const onPreviousStepClick = (number: number) => {
  (stepIndicatorPagingRef.current as any).onPreviousStepClick(number);
};

export const DefaultAsDesigned = () => {
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

export const WithInitialStep3AndValidatorOnStep3 = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={3}
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

export const WithPageSizeMedium = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={0}
      steps={StepData().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      pageSize={4}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const WithNavigationDoesNotCompleteSteps = () => {
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

export const WithNavigationDisabled = () => {
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

export const WithChildrenAsComponentsAndStep1IsCompleted = () => {
  stepIndicatorPagingRef = useRef();

  return (
    <StepIndicatorPaging
      steps={StepDataWithComponents(onPreviousStepClick, onCompleteStepClick).filter((_, i) => i < 8)}
      initialStepNumber={2}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      showArrowsTillEdgeSteps={true}
      pageSize={5}
      ref={stepIndicatorPagingRef}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const WithChildrenAsComponentsSmallPageSize = () => {
  stepIndicatorPagingRef = useRef();
  return (
    <StepIndicatorPaging
      steps={StepDataWithComponents(onPreviousStepClick, onCompleteStepClick).filter((_, i) => i < 8)}
      initialStepNumber={2}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      showArrowsTillEdgeSteps={false}
      pageSize={3}
      ref={stepIndicatorPagingRef}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const WithMinimumOptionsSet = () => {
  return <StepIndicatorPaging steps={StepDataNoChildrenWithUrls().filter((_, i) => i < 8)} initialStepNumber={4} />;
};

export const WithStepsAsUrls = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={3}
      steps={StepDataWithUrls().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};
