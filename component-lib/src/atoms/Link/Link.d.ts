import * as React from 'react';

export type LinkIcon = 'forward-icon' | 'back-icon';

export type LinkIconPosition = 'before' | 'after';

export interface LinkProps {
  /**
   * Content of this link.
   */
  text?: React.ReactNode;
  /**
   * Content of this link.
   */
  children?: React.ReactNode;
  target?: string;
  /**
   * Choose between forward arrow (forward-icon) and backward arrow (back-icon) icon
   */
  icon?: LinkIcon;
  /**
   * Set position of icon (before or after)
   */
  iconPosition?: LinkIconPosition;
}

const Link: React.FC<LinkProps>;

export default Link;
