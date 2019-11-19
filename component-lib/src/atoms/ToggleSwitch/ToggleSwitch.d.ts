import * as React from 'react';

export type ToggleSwitchBackgroundColor = "white" | "grey";

export interface ToggleSwitchProps {
    active?: 'left' | 'right';
    backgroundColor?: ToggleSwitchBackgroundColor;
    className?: string;
    leftLabel?: string;
    rightLabel?: string;
    leftOnClickHandler?: (...args: any[])=>any;
    rightOnClickHandler?: (...args: any[])=>any;
}

const ToggleSwitch: React.FC<ToggleSwitchProps>;

export default ToggleSwitch;
