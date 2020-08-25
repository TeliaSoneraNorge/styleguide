import React from 'react';
import classNames from 'classnames';

const getCircumference = (radius: any) => 2 * Math.PI * radius;

const getDashOffsetFromPercentage = (percentage: any, radius: any, strokeWidthInPercents: any, capsOnChart: any, capOnSegment: any) =>
  getCircumference(radius) * (1 - percentage) +
  (capsOnChart ? strokeWidthInPercents * radius : 0) +
  (capsOnChart && capOnSegment ? strokeWidthInPercents * radius : 0);

const ChartSegmentArc = ({
  color,
  percent,
  radius,
  strokeWidthInPercents,
  capsOnChart,
  capOnSegment
}: any) => (
  <circle
    className={classNames('donut-chart__arc', `donut-chart__arc--${color}`)}
    cx="0"
    cy="0"
    r={radius}
    style={{
      strokeDasharray: getCircumference(radius),
      strokeDashoffset: getDashOffsetFromPercentage(percent, radius, strokeWidthInPercents, capsOnChart, capOnSegment),
      strokeWidth: `${strokeWidthInPercents * 100}%`,
    }}
  />
);

export default ChartSegmentArc;
