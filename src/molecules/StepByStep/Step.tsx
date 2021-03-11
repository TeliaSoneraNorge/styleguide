import React from 'react';
import cn from 'classnames';

export interface Props {
  className?: string;
  /**
   * StepByStep.Step
   */
  children?: React.ReactNode;

  /**
   * Whether this should be interactive or just static.
   */
  interactive?: boolean;
  /**
   * Index of the step
   */
  index?: number;

  opened?: boolean;
  /**
   * Handler func triggered when user clicks the icon. Use when you want to handle the state on your own.
   */
  onSelect?: (...args: any[]) => any;
}

export const Step: React.FC<Props> = ({ children, className, index, opened, onSelect, interactive }) => (
  <li
    className={cn('step-by-step__step-wrapper', className, {
      'step-by-step__step--opened': opened,
      'step-by-step__step--closed': !opened,
      'step-by-step__step--touched': true,
    })}
  >
    {React.Children.map(
      children,
      (it) =>
        React.isValidElement(it) &&
        React.cloneElement(it, {
          key: index,
          index,
          opened,
          onSelect,
          interactive,
        })
    )}
  </li>
);
