import React, { useRef } from 'react';
import ShoppingCart from '../../molecules/ShoppingCart/ShoppingCart';
import Button from '../../atoms/Button/Button';
import cn from 'classnames';
import { useClickOutsideListener } from '../SlidingShoppingCart/useClickOutsideListener';

export interface SlidingShoppingCartUpdatedProps {
  cartItems?: any;
  heading?: string;
  isAnyCartItemsQuantityModifiable: boolean;
  onChangeQuantity: (item: any, quantity: number) => void;
  onGoToCart: () => void;
  onRemoveItem: (item: any) => void;
  totalPriceFirstInvoice: number;
  totalPriceMonthly: number;
  totalPriceUpfront: number;
  totalVAT: number;
  totalPriceWithoutVAT: number;
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

const SlidingShoppingCartUpdated = ({
  cartItems,
  heading,
  isAnyCartItemsQuantityModifiable,
  onChangeQuantity,
  onGoToCart,
  onRemoveItem,
  totalPriceFirstInvoice,
  totalPriceMonthly,
  totalPriceUpfront,
  totalVAT,
  totalPriceWithoutVAT,
  formatPrice,
  hasPaid,
  disclaimers,
  discount,
  shouldShowCart,
  setShouldShowCart,
  buttonText = 'Gå til bestilling',
  buttonInfo = '',
}: SlidingShoppingCartUpdatedProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutsideListener({
    open: shouldShowCart,
    close: () => setShouldShowCart(false),
    ref,
  });

  return (
    <aside
      ref={ref}
      className={cn('sliding-shopping-cart__container', {
        'sliding-shopping-cart__container--show': shouldShowCart,
      })}
    >
      <button className="sliding-shopping-cart__close-button" onClick={() => setShouldShowCart(false)}>
        X
      </button>
    </aside>
  );
};

export default SlidingShoppingCartUpdated;
