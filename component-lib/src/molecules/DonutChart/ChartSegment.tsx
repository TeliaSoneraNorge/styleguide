import React from 'react';
import ChartSegmentStartCap from './ChartSegmentStartCap';
import ChartSegmentEndCap from './ChartSegmentEndCap';
import ChartSegmentArc from './ChartSegmentArc';
import ChartSegmentSeparator from './ChartSegmentSeparator';

const getBaseRotation = (showLineCaps: any, strokeWidthInPercents: any) => (showLineCaps ? strokeWidthInPercents : 0);

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
}: any) => (
  <g
    className="donut-chart__segment"
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 3.
    style={{ transform: `rotate(${getBaseRotation(showLineCaps, strokeWidthInPercents, radius)}rad)` }}
  >
    {showLineCaps && startCap && (
      <ChartSegmentStartCap
        color={color}
        percent={percent}
        radius={radius}
        strokeWidthInPercents={strokeWidthInPercents}
      />
    )}
    {showLineCaps && endCap && (
      <ChartSegmentEndCap strokeWidthInPercents={strokeWidthInPercents} radius={radius} color={color} />
    )}
    <ChartSegmentArc
      index={index}
      color={color}
      percent={percent}
      radius={radius}
      strokeWidthInPercents={strokeWidthInPercents}
      capsOnChart={showLineCaps}
      capOnSegment={startCap}
    />
    {!startCap && showSegmentSeparators && (
      <ChartSegmentSeparator
        percent={percent}
        radius={radius}
        capsOnChart={showLineCaps}
        strokeWidthInPercents={strokeWidthInPercents}
      />
    )}
  </g>
);

export default ChartSegment;
