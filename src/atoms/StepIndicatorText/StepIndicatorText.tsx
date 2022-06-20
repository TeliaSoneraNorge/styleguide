import React, { useState } from 'react';
import range from 'lodash/range';
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

  let pageSize = props.pageSize ?? 5;
  let pagingSize = props.pagingSize ?? 1;

  const maxStepIndex = steps.length - 1;
  const [maxIndex, setMaxIndex] = useState(Math.min(maxStepIndex, pageSize - 1));
  const [activeStepIndex, setActiveStepIndex] = useState(props.activeStep ?? 0);
  const startIndex = 0;

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
    setMaxIndex(Math.min(maxIndex + pagingSize, maxStepIndex));
  };

  const getVisibleSteps = () => {
    return steps.filter((_, i) => i >= minIndex && i <= maxIndex);
  };

  const addPagingArrows = (displaySteps: Step[]) => {
    const addPagingArrow = (index: number, arrowType: string) => {
      const newStep = {
        title: '',
        url: '',
        arrowType: arrowType,
      } as Step;

      displaySteps.splice(index, 0, newStep);
    };

    if (minIndex > 0 && maxStepIndex > pageSize) {
      addPagingArrow(0, 'LEFT');
    }

    if (maxIndex < maxStepIndex && maxStepIndex > pageSize) {
      addPagingArrow(displaySteps.length, 'RIGHT');
    }
    return displaySteps;
  };

  const StepArrow = (props: { onPaging: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
      <>
        <button type="button" className={'telia-step-indicator-text__paging-button'} onClick={props.onPaging}>
          <MoreLowIcon className={'telia-step-indicator-text__paging-icon'} />
        </button>
      </>
    );
  };

  const StepRender = (props: any) => {
    const { step } = props;

    return (
      <a className={'telia-step-indicator-text__link'} href={step.url} target={''} title={step.title ?? ''}>
        {step.title}
      </a>
    );
  };

  const RenderStep = (step: any) => {
    let index = 0;
    return (
      <li key={index++} className={'telia-step-indicator-text__step'}>
        {typeof step.arrowType !== 'undefined' && step.arrowType === 'LEFT' && <StepArrow onPaging={onPagingLeft} />}

        {(typeof step.arrowType === 'undefined' || !step.arrowType) && <StepRender step={step} />}
        {typeof step.arrowType !== 'undefined' && step.arrowType === 'RIGHT' && <StepArrow onPaging={onPagingRight} />}
      </li>
    );
  };

  let displaySteps = getVisibleSteps();
  displaySteps = addPagingArrows(displaySteps);

  console.log('Min ' + minIndex);
  console.log('Max ' + maxIndex);

  console.log('Len ' + displaySteps.length);

  console.log(displaySteps);

  return (
    <div className="telia-step-indicator-text__container">
      <div className="telia-step-indicator-text">
        <ol>
          {displaySteps.map((step, i) => (
            <RenderStep
              key={i}
              number={i}
              url={step.url}
              isActive={activeStepIndex === i}
              isComplete={activeStepIndex > i}
              title={step.title}
              onActivateStep={() => onActivateStep(i)}
              arrowType={step.arrowType}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default StepIndicatorText;
