import * as React from 'react';

import { LinkProps } from '../Link';

export interface ListProps {
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

const List: React.FC<ListProps> & {
  Item: React.FC<React.HTMLProps<HTMLLIElement>>;
  Link: React.FC<LinkProps>;
  BubbleLink: React.FC<LinkProps & { iconName: string }>;
};

export default List;
