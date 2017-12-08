import React from 'react';
import ChartSegmentStartCap from './ChartSegmentStartCap';
import ChartSegmentEndCap from './ChartSegmentEndCap';
import ChartSegmentArc from './ChartSegmentArc';
import ChartSegmentSeparator from './ChartSegmentSeparator';

const strokeWidthInPercents = 0.06;

const getBaseRotation = (showLineCaps, radius) =>
    showLineCaps
        ? strokeWidthInPercents * radius
        : 0;

const ChartSegment = ({
    index,
    percent,
    color,
    radius,
    startCap,
    endCap,
    showSegmentSeparators,
    showLineCaps
}) => (
    <g
        className="donut-chart__segment"
        style={{ transform: `rotate(${getBaseRotation(startCap, showLineCaps, radius)}rad)` }}
    >
        {showLineCaps && startCap && <ChartSegmentStartCap
            color={color}
            percent={percent}
            strokeWidthInPercents={strokeWidthInPercents}
        />}
        {showLineCaps && endCap && <ChartSegmentEndCap
            strokeWidthInPercents={strokeWidthInPercents}
            color={color}
        />}
        <ChartSegmentArc
            index={index}
            color={color}
            percent={percent}
            radius={radius}
            strokeWidthInPercents={strokeWidthInPercents}
        />
        {!startCap && showSegmentSeparators && <ChartSegmentSeparator
            percent={percent}
            radius={radius}
            strokeWidthInPercents={strokeWidthInPercents}
        />}
    </g>
);

export default ChartSegment;