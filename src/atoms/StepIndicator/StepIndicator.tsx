import React, { ReactText } from 'react';
import range from 'lodash/range';
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
}

/**
 * Status: *In progress*.
 * Category: Wizard
 */
const StepIndicator = (props: Props) => {
  const { index = 0, numberOfSteps = 0, labels, links } = props;

  return (
    <div className="step-indicator">
      <ol className="step-indicator__list">
        {range(numberOfSteps ?? 0).map((number) => (
          <Step
            key={number}
            activeStep={index}
            index={number}
            numberOfSteps={numberOfSteps}
            label={labels?.[number] ?? ''}
            link={links?.[number] ?? ''}
          />
        ))}
      </ol>
    </div>
  );
};

export default StepIndicator;
