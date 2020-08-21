import React from 'react';

const getSeparatorPosition = (radius, percent, strokeWidthInPercents) => ({
  x1: radius - strokeWidthInPercents * 1.1,
  y1: 0,
  x2: radius + strokeWidthInPercents * 1.1,
  y2: 0,
});

const getRotation = (capsOnChart, percent, strokeWidthInPercents) =>
  Math.PI * 2 * percent - (capsOnChart ? strokeWidthInPercents : 0);

const ChartSegmentSeparator = ({ capsOnChart, percent, strokeWidthInPercents, radius }) => (
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
