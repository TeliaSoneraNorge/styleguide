import * as React from 'react';

export type PersonBoxColor = "purple" | "pink" | "light-orange" | "green" | "blue" | "teal" | "grey";

export interface PersonBoxProps {
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

const PersonBox: React.FC<PersonBoxProps>;

export default PersonBox;
