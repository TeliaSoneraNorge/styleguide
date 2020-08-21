import * as React from 'react';

declare type PersonBoxColor = 'purple' | 'pink' | 'light-orange' | 'green' | 'blue' | 'teal' | 'grey';

declare interface PersonBoxProps {
  id?: string;
  color?: PersonBoxColor;
  isExpanded?: boolean;
  imagePath: string;
  name: string;
  title: string;
  description: string;
  /**
   * Url
   */
  linkedInProfile?: string;
  /**
   * Url
   */
  twitterProfile?: string;
}

declare const PersonBox: React.FC<PersonBoxProps>;

export default PersonBox;
