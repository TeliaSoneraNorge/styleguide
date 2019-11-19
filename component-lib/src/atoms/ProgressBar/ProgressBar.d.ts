import * as React from 'react';

export interface ProgressBarProps {
    value: number;
    min: number;
    max: number;
    barColor?: string;
    disabled?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps>;

export default ProgressBar;
