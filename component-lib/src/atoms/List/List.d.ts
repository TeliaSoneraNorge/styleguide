import * as React from 'react';

declare interface ListProps {
  /**
   * Additional classes.
   */
  className?: string;

  /**
   * Whenever this should wrap children by 3 per column.
   */
  wrapByThree?: boolean;

  /**
   * Whenever this should wrap children by 4 per column.
   */
  wrapByFour?: boolean;

  /**
   * Whenever should children be black.
   */
  black?: boolean;
}

export const List: React.FC<ListProps> & {
  Item: React.FC<React.HTMLProps<HTMLLIElement>>;
  Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
  BubbleLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { iconName: string }>;
};

export default List;
