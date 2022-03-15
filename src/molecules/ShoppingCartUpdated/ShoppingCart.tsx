import React from 'react';
import Heading from '../../atoms/Heading/Heading';
import { IconDefinition } from '../../atoms/Icon';
import ShoppingCartItemsSection from './ShoppingCartItemSection';
import { ICartDelivery, ICartItem } from './types';
import ShoppingCartPaymentSection from './ShoppingCartPaymentSection';
import ShoppingCartContinueSection from './ShoppingCartContinueSection';
import { ButtonKind } from '../../atoms/Button';
import { size } from 'lodash';

export interface ShoppingCartProps {
  heading?: string;
  cartItems: ICartItem[];
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

/**
 * Status: *in progress*.
 * Category: PageElements
 *
 * This is a component for showing items currently in the shopping cart.
 */
const ShoppingCart = ({
  heading,
  cartItems,
  delivery,
  onChangeQuantity,
  onRemoveItem,
  totalPriceFirstInvoice,
  totalPriceMonthly,
  monthlyPriceDisclaimer,
  monthlyPriceDetails,
  totalPriceUpfront,
  totalVAT,
  totalPriceWithoutVAT,
  totalDiscount,
  formatPrice,
  buttons,
}: ShoppingCartProps) => {
  return (
    <form className="telia-shopping-cart">
      {heading && (
        <div className="telia-shopping-cart__section-inner">
          <Heading className="telia-shopping-cart__heading" tag="h2" size="s">
            {heading}
          </Heading>
        </div>
      )}
      <ShoppingCartItemsSection
        cartItems={cartItems}
        onChangeQuantity={onChangeQuantity}
        onRemoveItem={onRemoveItem}
        formatPrice={formatPrice}
      />
      <ShoppingCartPaymentSection
        delivery={delivery}
        totalPriceFirstInvoice={totalPriceFirstInvoice}
        totalPriceMonthly={totalPriceMonthly}
        monthlyPriceDisclaimer={monthlyPriceDisclaimer}
        monthlyPriceDetails={monthlyPriceDetails}
        totalPriceUpfront={totalPriceUpfront}
        totalPriceWithoutVAT={totalPriceWithoutVAT}
        totalVAT={totalVAT}
        formatPrice={formatPrice}
      />
      {buttons && size(buttons) > 0 && <ShoppingCartContinueSection buttons={buttons} />}
    </form>
  );
};

export default ShoppingCart;
