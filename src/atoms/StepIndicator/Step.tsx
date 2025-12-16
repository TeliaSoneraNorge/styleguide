import React from 'react';
import classnames from 'classnames';
import { CheckMarkIcon } from '../Icon';

interface Props {
  index: number;
  activeStep: number;
  numberOfSteps: number;
  label: string | React.ReactNode;
  link: string;
  isDisabled?: boolean;
  onClick?: (index: number) => void;
  isCompleted?: boolean;
}

export const Step = ({
  index,
  activeStep,
  numberOfSteps,
  label,
  link,
  isDisabled,
  onClick,
  isCompleted = false,
}: Props) => {
  const isActive = index === activeStep;
  const isPassed = activeStep > index || isCompleted;
  console.log('isCompleted', index, isCompleted);

  return (
    <li className="step-indicator__wrapper" key={`step-indicator-step-${activeStep}`}>
      <StepElement isPassed={isPassed} isDisabled={isDisabled} onClick={onClick} link={link} index={index}>
        <div
          className={classnames('step-indicator__step', {
            'step-indicator__step--active': isActive,
            'step-indicator__step--passed': isPassed,
            'step-indicator__step--passed-active': isPassed && isActive,
            'step-indicator__step--disabled': isDisabled,
          })}
        >
          {isPassed ? (
            <span className="step-indicator__icon-wrapper">
              <CheckMarkIcon className="step-indicator__icon" title={`${index + 1}`} />
            </span>
          ) : (
            index + 1
          )}
        </div>
        <span
          className={classnames('step-indicator__label', {
            'step-indicator__label--active': isActive,
            'step-indicator__label--disabled': isDisabled,
          })}
        >
          {label}
          {isPassed && <span className="sr-only">- fullført</span>}
        </span>
      </StepElement>
      <Line index={index} numberOfSteps={numberOfSteps} activeStep={activeStep} />
    </li>
  );
};

const StepElement: React.FC<{
  isPassed: boolean;
  isDisabled?: boolean;
  index: number;
  link: string;
  onClick?: (index: number) => void;
  children?: React.ReactNode;
}> = ({ children, isPassed, isDisabled, onClick, link, index }) => {
  if (isPassed && !isDisabled) {
    if (!onClick) {
      return (
        <a className="step-indicator__element step-indicator__element__clickable" href={link}>
          {children}
        </a>
      );
    }

    return (
      <div
        role="button"
        className="step-indicator__element step-indicator__element__clickable"
        onClick={() => onClick(index)}
      >
        {children}
      </div>
    );
  } else {
    return <div className="step-indicator__element">{children}</div>;
  }
};

const Line: React.FC<{ index: number; activeStep: number; numberOfSteps: number }> = (props) => {
  const { index, activeStep, numberOfSteps } = props;
  if (index >= numberOfSteps - 1) {
    return null;
  }

  const isPassed = activeStep > index;

  return <span className={classnames('step-indicator__line', { 'step-indicator__line--passed': isPassed })} />;
};
