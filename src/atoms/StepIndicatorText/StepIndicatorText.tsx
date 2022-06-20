import React, { useState } from 'react';
import range from 'lodash/range';
import { StepRender } from './StepRender';
import { Step } from './Step';

export interface Props {
  activeStep?: number;
  onStepChange?: any;
  steps?: Step[];
}

const StepIndicatorText = (props: Props) => {
  const { steps, onStepChange } = props;
  if (!steps || steps.length === 0) {
    return <></>;
  }

  let { activeStep } = props;

  if (activeStep && activeStep < 0) {
    activeStep = 0;
  }

  const [currentIndex, setCurrentIndex] = useState(activeStep ?? 0);

  const onActivateStep = (index: number) => {
    setCurrentIndex(index);
    if (onStepChange) {
      onStepChange(index);
    }
  };

  return (
    <div className="step-indicator-text__container">
      <div className="step-indicator-text">
        <ol>
          {steps.map((step, i) => (
            <StepRender
              key={i}
              number={i}
              url={step.url}
              isActive={currentIndex === i}
              isComplete={currentIndex > i}
              title={step.title}
              onActivateStep={() => onActivateStep(i)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default StepIndicatorText;
