import React from 'react';
import { StepIndicator } from '@telia/styleguide';

const wrapperStyle = {
    width: '700px',
    display: 'flex',
    justifyContent: 'flexStart'
};

const StepIndicators = () => (
    <div>
        <div style={wrapperStyle}>
            <StepIndicator index={0} numberOfSteps={3} labels={['Nummer', 'Se over', 'Ferdig']} />
        </div>
        <div style={wrapperStyle}>
            <StepIndicator index={2} numberOfSteps={5} labels={['One', 'Two', 'Three', 'Four', 'Five']} />
        </div>
    </div>
);

export default StepIndicators;
