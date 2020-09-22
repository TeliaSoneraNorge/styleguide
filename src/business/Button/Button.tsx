import React from 'react';
import cs from 'classnames';
import { Icon, IconDefinition } from '../../atoms/Icon';

type ButtonType = 'primary' | 'primary-text' | 'secondary' | 'secondary-text' | 'ghost' | 'positive' | 'negative';

type ButtonProps = {
  type?: ButtonType;
  label?: string;
  icon?: IconDefinition;
  onClick?: React.MouseEventHandler;
  href?: string;
  disabled?: boolean;
  iconRight?: boolean;
  compact?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { type = 'primary', label, href, onClick, icon, iconRight, disabled = false, compact } = props;
  const Tag: any = href ? 'a' : 'button';

  return (
    <Tag
      className={cs('telia-button', `telia-button--${type}`, {
        'telia-button--iconRight': iconRight,
        'telia-button--ball': icon && !label,
        [`telia-button--${type}--disabled`]: href && disabled,
        'telia-button--compact': compact,
      })}
      href={href ? href : undefined}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {icon && (
        <Icon
          icon={icon}
          className={cs('telia-button-icon', {
            'telia-button-icon--right': iconRight,
            'telia-button-icon--ball': icon && !label,
            'telia-button-icon--compact': compact,
          })}
        />
      )}
      {label}
    </Tag>
  );
};
