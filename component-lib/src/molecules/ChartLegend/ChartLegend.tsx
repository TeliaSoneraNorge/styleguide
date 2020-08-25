import React from 'react';
import classNames from 'classnames';

const getLegendClassName = (series: any, index: any) =>
  classNames('chart-legend', {
    'chart-legend--right-border': index === 0 && series.length > 2,
    'chart-legend--left-border': index === series.length - 1 && series.length > 1,
  });

type OwnProps = {
    series?: {
        title: string;
        color: string;
        value: any;
        total: any;
    }[];
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof ChartLegend.defaultProps;
/**
 * Status: *finished*.
 * Category: Graphs
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'ChartLegend' implicitly has type 'any' because it... Remove this comment to see the full error message
const ChartLegend = ({ series }: Props) => (
  <div className="chart-legend__container">
    {series.map((serie: any, i: any) => (
      <div key={serie.title} className={getLegendClassName(series, i)} style={{ width: `${100 / series.length}%` }}>
        <svg width="120" height="20" viewBox="0 0 120 1" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="45%"
            y1="0"
            x2="55%"
            y2="0"
            className={classNames('chart-legend__line', `chart-legend__line--${serie.color}`)}
          />
        </svg>

        <h4 className="chart-legend__title">{serie.title}</h4>
        <div className="chart-legend__number">{serie.value}</div>
        <div className="chart-legend__number--sub">av {serie.total}</div>
      </div>
    ))}
  </div>
);

ChartLegend.defaultProps = {
  series: [],
};

export default ChartLegend;
