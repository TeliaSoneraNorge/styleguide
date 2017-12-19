import React from 'react';

const getSeparatorPosition = (radius, percent, strokeWidthInPercents) => ({
    x1: radius - strokeWidthInPercents * 1.1,
    y1: 0,
    x2: radius + strokeWidthInPercents * 1.1,
    y2: 0
});

const ChartSegmentSeparator = ({ percent, strokeWidthInPercents, radius }) => (
    <line
        className={`donut-chart__cap`}
        style={{
            transform: `rotate(${Math.PI * 2 * percent - strokeWidthInPercents}rad)`
        }}
        {...getSeparatorPosition(radius, percent, strokeWidthInPercents)}
        strokeWidth="0.02"
        stroke="#fff" />
);

export default ChartSegmentSeparator;