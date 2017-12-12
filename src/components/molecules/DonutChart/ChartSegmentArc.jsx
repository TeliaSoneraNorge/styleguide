import React from 'react';
import classNames from 'classnames';

const getCircumference = (radius) => 2 * Math.PI * radius;

const getDashOffsetFromPercentage = (percentage, radius, strokeWidthInPercents) =>
    getCircumference(radius) * (1 - percentage) + (percentage === 1 ? 0 : strokeWidthInPercents * radius);

const ChartSegmentArc = ({
    color,
    percent,
    radius,
    strokeWidthInPercents,
    index
}) => (
    <circle
        className={classNames(
            'donut-chart__arc',
            `donut-chart__arc--${color}`)}
        cx="0"
        cy="0"
        r={radius}
        style={{
            strokeDashoffset: getDashOffsetFromPercentage(percent, radius, strokeWidthInPercents),
            strokeWidth: `${strokeWidthInPercents * (100 + index * 2)}%`
        }}
    />
);

export default ChartSegmentArc;