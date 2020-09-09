import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { colors } from '../../utils/colors';

export type ProgressBarProps = {
  /**
   * Value of the progress.
   */
  value: number;
  /**
   * Minimum value of the progress.
   */
  min: number;
  /**
   * Maximum value of the progress bar.
   */
  max: number;
  /**
   * @default false
   */
  disabled?: boolean;
  /**
   * The thickness of the progress bar.
   */
  height?: keyof typeof progressBarSize;
} & (
  | {
      /**
       * @deprecated Use `color` prop to use the new supported colors.
       */
      barColor?: string;
      /**
       * @default green
       */
      color?: undefined;
    }
  | { color?: keyof typeof colors });

/**
 * Category: Graphs
 */
export const ProgressBar = (props: ProgressBarProps) => {
  const { value, min, max, disabled } = props;
  let color = '';

  if ('color' in props) {
    color = colors[props.color || 'green'];
  }

  return (
    <div className={classNames('progress', 'height' in props ? `progress--${props.height}` : '')}>
      <div
        className={classNames(
          'progress__bar',
          'barColor' in props ? `progress__bar--${props.barColor}` : 'progress__bar--green',
          {
            'progress__bar--disabled': disabled,
          }
        )}
        role="progressbar"
        aria-valuenow={clamp(min, max, value)}
        aria-valuemin={min}
        aria-valuemax={max}
        style={{ width: `${((clamp(min, max, value) - min) / (max - min)) * 100}%`, backgroundColor: color }}
      />
    </div>
  );
};

const clamp = (min: number, max: number, value: number) => {
  if (value < min) return min;
  if (value > max) return max;

  return value;
};

export const progressBarSize = {
  xs: '0.5rem',
  sm: '0.8rem',
  md: '1rem',
  lg: '1.2rem',
  xl: '1.6rem',
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(colors)),
  height: PropTypes.oneOf(Object.keys(progressBarSize)),
};

export default ProgressBar;
