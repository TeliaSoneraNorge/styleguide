import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 * Category: Links
 *
 * The target attribute is set to '_self' which is the default value if the attribute is not specified.
 * If you rather prefer to open the linked document in a new browser window or tab, you can set the target to '_blank' instead.
 *
 * Our links have _two visual means_ of being identified: an underline and bolder font.
 */


export interface LinkProps {
  /**
   * Content of this link.
   */
  text?: React.ReactNode;

  /**
   * Content of this link.
   */
  children?: React.ReactNode;

  className?: any;
  href: string;

  target?: string;

  /**
   * Choose between forward arrow (forward-icon) and backward arrow (back-icon) icon
   */
  icon?: 'forward-icon' | 'back-icon';

  /**
   * Set position of icon (before or after)
   */
  iconPosition?: 'before' | 'after';
};

const Link = (props: LinkProps) => {
  const { className, text, children, href, icon, iconPosition, target = '_self', ...rest } = props;

  return (
    <a
      className={classnames('link', {
        [`link--with-icon link--${icon}`]: icon,
        [`link--icon-${iconPosition}`]: icon && iconPosition,
        [className]: className,
      })}
      href={href}
      target={target}
      {...rest}
    >
      {text}
      {children}
    </a>
  );
};

export default Link;
