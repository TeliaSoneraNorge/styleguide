import React from 'react';
import classNames from 'classnames';
import ChartWrapper from '../DonutChart/ChartWrapper';
import Spinner from '../../atoms/Spinner/Spinner';

type OwnProps = {
    loading?: boolean;
    size?: number;
    loadingCaption?: string;
    upperCaption?: string;
    lowerCaption?: string;
    link?: string;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof DataBoostChart.defaultProps;

/**
 * Status: *finished*.
 * Category: Graphs
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'DataBoostChart' implicitly has type 'any' because... Remove this comment to see the full error message
const DataBoostChart = ({ loading, size, loadingCaption, upperCaption, lowerCaption, link }: Props) => (
  <ChartWrapper className="data-boost-chart" size={size} link={link}>
    {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'viewBox' does not exist on type 'Detaile... Remove this comment to see the full error message */}
    <div className="data-boost-chart__slice" viewBox="-1 -1 2 2" style={{ width: size, height: size }}></div>
    <div className={classNames('donut-chart__hole', { 'donut-chart__hole--hidden-top': !loading })}>
      <Spinner className="donut-chart__spinner" />
      <p className="donut-chart__loading-caption">{loadingCaption}</p>
    </div>
    <div className={classNames('donut-chart__hole', { 'donut-chart__hole--hidden-bottom': loading })}>
      <p className="data-boost-chart__upper-caption">{upperCaption}</p>
      <p className="data-boost-chart__lower-caption">{lowerCaption}</p>
    </div>
  </ChartWrapper>
);

DataBoostChart.defaultProps = {
  size: 266,
  loadingCaption: 'Henter data...',
  lowerCaption: 'Fri bruk',
  upperCaption: 'DATA BOOST',
};

export default DataBoostChart;
