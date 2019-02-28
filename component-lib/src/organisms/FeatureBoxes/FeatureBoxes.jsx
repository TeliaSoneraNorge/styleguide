import React from 'react';

/**
 * Status: *finished*.
 *
 * There should be a minimum of three- and a maximum of eight boxes when using this component.
 **/
const FeatureBoxes = ({ children, hasBorder, size }) =>
    <div className="feature-boxes">
        {React.Children.map(children, child => React.cloneElement(child, { hasBorder, size }))}
    </div>;

export default FeatureBoxes;