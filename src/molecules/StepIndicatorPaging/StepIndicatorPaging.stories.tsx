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
