import React, { useState, useEffect, useImperativeHandle } from 'react';
import { Step } from './Models/Step';
import { InternalStep } from './Models/InternalStep';
import { Props } from './Models/Props';
import { RenderLine } from './RenderLine';
import { RenderStepButton } from './RenderStepButton';
import { navigateToStepUrl } from './Functions/navigateToStepUrl';
import { getMinStepNumber } from './Functions/getMinStepNumber';
import { getMinStepNumberInRange } from './Functions/getMinStepNumberInRange';
import { onPagingLeft } from './Functions/onPagingLeft';
import { onPagingRight } from './Functions/onPagingRight';
import { RenderArrow } from './RenderArrow';
import classNames from 'classnames';

// eslint-disable-next-line react/display-name
const StepIndicatorPaging = React.forwardRef((props: Props, ref) => {
  useImperativeHandle(ref, () => ({
    displayName: '1',
    onStepComplete: (number: number) => {
      if (props.steps == null || number < 0) {
        return;
      }
      onPagingRight(true, pageSize, maxStepCount, state, updateState, true, number);
    },

    onPreviousStepClick: (number: number) => {
      if (props.steps == null || number < 0) {
        return;
      }
      onPagingLeft(maxStepCount, pageSize, state, updateState, true, number);
    },
  }));

  if (props.steps == null) {
    return <></>;
  }

  const {
    navigationCompletesPreviousSteps,
    navigationClickable,
    enableArrowsOnlyOnEdgeSteps,
    contentContainerCssClass,
  } = props;

  const completePreviousSteps = navigationCompletesPreviousSteps != false;
  const pageSize = props.pageSize ?? 5;
  const maxStepCount = props.steps.length - 1;
  const initialStepNumber =
    props.initialStepNumber != null && props.initialStepNumber > 0 ? props.initialStepNumber - 1 : 0;

  if (pageSize < 3 || pageSize > 5) {
    console.error('StepIndicatorPaging: PageSize is outside of tested range');
  }

  const setStepsToComplete = (steps: Step[], number: number) => {
    if (navigationCompletesPreviousSteps == true) {
      steps.forEach((step, i) => {
        if (i < number) {
          step.isComplete = true;
        }
      });
    }
  };

  if (initialStepNumber > 0) {
    setStepsToComplete(props.steps, initialStepNumber);
  }

  const [state, setState] = useState({
    steps: props.steps,
    minStepNumber: getMinStepNumber(initialStepNumber, pageSize, maxStepCount, true),
    currentActiveStepNumber: initialStepNumber,
  });

  const internalSteps: InternalStep[] = state.steps.map((step, i) => {
    return {
      number: i,
      title: step.title,
      url: step.url,
      isComplete: step.isComplete || (completePreviousSteps && i < state.currentActiveStepNumber),
      arrowType: null,
    };
  });

  const validateStep = (
    forward: boolean,
    currentActiveStepNumber: number,
    isNavigationClicked: boolean,
    steps: Step[]
  ) => {
    const validateCurrentActiveStep =
      ((!isNavigationClicked && !navigationCompletesPreviousSteps) || navigationCompletesPreviousSteps) &&
      forward &&
      steps[currentActiveStepNumber].onValidateStep;

    return (
      !validateCurrentActiveStep ||
      steps[currentActiveStepNumber].onValidateStep(steps, currentActiveStepNumber) != false
    );
  };

  const updateState = (
    steps: Step[],
    activeStepNumber: number,
    minStepNumber: number,
    isNavigationClicked?: boolean | undefined
  ) => {
    const currentActiveStepNumber = state.currentActiveStepNumber;

    if (currentActiveStepNumber == activeStepNumber && state.minStepNumber == minStepNumber) {
      return;
    }

    const forward = currentActiveStepNumber > 0 && activeStepNumber > currentActiveStepNumber;

    //TODO: Move this away, and when "PagingRight" is triggered set to result of validateStep ?? true...?
    const validated = validateStep(forward, currentActiveStepNumber, isNavigationClicked == true, steps);

    if (validated == true) {
      if (isNavigationClicked != true && !navigationCompletesPreviousSteps && forward) {
        steps[currentActiveStepNumber].isComplete = true;
      } else {
        setStepsToComplete(steps, activeStepNumber);
      }

      const update = {
        steps: steps,
        minStepNumber: minStepNumber,
        currentActiveStepNumber: activeStepNumber,
      };

      setState(update);
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

  const onStepButtonClick = (number: number) => {
    if (number < 0) {
      return;
    }

    const forward = state.currentActiveStepNumber < number;

    const minStepNumber = getMinStepNumberInRange(state.minStepNumber, number, pageSize, maxStepCount, forward);

    const steps = state.steps;

    if (!navigateToStepUrl(state.steps[number]?.url)) {
      updateState(steps, number, minStepNumber, true);
    }
  };

  const getActiveStep = () => {
    return state.steps[state.currentActiveStepNumber];
  };

  const getActiveStepChildren = () => {
    const activeStep = getActiveStep();
    if (activeStep) {
      return activeStep.children;
    }
    return null;
  };

  const getVisibleSteps = () => {
    const minStepNumber = state.minStepNumber;
    const maxIndex = minStepNumber + pageSize;
    return internalSteps.filter((_, i) => i >= minStepNumber && i < maxIndex);
  };

  const getPagingArrows = () => {
    const arrowSteps: any[] = [];

    if (maxStepCount <= pageSize) {
      return arrowSteps;
    }

    if (enableArrowsOnlyOnEdgeSteps == true && state.minStepNumber >= pageSize) {
      arrowSteps.push({ arrowType: 'LEFT' });
    } else if (state.minStepNumber > 0) {
      arrowSteps.push({ arrowType: 'LEFT' });
    }

    if (
      enableArrowsOnlyOnEdgeSteps == true &&
      state.minStepNumber >= pageSize &&
      state.minStepNumber < state.steps.length - pageSize
    ) {
      arrowSteps.push({ arrowType: 'RIGHT' });
    } else if (state.minStepNumber < state.steps.length - pageSize) {
      arrowSteps.push({ arrowType: 'RIGHT' });
    }
    return arrowSteps;
  };

  useEffect(() => {
    const children = getActiveStepChildren();

    if (children) {
      addOnClickEvent(props.completeButtonId, () =>
        onPagingRight(true, pageSize, maxStepCount, state, updateState, true, state.currentActiveStepNumber)
      );
      addOnClickEvent(props.previousButtonId, () =>
        onPagingLeft(maxStepCount, pageSize, state, updateState, true, state.currentActiveStepNumber)
      );
    }
  });

  const RenderChildren = () => {
    const children = getActiveStepChildren();
    if (children == null) {
      return <></>;
    }
    return (
      <>
        {typeof children === 'string' && (
          <section
            className={'telia-step-indicator-paging__content ' + contentContainerCssClass}
            dangerouslySetInnerHTML={{ __html: children }}
          />
        )}
        {typeof children !== 'string' && (
          <section className={'telia-step-indicator-paging__content ' + contentContainerCssClass}>{children}</section>
        )}
      </>
    );
  };

  const RenderStep = (props: any) => {
    const { index, maxDisplayCount, isArrow } = props;

    const step = props.step as InternalStep;

    return (
      <li
        key={step.number}
        className={classNames('telia-step-indicator-paging__list-item', {
          'telia-step-indicator-paging__list-item--arrow': isArrow,
        })}
      >
        <RenderStepButton
          number={step.number}
          title={step.title}
          url={step.url}
          isClickable={props.navigationClickable != false}
          isActive={step.number === state.currentActiveStepNumber}
          isComplete={step.isComplete == true}
          onStepButtonClick={() => onStepButtonClick(step.number)}
        />

        {index < maxDisplayCount - 1 && <RenderLine isComplete={step.isComplete == true} />}
      </li>
    );
  };

  const displaySteps = getVisibleSteps();
  const pagingArrows = getPagingArrows();

  const hasLeftArrow = pagingArrows[0]?.arrowType == 'LEFT';
  const hasRightArrow = pagingArrows[0]?.arrowType == 'RIGHT' || pagingArrows[1]?.arrowType == 'RIGHT';

  return (
    <div className="telia-step-indicator-paging">
      <ol className="telia-step-indicator-paging__list">
        {hasLeftArrow && (
          <RenderArrow
            isComplete={state.currentActiveStepNumber > 0 && state.steps[0].isComplete == true}
            onPaging={() => onPagingLeft(maxStepCount, pageSize, state, updateState, navigationClickable != false)}
            iconName={'arrow-left'}
          />
        )}

        {displaySteps.map((step, i) => (
          <RenderStep
            step={step}
            isArrow={step.arrowType == 'LEFT' || step.arrowType == 'RIGHT'}
            key={i}
            index={i}
            navigationClickable={navigationClickable}
            maxDisplayCount={displaySteps.length}
          />
        ))}

        {hasRightArrow && (
          <RenderArrow
            onPaging={() =>
              onPagingRight(
                completePreviousSteps,
                pageSize,
                maxStepCount,
                state,
                updateState,
                navigationClickable != false
              )
            }
            iconName={'arrow-right'}
          />
        )}
      </ol>

      <RenderChildren />
    </div>
  );
});

export default StepIndicatorPaging;
