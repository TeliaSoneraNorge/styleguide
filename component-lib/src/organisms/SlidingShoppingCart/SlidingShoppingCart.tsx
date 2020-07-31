import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from '../../molecules/ShoppingCart/ShoppingCart';
import Button from '../../atoms/Button/Button';
import cn from 'classnames';

export interface SlidingShoppingCartProps {
  cartItems?: any;
  heading?: string;
  isAnyCartItemsQuantityModifiable: boolean;
  onChangeQuantity: (item: any, quantity: number) => void;
  onGoToCart: () => void;
  onRemoveItem: (item: any) => void;
  totalPriceFirstInvoice: number;
  totalPriceMonthly: number;
  totalPriceUpfront: number;
  formatPrice: (price: string | number) => string,
  hasPaid: boolean;
  disclaimers: any;
  shouldShowCart: boolean;
  setShouldShowCart(shouldShowCart: boolean): void;
}

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
  shouldShowCart,
  setShouldShowCart
}:SlidingShoppingCartProps) => {
  return (
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
  );
};

export default SlidingShoppingCart;
