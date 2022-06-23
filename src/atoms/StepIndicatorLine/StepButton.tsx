import classnames from 'classnames';
import React from 'react';

const StepButton = (props: any) => {
  const { number, title, url, onStepButtonClick, isClickable, isComplete, isActive } = props;

  if (title == null || url === undefined) {
    console.warn('Warning: A step-indicator-line button was not created, it was given invalid title/url');
    return <></>;
  }

  const onStepClick = () => {
    if (url) {
      console.log('Step is navigating to different site');
      window.location.assign(url);
    } else {
      console.log('Step is navigating to diff json');
      onStepButtonClick();
    }
  };

  return (
    <button
      role="button"
      onClick={onStepClick}
      className={classnames('telia-step-indicator-line__step', {
        'telia-step-indicator-line__step--active': isActive,
        'telia-step-indicator-line__step--complete': isComplete && !isActive,
        'telia-step-indicator-line__step--disabled': !isClickable,
      })}
    >
      <div className="telia-step-indicator-line__step__content">
        <span>{number + 1}</span>

        {isComplete && <span className="sr-only"> fullført</span>}

        {isActive && (
          <div className="telia-step-indicator-line__step--title">
            <span>{title}</span>
          </div>
        )}
      </div>
    </button>
  );
};

export default StepButton;
