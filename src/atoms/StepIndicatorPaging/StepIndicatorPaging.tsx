import React, { useState, useEffect, useImperativeHandle } from 'react';
import { Step } from './_Step';
import { InternalStep } from './_InternalStep';
import { Icon } from '../../atoms/Icon';
import { Props } from './_Props';
import { Line } from './_Line';
import StepButton from './_StepButton';
import TransportLayer from './_TransparentLayer';

const onPagingLeft = (
  completePreviousSteps: boolean,
  pagingSize: number,
  pageSize: number,
  state: any,
  updateState: any,
  disablePagingChangesActiveStep?: boolean
) => {
  let currentPageNumber = state.currentPageNumber;

  if (currentPageNumber > 0) {
    let currentNumber = state.currentNumber;

    if (disablePagingChangesActiveStep != true) {
      currentNumber--;
    }
    if (disablePagingChangesActiveStep != true && currentPageNumber < pageSize) {
      currentPageNumber--;
    }

    const maxIndex = Math.max(state.maxIndex - pagingSize, pageSize - 1);

    updateState(state.steps, currentNumber, currentPageNumber, maxIndex);
  }
};

const onPagingRight = (
  completePreviousSteps: boolean,
  pagingSize: number,
  pageSize: number,
  maxStepIndex: number,
  state: any,
  updateState: any,
  disablePagingChangesActiveStep?: boolean
) => {
  const steps = state.steps;
  let currentPageNumber = state.currentPageNumber;

  if (disablePagingChangesActiveStep == true && currentPageNumber < pageSize - 1) {
    currentPageNumber = pageSize;
  }

  if (currentPageNumber < steps.length) {
    let currentNumber = state.currentNumber;
    if (completePreviousSteps && disablePagingChangesActiveStep != true) {
      steps[currentNumber].isComplete = true;
    }

    if (disablePagingChangesActiveStep != true) {
      currentNumber++;
    }
    currentPageNumber++;

    let maxIndex = state.maxIndex;

    if (pageSize - state.currentPageNumber <= 1) {
      maxIndex = Math.min(state.maxIndex + pagingSize, maxStepIndex);
    }

    updateState(steps, currentNumber, currentPageNumber, maxIndex);
  }
};

const StepIndicatorPaging = React.forwardRef((props: Props, ref) => {
  useImperativeHandle(ref, () => ({
    onStepComplete: (number: number) => {
      if (props.steps == null) {
        return <></>;
      }
      onPagingRight(true, pagingSize, pageSize, maxStepIndex, state, updateState);
    },

    onStepIncomplete: (number: number) => {
      if (props.steps == null) {
        return <></>;
      }
      onPagingLeft(true, pagingSize, pageSize, state, updateState);
    },

    isStepsCompleted: () => {
      if (props.steps == null) {
        return true;
      }
      for (let i = 0; i < props.steps.length; i++) {
        if (!props.steps[i].isComplete) {
          return false;
        }
      }
      return true;
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
    disablePagingChangesActiveStep,
  } = props;

  const pageSize = props.pageSize ?? 5;
  const pagingSize = props.pagingSize ?? 1;
  const maxStepIndex = props.steps.length - 1;

  const [state, setState] = useState({
    steps: props.steps,
    currentNumber: props.activeStepNumber != null && props.activeStepNumber > 0 ? props.activeStepNumber - 1 : 0,
    currentPageNumber:
      props.activeStepNumber != null && props.activeStepNumber > 0 ? props.activeStepNumber - 1 : pageSize,
    maxIndex: Math.min(maxStepIndex, pageSize - 1),
  });

  const minIndex = state.maxIndex - pageSize + 1;

  const completePreviousSteps = navigationCompletesPreviousSteps != false;

  const internalSteps: InternalStep[] = state.steps.map((step, i) => {
    return {
      number: i,
      title: step.title,
      url: step.url,
      isComplete: step.isComplete || (completePreviousSteps && i < state.currentNumber),
      arrowType: null,
    };
  });

  const updateState = (steps: Step[], number: number, pageNumber: number, maxIndex: number) => {
    if (state.currentNumber == number && state.maxIndex == maxIndex && state.currentPageNumber == pageNumber) {
      return;
    }
    const update = {
      steps: steps,
      currentNumber: number,
      currentPageNumber: pageNumber,
      maxIndex: maxIndex,
    };

    if (number > 0 && steps[number - 1].onValidateStep) {
      const validated = steps[number - 1].onValidateStep(steps, number);
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

  const addOnClickEvent = (buttonId: any, onClick: any) => {
    if (buttonId) {
      const button = document.getElementById(buttonId);
      if (button) {
        button.addEventListener('click', onClick);
      }
    }
  };

  const getVisibleSteps = () => {
    return internalSteps.filter((_, i) => i >= minIndex && i <= state.maxIndex);
  };

  const getPagingArrows = () => {
    const arrowSteps = [];

    if (minIndex > 0 || (!enablePagingOnlyOnEdgeSteps && state.currentNumber > 0 && maxStepIndex > pageSize)) {
      arrowSteps.push({ arrowType: 'LEFT' });
    }

    if (
      state.maxIndex < maxStepIndex &&
      ((maxStepIndex > pageSize && !enablePagingOnlyOnEdgeSteps) ||
        (enablePagingOnlyOnEdgeSteps && state.currentNumber >= pageSize - 1))
    ) {
      arrowSteps.push({ arrowType: 'RIGHT' });
    }
    return arrowSteps;
  };

  useEffect(() => {
    const children = getActiveStepChildren();

    if (children) {
      addOnClickEvent(props.completeButtonId, () =>
        onPagingRight(true, pagingSize, pageSize, maxStepIndex, state, updateState)
      );
      addOnClickEvent(props.previousButtonId, () => onPagingLeft(true, pagingSize, pageSize, state, updateState));
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

    state.maxIndex = Math.max(state.maxIndex - pagingSize, pageSize - 1);
    if (disablePagingChangesActiveStep == true && state.maxIndex < number + pageSize - 1) {
      state.maxIndex = number + 1;
      if (state.maxIndex >= steps.length) {
        state.maxIndex--;
      }
    }
    updateState(steps, number, state.currentPageNumber, state.maxIndex);
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

    if (isArrow) {
      css += ' telia-step-indicator-paging__list-item--arrow';
    }

    //const isLineComplete = step.isComplete == true || (navigationCompletesPreviousSteps != false && state.currentNumber < step.number);

    return (
      <li key={step.number} className={css}>
        <StepButton
          number={step.number}
          title={step.title}
          url={step.url}
          isClickable={props.navigationClickable != false}
          isActive={step.number === state.currentNumber}
          isComplete={step.isComplete == true}
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
            isComplete={state.currentNumber > 0 && state.steps[0].isComplete == true}
            onPaging={() =>
              onPagingLeft(
                completePreviousSteps,
                pagingSize,
                pageSize,
                state,
                updateState,
                disablePagingChangesActiveStep == true
              )
            }
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
                pagingSize,
                pageSize,
                maxStepIndex,
                state,
                updateState,
                disablePagingChangesActiveStep == true
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
