import React from 'react';
import classNames from 'classnames';

const getCircumference = (radius) => 2 * Math.PI * radius;

const getDashOffsetFromPercentage = (percentage, radius, strokeWidthInPercents, capsOnChart, capOnSegment) =>
    getCircumference(radius) * (1 - percentage)
        + (capsOnChart ? strokeWidthInPercents * radius : 0)
        + (capsOnChart && capOnSegment ? strokeWidthInPercents * radius : 0);

const ChartSegmentArc = ({
    color,
    percent,
    radius,
    strokeWidthInPercents,
    capsOnChart,
    capOnSegment
}) => (
    <circle
        className={classNames(
            'donut-chart__arc',
            `donut-chart__arc--${color}`)}
        cx="0"
        cy="0"
        r={radius}
        style={{
            strokeDasharray: getCircumference(radius),
            strokeDashoffset: getDashOffsetFromPercentage(
                percent,
                radius,
                strokeWidthInPercents,
                capsOnChart,
                capOnSegment),
            strokeWidth: `${strokeWidthInPercents * 100}%`
        }} />
);

export default ChartSegmentArc;