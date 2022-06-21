import classnames from 'classnames';
import React from 'react';

const StepComponent = (props: any) => {
  const { number, title, url, onActivateStep, isComplete, isActive } = props;

  if (typeof title === 'undefined' || typeof url === 'undefined' || typeof number === 'undefined') {
    console.warn('Warning: A step component was given an invalid title, or url or number');
    return <></>;
  }

  const onStepClick = () => {
    if (url) {
      window.location.assign(url);
    }
    if (onActivateStep) {
      onActivateStep();
    }
  };

  const buttonIsEnabled = typeof onActivateStep !== 'undefined' && onActivateStep;

  return (
    <button role="button" onClick={onStepClick}>
      <div
        className={classnames('telia-step-indicator-text__element telia-step-indicator-text__element--clickable', {
          'telia-step-indicator-text__element--active': isActive,
          'telia-step-indicator-text__element--complete': isComplete && !isActive,
          'telia-step-indicator-text__element--disabled': !buttonIsEnabled,
        })}
      >
        <span>{number + 1}</span>

        {isComplete && <span className="sr-only"> fullført</span>}

        {isActive && (
          <div className="telia-step-indicator-text__element">
            <span className="telia-step-indicator-text__element--title">{title}</span>
          </div>
        )}
      </div>
    </button>
  );
};

export default StepComponent;
