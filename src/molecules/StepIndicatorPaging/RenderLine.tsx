import React from 'react';
import classnames from 'classnames';

export const RenderLine: React.FC<{ isComplete: boolean; isActive: boolean }> = (props) => {
  const { isComplete, isActive } = props;

  const classNames = classnames('telia-step-indicator-paging__line', {
    'telia-step-indicator-paging__line--complete': isComplete,
    'telia-step-indicator-paging__line--dashed': !isComplete,
    'telia-step-indicator-paging__line--active': isActive,
  });

  return (
    <div className={classNames}>
      {!isComplete && (
        <svg>
          <rect width="100%" height="4px" fill="url(#telia-step-indicator-paging__circle--id)"></rect>
        </svg>
      )}
    </div>
  );
};
