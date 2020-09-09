import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartRow from './ShoppingCartRow';
import ShoppingCartColumnHeading from './ShoppingCartColumnHeading';

const ShoppingCartHeadings = ({ shouldShowQuantity }) => (
  <thead className="shopping-cart__table__head" role="rowgroup">
    <ShoppingCartRow>
      <ShoppingCartColumnHeading>Produkt</ShoppingCartColumnHeading>
      {shouldShowQuantity && <ShoppingCartColumnHeading>Antall</ShoppingCartColumnHeading>}
      <ShoppingCartColumnHeading>Pris</ShoppingCartColumnHeading>
      <ShoppingCartColumnHeading>Fjern</ShoppingCartColumnHeading>
    </ShoppingCartRow>
  </thead>
);

ShoppingCartHeadings.propTypes = {
  shouldShowQuantity: PropTypes.bool,
};

export default ShoppingCartHeadings;
