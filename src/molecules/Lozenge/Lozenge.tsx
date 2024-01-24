import cn from 'classnames';
import React from 'react';
import { Icon, IconDefinition } from '../../atoms/Icon';

type Status = 'positive' | 'negative' | 'warning' | 'neutral' | 'communication' | 'info' | 'attention';
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
  dataTrackingId?: string;
}

export const Lozenge = (props: LozengeProps) => {
  const { label, status = 'neutral', type = 'round', className, dataTrackingId } = props;

  return (
    <div
      className={cn('telia-lozenge', `telia-lozenge__${status}`, `telia-lozenge__${type}`, className)}
      data-tracking-id={dataTrackingId}
    >
      {props.icon && <Icon icon={props.icon} />} {label}
    </div>
  );
};
