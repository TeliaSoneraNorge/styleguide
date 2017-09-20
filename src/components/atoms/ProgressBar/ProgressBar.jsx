import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const clamp = (min, max, value) => {
    if (value < min) return min;
    if (value > max) return max;

    return value;
};

const ProgressBar = ({
    value,
    min,
    max,
    barColor,
    disabled,
}) => (
   <div className="progress">
       <div
            className={classNames(
                'progress__bar',
                `progress__bar--${barColor}`,
                { 'progress__bar--disabled': disabled })}
            role="progressbar"
            aria-valuenow={clamp(min, max, value)}
            aria-valuemin={min}
            aria-valuemax={max}
            style={{ width: `${(clamp(min, max, value) - min) / (max - min) * 100}%` }}
        />
    </div>
);

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    barColor: PropTypes.string,
    disabled: PropTypes.bool
};

ProgressBar.defaultProps = {
    barColor: 'green'
};

export default ProgressBar;