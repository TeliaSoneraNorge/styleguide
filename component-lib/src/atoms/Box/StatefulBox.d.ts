import * as React from 'react';

declare type StatefulBoxColor = 'purple' | 'pink' | 'light-orange' | 'green' | 'blue' | 'teal' | 'grey' | 'black';

declare type StatefulBoxSize = 'small' | 'medium';

declare interface StatefulBoxProps {
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

declare const StatefulBox: React.FC<StatefulBoxProps>;

export default StatefulBox;
