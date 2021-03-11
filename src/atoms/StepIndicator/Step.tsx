import React from 'react';
import classnames from 'classnames';
import { CheckMarkIcon } from '../Icon';

interface Props {
  index: number;
  activeStep: number;
  numberOfSteps: number;
  label: string | React.ReactNode;
  link: string;
}

export const Step = (props: Props) => {
  const { index, activeStep, numberOfSteps, label, link } = props;

  const isActive = index === activeStep;
  const isPassed = activeStep > index;

  return (
    <li className="step-indicator__wrapper" key={`step-indicator-step-${activeStep}`}>
      <StepElement isPassed={isPassed} onClick={() => window.location.assign(link)}>
        <div
          className={classnames('step-indicator__step', {
            'step-indicator__step--active': isActive,
            'step-indicator__step--passed': isPassed,
          })}
        >
          {index < activeStep ? (
            <span className="step-indicator__icon-wrapper">
              <CheckMarkIcon className="step-indicator__icon" title={`${index + 1}`} />
            </span>
          ) : (
            index + 1
          )}
        </div>
        <span className={classnames('step-indicator__label', { 'step-indicator__label--active': isActive })}>
          {label}
          {index < activeStep && <span className="sr-only">- fullført</span>}
        </span>
      </StepElement>
      <Line index={index} numberOfSteps={numberOfSteps} activeStep={activeStep} />
    </li>
  );
};

const StepElement: React.FC<{ isPassed: boolean; onClick: (event: React.MouseEvent) => void }> = ({
  children,
  isPassed,
  onClick,
}) => {
  if (isPassed) {
    return (
      <a role="button" className="step-indicator__element step-indicator__element__clickable" onClick={onClick}>
        {children}
      </a>
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
