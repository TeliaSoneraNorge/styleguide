import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ChartWrapper from '../DonutChart/ChartWrapper';
import Spinner from '../../atoms/Spinner/Spinner';

/**
 * Status: *finished*.
 * Category: Graphs
 */
const DataBoostChart = ({
    loading,
    size,
    loadingCaption,
    upperCaption,
    lowerCaption,
    link
}) => (
    <ChartWrapper className="data-boost-chart" size={size} link={link}>
        <div
            className="data-boost-chart__slice"
            viewBox="-1 -1 2 2"
            style={{ width: size, height: size }}>
        </div>
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

DataBoostChart.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    loadingCaption: PropTypes.string,
    upperCaption: PropTypes.string,
    lowerCaption: PropTypes.string,
    link: PropTypes.string,
};

DataBoostChart.defaultProps = {
    size: 266,
    loadingCaption: 'Henter data...',
    lowerCaption: 'Fri bruk',
    upperCaption: 'DATA BOOST'
};

export default DataBoostChart;