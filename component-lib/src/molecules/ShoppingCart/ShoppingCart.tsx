import React from 'react';
import Heading from '../../atoms/Heading/Heading';
import ShoppingCartTable from './ShoppingCartTable';
import { Icon } from '../../atoms/Icon';

type Props = {
    cartItems?: any[];
    isAnyCartItemsQuantityModifiable?: boolean;
    onChangeQuantity?: (...args: any[]) => any;
    onRemoveItem?: (...args: any[]) => any;
    onGoToCart?: (...args: any[]) => any;
    totalPriceFirstInvoice?: number;
    totalPriceMonthly?: number;
    totalPriceUpfront?: number;
    formatPrice?: (...args: any[]) => any;
    hasPaid?: boolean;
    disclaimers?: React.ReactNode;
};

/**
 * Status: *in progress*.
 * Category: PageElements
 *
 * This is a component for showing items currently in the shopping cart.
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'heading' does not exist on type 'Props'.
const ShoppingCart = ({ cartItems, heading, isAnyCartItemsQuantityModifiable, onChangeQuantity, onGoToCart, onRemoveItem, totalPriceFirstInvoice, totalPriceMonthly, totalPriceUpfront, formatPrice, hasPaid, disclaimers, }: Props) => {
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

export default ShoppingCart;
