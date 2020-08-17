import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Component library|Atoms/Progress Bar',
  component: ProgressBar,
};

export const Default = () => (
  <>
    <p>Default progress bar</p>
    <ProgressBar min={20} max={40} value={35} />

    <p>Progress bar with color property</p>
    <ProgressBar min={0} max={40} value={15} color="corePurple400" />
  </>
);
