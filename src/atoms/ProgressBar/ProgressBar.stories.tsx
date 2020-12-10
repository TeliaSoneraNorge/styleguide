import React from 'react';
import ProgressBar, { progressBarSize } from './ProgressBar';

export default {
  title: 'Component library/Atoms/Progress Bar',
  component: ProgressBar,
};

export const Default = () => (
  <>
    <p>Default progress bar:</p>
    <ProgressBar min={20} max={40} value={35} />
    <p>Progress bar with color property:</p>
    <ProgressBar min={0} max={40} value={15} color="corePurple400" />
    <p>Progress bar with height property:</p>
    {Object.keys(progressBarSize).map((size) => (
      <p key={size}>
        {size as keyof typeof progressBarSize}
        <ProgressBar min={0} max={40} value={25} height={size as keyof typeof progressBarSize} />
      </p>
    ))}
    <p>
      Progress bar with <code>direction="left"</code>:
    </p>
    <ProgressBar min={20} max={40} value={35} direction="left" />
    <p>
      Progress bars with <code>transparent</code>:
    </p>
    <p>
      <ProgressBar min={0} max={40} value={30} height="sm" transparent />
    </p>
    <p>
      <ProgressBar min={0} max={40} value={15} height="sm" transparent />
    </p>
    <p>
      Progress bar with <code>direction="left"</code> and <code>transparent</code>:
    </p>
    <p>
      <ProgressBar min={0} max={40} value={30} height="md" direction="left" transparent />
    </p>

    <p>Disabled progress bar:</p>
    <ProgressBar min={0} max={40} value={25} disabled={true} />
  </>
);
