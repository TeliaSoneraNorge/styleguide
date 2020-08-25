import React from 'react';
import classnames from 'classnames';

type TagsProps = {
    className?: string;
    children?: any | any[]; // TODO: Tags.Tag
    color?: 'dark-grey';
};

/**
 * Status: *finished*
 * Category: Links
 */
const Tags = ({ children, className, color, ...rest }: TagsProps) => (
  <div
    className={classnames('tags', {
      // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
      [className]: className,
      [`tags--${color}`]: color,
    })}
    {...rest}
  >
    {children}
  </div>
);

const Tag = ({
  children,
  className
}: any) => (
  <span
    className={classnames('tags__tag', {
      [className]: className,
    })}
  >
    {children}
  </span>
);
Tags.Tag = Tag;

export default Tags;
