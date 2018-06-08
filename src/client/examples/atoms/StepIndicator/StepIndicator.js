import React from 'react';
import { StepIndicator } from '@telia/styleguide';

const wrapperStyle = {
    width: '300px'
};

const StepIndicators = () => (
    <div>
        <div style={wrapperStyle}>
            <StepIndicator index={0} numberOfSteps={3} />
        </div>
        <div style={wrapperStyle}>
            <StepIndicator index={2} numberOfSteps={6} />
        </div>
    </div>
);

export default StepIndicators;
