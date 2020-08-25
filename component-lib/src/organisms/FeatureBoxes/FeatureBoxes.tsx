import React from 'react';

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * There should be a minimum of three- and a maximum of eight boxes when using this component.
 **/
const FeatureBoxes = ({
  children,
  hasBorder,
  size
}: any) => (
  <div className="feature-boxes">
    {React.Children.map(children, child => React.cloneElement(child, { hasBorder, size }))}
  </div>
);

export default FeatureBoxes;
