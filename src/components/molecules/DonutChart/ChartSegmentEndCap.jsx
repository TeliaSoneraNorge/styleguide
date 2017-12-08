import React from 'react';

const ChartSegmentEndCap = ({
    strokeWidthInPercents,
    color
}) => (
    <path
        d={`M${1 - strokeWidthInPercents * 0.7},0.01
        a${strokeWidthInPercents},${strokeWidthInPercents} 0 1,0 -${strokeWidthInPercents * 2},0`}
        className={`donut-chart__end-cap donut-chart__end-cap--${color}`}
        stroke={0}
    />
);

export default ChartSegmentEndCap;