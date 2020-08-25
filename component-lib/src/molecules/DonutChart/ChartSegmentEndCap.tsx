import React from 'react';

const ChartSegmentEndCap = ({
  strokeWidthInPercents,
  color,
  radius
}: any) => (
  <path
    d={`M${radius + strokeWidthInPercents},0.001
        a${strokeWidthInPercents},${strokeWidthInPercents} 0.0 1,0 -${strokeWidthInPercents * 2},0`}
    className={`donut-chart__end-cap donut-chart__end-cap--${color}`}
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'string | ... Remove this comment to see the full error message
    stroke={0}
  />
);

export default ChartSegmentEndCap;
