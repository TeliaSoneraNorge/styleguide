import React from 'react';
import cs from 'classnames';
import { Icon, IconDefinition } from '../Icon';

/**
 * Status: *finished*.
 * Category: Links
 *
 * The target attribute is set to '_self' which is the default value if the attribute is not specified.
 * If you rather prefer to open the linked document in a new browser window or tab, you can set the target to '_blank' instead.
 *
 * Our links have _two visual means_ of being identified: an underline and bolder font.
 */

export type LinkIcon = 'forward-icon' | 'back-icon';

export type LinkIconPosition = 'before' | 'after';

export interface LinkProps {
  className?: string;
  /**
   * Content of this link.
   */
  text?: React.ReactNode;

  /**
   * Content of this link.
   */
  children?: React.ReactNode;

  target?: string;

  /**
   * Choose between forward arrow (forward-icon) and backward arrow (back-icon) icon
   */
  icon?: IconDefinition;

  /**
   * Set position of icon (before or after)
   */
  iconPosition?: LinkIconPosition;

  href: string;
  style?: React.CSSProperties;
  negative?: boolean;
  iconColor?: 'core-purple' | 'black' | 'white';
}

const Link: React.FC<LinkProps> = props => {
  const {
    className,
    text,
    children,
    href,
    icon,
    iconPosition,
    iconColor = 'core-purple',
    negative,
    target = '_self',
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
