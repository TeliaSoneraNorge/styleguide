import React, { useState } from 'react';
import { Props as StepProps } from './Step';
import cn from 'classnames';

/**
 * Status: *finished*
 * Category: Wizard
 */

interface Props {
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
   * Index of the active step. Use when you want to handle the state on your own. Start at 0.
   */
  selectedIndex?: number;
  /**
   * Handler func triggered when user clicks the icon. Use when you want to handle the state on your own.
   */
  onSelect?: (index: number) => void;

  size?: 'xs' | 'sm' | 'md' | 'lg';
  borders?: 'solid' | 'dashed';
}
export const StepByStep: React.FC<Props> = (props) => {
  const [localSelectedIndex, setSelectedIndex] = useState(0);
  const { children, className, interactive, size = 'lg', borders = 'solid', ...rest } = props;

  const selectedIndex = props.selectedIndex ?? localSelectedIndex;
  const onSelect = props.onSelect ?? setSelectedIndex;

  return (
    <ul
      className={cn('step-by-step', `step-by-step--${size}`, className, {
        'step-by-step--interactive': props.interactive,
        'step-by-step--dashed': borders === 'dashed',
      })}
    >
      {interactive
        ? React.Children.map(
            children,
            (step, i) =>
              React.isValidElement<StepProps>(step) &&
              React.cloneElement(step, {
                key: i,
                index: i,
                opened: selectedIndex ? selectedIndex === i : selectedIndex === i,
                onSelect: onSelect ?? setSelectedIndex,
                interactive,
              })
          )
        : children}
    </ul>
  );
};

export const Content: React.FC<{ className?: string }> = ({ children, className }) => (
  <div className={cn('step-by-step__content', className)}>{children}</div>
);

export default StepByStep;
