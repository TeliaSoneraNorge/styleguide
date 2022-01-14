import React, { useRef } from 'react';
import ShoppingCart from '../../molecules/ShoppingCart/ShoppingCart';
import Button from '../../atoms/Button/Button';
import cn from 'classnames';
import { useClickOutsideListener } from './useClickOutsideListener';

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
  totalMVA: number;
  totalPriceMVA: number;
  formatPrice: (price: string | number) => string;
  hasPaid?: boolean;
  disclaimers?: any;
  shouldShowCart: boolean;
  setShouldShowCart(shouldShowCart: boolean): void;
  discount?: {
    label: string;
    price: number;
  };
  buttonText?: string;
  buttonInfo?: string;
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
  totalMVA,
  totalPriceMVA,
  formatPrice,
  hasPaid,
  disclaimers,
  discount,
  shouldShowCart,
  setShouldShowCart,
  buttonText = 'Gå til bestilling',
  buttonInfo = '',
}: SlidingShoppingCartProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutsideListener({
    open: shouldShowCart,
    close: () => setShouldShowCart(false),
    ref,
  });

  return (
    <div
      ref={ref}
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
        onRemoveItem={onRemoveItem}
        totalPriceFirstInvoice={totalPriceFirstInvoice}
        totalPriceMonthly={totalPriceMonthly}
        totalPriceUpfront={totalPriceUpfront}
        totalPriceMVA={totalPriceMVA}
        totalMVA={totalMVA}
        formatPrice={formatPrice}
        hasPaid={hasPaid}
        disclaimers={disclaimers}
        discount={discount}
      />
      <div className="sliding-shopping-cart__checkout-button-container">
        <div className="sliding-shopping-cart__checkout-button-wrapper">
          <Button
            icon="shoppingcart"
            kind="primary"
            text={buttonText}
            className="sliding-shopping-cart__checkout-button"
            onClick={onGoToCart}
          />
          {buttonInfo && <span className="sliding-shopping-cart__checkout-button-info">{buttonInfo}</span>}
        </div>
      </div>
    </div>
  );
};

export default SlidingShoppingCart;
