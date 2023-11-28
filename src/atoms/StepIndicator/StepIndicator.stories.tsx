import React from 'react';
import StepIndicator from './StepIndicator';

export default {
  title: 'Component library/Atoms/Step Indicator',
  component: StepIndicator,
};

export const Default = () => {
  const labels = ['One', 'Two', 'Three', 'Four', 'Five'];
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
          numberOfSteps={3}
          labels={['Nummer', 'Se over', 'Ferdig']}
          links={['#StepIndicatorTest', '#StepIndicatorTest1', '#StepIndicatorTest2']}
        />
      </div>
      <div style={wrapperStyle}>
        <StepIndicator
          index={3}
          numberOfSteps={3}
          labels={['Nummer', 'Se over', 'Ferdig']}
          links={['#StepIndicatorTest', '#StepIndicatorTest1', '#StepIndicatorTest2']}
        />
      </div>
      <div style={wrapperStyle}>
        <StepIndicator
          index={2}
          numberOfSteps={5}
          labels={labels}
          links={[
            '#stepIndicatorTest',
            '#StepIndicatorTest1',
            '#StepIndicatorTest2',
            '#StepIndicatorTest3',
            '#StepIndicatorTest4',
          ]}
        />
      </div>
      <div style={wrapperStyle}>
        <StepIndicator
          index={1}
          numberOfSteps={3}
          labels={['Finansiering', 'Abonnement', 'Tilbehør']}
          links={['#StepIndicatorTest', '#StepIndicatorTest1', '#StepIndicatorTest2']}
          kind="purple"
        />
      </div>
      <div style={wrapperStyle}>
        <StepIndicator
          index={0}
          numberOfSteps={3}
          labels={['Finansiering', 'Abonnement', 'Tilbehør']}
          links={['#StepIndicatorTest', '#StepIndicatorTest1', '#StepIndicatorTest2']}
          disabled={[false, true, false]}
          kind="purple"
        />
      </div>
      <div style={wrapperStyle}>
        <StepIndicator
          index={4}
          numberOfSteps={5}
          labels={labels}
          links={[
            '#StepIndicatorTest',
            '#StepIndicatorTest1',
            '#StepIndicatorTest2',
            '#StepIndicatorTest3',
            '#StepIndicatorTest4',
          ]}
          disabled={[false, true, true, false, false]}
          kind="purple"
          onClick={(index) => alert(`Selected: ${labels[index]}`)}
        />
      </div>
    </>
  );
};
