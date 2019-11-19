import * as React from 'react';

export interface DataBoostChartProps {
    loading?: boolean;
    size?: number;
    loadingCaption?: string;
    upperCaption?: string;
    lowerCaption?: string;
    link?: string;
}

const DataBoostChart: React.FC<DataBoostChartProps>;

export default DataBoostChart;
