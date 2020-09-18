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
};

export const Button = (props: ButtonProps) => {
  const { type = 'primary', label, href, onClick, icon, iconRight, disabled = false } = props;
  const Tag: any = href ? 'a' : 'button';

  return (
    <Tag
      className={cs('business-button', {
        [`business-button--${type}`]: type,
        'business-button--iconRight': iconRight,
        'business-button--ball': icon && !label,
      })}
      href={href ? href : undefined}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <Icon
          icon={icon}
          className={cs('business-button--icon', {
            'business-button--icon--right': iconRight,
            'business-button--icon--ball': icon && !label,
          })}
        />
      )}
      {label}
    </Tag>
  );
};
