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
  onClick?: () => void;
  /**
   * If href is specified, the Button will be rendered using an anchor tag
   */
  href?: string;
  disabled?: boolean;
  /**
   * If true the icon provided is right aligned
   */
  iconRight?: boolean;
  /**
   * Makes the button smaller.
   * Terminology from the designers of the Design System
   */
  size?: 'compact' | 'default';
};

export const Button = (props: ButtonProps) => {
  const { kind = 'primary', label, href, onClick, icon, iconRight, disabled = false, size } = props;
  const Tag = href ? 'a' : 'button';

  const handleClick = (e: React.SyntheticEvent) => {
    if (href && onClick) {
      e.preventDefault();
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Tag
      className={cs('telia-button', `telia-button--${kind}`, `telia-button--${size}`, {
        'telia-button--iconRight': iconRight,
        'telia-button--ball': icon && !label,
        'telia-button--disabled': disabled,
      })}
      href={href}
      onClick={handleClick}
      type="button"
    >
      {icon && <Icon icon={icon} className="telia-button-icon" />}
      {label}
    </Tag>
  );
};
