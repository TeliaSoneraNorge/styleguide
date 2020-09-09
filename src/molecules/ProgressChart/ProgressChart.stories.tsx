import React, { useState } from 'react';
import { ProgressChart } from '../../index';

export default {
  title: 'Component library/Molecules/ProgressChart',
  component: ProgressChart,
};

export const Default = () => <ProgressChart value="21,6GB" percent={0.78} />;

export const LoadingProgressChart = () => <ProgressChart loading />;