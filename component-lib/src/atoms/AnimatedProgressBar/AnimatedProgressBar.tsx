import React from 'react';
import classnames from 'classnames';

type OwnProps = {
    backgroundColor?: 'light-grey' | 'grey' | 'white' | 'black' | 'purple';
    color?: 'light-grey' | 'white' | 'purple' | 'grey' | 'black';
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof AnimatedProgressBar.defaultProps;

/**
 * Status: *finished*.
 * Category: Loader
 *
 * An animated progress bar with changeable bar and background color.
 * Basically copied from https://codepen.io/holdencreative/pen/vEVbwv with some modifications
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'AnimatedProgressBar' implicitly has type 'any' be... Remove this comment to see the full error message
const AnimatedProgressBar = ({ backgroundColor, color }: Props) => (
  <div
    className={classnames('animated-progress-bar', {
      [`animated-progress-bar-color--${backgroundColor}`]: backgroundColor,
    })}
  >
    <div
      className={classnames('indeterminate', {
        [`animated-progress-bar-color--${color}`]: color,
      })}
    />
  </div>
);

AnimatedProgressBar.defaultProps = {
  backgroundColor: 'grey',
  color: 'purple',
};

export default AnimatedProgressBar;
