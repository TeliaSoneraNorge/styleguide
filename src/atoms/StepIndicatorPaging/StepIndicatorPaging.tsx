import React, { useState, useEffect, useImperativeHandle } from 'react';
import { Step } from './_Step';
import { InternalStep } from './_InternalStep';
import { Icon } from '../../atoms/Icon';
import { Props } from './_Props';
import { Line } from './_Line';
import StepButton from './_StepButton';
import TransportLayer from './_TransparentLayer';

const getMinStepNumber = (pageSize: number, currentActiveStepNumber: number) => {
  if (currentActiveStepNumber > pageSize) {
    return currentActiveStepNumber - pageSize;
  }
  return 0;
};

const onPagingLeft = (
  maxStepCount: number,
  pageSize: number,
  state: any,
  updateState: any,
  changeActiveStep: boolean,
  number?: number | undefined
) => {
  let minStepNumber = state.minStepNumber;

  let activeStepNumber = state.currentActiveStepNumber;

  const maxStepNumber = maxStepCount - pageSize + 1;

  const isStepButtonClicked = number != null;
  const isArrowClicked = !isStepButtonClicked;

  if (isStepButtonClicked) {
    if (number > 0) {
      activeStepNumber = number - 1;
    }

    if (minStepNumber < activeStepNumber - pageSize || minStepNumber > activeStepNumber) {
      minStepNumber = number - 1;
    }

    if (minStepNumber < 0) {
      minStepNumber = 0;
    }
    if (minStepNumber > maxStepNumber) {
      minStepNumber = maxStepNumber;
    }
  }

  if (isArrowClicked) {
    if (minStepNumber > 0) {
      if (changeActiveStep) {
        if (activeStepNumber > 0) {
          activeStepNumber -= 1;
        }
      }
      minStepNumber -= 1;
    } else if (activeStepNumber > 0) {
      activeStepNumber -= 1;
    }
  }

  updateState(state.steps, activeStepNumber, minStepNumber);
};

const onPagingRight = (
  completePreviousSteps: boolean,
  pageSize: number,
  maxStepCount: number,
  state: any,
  updateState: any,
  changeActiveStep: boolean,
  number?: number | undefined
) => {
  const steps = state.steps;

  let minStepNumber = state.minStepNumber;

  let activeStepNumber = state.currentActiveStepNumber;

  const maxStepNumber = maxStepCount - pageSize + 1;

  const isStepButtonClicked = number != null;
  const isArrowClicked = !isStepButtonClicked;

  if (isStepButtonClicked) {
    if (number < maxStepCount) {
      if (completePreviousSteps) {
        steps[number].isComplete = true;
      }
      activeStepNumber = number + 1;
    }

    minStepNumber = number - pageSize + 2;
    if (minStepNumber < 0) {
      minStepNumber = 0;
    } else if (minStepNumber > maxStepNumber) {
      minStepNumber = maxStepNumber;
    }
  }

  if (isArrowClicked) {
    if (changeActiveStep) {
      if (activeStepNumber < maxStepCount) {
        if (completePreviousSteps) {
          steps[activeStepNumber].isComplete = true;
        }
        activeStepNumber += 1;
      }
      if (minStepNumber <= maxStepNumber) {
        if (activeStepNumber > pageSize - 1) {
          minStepNumber += 1;
        }
      }
    } else if (minStepNumber <= maxStepNumber) {
      minStepNumber += 1;
    }
  }
  updateState(steps, activeStepNumber, minStepNumber);
};

