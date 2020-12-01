import React from 'react';
import cs from 'classnames';
import { Icon, IconDefinition } from '../../atoms/Icon';

type ButtonKind = 'primary' | 'primary-text' | 'secondary' | 'secondary-text' | 'ghost' | 'positive' | 'negative';

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
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const {
    kind = 'primary',
    label,
    href,
    onClick,
    icon,
    iconRight,
    disabled = false,
    active = false,
    size = 'default',
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
        'telia-button',
        `telia-button--${kind}`,
        `telia-button--${size}`,
        {
          'telia-button--iconRight': iconRight,
          'telia-button--ball': icon && !label,
          'telia-button--disabled': disabled,
          'telia-button--active': active,
        },
        className
      )}
      href={href}
      onClick={handleClick}
      disabled={props.disabled}
      type="button"
      target={props.href ? props.target : undefined}
    >
      {icon && <Icon icon={icon} className="telia-button-icon" />}
      {label}
    </Tag>
  );
};
