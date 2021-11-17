import React from 'react';
import PropTypes from 'prop-types';

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * These are 3 cards blocks. Can have 2 or 3 card blocks in width, with white or gray background
 */
const Cards = ({ children, isGrey, isUnderline }) => (
  <div className="cards">
    {React.Children.map(children, (child) => React.cloneElement(child, { isGrey, isUnderline }))}
  </div>
);

Cards.propTypes = {
  isGrey: PropTypes.bool,
  isUnderline: PropTypes.bool,
};

export default Cards;
