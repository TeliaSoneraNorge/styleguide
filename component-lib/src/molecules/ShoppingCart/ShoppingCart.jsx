import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import ShoppingCartTable from './ShoppingCartTable';
import { Icon } from '../../atoms/Icon';

/**
 * Status: *in progress*.
 * Category: PageElements
 *
 * This is a component for showing items currently in the shopping cart.
 */
const ShoppingCart = ({
  cartItems,
  heading,
  isAnyCartItemsQuantityModifiable,
  onChangeQuantity,
  onGoToCart,
  onRemoveItem,
  totalPriceFirstInvoice,
  totalPriceMonthly,
  totalPriceUpfront,
  formatPrice,
  hasPaid,
  disclaimers,
}) => {
  return (
    <div className="shopping-cart">
      {heading && (
        <div className="shopping-cart__heading">
          <Heading level={2}>
            <Icon icon="shoppingcart" className="shopping-cart__icon" /> {heading}
          </Heading>
        </div>
      )}
      <ShoppingCartTable
        cartItems={cartItems}
        isAnyCartItemsQuantityModifiable={isAnyCartItemsQuantityModifiable}
        onChangeQuantity={onChangeQuantity}
        onRemoveItem={onRemoveItem}
        totalPriceFirstInvoice={totalPriceFirstInvoice}
        totalPriceUpfront={totalPriceUpfront}
        formatPrice={formatPrice}
        hasPaid={hasPaid}
        totalPriceMonthly={totalPriceMonthly}
      />
      {disclaimers}
      {onGoToCart && (
        <button className="button accordion__button inverted button--primary" onClick={onGoToCart} type="button">
          Gå til kassen
        </button>
      )}
    </div>
  );
};

ShoppingCart.propTypes = {
  cartItems: PropTypes.array,
  isAnyCartItemsQuantityModifiable: PropTypes.bool,
  onChangeQuantity: PropTypes.func,
  onRemoveItem: PropTypes.func,
  onGoToCart: PropTypes.func,
  totalPriceFirstInvoice: PropTypes.number,
  totalPriceMonthly: PropTypes.number,
  totalPriceUpfront: PropTypes.number,
  formatPrice: PropTypes.func,
  hasPaid: PropTypes.bool,
  disclaimers: PropTypes.node,
};

export default ShoppingCart;
