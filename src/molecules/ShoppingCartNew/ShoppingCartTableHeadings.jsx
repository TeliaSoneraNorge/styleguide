import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartRow from './ShoppingCartRow';
import ShoppingCartColumnHeading from './ShoppingCartColumnHeading';

const ShoppingCartHeadings = ({ shouldShowQuantity }) => (
  <div className="shopping-cart-section__table__head">
    <ShoppingCartRow>
      <ShoppingCartColumnHeading>Produkt</ShoppingCartColumnHeading>
      {shouldShowQuantity && <ShoppingCartColumnHeading>Antall</ShoppingCartColumnHeading>}
      <ShoppingCartColumnHeading>Pris</ShoppingCartColumnHeading>
      <ShoppingCartColumnHeading>Fjern</ShoppingCartColumnHeading>
    </ShoppingCartRow>
  </div>
);

ShoppingCartHeadings.propTypes = {
  shouldShowQuantity: PropTypes.bool,
};

export default ShoppingCartHeadings;
