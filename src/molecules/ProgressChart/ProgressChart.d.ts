import * as React from 'react';

declare interface ProgressChartThresholds {
  to: number;
  type: string;
}

declare interface ProgressChartProps {
  loading?: boolean;
  loadingCaption?: string;
  value?: string;
  percent?: any;
  valueCaption?: string;
  thresholds?: ProgressChartThresholds[];
}

declare const ProgressChart: React.FC<ProgressChartProps>;

export default ProgressChart;
