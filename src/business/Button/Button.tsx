import React from 'react';
import cs from 'classnames';
import { Icon, IconDefinition } from '../../atoms/Icon';

type ButtonKind = 'primary' | 'primary-text' | 'secondary' | 'secondary-text' | 'ghost' | 'positive' | 'negative';

interface Props {
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

  className?: string;
}
interface ButtonProps extends Props, React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
interface LinkButtonProps extends Props, React.LinkHTMLAttributes<HTMLAnchorElement> {
  /**
   * If href is specified, the Button will be rendered using an anchor tag
   */
  href: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Button = (props: LinkButtonProps | ButtonProps) => {
  const {
    kind = 'primary',
    label,
    onClick,
    icon,
    iconRight,
    disabled = false,
    active = false,
    size = 'default',
    className,
    ...rest
  } = props;
  const href = 'href' in props ? props.href : undefined;
  const target = 'target' in props ? props.target : undefined;
  const type = 'href' in props ? props.type : props.type ?? 'button';

  const ariaLabel = props['aria-label'] ?? props.label ?? props.icon;

  const Tag = href ? 'a' : 'button';

  const handleClick = (e: React.MouseEvent) => {
    if ('href' in props && onClick) {
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
      disabled={disabled}
      type={type}
      target={target}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon && <Icon icon={icon} className="telia-button-icon" />}
      {label}
    </Tag>
  );
};
