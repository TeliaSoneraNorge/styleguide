import * as React from 'react';

export interface HorizontalRuleProps {
  /**
   * Whenever this should be short or not.
   */
  short?: any;
  /**
   * Whenever this should be left aligned.
   */
  left?: any;
}

export const HorizontalRule: React.FC<HorizontalRuleProps>;

export default HorizontalRule;
