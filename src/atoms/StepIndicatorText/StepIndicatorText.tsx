import React, { useState } from 'react';
import range from 'lodash/range';
import { StepRender } from './StepRender';
import { Step } from './Step';
import { ArrowRightIcon } from '../../atoms/Icon/icons';
import { MoreLowIcon } from '../../atoms/Icon/icons';

export interface Props {
  activeStep?: number;
  onStepChange?: any;
  steps?: Step[] | null;

  pagingSize?: number;
  pageSize?: number;
}

const StepIndicatorText = (props: Props) => {
  const { steps } = props;
  if (!steps || steps.length === 0) {
    return <></>;
  }
  const { onStepChange } = props;

  const maxStepIndex = steps.length - 1;
  const [maxIndex, setMaxIndex] = useState(maxStepIndex);
  const [activeStepIndex, setActiveStepIndex] = useState(props.activeStep ?? 0);
  const startIndex = 0;

  let pageSize = props.pageSize ?? 1;
  let pagingSize = props.pagingSize ?? 5;

  if (pageSize <= 0) {
    pageSize = 1;
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
    setMaxIndex(Math.min(maxIndex + pagingSize, maxStepIndex));
  };

  const getVisibleSteps = () => {
    return steps.filter((_, i) => {
      return i >= minIndex && i <= maxIndex;
    });
  };

  const addPagingArrows = (displaySteps: any) => {
    const addPagingArrow = (step: any, index: number, arrowType: string) => {
      // step.arrowType = arrowType;
      console.log(arrowType);
      displaySteps.splice(index, 0, step);
    };

    if (minIndex > startIndex && maxStepIndex >= pageSize) {
      addPagingArrow(0, displaySteps[minIndex - 1], 'LEFT');
    }

    if (maxIndex < maxStepIndex && maxStepIndex >= pageSize) {
      addPagingArrow(displaySteps.length, displaySteps[maxIndex + 1], 'RIGHT');
    }
    return displaySteps;
  };

  let displaySteps = getVisibleSteps();
  displaySteps = addPagingArrows(displaySteps);

  const StepArrow = (props: { onPaging: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
      <>
        <button type="button" className={'telia-step-indicator-text__paging'} onClick={props.onPaging}>
          <MoreLowIcon className={'telia-step-indicator-text__icon'} />
        </button>
      </>
    );
  };

  const StepRender = (step: any) => {
    return (
      <>
        <a className={'telia-step-indicator-text__link'} href={step.url} target={''} title={step.title ?? ''}>
          {step.title}
        </a>
      </>
    );
  };

  const RenderStep = (step: any) => {
    let index = 0;
    return (
      <li key={index++} className={'telia-breadcrumbs__crumb'}>
        {step.type && step.type === 'LEFT' && <StepArrow onPaging={onPagingLeft} />}

        {!step.type && step.title && step.title.length > 0 && (
          <StepRender
            title={step.title}
            url={step.url}
            isActive={step.isActive}
            isComplete={step.isComplete}
            onActivateStep={step.onActivateStep}
          />
        )}

        {step.type && step.type === 'RIGHT' && <StepArrow onPaging={onPagingRight} />}
      </li>
    );
  };

  return (
    <div className="step-indicator-text__container">
      <div className="step-indicator-text">
        <ol>
          {steps.map((step, i) => (
            <RenderStep
              key={i}
              number={i}
              url={step.url}
              isActive={activeStepIndex === i}
              isComplete={activeStepIndex > i}
              title={step.title}
              onActivateStep={() => onActivateStep(i)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default StepIndicatorText;
