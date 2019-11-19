import * as React from 'react';

export type AnimatedProgressBarBackgroundColor = "light-grey" | "grey" | "white" | "black" | "purple";

export type AnimatedProgressBarColor = "light-grey" | "white" | "purple" | "grey" | "black";

export interface AnimatedProgressBarProps {
    backgroundColor?: AnimatedProgressBarBackgroundColor;
    color?: AnimatedProgressBarColor;
}

const AnimatedProgressBar: React.FC<AnimatedProgressBarProps>;

export default AnimatedProgressBar;
