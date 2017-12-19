import React from 'react';

const ChartSegmentStartCap = ({ percent, strokeWidthInPercents, color, radius }) => (
    <path
        style={{
            transform: `rotate(${Math.PI * 2 * percent - strokeWidthInPercents * 2}rad)`
        }}
        d={`M${radius - strokeWidthInPercents},-0.001
        a${strokeWidthInPercents},${strokeWidthInPercents} 0.0 1,0 ${strokeWidthInPercents * 2},0`}
        className={`donut-chart__cap donut-chart__cap--${color}`}
        stroke={0} />
);

export default ChartSegmentStartCap;