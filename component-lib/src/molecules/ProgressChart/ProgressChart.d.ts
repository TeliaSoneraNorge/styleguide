import * as React from 'react';

export interface ProgressChartThresholds {
  to: number;
  type: string;
}

export interface ProgressChartProps {
  loading?: boolean;
  loadingCaption?: string;
  value?: string;
  percent?: any;
  valueCaption?: string;
  thresholds?: ProgressChartThresholds[];
}

const ProgressChart: React.FC<ProgressChartProps>;

export default ProgressChart;
