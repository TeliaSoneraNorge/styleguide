import React from 'react';
import classNames from 'classnames';
import Spinner from '../../atoms/Spinner/Spinner';
import ChartWrapper from './ChartWrapper';
import ChartSegment from './ChartSegment';

const minimumPercentageValueToBeDisplayed = 0.01;

const constrainMinimumValue = (value: any, minimum: any) => (value < minimum ? minimum : value);

const aggregatePreviousPercentages = (segments: any, index: any) =>
  segments
    .slice(0, index + 1)
    .reduce((prev: any, curr: any) => prev + constrainMinimumValue(curr.percent, minimumPercentageValueToBeDisplayed), 0);

const alignSegments = (segments: any) => segments
  .map((segment: any, index: any) => ({
    percent: aggregatePreviousPercentages(segments, index),
    color: segment.color,
  }))
  .sort((seg1: any, seg2: any) => seg2.percent - seg1.percent);

type OwnProps = {
    loading?: boolean;
    size?: number;
    loadingCaption?: string;
    value?: string;
    segments?: {
        percent?: any; // TODO: (props, propName) => { if (props[propName] === undefined || props[propName] === null) { return null; }  if (typeof props[propName] !== 'number') { return new Error(`${propName} has to be a number`); }  if (props[propName] < 0 || props[propName] > 1) { return new Error(`${propName} has to be within interval 0..1`); } }
        color: string;
    }[];
    valueCaption?: string;
    upperCaption?: string;
    thresholds?: {
        to: number;
        type: string;
    }[];
    radius?: number;
    showLineCaps?: boolean;
    showSegmentSeparators?: boolean;
    strokeWidthInPercents?: number;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof DonutChart.defaultProps;
/**
 * Status: *finished*.
 * Category: Graphs
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'DonutChart' implicitly has type 'any' because it ... Remove this comment to see the full error message
const DonutChart = ({ loading, size, loadingCaption, value, valueCaption, upperCaption, segments, showSegmentSeparators, showLineCaps, radius, strokeWidthInPercents, totalFormatted, link, }: Props) => (
  <ChartWrapper className="donut-chart" size={size} link={link}>
    <svg className="donut-chart__slice" viewBox="-1 -1 2 2" width={size} height={size}>
      <circle
        className="donut-chart__background"
        cx="0"
        cy="0"
        strokeWidth={`${strokeWidthInPercents * 100}%`}
        r={radius}
      />
      {!loading &&
        alignSegments(segments).map((segment: any, index: any) => (
          <ChartSegment
            key={segment.percent}
            index={index}
            color={segment.color}
            percent={segment.percent}
            radius={radius}
            startCap={index === 0}
            endCap={index === segments.length - 1}
            strokeWidthInPercents={strokeWidthInPercents + (index * 2) / 10000}
            showSegmentSeparators={showSegmentSeparators}
            showLineCaps={showLineCaps}
          />
        ))}
    </svg>
    <div className={classNames('donut-chart__hole', { 'donut-chart__hole--hidden-top': !loading })}>
      <Spinner className="donut-chart__spinner" />
      <p className="donut-chart__loading-caption">{loadingCaption}</p>
    </div>
    <div className={classNames('donut-chart__hole', { 'donut-chart__hole--hidden-bottom': loading })}>
      <p className="donut-chart__value-caption">{upperCaption}</p>
      <p className="donut-chart__value">{value}</p>
      <p className="donut-chart__value-caption">{valueCaption}</p>
      <p className="donut-chart__value-caption">{totalFormatted}</p>
    </div>
  </ChartWrapper>
);

DonutChart.defaultProps = {
  size: 266,
  radius: 0.9,
  strokeWidthInPercents: 0.06,
  loadingCaption: 'Henter data...',
  valueCaption: 'igjen av totalt',
  upperCaption: 'Datamengde',
  segments: [],
};

export default DonutChart;
