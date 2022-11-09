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
    displayName: '_',
    onStepComplete: (number: number) => {
      if (props.steps == null || number < 0 || number > props.steps.length) {
        return;
      }
      onPagingRight(autocompletePreviousSteps, pageSize, maxStepCount, state, updateState, arrowsAsCarousel, number);
    },

    onPreviousStepClick: (number: number) => {
      if (props.steps == null || number < 0) {
        return;
      }
      onPagingLeft(maxStepCount, pageSize, state, updateState, arrowsAsCarousel, number);
    },
  }));

  if (props.steps == null || props.steps.length == 0) {
    return <></>;
  }

  const steps = props.steps ?? null;
  let initialStepNumber = props.initialStepNumber ?? 0;
  const pageSize = props.pageSize ?? 5;
  const completeStepButtonId = props.completeStepButtonId ?? null;
  const previousStepButtonId = props.previousStepButtonId ?? null;
  const autocompletePreviousSteps = props.autocompletePreviousSteps ?? true;
  const completeStepsClickable = props.completeStepsClickable ?? true;
  const incompleteStepsClickable = props.incompleteStepsClickable ?? true;
  let arrowsAsCarousel = props.arrowsAsCarousel ?? false;
  const contentCssClass = props.contentCssClass ?? null;
  const autoSetStepNumberFromUrlPath = props.autoSetStepNumberFromUrlPath ?? false;

  if (!completeStepsClickable && !incompleteStepsClickable && !arrowsAsCarousel) {
    console.warn(
      'StepIndicatorPaging: unsupported to disable navigation, without using arrows as a carousel, forcing carousel for arrows'
    );
    arrowsAsCarousel = true;
  }

  const maxStepCount = steps.length - 1;

  if (pageSize < 3 || pageSize > 5) {
    console.error('StepIndicatorPaging: pageSize outside of tested range 3-5');
  }

  if (initialStepNumber >= steps.length) {
    console.error('StepIndicatorPaging:  initialStepNumber too large, defaults to last step');
    initialStepNumber = steps.length - 1;
  }

  if (initialStepNumber == 0 && autoSetStepNumberFromUrlPath) {
    //Server side rendering
    if (typeof window !== 'undefined' && window && window.location) {
      let currentPath = window.location.pathname;
      if (currentPath) {
        currentPath = currentPath.toLowerCase();

        steps.forEach((step, i) => {
          let url = step.url;
          if (url && url.length > 0) {
            const queryIndex = url.indexOf('?');
            if (queryIndex > 0) {
              url = url.substring(0, queryIndex);
            }
            url = url.toLowerCase();
            if (url.includes(currentPath)) {
              initialStepNumber = i;
            }
          }
        });
      }
    }
  }

  if (initialStepNumber > 0 && autocompletePreviousSteps) {
    setStepsComplete(props.steps, initialStepNumber - 1, initialStepNumber, autocompletePreviousSteps);
  }

  const [state, setState] = useState({
    steps: steps,
    minStepNumber: getMinStepNumber(initialStepNumber, pageSize, maxStepCount, true),
    currentActiveStepNumber: initialStepNumber,
  });

  const internalSteps: InternalStep[] = state.steps.map((step, i) => {
    return {
      number: i,
      title: step.title,
      url: step.url,
      isComplete: step.isComplete || (autocompletePreviousSteps && i < state.currentActiveStepNumber - 1),
      arrowType: null,
    };
  });

  const isForward = (clickedNumber: number) => {
    return state.currentActiveStepNumber >= 0 && clickedNumber > state.currentActiveStepNumber;
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

  const onStepButtonClick = (clickedNumber: number) => {
    if (clickedNumber < 0) {
      return;
    }

    const forward = isForward(clickedNumber);

    const minStepNumber = getMinStepNumberInRange(state.minStepNumber, clickedNumber, pageSize, maxStepCount, forward);

    const steps = state.steps;

    if (forward) {
      if (autocompletePreviousSteps) {
        if (!setStepsComplete(steps, state.currentActiveStepNumber, clickedNumber, autocompletePreviousSteps)) {
          return;
        }
      }
    }

    if (!navigateToStepUrl(state.steps[clickedNumber]?.url)) {
      updateState(steps, clickedNumber, minStepNumber);
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

    if (maxStepCount < pageSize) {
      return arrowSteps;
    }

    if (arrowsAsCarousel) {
      //minStepNumber is larger than 0, we are in a "carousel" [arrows clicked without steps moving], we show arrow
      if (state.minStepNumber > 0) {
        arrowSteps.push({ arrowType: 'LEFT' });
      }
    } else {
      //else if currentActiveStep is larger than 0, we show arrow, as one can navigate 'back'
      if (state.currentActiveStepNumber > 0) {
        arrowSteps.push({ arrowType: 'LEFT' });
      }
    }

    const maxStepNumber = state.minStepNumber + pageSize;

    if (arrowsAsCarousel) {
      //maxStepNumber is less than total steps, we are in a "carousel" [arrows clicked without steps moving], we show arrow
      if (maxStepNumber < steps.length) {
        arrowSteps.push({ arrowType: 'RIGHT' });
      }
    }
    //else if currentActiveStep is less than last step, as one can navigate 'forward'
    else if (state.currentActiveStepNumber < maxStepNumber - 1) {
      arrowSteps.push({ arrowType: 'RIGHT' });
    }

    return arrowSteps;
  };

  useEffect(() => {
    const children = getActiveStepChildren();

    if (children) {
      addOnClickEvent(completeStepButtonId, () =>
        onPagingRight(
          autocompletePreviousSteps,
          pageSize,
          maxStepCount,
          state,
          updateState,
          arrowsAsCarousel,
          state.currentActiveStepNumber
        )
      );
      addOnClickEvent(previousStepButtonId, () =>
        onPagingLeft(maxStepCount, pageSize, state, updateState, arrowsAsCarousel, state.currentActiveStepNumber)
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
            className={'telia-step-indicator-paging__content ' + contentCssClass}
            dangerouslySetInnerHTML={{ __html: children }}
          />
        )}
        {typeof children !== 'string' && (
          <section className={'telia-step-indicator-paging__content ' + contentCssClass}>{children}</section>
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

    const stepNumber = index + state.minStepNumber;

    const isClickable =
      (stepNumber > state.currentActiveStepNumber && incompleteStepsClickable) ||
      (stepNumber < state.currentActiveStepNumber && completeStepsClickable) ||
      (step.isComplete == true && completeStepsClickable);

    const isComplete = step.isComplete == true;
    const isActive = step.number == state.currentActiveStepNumber;

    return (
      <li
        key={'telia-step-indicator-paging__list-item' + step.number}
        className={classNames('telia-step-indicator-paging__list-item', {
          'telia-step-indicator-paging__list-item--arrow': isArrow,
        })}
      >
        <RenderStepButton
          number={step.number}
          title={step.title}
          url={step.url}
          isClickable={isClickable}
          isActive={isActive}
          isComplete={isComplete}
          onStepButtonClick={() => onStepButtonClick(step.number)}
        />

        {index < maxDisplayCount - 1 && <RenderLine isComplete={isComplete} isActive={isActive} />}
      </li>
    );
  };

  const displaySteps = getVisibleSteps();
  const pagingArrows = getPagingArrows();

  const hasLeftArrow = pagingArrows[0]?.arrowType == 'LEFT';
  const hasRightArrow = pagingArrows[0]?.arrowType == 'RIGHT' || pagingArrows[1]?.arrowType == 'RIGHT';

  const arrowUrlBackwards =
    state.currentActiveStepNumber > 0 ? state.steps[state.currentActiveStepNumber - 1].url : null;
  const arrowUrlForwards =
    state.currentActiveStepNumber + 1 < state.steps.length ? state.steps[state.currentActiveStepNumber + 1].url : null;

  const firstStepCompleted = displaySteps[0].isComplete == true;
  const lastStepCompleted = displaySteps[displaySteps.length - 1].isComplete == true;

  return (
    <div className="telia-step-indicator-paging">
      <RenderSvgLinePattern />

      <ol className={'telia-step-indicator-paging__list telia-step-indicator-paging__list--page-size-' + pageSize}>
        {hasLeftArrow && (
          <RenderArrow
            iconName={'chevron-left'}
            onPaging={() => onPagingLeft(maxStepCount, pageSize, state, updateState, arrowsAsCarousel)}
            url={arrowUrlBackwards}
            isComplete={firstStepCompleted}
            arrowsAsCarousel={arrowsAsCarousel}
          />
        )}

        {displaySteps.map((step, i) => (
          <RenderStep
            step={step}
            isArrow={step.arrowType == 'LEFT' || step.arrowType == 'RIGHT'}
            key={'telia-step-indicator-paging__list' + i}
            index={i}
            maxDisplayCount={displaySteps.length}
          />
        ))}

        {hasRightArrow && (
          <RenderArrow
            iconName={'chevron-right'}
            url={arrowUrlForwards}
            isComplete={lastStepCompleted}
            onPaging={() => {
              onPagingRight(autocompletePreviousSteps, pageSize, maxStepCount, state, updateState, arrowsAsCarousel);
            }}
            arrowsAsCarousel={arrowsAsCarousel}
          />
        )}
      </ol>

      <RenderChildren />
    </div>
  );
});

export default StepIndicatorPaging;
