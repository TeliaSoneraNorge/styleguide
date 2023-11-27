import React from 'react';
import classnames from 'classnames';
import { CheckMarkIcon } from '../Icon';

interface Props {
  index: number;
  activeStep: number;
  numberOfSteps: number;
  label: string | React.ReactNode;
  link: string;
  onClick?: (index: number) => void;
}

export const Step = ({ index, activeStep, numberOfSteps, label, link, onClick }: Props) => {
  const isActive = index === activeStep;
  const isPassed = activeStep > index;

  return (
    <li className="step-indicator__wrapper" key={`step-indicator-step-${activeStep}`}>
      <StepElement isPassed={isPassed} onClick={onClick} link={link} index={index}>
        <div
          className={classnames('step-indicator__step', {
            'step-indicator__step--active': isActive,
            'step-indicator__step--passed': isPassed,
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
        <span className={classnames('step-indicator__label', { 'step-indicator__label--active': isActive })}>
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
  index: number;
  link: string;
  onClick?: (index: number) => void;
  children?: React.ReactNode;
}> = ({ children, isPassed, onClick, link, index }) => {
  if (isPassed) {
    if (!onClick) {
      return (
        <a className="step-indicator__element step-indicator__element__clickable" href={link}>
          {children}
        </a>
      );
    }

    return (
      <button
        role="button"
        className="step-indicator__element step-indicator__element__clickable"
        onClick={() => onClick(index)}
      >
        {children}
      </button>
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
