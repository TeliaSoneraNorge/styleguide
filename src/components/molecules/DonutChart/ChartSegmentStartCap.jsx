import React from 'react';

const ChartSegmentStartCap = ({
    percent,
    strokeWidthInPercents,
    color
}) => (
    <circle
        style={{
            transform: `rotate(${Math.PI * 2 * percent - strokeWidthInPercents}rad)`
        }}
        className={`donut-chart__cap donut-chart__cap--${color}`}
        stroke={0}
        cx={1 - strokeWidthInPercents * 1.7}
        cy="0"
        r={strokeWidthInPercents}
    />
);

export default ChartSegmentStartCap;