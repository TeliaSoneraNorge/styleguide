import React from 'react';
import cn from 'classnames';
import { Icon, IconDefinition } from '../../atoms/Icon';

type Status = 'positive' | 'negative' | 'warning' | 'neutral' | 'communication';
type Type = 'round' | 'square';

export interface LozengeProps {
  /**
   * The label content.
   */
  label?: string;
  /**
   * The status style of the lozenge
   * @default "neutral"
   */
  status?: Status;
  /**
   * The status style of the lozenge
   * @default "Round"
   */
  type?: Type;
  className?: string;
  icon?: IconDefinition;
}

export const Lozenge = (props: LozengeProps) => {
  const { label, status = 'neutral', type = 'round', className } = props;

  return (
    <div className={cn('telia-lozenge', `telia-lozenge__${status}`, `telia-lozenge__${type}`, className)}>
      {props.icon && <Icon icon={props.icon} />} {label}
    </div>
  );
};
