import React from 'react';
import cn from 'classnames';

export const StepContent: React.FC<{ className?: string }> = ({ children, className }) => (
  <div className={cn('step-by-step__content', className)}>{children}</div>
);
