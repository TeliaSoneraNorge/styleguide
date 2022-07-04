import React from 'react';
import classnames from 'classnames';

export const RenderLine: React.FC<{ isComplete: boolean; className?: string }> = (props) => {
  const { isComplete, className } = props;
  const css = className != null ? ' ' + className : '';
  return (
    <div
      className={
        classnames('telia-step-indicator-paging__line', {
          'telia-step-indicator-paging__line--complete': isComplete,
        }) + css
      }
    />
  );
};
