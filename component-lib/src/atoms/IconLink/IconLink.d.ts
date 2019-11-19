import * as React from 'react';

export type IconLinkIconName = "ico_download" | "linkedin_icon" | "twitter_icon";

export interface IconLinkProps {
    /**
     * One of 'download', 'linkedIn' or 'twitter'.
     */
    iconName?: IconLinkIconName;
}

const IconLink: React.FC<IconLinkProps>;

export default IconLink;
