import * as React from 'react';

export type TagsChildren = any | any[];

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

const Tags: React.FC<TagsProps>;

export default Tags;
