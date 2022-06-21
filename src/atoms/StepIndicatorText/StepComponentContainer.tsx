import React, { useState, useEffect, useRef } from 'react';
import { Step } from './Step';
import StepComponent from './StepComponent';

export interface Props {
  steps?: Step[] | null | undefined;
  onActiveStepChanged?: any;
  onStepNavigationCompletesPreviousSteps?: boolean | undefined;
  onCompleteStep?: any;
  onIncompleteStep?: any;
}

const StepComponentContainer = (props: Props) => {
  const thisRef = useRef(null);
  const { steps } = props;

  if (typeof steps === 'undefined' || !steps) {
    return <></>;
  }
  useEffect(() => {
    const currentActiveSteps = steps.filter((x) => x.isActive === true);

    let currentContent = null;
    if (currentActiveSteps && currentActiveSteps.length && currentActiveSteps[0]) {
      currentContent = currentActiveSteps[0].content;
    }

    if (currentContent) {
      const s = currentActiveSteps[0];
      if (s.onCompleteButtonId) {
        const completeButton = document.getElementById(s.onCompleteButtonId);
        if (completeButton) {
          completeButton.addEventListener('click', () => props.onCompleteStep());
        }
      }
      if (s.onIncompleteButtonId) {
        const incompleteButton = document.getElementById(s.onIncompleteButtonId);
        if (incompleteButton) {
          incompleteButton.addEventListener('click', () => props.onIncompleteStep());
        }
      }
    }
  });
  const { onStepNavigationCompletesPreviousSteps } = props;

  const activateStep = (number: number) => {
    console.log('activate step  ' + number);
    if (number >= 0) {
      if (onStepNavigationCompletesPreviousSteps === true) {
        steps.forEach((step, i) => {
          step.isActive = false;
          if (i < number) {
            step.isComplete = true;
          } else {
            step.isComplete = false;
          }
        });
      } else {
        steps.forEach((step) => {
          step.isActive = false;
        });
      }

      if (number < steps.length) {
        steps[number].isActive = true;
      }

      if (props.onActiveStepChanged) {
        props.onActiveStepChanged(steps, number);
      }
    }
  };

  const currentActiveSteps = steps.filter((x) => x.isActive === true);

  let currentContent = null;
  if (currentActiveSteps && currentActiveSteps.length && currentActiveSteps[0]) {
    currentContent = currentActiveSteps[0].content;
  }

  if (currentContent) {
    const s = currentActiveSteps[0];
    if (s.onCompleteButtonId) {
      const completeButton = document.getElementById(s.onCompleteButtonId);
      if (completeButton) {
        completeButton.addEventListener('click', () => props.onCompleteStep());
      }
    }
    if (s.onIncompleteButtonId) {
      const incompleteButton = document.getElementById(s.onIncompleteButtonId);
      if (incompleteButton) {
        incompleteButton.addEventListener('click', () => props.onIncompleteStep());
      }
    }
  }
  return (
    <div className="telia-step-indicator">
      <div className="telia-step-indicator">
        <div className="telia-step-indicator-text__container">
          <div className="telia-step-indicator-text">
            <ol>
              {steps.map((step, i) => (
                <li key={i}>
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
      {typeof currentContent !== 'undefined' && currentContent && (
        <>
          {typeof currentContent === 'string' && (
            <section
              className="telia-step-indiciator__current-step__content"
              dangerouslySetInnerHTML={{ __html: currentContent }}
            />
          )}
          {typeof currentContent !== 'string' && (
            <section className="telia-step-indicator__current-step__content">{currentContent}</section>
          )}
        </>
      )}
    </div>
  );
};

export default StepComponentContainer;
