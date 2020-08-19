import React from 'react';
import AnimatedProgressBar from './AnimatedProgressBar';

export default {
  title: 'Component library/Atoms/Animated Progress Bar',
  component: AnimatedProgressBar,
};

export const Default = () => <AnimatedProgressBar />;

export const DifferentColors = () => <AnimatedProgressBar backgroundColor="white" color="black" />;
