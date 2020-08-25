import React from 'react';
import classNames from 'classnames';

import ProgressBar from '../../atoms/ProgressBar';
import Spinner from '../../atoms/Spinner';

const getThresholdFromValue = (thresholds: any, value: any) =>
  thresholds.sort((a: any, b: any) => b.to - a.to).reduce((prev: any, curr: any) => (curr.to >= value ? curr : prev), null);

type OwnProps = {
    loading?: boolean;
    loadingCaption?: string;
    value?: string;
    percent?: any; // TODO: (props, propName) => { if (props[propName] === undefined || props[propName] === null) { return null; }  if (typeof props[propName] !== 'number') { return new Error(`${propName} has to be a number`); }  if (props[propName] < 0 || props[propName] > 1) { return new Error(`${propName} has to be within interval 0..1`); } }
    valueCaption?: string;
    thresholds?: {
        to: number;
        type: string;
    }[];
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof ProgressChart.defaultProps;

/**
 * Status: *in progress*.
 * Category: Graphs
 *
 * Future work: Finetune the default thresholds.
 *
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'ProgressChart' implicitly has type 'any' because ... Remove this comment to see the full error message
const ProgressChart = ({ value, percent, loading, thresholds, valueCaption, loadingCaption }: Props) => (
  <div className="progress-chart">
    <ProgressBar
      barColor={loading ? 'green' : getThresholdFromValue(thresholds, percent).type}
      max={1}
      min={0}
      disabled={loading}
      value={loading ? 1 : percent}
    />
    <div className="progress-chart__side">
      <div
        className={classNames('progress-chart__side-inner', {
          'progress-chart__side-inner--hidden-top': loading,
          'progress-chart__side-inner--hidden-bottom': !loading,
        })}
      >
        <div className={classNames('progress-chart__caption', { 'progress-chart__caption--hidden': loading })}>
          <span className="progress-chart__caption-value">
            {value}&nbsp;{valueCaption}
          </span>
        </div>
        <div className={classNames('progress-chart__caption', { 'progress-chart__caption--hidden': !loading })}>
          <Spinner className="progress-chart__spinner" type="sm" />
          <span className="progress-chart__caption-loading">{loadingCaption}</span>
        </div>
      </div>
    </div>
  </div>
);

ProgressChart.defaultProps = {
  loadingCaption: 'Henter data...',
  valueCaption: 'gjenstår',
  thresholds: [{ to: 0.2, type: 'red' }, { to: 0.6, type: 'orange' }, { to: 1, type: 'green' }],
};

export default ProgressChart;
