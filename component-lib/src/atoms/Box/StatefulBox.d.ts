import * as React from 'react';

export type StatefulBoxColor = 'purple' | 'pink' | 'light-orange' | 'green' | 'blue' | 'teal' | 'grey' | 'black';

export type StatefulBoxSize = 'small' | 'medium';

export interface StatefulBoxProps {
  className?: string;
  isExpanded?: boolean;
  canExpand?: boolean;
  color?: StatefulBoxColor;
  size?: StatefulBoxSize;
  speechBubbleText?: string;
  /**
   * close button aria-controls
   */
  id?: string;
}

export const StatefulBox: React.FC<StatefulBoxProps>;

export default StatefulBox;
