import React from 'react';

const ChartSegmentStartCap = ({
  percent,
  strokeWidthInPercents,
  color,
  radius
}: any) => (
  <g
    className={`donut-chart__cap donut-chart__cap--${color}`}
    style={{
      transform: `rotate(${Math.PI * 2 * percent - strokeWidthInPercents * 2}rad)`,
    }}
  >
    <path
      d={`M${radius - strokeWidthInPercents},-0.001
            a${strokeWidthInPercents},${strokeWidthInPercents} 0.0 1,0 ${strokeWidthInPercents * 2},0`}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'string | ... Remove this comment to see the full error message
      stroke={0}
    />
  </g>
);

export default ChartSegmentStartCap;
