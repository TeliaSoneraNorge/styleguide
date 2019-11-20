import * as React from 'react';

export interface StepIndicatorProps {
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
  labels?: string[];
  /**
   * Links for steps
   */
  links?: string[];
}

const StepIndicator: React.FC<StepIndicatorProps>;

export default StepIndicator;
