import React from 'react';

const ChartSegmentEndCap = ({ strokeWidthInPercents, color, radius }) => (
    <path
        d={`M${radius + strokeWidthInPercents},0.001
        a${strokeWidthInPercents},${strokeWidthInPercents} 0.0 1,0 -${strokeWidthInPercents * 2},0`}
        className={`donut-chart__end-cap donut-chart__end-cap--${color}`}
        stroke={0} />
);

export default ChartSegmentEndCap;