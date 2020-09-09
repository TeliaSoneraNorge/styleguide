import * as React from 'react';

declare type AnimatedProgressBarBackgroundColor = 'light-grey' | 'grey' | 'white' | 'black' | 'purple';

declare type AnimatedProgressBarColor = 'light-grey' | 'white' | 'purple' | 'grey' | 'black';

declare interface AnimatedProgressBarProps {
  backgroundColor?: AnimatedProgressBarBackgroundColor;
  color?: AnimatedProgressBarColor;
}

declare const AnimatedProgressBar: React.FC<AnimatedProgressBarProps>;

export default AnimatedProgressBar;
