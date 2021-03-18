import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCartColumnHeading = ({ children, colSpan, scope = 'col', ...rest }) => (
  <div className="shopping-cart-section__section__header" colSpan={colSpan} scope={scope} {...rest}>
    {children}
  </div>
);

ShoppingCartColumnHeading.propTypes = {
  children: PropTypes.node,
  colSpan: PropTypes.number,
  scope: PropTypes.string,
};

export default ShoppingCartColumnHeading;
