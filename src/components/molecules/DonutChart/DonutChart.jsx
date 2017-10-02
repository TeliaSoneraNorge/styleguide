import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from '../../atoms/Spinner/Spinner';

const radius = 0.9;
const circumference = 2 * Math.PI * radius;

export const getThresholdFromValue = (thresholds, value) =>
    thresholds
        .sort((a, b) => b.to - a.to)
        .reduce((prev, curr) => curr.to >= value ? curr : prev, null);

const getDashOffsetFromPercentage = (percentage) =>
    circumference * (1 - percentage);

const getDashOffsetIfLoading = (loading, percentage) =>
    loading
        ? 0
        : getDashOffsetFromPercentage(percentage);

/**
 * Status: *in progress*.
 *
 * Future work: Finetune the default thresholds.
 *
 */
const DonutChart = ({
    loading,
    size,
    loadingCaption,
    percent,
    value,
    valueCaption,
    thresholds
}) => (
    <div className="donut-chart" style={{ width: size, height: size }}>
        <svg
            className="donut-chart__slice"
            viewBox="-1 -1 2 2"
            width={size}
            height={size}>
            <circle
                className="donut-chart__background"
                cx="0"
                cy="0"
                r={radius}
            />
            {!!percent && <circle
                className={classNames(
                    'donut-chart__arc',
                    `donut-chart__arc--${getThresholdFromValue(thresholds, percent).type}`,
                    { 'donut-chart__arc--disabled': loading })}
                cx="0"
                cy="0"
                r={radius}
                strokeDashoffset={getDashOffsetIfLoading(loading, percent)}
            />}
        </svg>
        <div className={classNames('donut-chart__hole', { 'donut-chart__hole--hidden-top': !loading })}>
            <Spinner className="donut-chart__spinner" />
            <p className="donut-chart__loading-caption">{loadingCaption}</p>
        </div>
        <div className={classNames('donut-chart__hole', { 'donut-chart__hole--hidden-bottom': loading })}>
            <p className="donut-chart__value">{value}</p>
            <p className="donut-chart__value-caption">{valueCaption}</p>
        </div>
    </div>
);

DonutChart.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    loadingCaption: PropTypes.string,
    value: PropTypes.string,
    percent: (props, propName) => {
        if (props[propName] === undefined || props[propName] === null) {
            return null;
        }

        if (typeof props[propName] !== 'number') {
            return new Error(`${propName} has to be a number`);
        }

        if (props[propName] < 0 || props[propName] > 1) {
            return new Error(`${propName} has to be within interval 0..1`);
        }
    },
    valueCaption: PropTypes.string,
    thresholds: PropTypes.arrayOf(PropTypes.shape({
        to: React.PropTypes.number.isRequired,
        type: React.PropTypes.string.isRequired
    }))
};

DonutChart.defaultProps = {
    size: 266,
    loadingCaption: "Henter data...",
    valueCaption: "gjenstår",
    thresholds: [
        { to: 0.2, type: 'red' },
        { to: 0.6, type: 'orange' },
        { to: 1, type: 'green' }
    ]
};

export default DonutChart;