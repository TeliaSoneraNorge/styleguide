import React from 'react';

const getSeparatorPosition = (radius: any, percent: any, strokeWidthInPercents: any) => ({
  x1: radius - strokeWidthInPercents * 1.1,
  y1: 0,
  x2: radius + strokeWidthInPercents * 1.1,
  y2: 0,
});

const getRotation = (capsOnChart: any, percent: any, strokeWidthInPercents: any) =>
  Math.PI * 2 * percent - (capsOnChart ? strokeWidthInPercents : 0);

const ChartSegmentSeparator = ({
  capsOnChart,
  percent,
  strokeWidthInPercents,
  radius
}: any) => (
  <g
    className={`donut-chart__cap`}
    style={{
      transform: `rotate(${getRotation(capsOnChart, percent, strokeWidthInPercents)}rad)`,
    }}
  >
    <line {...getSeparatorPosition(radius, percent, strokeWidthInPercents)} strokeWidth="0.02" stroke="#fff" />
  </g>
);

export default ChartSegmentSeparator;
