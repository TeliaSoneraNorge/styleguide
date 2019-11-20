import * as React from 'react';

export type BoxColor = 'purple' | 'pink' | 'light-orange' | 'green' | 'blue' | 'teal' | 'grey' | 'black';

export type BoxSize = 'small' | 'medium';

export interface BoxProps {
  isExpanded?: boolean;
  canExpand?: boolean;
  color?: BoxColor;
  size?: BoxSize;
  speechBubbleText?: string;
  /**
   * close button aria-controls
   */
  id?: string;
}

export default class Box extends React.Component<BoxProps, any> {
  render(): JSX.Element;
}
