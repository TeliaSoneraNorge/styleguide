import React from 'react';
import cn from 'classnames';

/**
 * For use with interactive StepByStep
 * Content that is hidden/shown based on active step.
 * For static content that should always be shown use StepDescription
 */
export const StepContent: React.FC<{ className?: string }> = ({ children, className }) => (
  <div className={cn('step-by-step__content', className)}>{children}</div>
);
