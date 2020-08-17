import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { colors } from '../../utils/colors';

export type ProgressBarProps = {
  value: number;
  min: number;
  max: number;
  disabled?: boolean;
} & (
  | {
      /**
       * @deprecated Use `color` prop to use the new supported colors.
       */
      barColor?: string;
      color?: undefined;
    }
  | { color?: keyof typeof colors });

/**
 * Status: *in progress*.
 * Category: Graphs
 */
export const ProgressBar: React.FC<ProgressBarProps> = props => {
  const { value, min, max, disabled } = props;
  let color = '';
  let barColor = 'green';

  if ('color' in props) {
    color = colors[props.color || 'green'];
  }
  if ('barColor' in props) {
    barColor = barColor;
  }

  return (
    <div className="progress">
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

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
};

export default ProgressBar;
