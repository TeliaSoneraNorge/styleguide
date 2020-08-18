import React from 'react';
import ProgressBar, { progressBarSize } from './ProgressBar';

export default {
  title: 'Component library|Atoms/Progress Bar',
  component: ProgressBar,
};

export const Default = () => (
  <>
    <p>Default progress bar:</p>
    <ProgressBar min={20} max={40} value={35} />

    <p>Progress bar with color property:</p>
    <ProgressBar min={0} max={40} value={15} color="corePurple400" />

    <p>Progress bar with height property:</p>
    {Object.keys(progressBarSize).map(size => (
      <p>
        {size as keyof typeof progressBarSize}
        <ProgressBar min={0} max={40} value={25} height={size as keyof typeof progressBarSize} />
      </p>
    ))}

    <p>Disabled progress bar:</p>
    <ProgressBar min={0} max={40} value={25} disabled={true} />
  </>
);
