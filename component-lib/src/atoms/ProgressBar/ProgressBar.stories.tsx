import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Component library|Atoms/Progress Bar',
  component: ProgressBar,
};

export const Default = () => <ProgressBar min={20} max={40} value={35} />;