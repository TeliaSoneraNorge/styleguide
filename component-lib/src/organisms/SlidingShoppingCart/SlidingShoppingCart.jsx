import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from '../../molecules/ShoppingCart/ShoppingCart';
import Button from '../../atoms/Button/Button';
import cn from 'classnames';
import { Icon } from '../../atoms/Icon/Icon';

/**
 * Status: *in progress*.
 * Category: PageElements
 *
 * This is a component for showing cart items in a sliding shopping cart
 */
const SlidingShoppingCart = ({
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
  const [shouldShowCart, setShouldShowCart] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShowCart(!shouldShowCart)} className="sliding-shopping-cart__cart-button">
        <Icon icon="shoppingcart" className="sliding-shopping-cart__cart-icon" />
      </button>
      <div
        className={cn('sliding-shopping-cart__container', {
          'sliding-shopping-cart__container--show': shouldShowCart,
        })}
      >
        <button className="sliding-shopping-cart__close-button" onClick={() => setShouldShowCart(false)}>
          X
        </button>
        <ShoppingCart
          cartItems={cartItems}
          heading={heading}
          isAnyCartItemsQuantityModifiable={isAnyCartItemsQuantityModifiable}
          onChangeQuantity={onChangeQuantity}
          onGoToCart={onGoToCart}
          onRemoveItem={onRemoveItem}
          totalPriceFirstInvoice={totalPriceFirstInvoice}
          totalPriceMonthly={totalPriceMonthly}
          totalPriceUpfront={totalPriceUpfront}
          formatPrice={formatPrice}
          hasPaid={hasPaid}
          disclaimers={disclaimers}
        />
        <div className="sliding-shopping-cart__checkout-button-container">
          <Button
            icon="shoppingcart"
            kind="primary"
            text="Gå til bestilling"
            className="sliding-shopping-cart__checkout-button"
            onClick={onGoToCart}
          />
        </div>
      </div>
    </>
  );
};

SlidingShoppingCart.propTypes = {
  totalPriceMonthly: PropTypes.number,
  totalPriceUpfront: PropTypes.number,
  onGoToCart: PropTypes.func,
  toggleCart: PropTypes.func,
  formatPrice: PropTypes.func,
};

export default SlidingShoppingCart;
