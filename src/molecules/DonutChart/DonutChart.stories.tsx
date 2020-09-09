import React from 'react';
import { DonutChart } from '../../index';

export default {
  title: 'Component library/Molecules/DonutChart',
  component: DonutChart,
};

export const Default = () => {
  const segments = [
    { color: 'purple', percent: 0.3 },
    { color: 'orange', percent: 0.4 },
    { color: 'green', percent: 0.1 },
  ];

  return <DonutChart value="21,6GB" totalFormatted="25GB" segments={segments} />;
};

export const AsALink = () => {
  const segments = [
    { color: 'purple', percent: 0.3 },
    { color: 'orange', percent: 0.4 },
    { color: 'green', percent: 0.1 },
  ];

  return (
    <DonutChart value="21,6GB" totalFormatted="25GB" segments={segments} link="#" showLineCaps showSegmentSeparators />
  );
};

export const Loading = () => <DonutChart loading />;



export const WithLineCaps = () => {
  const segments = [
    { color: 'purple', percent: 0.3 },
    { color: 'orange', percent: 0.4 },
    { color: 'green', percent: 0.1 },
  ];

  return (
    <DonutChart value="21,6GB" totalFormatted="25GB" segments={segments} showLineCaps />
  )
};

export const WithLineCapsAndSegmentSeparators = () => {
  const segments = [
    { color: 'purple', percent: 0.3 },
    { color: 'orange', percent: 0.4 },
    { color: 'green', percent: 0.1 },
  ];

  return (
    <DonutChart value="21,6GB" totalFormatted="25GB" segments={segments} showLineCaps showSegmentSeparators />
  )
};

export const WithNoSegments = () => <DonutChart value="21,6GB" totalFormatted="25GB" showLineCaps showSegmentSeparators />;