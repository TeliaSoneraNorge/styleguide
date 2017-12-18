import React from 'react';
import ChartSegmentStartCap from './ChartSegmentStartCap';
import ChartSegmentEndCap from './ChartSegmentEndCap';
import ChartSegmentArc from './ChartSegmentArc';
import ChartSegmentSeparator from './ChartSegmentSeparator';

const getBaseRotation = (showLineCaps, strokeWidthInPercents, radius) =>
    showLineCaps
        ? strokeWidthInPercents
        : 0;

const ChartSegment = ({
    index,
    percent,
    color,
    radius,
    startCap,
    endCap,
    showSegmentSeparators,
    showLineCaps,
    strokeWidthInPercents
}) => (
    <g
        className="donut-chart__segment"
        style={{ transform: `rotate(${getBaseRotation(showLineCaps, strokeWidthInPercents, radius)}rad)` }}>
        {showLineCaps && startCap && <ChartSegmentStartCap
            color={color}
            percent={percent}
            radius={radius}
            strokeWidthInPercents={strokeWidthInPercents} />}
        {showLineCaps && endCap && <ChartSegmentEndCap
            strokeWidthInPercents={strokeWidthInPercents}
            radius={radius}
            color={color} />}
        <ChartSegmentArc
            index={index}
            color={color}
            percent={percent}
            radius={radius}
            strokeWidthInPercents={strokeWidthInPercents}
            capsOnChart={showLineCaps}
            capOnSegment={startCap} />
        {!startCap && showSegmentSeparators && <ChartSegmentSeparator
            percent={percent}
            radius={radius}
            strokeWidthInPercents={strokeWidthInPercents} />}
    </g>
);

export default ChartSegment;