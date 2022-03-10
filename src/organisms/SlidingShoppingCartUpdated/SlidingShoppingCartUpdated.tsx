import React, { useRef } from 'react';
import ShoppingCart from '../../molecules/ShoppingCartUpdated/ShoppingCart';
import cn from 'classnames';
import { useClickOutsideListener } from '../SlidingShoppingCart/useClickOutsideListener';
import { ICartDelivery, ICartItem } from './types';
import { ButtonKind } from '../../atoms/Button';
import { IconDefinition } from '../../atoms/Icon';

export interface SlidingShoppingCartUpdatedProps {
  heading?: string;
  cartItems?: ICartItem[];
  delivery?: ICartDelivery;
  onChangeQuantity: (item: any, quantity: number) => void;
  onRemoveItem: (item: any) => void;
  setShouldShowCart(shouldShowCart: boolean): void;
  shouldShowCart: boolean;
  totalPriceFirstInvoice?: number;
  totalPriceMonthly?: number;
  monthlyPriceDisclaimer?: string;
  monthlyPriceDetails?: { label: string; value: string }[];
  totalPriceUpfront?: number;
  totalVAT?: number;
  totalPriceWithoutVAT?: number;
  totalDiscount?: number;
  formatPrice: (price: string | number) => string;
  disclaimers?: any;
  isAnyCartItemsQuantityModifiable?: boolean;
  isAllowedToDelete?: boolean;
  buttons?: {
    kind?: ButtonKind;
    label: string;
    icon?: IconDefinition;
    size?: 'small';
    onClick?: (...args: any[]) => void;
  }[];
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
  monthlyPriceDetails,
  monthlyPriceDisclaimer,
  totalPriceUpfront,
  totalVAT,
  totalPriceWithoutVAT,
  totalDiscount,
  formatPrice,
  disclaimers,
  isAnyCartItemsQuantityModifiable,
  isAllowedToDelete,
  buttons,
}: SlidingShoppingCartUpdatedProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutsideListener({
    open: shouldShowCart,
    close: () => setShouldShowCart(false),
    ref,
  });

  return (
    <>
      <div className={cn({ 'telia-sliding-shopping-cart__overlay': shouldShowCart })} />
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
          heading={heading}
          shouldShowCart={shouldShowCart}
          setShouldShowCart={setShouldShowCart}
          cartItems={cartItems || []}
          onChangeQuantity={onChangeQuantity}
          onRemoveItem={onRemoveItem}
          delivery={delivery}
          totalPriceFirstInvoice={totalPriceFirstInvoice}
          totalPriceMonthly={totalPriceMonthly}
          monthlyPriceDetails={monthlyPriceDetails}
          monthlyPriceDisclaimer={monthlyPriceDisclaimer}
          totalPriceUpfront={totalPriceUpfront}
          totalVAT={totalVAT}
          totalPriceWithoutVAT={totalPriceWithoutVAT}
          formatPrice={formatPrice}
          buttons={buttons}
        />
      </aside>
    </>
  );
};

export default SlidingShoppingCartUpdated;
