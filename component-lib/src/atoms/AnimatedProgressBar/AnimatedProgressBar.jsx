import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*.
 *
 * An animated progress bar with changeable bar and background color.
 * Basically copied from https://codepen.io/holdencreative/pen/vEVbwv with some modifications
 */
const AnimatedProgressBar = ({ backgroundColor, color }) => (
    <div className={classnames('animated-progress-bar', {
        [`animated-progress-bar-color--${backgroundColor}`]: backgroundColor
    })}>
        <div className={classnames('indeterminate', {
            [`animated-progress-bar-color--${color}`]: color
        })} />
    </div>
);

AnimatedProgressBar.defaultProps = {
    backgroundColor: 'grey',
    color: 'purple'
};

AnimatedProgressBar.propTypes = {
    backgroundColor: PropTypes.oneOf(['grey, white, black', 'purple']),
    color: PropTypes.oneOf(['white', 'purple', 'grey'])
};

export default AnimatedProgressBar;