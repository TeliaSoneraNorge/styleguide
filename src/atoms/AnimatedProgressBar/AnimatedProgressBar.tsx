import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

type AnimatedProgressBarBackgroundColor = 'light-grey' | 'grey' | 'white' | 'black' | 'purple';

type AnimatedProgressBarColor = 'light-grey' | 'white' | 'purple' | 'grey' | 'black';

export interface AnimatedProgressBarProps {
  backgroundColor?: AnimatedProgressBarBackgroundColor;
  color?: AnimatedProgressBarColor;
  noMarginTop?: boolean;
}

/**
 * Status: *finished*.
 * Category: Loader
 *
 * An animated progress bar with changeable bar and background color.
 * Basically copied from https://codepen.io/holdencreative/pen/vEVbwv with some modifications
 */
const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({
  backgroundColor = 'grey',
  color = 'purple',
  noMarginTop,
}) => (
  <div
    className={classnames('animated-progress-bar', {
      [`animated-progress-bar-color--${backgroundColor}`]: backgroundColor,
      'animated-progress-bar--no-margin-top': noMarginTop,
    })}
  >
    <div
      className={classnames('indeterminate', {
        [`animated-progress-bar-color--${color}`]: color,
      })}
    />
  </div>
);

export default AnimatedProgressBar;
