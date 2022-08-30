import React from 'react';
import classnames from 'classnames';

export const RenderLine: React.FC<{ isComplete: boolean; isActive: boolean; className?: string }> = (props) => {
  const { isComplete, isActive, className } = props;
  const css = className != null ? ' ' + className : '';
  return (
    <div
      className={
        classnames('telia-step-indicator-paging__line', {
          'telia-step-indicator-paging__line--complete': isComplete,
          'telia-step-indicator-paging__line--dashed': !isComplete,
          'telia-step-indicator-paging__line--active': isActive,
        }) + css
      }
    />
  );
};
