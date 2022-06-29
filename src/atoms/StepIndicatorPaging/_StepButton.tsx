import classnames from 'classnames';
import React from 'react';
import { CheckMarkIcon } from '../../atoms/Icon';

const StepButton = (props: any) => {
  const { number, title, url, onStepButtonClick, isClickable, isComplete, isActive, hideStepNumber } = props;

  const onStepClick = () => {
    if (url) {
      console.log('Step is navigating to different site');
      window.location.assign(url);
    } else {
      onStepButtonClick();
    }
  };

  let css = 'telia-step-indicator-paging__button__text';
  if (isActive) {
    css += ' telia-step-indicator-paging__button__text--active';
  }

  const RenderText = () => (
    <div className={css}>
      {isComplete && !isActive && <CheckMarkIcon />}

      {hideStepNumber != true && isActive && <span>{number + 1}</span>}

      {hideStepNumber != true && !isActive && !isComplete && <span>{number + 1}</span>}

      {isComplete && !isActive && <span className="sr-only"> fullført</span>}

      <div
        className={classnames('telia-step-indicator-paging__button__title', {
          'telia-step-indicator-paging__button__title--active': isActive,
        })}
      >
        <span>{title}</span>
      </div>
    </div>
  );

  return (
    <>
      {!isClickable && (
        <span
          className={classnames('telia-step-indicator-paging__button', {
            'telia-step-indicator-paging__button--active': isActive,
            'telia-step-indicator-paging__button--complete': isComplete && !isActive,
            'telia-step-indicator-paging__button--disabled': !isClickable,
          })}
        >
          <RenderText />
        </span>
      )}
      {isClickable && (
        <button
          role="button"
          onClick={onStepClick}
          className={classnames('telia-step-indicator-paging__button', {
            'telia-step-indicator-paging__button--active': isActive,
            'telia-step-indicator-paging__button--complete': isComplete && !isActive,
            'telia-step-indicator-paging__button--disabled': !isClickable,
          })}
        >
          <RenderText />
        </button>
      )}
    </>
  );
};

export default StepButton;
