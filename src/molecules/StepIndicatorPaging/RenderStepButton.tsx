import classnames from 'classnames';
import React from 'react';
import { CheckMarkIcon } from '../../atoms/Icon';
import { navigateToStepUrl } from './Functions/navigateToStepUrl';

export const RenderStepButton = (props: any) => {
  const { number, title, url, onStepButtonClick, isClickable, isComplete, isActive, hideStepNumber } = props;

  const onStepClick = () => {
    if (!navigateToStepUrl(url)) {
      onStepButtonClick();
    }
  };

  const RenderText = () => (
    <div
      className={classnames('telia-step-indicator-paging__button__text', {
        'telia-step-indicator-paging__button__text--active': isActive,
      })}
    >
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