const StepIndicatorPaging = React.forwardRef((props: Props, ref) => {
  useImperativeHandle(ref, () => ({
    onStepComplete: (number: number) => {
      if (props.steps == null) {
        return <></>;
      }
      onPagingRight(true, pageSize, maxStepCount, state, updateState, true, number);
    },

    onStepIncomplete: (number: number) => {
      if (props.steps == null) {
        return <></>;
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
    enablePagingOnlyOnEdgeSteps,
    contentContainerCssClass,
    hideStepNumbers,
  } = props;

  const completePreviousSteps = navigationCompletesPreviousSteps != false;
  const pageSize = props.pageSize ?? 5;
  const maxStepCount = props.steps.length - 1;
  const initialStepNumber =
    props.initialStepNumber != null && props.initialStepNumber > 0 ? props.initialStepNumber - 1 : 0;

  const [state, setState] = useState({
    steps: props.steps,
    minStepNumber: initialStepNumber, //controls 'current navigation step numbers', min to 'pageSize' is shown, and its arrows
    currentActiveStepNumber: initialStepNumber, //controls which chilren/content is shown for current step, and in navigation: which step is the active one
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

  const updateState = (steps: Step[], activeStepNumber: number, minStepNumber: number) => {
    if (state.currentActiveStepNumber == activeStepNumber && state.minStepNumber == minStepNumber) {
      return;
    }

    const update = {
      steps: steps,
      minStepNumber: minStepNumber,
      currentActiveStepNumber: activeStepNumber,
    };

    if (activeStepNumber > 0 && steps[activeStepNumber - 1].onValidateStep) {
      const validated = steps[activeStepNumber - 1].onValidateStep(steps, activeStepNumber);
      if (validated == null || validated === true) {
        setState(update);
      }
    } else {
      setState(update);
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

  const addOnClickEvent = (buttonId: any, onClick: any) => {
    if (buttonId) {
      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener('click', onClick);
      }
    }
  };

  const getVisibleSteps = () => {
    const minIndex = state.minStepNumber;
    const maxIndex = minIndex + pageSize;
    return internalSteps.filter((_, i) => i >= minIndex && i < maxIndex);
  };

  const getPagingArrows = () => {
    const arrowSteps = [];

    if (!enablePagingOnlyOnEdgeSteps && state.minStepNumber > 0 && maxStepCount > pageSize) {
      arrowSteps.push({ arrowType: 'LEFT' });
    }

    if (
      (state.minStepNumber < state.steps.length - pageSize &&
        maxStepCount > pageSize &&
        !enablePagingOnlyOnEdgeSteps) ||
      (enablePagingOnlyOnEdgeSteps && state.minStepNumber >= pageSize - 1)
    ) {
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

  const onStepButtonClick = (number: number) => {
    if (number < 0) {
      return;
    }
    const steps = state.steps;

    if (navigationCompletesPreviousSteps == true) {
      steps.forEach((step, i) => {
        if (i < number) {
          step.isComplete = true;
        }
      });
    }

    const minIndex = getMinStepNumber(pageSize, number + 1);

    updateState(steps, number, minIndex);
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

  const RenderIcon = (iconName: any) => {
    return <Icon icon={iconName.iconName} />;
  };

  const RenderArrow = (props: any) => {
    const { onPaging, iconName, isComplete } = props;

    const modifier = iconName.includes('left') ? 'left' : 'right';

    return (
      <li className={'telia-step-indicator-paging__arrow telia-step-indicator-paging__arrow--' + modifier}>
        <Line isComplete={isComplete} className={'telia-step-indicator-paging__line--' + modifier} />

        <TransportLayer modifier={modifier} />

        <button
          type="button"
          onClick={onPaging}
          className={
            'telia-step-indicator-paging__arrow__button telia-step-indicator-paging__arrow__button--' + modifier
          }
        >
          <RenderIcon iconName={iconName} />
        </button>
      </li>
    );
  };

  const RenderStep = (props: any) => {
    const { index, maxDisplayCount, isLast, isArrow } = props;

    const step = props.step as InternalStep;

    let css = 'telia-step-indicator-paging__list-item';
    if (isArrow) {
      css += ' telia-step-indicator-paging__list-item--arrow';
    }

    return (
      <li key={step.number} className={css}>
        <StepButton
          number={step.number}
          title={step.title}
          url={step.url}
          isClickable={props.navigationClickable != false}
          isActive={step.number === state.currentActiveStepNumber}
          isComplete={step.isComplete == true}
          hideStepNumber={hideStepNumbers == true}
          onStepButtonClick={() => onStepButtonClick(step.number)}
        />

        {index < maxDisplayCount - 1 && <Line isComplete={step.isComplete == true} />}
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
            isLast={i === displaySteps.length - 1}
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
