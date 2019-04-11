import React from 'react';
import { StepIndicator } from 'component-lib';

const wrapperStyle = {
    width: '700px',
    display: 'flex',
    justifyContent: 'flexStart'
};

const StepIndicators = () => (
    <div>
        <div style={wrapperStyle}>
            <StepIndicator
                index={0}
                numberOfSteps={3}
                labels={['Nummer', 'Se over', 'Ferdig']}
                links={['#StepIndicatorTest', '#StepIndicatorTest1', '#StepIndicatorTest2']} />
        </div>
        <div style={wrapperStyle}>
            <StepIndicator
                index={2}
                numberOfSteps={5}
                labels={['One', 'Two', 'Three', 'Four', 'Five']}
                links={['#StepIndicatorTest', '#StepIndicatorTest1', '#StepIndicatorTest2', '#StepIndicatorTest3', '#StepIndicatorTest4']} />
        </div>
    </div>
);

export default StepIndicators;
