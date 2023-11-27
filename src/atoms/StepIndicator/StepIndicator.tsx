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
  kind?: 'purple';
  onClick?: (index: number) => void;
}

/**
 * Status: *In progress*.
 * Category: Wizard
 */
const StepIndicator = ({ index = 0, numberOfSteps = 0, labels, links, kind, onClick }: Props) => (
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
          onClick={onClick}
        />
      ))}
    </ol>
  </div>
);

export default StepIndicator;
