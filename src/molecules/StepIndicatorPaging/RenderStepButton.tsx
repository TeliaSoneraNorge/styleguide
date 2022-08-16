import classnames from 'classnames';
import React from 'react';
import { CheckMarkIcon } from '../../atoms/Icon';
import { navigateToStepUrl } from './Functions/navigateToStepUrl';

export const RenderStepButton = (props: any) => {
  const { number, title, url, onStepButtonClick, isClickable, isComplete, isActive } = props;

  const onStepClick = () => {
    if (!navigateToStepUrl(url)) {
      onStepButtonClick();
    }
  };

  const RenberButtonText = () => (
    <div
      className={classnames('telia-step-indicator-paging__button__text', {
        'telia-step-indicator-paging__button__text--active': isActive,
      })}
    >
      {isComplete && <CheckMarkIcon className={'telia-step-indicator-paging__button__icon--' + isActive} />}

      {<span>{number + 1}</span>}

      {isComplete && !isActive && <span className="sr-only"> fullført</span>}

      <div
        className={classnames('telia-step-indicator-paging__button__title-container', {
          'telia-step-indicator-paging__button__title--active': isActive,
        })}
      >
        <span>{title}</span>
      </div>
    </div>
  );

  const buttonClassNames = classnames('telia-step-indicator-paging__button', {
    'telia-step-indicator-paging__button--active': isActive,
    'telia-step-indicator-paging__button--complete': isComplete && !isActive,
    'telia-step-indicator-paging__button--disabled': !isClickable,
  });

  return (
    <>
      {!isClickable && (
        <span className={buttonClassNames}>
          <RenberButtonText />
        </span>
      )}
      {isClickable && (
        <button role="button" onClick={onStepClick} className={buttonClassNames}>
          <RenberButtonText />
          <div className="telia-step-indicator-paging__button__clickable-field"></div>
        </button>
      )}
    </>
  );
};
