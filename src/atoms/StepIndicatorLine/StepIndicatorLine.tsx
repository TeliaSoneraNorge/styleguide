import React, { useState, useEffect } from 'react';
import { Step, InternalStep } from './Step';
import StepButton from './StepButton';

export interface Props {
  steps?: Step[] | null | undefined;
  activeStepNumber?: number | undefined;
  onActiveStepChangeValidator?: any;
  onStepNavigationCompletesPreviousSteps?: boolean | undefined;
  completeButtonId?: string | undefined | null;
  incompleteButtonId?: string | undefined | null;
}

const StepIndicatorLine = (props: Props) => {
  if (props.steps == null) {
    console.log('Steps null, doing nada');
    return <></>;
  }
  const { onStepNavigationCompletesPreviousSteps } = props;

  const [state, setState] = useState({ steps: props.steps, currentNumber: props.activeStepNumber ?? 0 });

  const internalSteps: InternalStep[] = state.steps.map((step, i) => {
    return {
      index: i,
      title: step.title,
      url: step.url,
      isComplete: step.isComplete,
      arrowType: null,
    };
  });

  const updateState = (steps: Step[], number: number) => {
    if (state.currentNumber == number) {
      return;
    }
    const update = {
      steps: steps,
      currentNumber: number,
    };

    if (props.onActiveStepChangeValidator) {
      const validated = props.onActiveStepChangeValidator(steps, number);
      if (validated == null || validated === true) {
        setState(update);
      }
    } else {
      setState(update);
    }
  };

  const getActiveStep = () => {
    return state.steps[state.currentNumber];
  };

  const getActiveStepChildren = () => {
    const activeStep = getActiveStep();
    if (activeStep) {
      return activeStep.children;
    }
    return null;
  };

  const onCompleteStepClick = () => {
    const steps = state.steps;
    let currentNumber = state.currentNumber;

    if (currentNumber < steps.length - 1) {
      steps[currentNumber].isComplete = true;

      currentNumber++;

      steps[currentNumber].isComplete = false;

      updateState(steps, currentNumber);
    }
  };

  const onIncompleteStepClick = () => {
    let currentNumber = state.currentNumber;

    if (currentNumber > 0) {
      const steps = state.steps;

      steps[currentNumber].isComplete = false;

      currentNumber--;

      steps[currentNumber].isComplete = false;

      updateState(steps, currentNumber);
    }
  };

  const addOnClickEvent = (buttonId: any, onClick: any) => {
    if (buttonId) {
      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener('click', onClick);
      }
    }
  };

  useEffect(() => {
    const children = getActiveStepChildren();

    if (children) {
      addOnClickEvent(props.completeButtonId, onCompleteStepClick);
      addOnClickEvent(props.incompleteButtonId, onIncompleteStepClick);
    }
  });

  const onStepButtonClick = (number: number) => {
    if (number >= 0) {
      const steps = state.steps;
      if (onStepNavigationCompletesPreviousSteps === true) {
        steps.forEach((step, i) => {
          if (i < number) {
            step.isComplete = true;
          } else {
            step.isComplete = false;
          }
        });
      }

      updateState(steps, number);
    }
  };

  const RenderChildren = () => {
    const children = getActiveStepChildren();
    if (children == null) {
      return <></>;
    }
    return (
      <>
        {typeof children === 'string' && (
          <section
            className="telia-step-indiciator__current-step__content"
            dangerouslySetInnerHTML={{ __html: children }}
          />
        )}
        {typeof children !== 'string' && (
          <section className="telia-step-indicator__current-step__content">{children}</section>
        )}
      </>
    );
  };

  return (
    <div className="telia-step-indicator-line__container">
      <div className="telia-step-indicator-line">
        <ol>
          {props.steps.map((step, i) => (
            <li key={i}>
              <StepButton
                number={i}
                title={step.title}
                url={step.url}
                isActive={i === state.currentNumber}
                isComplete={step.isComplete}
                onStepButtonClick={() => onStepButtonClick(i)}
              />
            </li>
          ))}
        </ol>
      </div>
      <div className="telia-step-indicator-line__content">
        <RenderChildren />
      </div>
    </div>
  );
};

export default StepIndicatorLine;
