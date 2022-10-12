import React, { useRef } from 'react';
import StepIndicatorPaging from './StepIndicatorPaging';

import { StepDataChildrenAsHtml } from './Data/StepDataChildrenAsHtml';
import { StepDataChildrenAsHtmlWithUrls } from './Data/StepDataChildrenAsHtmlWithUrls';
import { StepDataChildrenAsComponents } from './Data/StepDataChildrenAsComponents';
import { StepDataChildrenEmptyWithUrls } from './Data/StepDataChildrenEmptyWithUrls';

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
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 5)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const InitialStep5With3StepsTotalAndPageSize5 = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={5}
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 3)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const InitialStep3AndValidatorOnStep3 = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={3}
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const PageSize4 = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={0}
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      pageSize={4}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const PageSize4DisableIncompleteStepClicks = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={0}
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      pageSize={4}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
      disableIncompleteStepClick={true}
    />
  );
};

export const NavigationDoesNotCompletePreviousSteps = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={0}
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={false}
      navigationClickable={true}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const NavigationUnclickableAndNavigatingDoesNotSetPreviousStepsToComplete = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={0}
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={false}
      navigationClickable={false}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const NavigationDisabledWithInitialStep = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={6}
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={false}
      pageSize={5}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const ChildrenAreComponentsAndStep1IsCompleteAndArrowsOnEdge = () => {
  stepIndicatorPagingRef = useRef();

  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsComponents(onPreviousStepClick, onCompleteStepClick).filter((_, i) => i < 8)}
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

export const ChildrenAreComponentsSmallPageSize = () => {
  stepIndicatorPagingRef = useRef();
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsComponents(onPreviousStepClick, onCompleteStepClick).filter((_, i) => i < 8)}
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

export const MinimumOptionsUsingOnlyTitleAndUrlPerStep = () => {
  return <StepIndicatorPaging steps={StepDataChildrenEmptyWithUrls().filter((_, i) => i < 8)} />;
};

export const StepsAsUrlsAndInitialStepIs3 = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={3}
      steps={StepDataChildrenAsHtmlWithUrls().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={true}
      pageSize={5}
      completeButtonId={'buttonComplete'}
      previousButtonId={'buttonPrevious'}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const StepsAsUrlsWithoutCompleteButtons = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={3}
      steps={StepDataChildrenAsHtmlWithUrls().filter((_, i) => i < 8)}
      navigationCompletesPreviousSteps={true}
      navigationClickable={false}
      pageSize={5}
      completeButtonId={null}
      previousButtonId={null}
      contentContainerCssClass={'container container--small'}
    />
  );
};

export const StepsAsUrlsDisabledClickingStepsButArrowsAreClickable = () => {
  return (
    <StepIndicatorPaging
      initialStepNumber={1}
      steps={StepDataChildrenEmptyWithUrls().filter((_, i) => i < 8)}
      disableIncompleteStepClick={true}
      navigationClickable={false}
      pageSize={4}
    />
  );
};
