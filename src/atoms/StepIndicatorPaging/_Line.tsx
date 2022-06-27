import React from 'react';
import classnames from 'classnames';

export const Line: React.FC<{ isComplete: boolean }> = (props) => {
  const { isComplete } = props;
  return (
    <span
      className={classnames('telia-step-indicator-paging__line', {
        'telia-step-indicator-paging__line--complete': isComplete,
      })}
    />
  );
};
