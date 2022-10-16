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

export const AsDesigned = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 5)}
      initialStepNumber={0}
      pageSize={5}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
      autocompletePreviousSteps={true}
      completeStepsClickable={true}
      incompleteStepsClickable={true}
      arrowsAsCarousel={false}
    />
  );
};

export const Minimum = () => {
  return <StepIndicatorPaging steps={StepDataChildrenAsHtml().filter((_, i) => i < 5)} />;
};

export const InitialStepTooLarge = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 5)}
      initialStepNumber={5}
      pageSize={5}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
      autocompletePreviousSteps={true}
      completeStepsClickable={true}
      incompleteStepsClickable={true}
      arrowsAsCarousel={false}
    />
  );
};

export const InitialStep1PageSize4 = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 5)}
      initialStepNumber={1}
      pageSize={4}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
      autocompletePreviousSteps={true}
      completeStepsClickable={true}
      incompleteStepsClickable={true}
      arrowsAsCarousel={false}
    />
  );
};

export const InitialStep1PageSize4ArrowsAsCarousel = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 5)}
      initialStepNumber={1}
      pageSize={4}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
      autocompletePreviousSteps={true}
      completeStepsClickable={true}
      incompleteStepsClickable={true}
      arrowsAsCarousel={true}
    />
  );
};

export const LargeStepCountDefaultValue = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
    />
  );
};

export const LargeStepCountInitialStepLast = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      initialStepNumber={7}
      autocompletePreviousSteps={false}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
    />
  );
};

export const ChildrenAreHtmlStringsDefault = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
    />
  );
};

export const ChildrenAreHtmlStringsInitialStep5AndArrowsAsCarousel = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      initialStepNumber={5}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
      autocompletePreviousSteps={true}
      completeStepsClickable={true}
      incompleteStepsClickable={true}
      arrowsAsCarousel={true}
    />
  );
};

export const ChildrenAreHtmlStringsIncompleteStepsDisabled = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      initialStepNumber={5}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
      autocompletePreviousSteps={true}
      completeStepsClickable={true}
      incompleteStepsClickable={false}
      arrowsAsCarousel={true}
    />
  );
};

export const ChildrenAreHtmlStringsDisableNavigationArrowsAsCarousel = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtml().filter((_, i) => i < 8)}
      initialStepNumber={5}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
      autocompletePreviousSteps={true}
      completeStepsClickable={false}
      incompleteStepsClickable={false}
      arrowsAsCarousel={true}
    />
  );
};

export const MiniStepsWithTitleAndUrlOnlyInitialStep1 = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenEmptyWithUrls().filter((_, i) => i < 8)}
      initialStepNumber={1}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
      autocompletePreviousSteps={true}
    />
  );
};

export const ChildrenAreComponentsPageSize3WithContentClass = () => {
  stepIndicatorPagingRef = useRef();
  return (
    <StepIndicatorPaging
      ref={stepIndicatorPagingRef}
      steps={StepDataChildrenAsComponents(onPreviousStepClick, onCompleteStepClick).filter((_, i) => i < 8)}
      initialStepNumber={1}
      pageSize={3}
      autocompletePreviousSteps={true}
      contentCssClass={'container container--small'}
    />
  );
};

export const ChildrenAreComponentsNavigationDisabledOnlyWithinComponentsStepIsMovedArrowsAreCarousel = () => {
  stepIndicatorPagingRef = useRef();
  return (
    <StepIndicatorPaging
      ref={stepIndicatorPagingRef}
      steps={StepDataChildrenAsComponents(onPreviousStepClick, onCompleteStepClick).filter((_, i) => i < 8)}
      autocompletePreviousSteps={true}
      completeStepsClickable={false}
      incompleteStepsClickable={false}
      arrowsAsCarousel={true}
    />
  );
};

export const StepsAsUrlsAndInitialStepIs3 = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtmlWithUrls().filter((_, i) => i < 8)}
      initialStepNumber={4}
      completeStepButtonId={'buttonComplete'}
      previousStepButtonId={'buttonPrevious'}
      autocompletePreviousSteps={true}
    />
  );
};

export const StepsAsUrlInitialStep5DisablingNavigationWorksAsTheOldStepIndicator = () => {
  return (
    <StepIndicatorPaging
      steps={StepDataChildrenAsHtmlWithUrls().filter((_, i) => i < 8)}
      initialStepNumber={5}
      autocompletePreviousSteps={true}
      completeStepsClickable={false}
      incompleteStepsClickable={false}
      arrowsAsCarousel={false}
    />
  );
};
