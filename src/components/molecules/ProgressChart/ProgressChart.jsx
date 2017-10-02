import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import Spinner from '../../atoms/Spinner/Spinner';
import { getThresholdFromValue } from '../DonutChart/DonutChart';

/**
 * Status: *in progress*.
 *
 * Future work: Finetune the default thresholds.
 *
 */
const ProgressChart = ({
    value,
    percent,
    loading,
    thresholds,
    valueCaption,
    loadingCaption
}) => (
    <div className="progress-chart">
        <ProgressBar
            barColor={loading ? 'green' : getThresholdFromValue(thresholds, percent).type}
            max={1}
            min={0}
            disabled={loading}
            value={loading ? 1 : percent} />
        <div className="progress-chart__side">
            <div className={classNames(
                'progress-chart__side-inner',
                {
                    'progress-chart__side-inner--hidden-top': loading,
                    'progress-chart__side-inner--hidden-bottom': !loading,
                })}>
                <div className={classNames('progress-chart__caption', { 'progress-chart__caption--hidden': loading })}>
                    <span className="progress-chart__caption-value">
                        {value}&nbsp;{valueCaption}
                    </span>
                </div>
                <div className={classNames('progress-chart__caption', { 'progress-chart__caption--hidden': !loading })}>
                    <Spinner className="progress-chart__spinner" type="sm" />
                    <span className="progress-chart__caption-loading">
                        {loadingCaption}
                    </span>
                </div>
            </div>
        </div>
    </div>
);

ProgressChart.propTypes = {
    loading: PropTypes.bool,
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
        to: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }))
};

ProgressChart.defaultProps = {
    loadingCaption: "Henter data...",
    valueCaption: "gjenstår",
    thresholds: [
        { to: 0.2, type: 'red' },
        { to: 0.6, type: 'orange' },
        { to: 1, type: 'green' }
    ]
};

export default ProgressChart;