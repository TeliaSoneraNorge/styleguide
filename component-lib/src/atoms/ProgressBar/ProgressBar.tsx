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
  let height = '';
  let color = '';
  let barColor = 'green';

  if ('color' in props) {
    color = colors[props.color || 'green'];
  }
  if ('barColor' in props) {
    barColor = barColor;
  }
  if ('height' in props) {
    height = progressBarSize[props.height || 'md'];
  }

  return (
    <div className="progress" style={{ height: height }}>
      <div
        className={classNames('progress__bar', `progress__bar--${barColor}`, {
          'progress__bar--disabled': disabled,
        })}
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

const progressBarSize = {
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
  color: colors,
  height: progressBarSize,
};

export default ProgressBar;
