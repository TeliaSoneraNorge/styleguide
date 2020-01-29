import * as React from 'react';

export type TagsChildren = React.ReactNode;

export type TagsColor = 'dark-grey';

export interface TagsProps {
  /**
   * Additional classes
   */
  className?: string;
  /**
   * Tags.Tag nodes to display.
   */
  children?: TagsChildren;
  /**
   * One of ['dark-grey']
   */
  color?: TagsColor;
}

export interface TagProps {
  className?: string;
  children?: TagsChildren;
}

const Tags: React.FC<TagsProps> & { 
      Tag:  React.FC<TagProps>;
};

export default Tags;
