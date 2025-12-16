import React from 'react';
import range from 'lodash/range';
import cn from 'classnames';
import { Step } from './Step';

export interface Props {
  /**
   * Current active step (index starts at 0)
   */
  index?: number;
  /**
   * Total number of steps
   */
  numberOfSteps?: number;
  /**
   * Labels for steps
   */
  labels?: Array<React.ReactNode>;
  /**
   * Links for steps
   */
  links?: string[];
  /**
   * List of indexes that should be disabled
   */
  disabled?: boolean[];
  kind?: 'purple';
  onClick?: (index: number) => void;
  completedSteps?: number[];
}

/**
 * Status: *In progress*.
 * Category: Wizard
 */
const StepIndicator = ({
  index = 0,
  numberOfSteps = 0,
  labels,
  links,
  disabled,
  kind,
  onClick,
  completedSteps,
}: Props) => (
  <div
    className={cn('step-indicator', {
      'step-indicator__purple': kind === 'purple',
    })}
  >
    <ol className="step-indicator__list">
      {range(numberOfSteps ?? 0).map((number) => (
        <Step
          key={index + 'step-indicator__list' + number}
          activeStep={index}
          index={number}
          numberOfSteps={numberOfSteps}
          label={labels?.[number] ?? ''}
          link={links?.[number] ?? ''}
          isDisabled={disabled?.[number] ?? false}
          onClick={onClick}
          isCompleted={completedSteps?.includes(number) ?? false}
        />
      ))}
    </ol>
  </div>
);

export default StepIndicator;
