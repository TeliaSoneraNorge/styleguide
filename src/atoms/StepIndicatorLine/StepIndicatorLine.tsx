import React, { useState, useEffect } from 'react';
import { Step, InternalStep } from './Step';
import StepButton from './StepButton';
import classnames from 'classnames';
import { Icon } from '../../atoms/Icon';

export interface Props {
  steps?: Step[] | null | undefined;
  activeStepNumber?: number | undefined;
  onActiveStepChangeValidator?: any;
  onStepNavigationCompletesPreviousSteps?: boolean | undefined;
  completeButtonId?: string | undefined | null;
  incompleteButtonId?: string | undefined | null;
  pageSize?: number | undefined;
  pagingSize?: number | undefined;
}

const StepIndicatorLine = (props: Props) => {
  if (props.steps == null) {
    return <></>;
  }
  const { onStepNavigationCompletesPreviousSteps } = props;

  const pageSize = props.pageSize ?? 5;
  const pagingSize = props.pagingSize ?? 1;

  const maxStepIndex = props.steps.length - 1;

  const [state, setState] = useState({
    steps: props.steps,
    currentNumber: props.activeStepNumber ?? 0,
    maxIndex: Math.min(maxStepIndex, pageSize - 1),
  });

  const minIndex = state.maxIndex - pageSize + 1;

  const internalSteps: InternalStep[] = state.steps.map((step, i) => {
    return {
      index: i,
      title: step.title,
      url: step.url,
      isComplete: step.isComplete,
      arrowType: null,
    };
  });

  const updateState = (steps: Step[], number: number, maxIndex: number) => {
    if (state.currentNumber == number && state.maxIndex == maxIndex) {
      return;
    }
    const update = {
      steps: steps,
      currentNumber: number,
      maxIndex: maxIndex,
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

      updateState(steps, currentNumber, state.maxIndex);
    }
  };

  const onIncompleteStepClick = () => {
    let currentNumber = state.currentNumber;

    if (currentNumber > 0) {
      const steps = state.steps;

      steps[currentNumber].isComplete = false;

      currentNumber--;

      steps[currentNumber].isComplete = false;

      updateState(steps, currentNumber, state.maxIndex);
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

  const onPagingLeft = () => {
    const number = state.currentNumber - 1;
    const maxIndex = Math.max(state.maxIndex - pagingSize, pageSize - 1);

    updateState(state.steps, number, maxIndex);
  };

  const onPagingRight = () => {
    const number = state.currentNumber + 1;
    let maxIndex = state.maxIndex;

    if (pageSize - state.currentNumber <= 1) {
      maxIndex = Math.min(state.maxIndex + pagingSize, maxStepIndex);
    }
    updateState(state.steps, number, maxIndex);
  };

  const getVisibleSteps = () => {
    return internalSteps.filter((_, i) => i >= minIndex && i <= state.maxIndex);
  };

  const addPagingArrows = (displaySteps: InternalStep[]) => {
    const addPagingArrow = (index: number, arrowType: string) => {
      displaySteps.splice(index, 0, { arrowType: arrowType } as InternalStep);
    };

    if (minIndex > 0 && maxStepIndex > pageSize) {
      addPagingArrow(0, 'LEFT');
    }

    if (state.maxIndex < maxStepIndex && maxStepIndex > pageSize) {
      addPagingArrow(displaySteps.length + 1, 'RIGHT');
    }
    return displaySteps;
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
      updateState(steps, number, state.maxIndex);
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

  const IsArrowStep = (step: InternalStep) => {
    return step && typeof step.arrowType !== 'undefined' && step.arrowType && step.arrowType.length > 0;
  };

  const RenderIcon = (iconName: any) => {
    return <Icon icon={iconName.iconName} />;
  };

  const StepArrow = (props: any) => {
    const { onPaging, iconName } = props;
    return (
      <button type="button" className={'telia-step-indicator-text__paging-button'} onClick={onPaging}>
        <RenderIcon iconName={iconName} />
      </button>
    );
  };

  const RenderStep = (props: any) => {
    const step = props.step as InternalStep;
    return (
      <li
        key={step.index}
        className={classnames('', {
          'telia-step-indicator-text__step--arrow': IsArrowStep(step),
        })}
      >
        {IsArrowStep(step) && step.arrowType === 'LEFT' && (
          <StepArrow onPaging={onPagingLeft} iconName={'arrow-left'} />
        )}

        {!IsArrowStep(step) && (
          <StepButton
            number={step.index}
            title={step.title}
            url={step.url}
            isActive={step.index === state.currentNumber}
            isComplete={step.isComplete}
            onStepButtonClick={() => onStepButtonClick(step.index)}
          />
        )}

        {IsArrowStep(step) && step.arrowType === 'RIGHT' && (
          <StepArrow onPaging={onPagingRight} iconName={'arrow-right'} />
        )}
      </li>
    );
  };

  let displaySteps = getVisibleSteps();
  displaySteps = addPagingArrows(displaySteps);

  return (
    <div className="telia-step-indicator-line__container">
      <div className="telia-step-indicator-line">
        <ol>
          {displaySteps.map((step, i) => (
            <RenderStep step={step} key={i} />
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
