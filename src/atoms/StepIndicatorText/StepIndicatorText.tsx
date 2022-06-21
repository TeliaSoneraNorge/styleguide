import React, { useState } from 'react';
import classnames from 'classnames';
import { Step, InternalStep } from './Step';
import { Icon } from '../../atoms/Icon';

export interface Props {
  activeStep?: number;
  onStepChange?: any;
  steps?: Step[] | null;

  pagingSize?: number;
  pageSize?: number;

  onStepNavigationCompletesPreviousSteps?: boolean; //Auto-completes current step and all previous ones...and activates "next step". Also if you navigate back, you "incomplete" current step and activate previous one, which is also marked "incomplete"

  onCompleteStep?: any;
}

const IsArrowStep = (step: InternalStep) => {
  return step && typeof step.arrowType !== 'undefined' && step.arrowType && step.arrowType.length > 0;
};

const RenderIcon = (iconName: any) => {
  return <Icon icon={iconName.iconName} />;
};

const StepIndicatorText = (props: Props) => {
  const { steps } = props;
  if (!steps || steps.length === 0) {
    return <></>;
  }

  const internalSteps: InternalStep[] = steps.map((step, i) => {
    return {
      index: i,
      title: step.title,
      url: step.url,
      isActive: step.isActive,
      isComplete: step.isComplete,
      arrowType: null,
      children: step.children,
    };
  });

  const { onStepChange, onStepNavigationCompletesPreviousSteps } = props;

  let pageSize = props.pageSize ?? 5;
  let pagingSize = props.pagingSize ?? 1;

  const maxStepIndex = steps.length - 1;
  const [maxIndex, setMaxIndex] = useState(Math.min(maxStepIndex, pageSize - 1));
  const [activeStepIndex, setActiveStepIndex] = useState(props.activeStep ?? 0);

  if (pageSize <= 0) {
    pageSize = 5;
  }
  if (pagingSize <= 0) {
    pagingSize = 1;
  }

  const minIndex = maxIndex - pageSize + 1;

  const onActivateStep = (index: number) => {
    setActiveStepIndex(index);
    if (onStepChange) {
      onStepChange(index);
    }
  };

  const onPagingLeft = () => {
    onActivateStep(activeStepIndex - 1);

    setMaxIndex(Math.max(maxIndex - pagingSize, pageSize - 1));
  };

  const onPagingRight = () => {
    onActivateStep(activeStepIndex + 1);

    if (pageSize - activeStepIndex <= 1) {
      setMaxIndex(Math.min(maxIndex + pagingSize, maxStepIndex));
    }
  };

  const getVisibleSteps = () => {
    return internalSteps.filter((_, i) => i >= minIndex && i <= maxIndex);
  };

  const addPagingArrows = (displaySteps: InternalStep[]) => {
    const addPagingArrow = (index: number, arrowType: string) => {
      const arrow = {
        arrowType: arrowType,
      } as InternalStep;

      displaySteps.splice(index, 0, arrow);
    };

    if (minIndex > 0 && maxStepIndex > pageSize) {
      addPagingArrow(0, 'LEFT');
    }

    if (maxIndex < maxStepIndex && maxStepIndex > pageSize) {
      addPagingArrow(displaySteps.length + 1, 'RIGHT');
    }
    return displaySteps;
  };

  const StepArrow = (props: any) => {
    const { onPaging, iconName } = props;
    return (
      <>
        <button type="button" className={'telia-step-indicator-text__paging-button'} onClick={onPaging}>
          <RenderIcon iconName={iconName} />
        </button>
      </>
    );
  };

  const StepRender = (props: any) => {
    const { step, onActivateStep } = props;

    return (
      <button role="button" onClick={onActivateStep}>
        <div
          className={classnames('telia-step-indicator-text__element telia-step-indicator-text__element--clickable', {
            'telia-step-indicator-text__element--active': step.isActive,
            'telia-step-indicator-text__element--complete': step.isComplete,
          })}
        >
          <span>{step.index + 1}</span>

          {step.isComplete && <span className="sr-only"> fullført</span>}

          {step.isActive && (
            <div className="telia-step-indicator-text__element">
              <span className="telia-step-indicator-text__element--title">{step.title}</span>
            </div>
          )}
        </div>
      </button>
    );
  };

  const RenderStep = (props: any) => {
    const { step, onActivateStep } = props;

    return (
      <li
        className={classnames('telia-step-indicator-text__step', {
          'telia-step-indicator-text__step--arrow': IsArrowStep(step),
        })}
      >
        {IsArrowStep(step) && step.arrowType === 'LEFT' && (
          <StepArrow onPaging={onPagingLeft} iconName={'arrow-left'} />
        )}

        {!IsArrowStep(step) && <StepRender step={step} onActivateStep={onActivateStep} />}

        {IsArrowStep(step) && step.arrowType === 'RIGHT' && (
          <StepArrow onPaging={onPagingRight} iconName={'arrow-right'} />
        )}
      </li>
    );
  };

  const RenderActiveStepContent = (props: any) => {
    const { step } = props;

    if (!step.isActive) {
      return <></>;
    }

    if (typeof step.children === 'undefined' || !step.children) {
      return <></>;
    }

    const children = step.children;
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

  for (let i = 0; i < internalSteps.length; i++) {
    internalSteps[i].isActive = false;
    if (i < activeStepIndex) {
      if (onStepNavigationCompletesPreviousSteps === true) {
        internalSteps[i].isComplete = true;
      }
    }
  }

  internalSteps[activeStepIndex].isActive = true;

  let displaySteps = getVisibleSteps();
  displaySteps = addPagingArrows(displaySteps);

  return (
    <div className="telia-step-indicator">
      <div className="telia-step-indicator-text__container">
        <div className="telia-step-indicator-text">
          <ol>
            {displaySteps.map((step, i) => (
              <RenderStep key={i} step={step} onActivateStep={() => onActivateStep(step.index)} />
            ))}
          </ol>
        </div>
      </div>
      {displaySteps.map((step, i) => (
        <RenderActiveStepContent key={i} step={step} />
      ))}
    </div>
  );
};

export default StepIndicatorText;
