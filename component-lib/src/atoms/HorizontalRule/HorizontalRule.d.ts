import * as React from 'react';

declare interface HorizontalRuleProps {
  /**
   * Whenever this should be short or not.
   */
  short?: any;
  /**
   * Whenever this should be left aligned.
   */
  left?: any;
}

declare const HorizontalRule: React.FC<HorizontalRuleProps>;

export default HorizontalRule;
