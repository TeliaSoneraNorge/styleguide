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
import { setStepsComplete } from './Functions/setStepsComplete';
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
    showArrowsTillEdgeSteps,
    contentContainerCssClass,
    disableIncompleteStepClick,
  } = props;

  const completePreviousSteps = navigationCompletesPreviousSteps != false;
  const pageSize = props.pageSize ?? 5;
  const maxStepCount = props.steps.length - 1;
  const initialStepNumber =
    props.initialStepNumber != null && props.initialStepNumber > 0 ? props.initialStepNumber - 1 : 0;

  if (pageSize < 3 || pageSize > 5) {
    console.error('StepIndicatorPaging: PageSize is outside of tested range');
  }

  if (initialStepNumber > 0) {
    setStepsComplete(props.steps, initialStepNumber - 1, initialStepNumber - 1, completePreviousSteps);
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

  const isForward = (number: number) => {
    return state.currentActiveStepNumber >= 0 && number > state.currentActiveStepNumber;
  };

  const updateState = (steps: Step[], activeStepNumber: number, minStepNumber: number) => {
    const currentActiveStepNumber = state.currentActiveStepNumber;
    if (currentActiveStepNumber == activeStepNumber && state.minStepNumber == minStepNumber) {
      return;
    }

    const update = {
      steps: steps,
      minStepNumber: minStepNumber,
      currentActiveStepNumber: activeStepNumber,
    };

    setState(update);
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

    const forward = isForward(number);

    const minStepNumber = getMinStepNumberInRange(state.minStepNumber, number, pageSize, maxStepCount, forward);

    const steps = state.steps;

    if (forward) {
      if (completePreviousSteps) {
        if (!setStepsComplete(steps, state.currentActiveStepNumber, number, completePreviousSteps)) {
          return;
        }
      }
    }

    if (!navigateToStepUrl(state.steps[number]?.url)) {
      updateState(steps, number, minStepNumber);
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

    if (showArrowsTillEdgeSteps == true) {
      if (state.currentActiveStepNumber > 0) {
        arrowSteps.push({ arrowType: 'LEFT' });
      }
    } else if (state.minStepNumber >= 1) {
      arrowSteps.push({ arrowType: 'LEFT' });
    }

    if (showArrowsTillEdgeSteps == true) {
      if (state.currentActiveStepNumber > 0 && state.currentActiveStepNumber < maxStepCount) {
        arrowSteps.push({ arrowType: 'RIGHT' });
      }
    } else if (state.minStepNumber < state.steps.length - pageSize) {
      arrowSteps.push({ arrowType: 'RIGHT' });
    }
    return arrowSteps;
  };

  useEffect(() => {
    const children = getActiveStepChildren();

    if (children) {
      addOnClickEvent(props.completeButtonId, () =>
        onPagingRight(
          completePreviousSteps,
          pageSize,
          maxStepCount,
          state,
          updateState,
          true,
          state.currentActiveStepNumber
        )
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

  const RenderSvgLinePattern = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="telia-step-indicator-paging__circle-svg">
        <defs>
          <pattern
            id="telia-step-indicator-paging__circle--id"
            x="0"
            y="0"
            width="7"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" className="telia-step-indicator-paging__circle"></circle>
          </pattern>
        </defs>
      </svg>
    );
  };

  const RenderStep = (props: any) => {
    const { index, maxDisplayCount, isArrow } = props;

    const step = props.step as InternalStep;

    const isClickable =
      props.navigationClickable != false &&
      (disableIncompleteStepClick != true || (disableIncompleteStepClick == true && step.isComplete == true));

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
          isClickable={isClickable}
          isActive={step.number === state.currentActiveStepNumber}
          isComplete={step.isComplete == true}
          onStepButtonClick={() => onStepButtonClick(step.number)}
        />

        {index < maxDisplayCount - 1 && (
          <RenderLine isComplete={step.isComplete == true} isActive={step.number === state.currentActiveStepNumber} />
        )}
      </li>
    );
  };

  const displaySteps = getVisibleSteps();
  const pagingArrows = getPagingArrows();

  const hasLeftArrow = pagingArrows[0]?.arrowType == 'LEFT';
  const hasRightArrow = pagingArrows[0]?.arrowType == 'RIGHT' || pagingArrows[1]?.arrowType == 'RIGHT';

  return (
    <div className="telia-step-indicator-paging">
      <RenderSvgLinePattern />
      <ol className={'telia-step-indicator-paging__list telia-step-indicator-paging__list--page-size-' + pageSize}>
        {hasLeftArrow && (
          <RenderArrow
            iconName={'chevron-left'}
            onPaging={() => onPagingLeft(maxStepCount, pageSize, state, updateState, navigationClickable != false)}
            url={state.currentActiveStepNumber > 0 ? state.steps[state.currentActiveStepNumber - 1].url : null}
            isComplete={state.currentActiveStepNumber > 0 && state.steps[0].isComplete == true}
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
            iconName={'chevron-right'}
            url={
              state.currentActiveStepNumber + 1 < state.steps.length
                ? state.steps[state.currentActiveStepNumber + 1].url
                : null
            }
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
          />
        )}
      </ol>

      <RenderChildren />
    </div>
  );
});

export default StepIndicatorPaging;
