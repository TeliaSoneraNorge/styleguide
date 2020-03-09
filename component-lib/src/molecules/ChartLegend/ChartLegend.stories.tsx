import React from 'react';
import { ChartLegend } from '../../index';

export default {
  title: 'Component library|Molecules/ChartLegend',
  component: ChartLegend,
};

export const Default = () => {
  const series = [
    { title: 'Rollover', color: 'purple', value: 20, total: 100 },
    { title: 'Inkludert data', color: 'orange', value: 20, total: 100 },
    { title: 'Extra datapack', color: 'green', value: 40, total: 100 },
  ];
  
  return (
    <ChartLegend series={series} />
  )
};
