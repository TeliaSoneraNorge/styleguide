import React from 'react';
import cs from 'classnames';
import { Icon, IconDefinition } from '../../atoms/Icon';

type ButtonKind =
  | 'primary'
  | 'primary-text'
  | 'expressive-purple'
  | 'secondary'
  | 'secondary-text'
  | 'ghost'
  | 'outlined'
  | 'white'
  | 'green'
  | 'red';

type ButtonProps = {
  /**
   * Button style based on the design guide. Default is primary.
   */
  kind?: ButtonKind;
  /**
   * Text to display in the button.
   */
  label?: string;
  /**
   * Icon to display in the button.
   */
  icon?: IconDefinition;
  /**
   * Accessibility label when no text is displayed in the button.
   */
  ariaLabel?: string;
  /**
   * Action triggered when clicking the button.
   */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * If href is specified, the Button will be rendered using an anchor tag
   */
  href?: string;
  disabled?: boolean;
  active?: boolean;
  /**
   * If true the icon provided is right aligned
   */
  iconRight?: boolean;
  /**
   * Makes the button smaller.
   * Terminology from the designers of the Design System
   */
  size?: 'compact' | 'default';

  /**
   * For use with href.
   * Eg pass `_blank` to open link in a new tab
   */
  target?: string;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const {
    kind = 'primary',
    label,
    href,
    onClick,
    icon,
    ariaLabel,
    iconRight,
    disabled = false,
    active = false,
    size = 'default',
    target,
    type = 'button',
    className,
  } = props;
  const Tag = href ? 'a' : 'button';

  const handleClick = (e: React.MouseEvent) => {
    if (href && onClick) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Tag
      className={cs(
        'telia-business-button',
        `telia-business-button--${kind}`,
        `telia-business-button--${size}`,
        {
          'telia-business-button--iconRight': iconRight,
          'telia-business-button--iconLeft': icon && !iconRight,
          'telia-business-button--ball': icon && !label,
          'telia-business-button--disabled': disabled,
          'telia-business-button--active': active,
        },
        className
      )}
      href={href}
      onClick={handleClick}
      disabled={disabled}
      type={href ? undefined : type}
      target={href ? target : undefined}
      aria-label={ariaLabel}
    >
      {icon && <Icon icon={icon} className="telia-business-button__icon" />}
      {label}
    </Tag>
  );
};
