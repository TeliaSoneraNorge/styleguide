import React from 'react';
import cs from 'classnames';
import { Icon, IconDefinition } from '../../index';

/**
 * Status: *finished*.
 * Category: Links
 *
 * The target attribute is set to '_self' which is the default value if the attribute is not specified.
 * If you rather prefer to open the linked document in a new browser window or tab, you can set the target to '_blank' instead.
 *
 * Our links have _two visual means_ of being identified: an underline and bolder font.
 */

interface isLink {
  type?: 'link';
  /**
   * Choose between 'arrow-left' and 'arrow-right' icon.
   * 
   * 'back-icon' & 'forward-icon' are  deprecated!
   * 
   *  look on Icon component when using bubble-link
   */
  icon?: 'arrow-left' | 'arrow-right' | 'back-icon' | 'forward-icon';
};

interface isBubbleLink {
  type?: 'bubble-link';
  icon?: IconDefinition;
}

export interface CommonLinkProps {
  className?: string;
  /**
    * The text to display in the component. We prefer to use `children` instead.
    * @deprecated Use `children` instead.
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
   * Set position of icon (before or after)
   */
  iconPosition?: 'before' | 'after';
  iconColor?: 'core-purple' | 'black' | 'white';

  /**
   * Only true if Link are on a dark background
   */
  negative?: boolean;

  type?: 'link' | 'bubble-link';
}

export type LinkProps = (isLink | isBubbleLink) & CommonLinkProps;

export const Link = (props: LinkProps) => {
  const {
    className,
    text,
    children,
    href,
    iconPosition,
    iconColor = 'core-purple',
    negative,
    target = undefined,
    type = 'link',
    ...rest
  } = props;

  let icon;

  // Support for deprecated icons
  function checkForDeprecatedIcons(): string | undefined {
    if(props.icon === 'back-icon') return icon = 'arrow-left';
    if(props.icon === 'forward-icon') return icon = 'arrow-right';
    return icon = props.icon;
  }; checkForDeprecatedIcons();
  
  return (
    <>

    {type === 'link' && 
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
    }

    {type === 'bubble-link' &&
      <a
        href={href}
        {...rest}
        className={`bubble-link bubble-link--${iconColor}`}
      > 
        <div className="bubble-link--flex-container">
          <span className={`bubble-link--icon-circle bubble-link--circle-background--${iconColor}`}>
            <Icon icon={icon} className={`bubble-link--icon bubble-link--icon-color--${iconColor}`}/>
          </span>
          <span className={`bubble-link--text`}>
            {children}
          </span>
        </div>
      </a>
    }
    </>
  );
};

export default Link;
