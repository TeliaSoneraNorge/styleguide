import React from 'react';
import StepIndicatorText from './StepIndicatorText';

export default {
  title: 'Component library/Atoms/Step Indicator Text',
  component: StepIndicatorText,
};

export const Default = () => {
  const wrapperStyle = {
    width: '700px',
    display: 'flex',
    justifyContent: 'flexStart',
  };

  return (
    <>
      <div style={wrapperStyle}>
        <StepIndicatorText activeStep={0} steps={null} />
      </div>
      <div style={wrapperStyle}>
        <StepIndicatorText activeStep={0} steps={null} />
      </div>
    </>
  );
};
