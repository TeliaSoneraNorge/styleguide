import React from 'react';
import cn from 'classnames';

type Status = 'positive' | 'negative' | 'warning' | 'neutral';
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
}

export const Lozenge = (props: LozengeProps) => {
  const { label, status, type, className } = props;

  return (
    <div className={cn('telia-lozenge', `telia-lozenge__${status}`, `telia-lozenge__${type}`, className)}>{label}</div>
  );
};
