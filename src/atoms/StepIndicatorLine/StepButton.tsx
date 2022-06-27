import classnames from 'classnames';
import React from 'react';
import { CheckMarkIcon } from '../../atoms/Icon';

const StepButton = (props: any) => {
  const { number, title, url, onStepButtonClick, isClickable, isComplete, isActive } = props;

  const onStepClick = () => {
    if (url) {
      console.log('Step is navigating to different site');
      window.location.assign(url);
    } else {
      onStepButtonClick();
    }
  };

  const RenderText = () => (
    <div className="telia-step-indicator-line__step__circle-text">
      {isComplete && !isActive && <CheckMarkIcon />}

      {isActive && <span>{number + 1}</span>}

      {!isActive && !isComplete && <span>{number + 1}</span>}

      {isComplete && !isActive && <span className="sr-only"> fullført</span>}

      {isActive && (
        <div className="telia-step-indicator-line__step--title">
          <span>{title}</span>
        </div>
      )}
    </div>
  );

  return (
    <>
      {!isClickable && (
        <span
          className={classnames('telia-step-indicator-line__step', {
            'telia-step-indicator-line__step--active': isActive,
            'telia-step-indicator-line__step--complete': isComplete && !isActive,
            'telia-step-indicator-line__step--disabled': !isClickable,
          })}
        >
          <RenderText />
        </span>
      )}
      {isClickable && (
        <button
          role="button"
          onClick={onStepClick}
          className={classnames('telia-step-indicator-line__step', {
            'telia-step-indicator-line__step--active': isActive,
            'telia-step-indicator-line__step--complete': isComplete && !isActive,
            'telia-step-indicator-line__step--disabled': !isClickable,
          })}
        >
          <RenderText />
        </button>
      )}
    </>
  );
};

export default StepButton;
