import React from 'react';

const getCapPosition = (radius, percent, strokeWidthInPercents) => ({
    x1: 1 - strokeWidthInPercents * 4,
    y1: 0,
    x2: 1 + strokeWidthInPercents * 4,
    y2: 0
});

const ChartSegmentSeparator = ({ percent, strokeWidthInPercents, radius }) => (
    <line
        className={`donut-chart__cap`}
        style={{
            transform: `rotate(${Math.PI * 2 * percent - strokeWidthInPercents}rad)`
        }}
        {...getCapPosition(radius, percent, strokeWidthInPercents)}
        strokeWidth="0.02"
        stroke="#fff" />
);

export default ChartSegmentSeparator;