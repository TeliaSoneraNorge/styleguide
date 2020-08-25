import classnames from 'classnames';
import React from 'react';
import range from 'lodash/range';
import { CheckMarkIcon } from '../Icon/';

const renderLine = (number: any, numberOfSteps: any, index: any) => {
  if (number >= numberOfSteps - 1) {
    return null;
  }

  const isPassed = index > number;

  return <span className={classnames('step-indicator__line', { 'step-indicator__line--passed': isPassed })} />;
};

const StepElement = ({
  children,
  isPassed,
  onClick
}: any) => {
  if (isPassed) {
    return (
      <a
        href="javascript:void(0)"
        className="step-indicator__element step-indicator__element__clickable"
        onClick={onClick}
      >
        {children}
      </a>
    );
  } else {
    return <div className="step-indicator__element">{children}</div>;
  }
};

const renderStep = (index: any, number: any, numberOfSteps: any, label: any, link: any) => {
  const isActive = index === number;
  const isPassed = index > number;

  return (
    <li className="step-indicator__wrapper" key={`step-indicator-step-${number}`}>
      <StepElement isPassed={isPassed} onClick={() => window.location.assign(link)}>
        <div
          className={classnames('step-indicator__step', {
            'step-indicator__step--active': isActive,
            'step-indicator__step--passed': isPassed,
          })}
        >
          {index > number ? (
            <span className="step-indicator__icon-wrapper">
              {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'role' does not exist on type 'IntrinsicA... Remove this comment to see the full error message */}
              <CheckMarkIcon className="step-indicator__icon" role="presentation" title={`${number + 1}`} />
            </span>
          ) : (
            number + 1
          )}
        </div>
        <span className={classnames('step-indicator__label', { 'step-indicator__label--active': isActive })}>
          {label}
          {index > number && <span className="sr-only">- fullført</span>}
        </span>
      </StepElement>
      {renderLine(number, numberOfSteps, index)}
    </li>
  );
};

type StepIndicatorProps = {
    index?: number;
    numberOfSteps?: number;
    labels?: string[];
    links?: string[];
};

/**
 * Status: *In progress*.
 * Category: Wizard
 */
const StepIndicator = ({ index, numberOfSteps, labels, links }: StepIndicatorProps) => (
  <div className="step-indicator">
    <ol className="step-indicator__list">
      {/* @ts-expect-error ts-migrate(2345) FIXME: Type 'undefined' is not assignable to type 'number... Remove this comment to see the full error message */}
      {range(numberOfSteps).map(number => renderStep(index, number, numberOfSteps, labels[number], links[number]))}
    </ol>
  </div>
);

export default StepIndicator;
