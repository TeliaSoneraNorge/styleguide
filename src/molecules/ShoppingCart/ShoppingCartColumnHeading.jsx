import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCartColumnHeading = ({ children, colSpan, scope = 'col', ...rest }) => (
  <th
    className="shopping-cart__table__header"
    colSpan={colSpan}
    role={scope === 'row' ? 'rowheader' : 'columnheader'}
    scope={scope}
    {...rest}
  >
    {children}
  </th>
);

ShoppingCartColumnHeading.propTypes = {
  children: PropTypes.node,
  colSpan: PropTypes.number,
  scope: PropTypes.string,
};

export default ShoppingCartColumnHeading;
