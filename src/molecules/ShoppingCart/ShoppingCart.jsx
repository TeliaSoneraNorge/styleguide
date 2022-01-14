import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import ShoppingCartTable from './ShoppingCartTable';
import { Icon } from '../../atoms/Icon';
import Button from '../../atoms/Button/Button';

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
  buttonText = 'Gå til bestilling',
  buttonInfo = '',
  onRemoveItem,
  totalPriceFirstInvoice,
  totalPriceMonthly,
  totalPriceUpfront,
  totalMVA,
  totalPriceMVA,
  formatPrice,
  hasPaid,
  disclaimers,
  discount,
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
        totalPriceMonthly={totalPriceMonthly}
        totalPriceMVA={totalPriceMVA}
        totalMVA={totalMVA}
        formatPrice={formatPrice}
        hasPaid={hasPaid}
        discount={discount}
      />
      {disclaimers}
      {onGoToCart && (
        <div className="shopping-cart__checkout-button-container">
          <div className="shopping-cart__checkout-button-wrapper">
            <Button
              icon="shoppingcart"
              kind="primary"
              className="shopping-cart__checkout-button"
              size="small"
              text={buttonText}
              onClick={onGoToCart}
            />
            {buttonInfo && <span className="shopping-cart__checkout-button-info">{buttonInfo}</span>}
          </div>
        </div>
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
  goToCartText: PropTypes.string,
  totalPriceFirstInvoice: PropTypes.number,
  totalPriceMonthly: PropTypes.number,
  totalPriceUpfront: PropTypes.number,
  totalMVA: PropTypes.number,
  totalPriceMVA: PropTypes.number,
  formatPrice: PropTypes.func,
  hasPaid: PropTypes.bool,
  disclaimers: PropTypes.node,
  discount: PropTypes.shape({
    label: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default ShoppingCart;
