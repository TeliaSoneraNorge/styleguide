import React from 'react';
import { DataBoostChart } from '../../index';

export default {
  title: 'Component library|Molecules/DataBoostChart',
  component: DataBoostChart,
};

export const DefaultDataBoostChart = () => <DataBoostChart />;

export const AsALink = () => <DataBoostChart link="#" />;

export const LoadingDataBoostChart = () => <DataBoostChart loading />;
