import React from 'react';
import { ChartLegend } from '@telia/styleguide';

const series = [
    { title: 'Rollover', color: 'purple', value: 20, total: 100 },
    { title: 'Inkludert data',color: 'orange', value: 20, total: 100 },
    { title: 'Extra datapack', color: 'green', value: 40, total: 100 }
];

const DefaultCampaign = () => (
    <ChartLegend series={series} />
);

export default DefaultCampaign;