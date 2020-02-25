import * as React from 'react';

export interface DonutChartSegments {
  percent?: any;
  color: string;
}

export interface DonutChartThresholds {
  to: number;
  type: string;
}

export interface DonutChartProps {
  loading?: boolean;
  size?: number;
  loadingCaption?: string;
  value?: string;
  segments?: DonutChartSegments[];
  valueCaption?: string;
  upperCaption?: string;
  thresholds?: DonutChartThresholds[];
  radius?: number;
  showLineCaps?: boolean;
  showSegmentSeparators?: boolean;
  strokeWidthInPercents?: number;
}

const DonutChart: React.FC<DonutChartProps>;

export default DonutChart;
