import React, { useState } from 'react';
import { Step } from './Step';
import StepComponent from './StepComponent';

export interface Props {
  steps?: Step[] | null | undefined;
  content?: any;
  onActiveStepChanged?: any;
  onCompleteStep?: any;
  onStepNavigationCompletesPreviousSteps?: boolean | undefined;
}

const StepComponentContainer = (props: Props) => {
  if (typeof props.steps === 'undefined' || !props.steps) {
    return <></>;
  }
  const [steps, setSteps] = useState(props.steps);

  const activateStep = (number: number) => {
    steps.forEach((step) => {
      if (step.isActive) {
        step.isComplete = true;
      }
      step.isActive = false;
    });

    if (props.onCompleteStep) {
      props.onCompleteStep(number);
    }

    steps[number].isActive = true;
    setSteps([...steps]);

    if (props.onActiveStepChanged) {
      props.onActiveStepChanged(number);
    }
  };
  const content = props.content;

  return (
    <div className="telia-step-indicator">
      <div className="telia-step-indicator">
        <div className="telia-step-indicator-text__container">
          <div className="telia-step-indicator-text">
            <ol>
              {steps.map((step, i) => (
                <li key={i * 1000}>
                  <StepComponent
                    number={i}
                    title={step.title}
                    url={step.url}
                    isActive={step.isActive}
                    isComplete={step.isComplete}
                    onActivateStep={() => activateStep(i)}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      {typeof content !== 'undefined' && content && (
        <>
          {typeof content === 'string' && (
            <section
              className="telia-step-indiciator__current-step__content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          {typeof content !== 'string' && (
            <section className="telia-step-indicator__current-step__content">{content}</section>
          )}
        </>
      )}
    </div>
  );
};

export default StepComponentContainer;
