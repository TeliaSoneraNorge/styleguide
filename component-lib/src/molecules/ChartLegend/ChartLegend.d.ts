import * as React from 'react';

export interface ChartLegendSeries {
  title: string;
  color: string;
  value: any;
  total: any;
}

export interface ChartLegendProps {
  series?: ChartLegendSeries[];
}

const ChartLegend: React.FC<ChartLegendProps>;

export default ChartLegend;
