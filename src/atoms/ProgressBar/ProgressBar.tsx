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
  /**
   * The direction of the progress bar.
   * @default right
   */
  direction?: 'left' | 'right';
  /**
   * Set this to true if you don't want to see the total shadow
   * @default false
   */
  transparent?: boolean;

  className?: string;
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
  | { color?: keyof typeof colors }
);

/**
 * Category: Graphs
 */
export const ProgressBar = (props: ProgressBarProps) => {
  const { value, min, max, disabled, direction = 'right', transparent = false } = props;
  let color = '';

  if ('color' in props) {
    color = colors[props.color || 'green'];
  }

  const width = ((clamp(min, max, value) - min) / (max - min)) * 100;
  const marginLeft = direction == 'left' ? `${100 - width}%` : '0';

  return (
    <div
      className={classNames(
        'telia-progress-bar',
        'height' in props ? `telia-progress-bar--${props.height}` : '',
        props.className,
        {
          'telia-progress-bar--transparent': transparent,
        }
      )}
    >
      <div
        className={classNames(
          'telia-progress-bar__bar',
          'barColor' in props ? `telia-progress-bar__bar--${props.barColor}` : 'telia-progress-bar__bar--green',
          {
            'telia-progress-bar__bar--disabled': disabled,
          }
        )}
        role="progressbar"
        aria-valuenow={clamp(min, max, value)}
        aria-valuemin={min}
        aria-valuemax={max}
        style={{ width: `${width}%`, backgroundColor: color, marginLeft: marginLeft }}
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
