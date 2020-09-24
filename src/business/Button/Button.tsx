import React from 'react';
import cs from 'classnames';
import { Icon, IconDefinition } from '../../atoms/Icon';

type ButtonKind = 'primary' | 'primary-text' | 'secondary' | 'secondary-text' | 'ghost' | 'positive' | 'negative';

type ButtonProps = {
  kind?: ButtonKind;
  label?: string;
  icon?: IconDefinition;
  onClick?: React.MouseEventHandler;
  href?: string;
  disabled?: boolean;
  iconRight?: boolean;
  size?: 'compact';
};

export const Button = (props: ButtonProps) => {
  const { kind = 'primary', label, href, onClick, icon, iconRight, disabled = false, size } = props;
  const Tag: any = href ? 'a' : 'button';

  return (
    <Tag
      className={cs('telia-button', `telia-button--${kind}`, {
        'telia-button--iconRight': iconRight,
        'telia-button--ball': icon && !label,
        [`telia-button--${kind}--disabled`]: href && disabled,
        'telia-button--compact': !!size,
        'telia-button--ball--compact': !!size && icon && !label,
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
            'telia-button-icon--compact': !!size,
          })}
        />
      )}
      {label}
    </Tag>
  );
};
