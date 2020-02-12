import * as React from 'react';

export type IconLinkIconName = 'ico_download' | 'linkedin_icon' | 'twitter_icon';

export interface IconLinkProps {
  /**
   * One of 'download', 'linkedIn' or 'twitter'.
   */
  iconName?: IconLinkIconName;
  icon?: string;
  iconColor?: 'black' | 'core-purple' | 'white';
  style?: CSSProperties;
  href: string;
}

const IconLink: React.FC<IconLinkProps>;

export default IconLink;
