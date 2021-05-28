import React from 'react';
import cn from 'classnames';
import { Icon, IconDefinition } from '../..';

export interface CardOptionProps {
  onClick: () => void;
  label: string;
  icon: IconDefinition;
  className?: string;
  disabled?: boolean;
}

export const CardOption = (props: CardOptionProps) => {
  return (
    <button
      className={cn('telia-card__option', { 'telia-card__option--disabled': props.disabled }, props.className ?? '')}
      onClick={props.onClick}
    >
      <Icon icon={props.icon} className="telia-card__option__icon" />
      <div>{props.label}</div>
    </button>
  );
};
