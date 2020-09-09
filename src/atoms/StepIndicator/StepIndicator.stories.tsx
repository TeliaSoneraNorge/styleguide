import React from 'react';
import StepIndicator from './StepIndicator';

export default {
  title: 'Component library/Atoms/Step Indicator',
  component: StepIndicator,
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
        <StepIndicator
          index={0}
          numberOfSteps={3}
          labels={['Nummer', 'Se over', 'Ferdig']}
          links={['#StepIndicatorTest', '#StepIndicatorTest1', '#StepIndicatorTest2']}
        />
      </div>
      <div style={wrapperStyle}>
        <StepIndicator
          index={2}
          numberOfSteps={5}
          labels={['One', 'Two', 'Three', 'Four', 'Five']}
          links={[
            '#StepIndicatorTest',
            '#StepIndicatorTest1',
            '#StepIndicatorTest2',
            '#StepIndicatorTest3',
            '#StepIndicatorTest4',
          ]}
        />
      </div>

    </>
  )
};