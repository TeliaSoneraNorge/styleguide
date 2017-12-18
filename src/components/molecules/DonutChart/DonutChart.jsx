import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner from '../../atoms/Spinner/Spinner';
import ChartSegment from './ChartSegment';

const minimumPercentageValueToBeDisplayed = 0.01;

const constrainMinimumValue = (value, minimum) =>
    value < minimum ? minimum : value;

const aggregatePreviousPercentages = (segments, index) =>
    segments.slice(0, index + 1).reduce((prev, curr) => prev +
        constrainMinimumValue(curr.percent, minimumPercentageValueToBeDisplayed), 0);

const alignSegments = (segments) =>
    segments
        .map((segment, index) => ({
            percent: aggregatePreviousPercentages(segments, index),
            color: segment.color
        }))
        .sort((seg1, seg2) => seg2.percent - seg1.percent);

const DonutChart = ({
    loading,
    size,
    loadingCaption,
    value,
    valueCaption,
    upperCaption,
    segments,
    showSegmentSeparators,
    showLineCaps,
    radius,
    strokeWidthInPercents
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
                strokeWidth={`${strokeWidthInPercents * 100}%`}
                r={radius} />
            {!loading && alignSegments(segments).map((segment, index) =>
                <ChartSegment
                    key={index}
                    index={index}
                    color={segment.color}
                    percent={segment.percent}
                    radius={radius}
                    startCap={index === 0}
                    endCap={index === segments.length - 1}
                    strokeWidthInPercents={strokeWidthInPercents + (index * 2 / 10000)}
                    showSegmentSeparators={showSegmentSeparators}
                    showLineCaps={showLineCaps} />
            )}
        </svg>
        <div className={classNames('donut-chart__hole', { 'donut-chart__hole--hidden-top': !loading })}>
            <Spinner className="donut-chart__spinner" />
            <p className="donut-chart__loading-caption">{loadingCaption}</p>
        </div>
        <div className={classNames('donut-chart__hole', { 'donut-chart__hole--hidden-bottom': loading })}>
            <p className="donut-chart__value-caption">{upperCaption}</p>
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
    segments: PropTypes.arrayOf(PropTypes.shape({
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
        color: PropTypes.string.isRequired
    })),
    valueCaption: PropTypes.string,
    thresholds: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }))
};

DonutChart.defaultProps = {
    size: 266,
    radius : 0.9,
    strokeWidthInPercents : 0.06,
    loadingCaption: "Henter data...",
    valueCaption: "gjenstår",
    segments: []
};

export default DonutChart;