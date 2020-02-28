import React from 'react';
import cs from 'classnames';
import { Icon } from '../Icon';

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
  className?: string;
  /**
   * Deprecated! Use children.
   */
  text?: React.ReactNode;

  /**
   * Content of this link.
   */
  children?: React.ReactNode;

  target?: string;

  href: string;
  style?: React.CSSProperties;

  /**
   * Choose between forward arrow (arrow-left) and backward arrow (arrow-right) icon
   */
  icon?: 'arrow-left' | 'arrow-right';

  /**
   * Set position of icon (before or after)
   */
  iconPosition?: 'before' | 'after';

  iconColor?: 'core-purple' | 'black' | 'white';

  /**
   * Only true if Link are on a dark background
   */
  negative?: boolean;
}

export const Link = (props: LinkProps) => {
  const {
    className,
    text,
    children,
    href,
    icon,
    iconPosition,
    iconColor = 'core-purple',
    negative,
    target = undefined,
    ...rest
  } = props;

  return (
    <a
      className={cs(
        negative ? 'link--negative' : 'link',
        icon && iconColor !== 'white' ? 'link--icon' : '',
        icon && iconColor === 'white' ? 'link--negative--icon' : '',
        className ? className : undefined
      )}
      href={href}
      target={target}
      {...rest}
    >
      {icon && iconPosition === 'before' ? (
        <Icon
          icon={icon}
          className={`link--icon--before link--${iconColor === 'white' ? 'negative--' : ''}icon--${iconColor}`}
        />
      ) : null}
      {text}
      {children}
      {icon && iconPosition === 'after' ? (
        <Icon
          icon={icon}
          className={`link--icon--after link--${iconColor === 'white' ? 'negative--' : ''}icon--${iconColor}`}
        />
      ) : null}
    </a>
  );
};

export default Link;
