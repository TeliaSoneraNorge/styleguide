import React, { useRef } from 'react';
import ShoppingCart from '../../molecules/ShoppingCartUpdated/ShoppingCart';
import cn from 'classnames';
import { useClickOutsideListener } from '../SlidingShoppingCart/useClickOutsideListener';
import { ICartDelivery, ICartItem } from './types';

export interface SlidingShoppingCartUpdatedProps {
  heading?: string;
  cartItems?: ICartItem[];
  delivery?: ICartDelivery;
  onChangeQuantity: (item: any, quantity: number) => void;
  onRemoveItem: (item: any) => void;
  setShouldShowCart(shouldShowCart: boolean): void;
  shouldShowCart: boolean;
  totalPriceFirstInvoice: number;
  totalPriceMonthly: number;
  totalPriceUpfront: number;
  totalVAT?: number;
  totalPriceWithoutVAT?: number;
  totalDiscount?: number;
  formatPrice: (price: string | number) => string;
  disclaimers?: any;
  isAnyCartItemsQuantityModifiable?: boolean;
  isAllowedToDelete?: boolean;
}

const SlidingShoppingCartUpdated = ({
  heading,
  cartItems,
  delivery,
  onChangeQuantity,
  onRemoveItem,
  setShouldShowCart,
  shouldShowCart,
  totalPriceFirstInvoice,
  totalPriceMonthly,
  totalPriceUpfront,
  totalVAT,
  totalPriceWithoutVAT,
  totalDiscount,
  formatPrice,
  disclaimers,
  isAnyCartItemsQuantityModifiable,
  isAllowedToDelete,
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
      className={cn('telia-sliding-shopping-cart__container', {
        'telia-sliding-shopping-cart__container--show': shouldShowCart,
      })}
    >
      <button className="telia-sliding-shopping-cart__close-button" onClick={() => setShouldShowCart(false)}>
        X
      </button>
      <ShoppingCart
        shouldShowCart={shouldShowCart}
        setShouldShowCart={setShouldShowCart}
        cartItems={cartItems || []}
        onChangeQuantity={onChangeQuantity}
        onRemoveItem={onRemoveItem}
        totalPriceFirstInvoice={totalPriceFirstInvoice}
        totalPriceMonthly={totalPriceMonthly}
        totalPriceUpfront={totalPriceUpfront}
        totalVAT={totalVAT}
        totalPriceWithoutVAT={totalPriceWithoutVAT}
        formatPrice={formatPrice}
      />
    </aside>
  );
};

export default SlidingShoppingCartUpdated;
