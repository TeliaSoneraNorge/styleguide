import React from 'react';
import Heading from '../../atoms/Heading/Heading';
import ShoppingCartItemsSection from './ShoppingCartItemSection';
import { ICartDelivery, ICartItem } from './types';
import ShoppingCartPaymentSection from './ShoppingCartPaymentSection';
import ShoppingCartContinueSection from './ShoppingCartContinueSection';
import ShoppingCartFamilyDiscountInfo from './ShoppingCartFamilyDiscountInfo';

export interface ShoppingCartV2Props {
  heading?: string;
  cartItems: ICartItem[];
  delivery?: ICartDelivery;
  onChangeQuantity: (item: any, quantity: number) => void;
  onRemoveItem: (item: any) => void;
  totalPriceFirstInvoice?: number;
  totalPriceMonthly?: number;
  paymentTooltip?: string;
  disclaimer?: string;
  monthlyPriceDetails?: { label: string; value: string }[];
  totalPriceUpfront?: number;
  totalVAT?: number;
  totalPriceWithoutVAT?: number;
  formatPrice: (price: string | number) => string;
  isAnyCartItemsQuantityModifiable?: boolean;
  isAllowedToDelete?: boolean;
  hasPaid?: boolean;
  continueSection?: React.ReactNode;
  showFamilyDiscountInfo?: boolean;
}

/**
 * Status: *in progress*.
 * Category: PageElements
 *
 * This is a component for showing items currently in the shopping cart.
 */
const ShoppingCartV2 = ({
  heading,
  cartItems,
  delivery,
  onChangeQuantity,
  onRemoveItem,
  totalPriceFirstInvoice,
  totalPriceMonthly,
  paymentTooltip,
  disclaimer,
  monthlyPriceDetails,
  totalPriceUpfront,
  totalVAT,
  totalPriceWithoutVAT,
  isAllowedToDelete,
  hasPaid,
  formatPrice,
  continueSection,
  showFamilyDiscountInfo,
}: ShoppingCartV2Props) => {
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
        isAllowedToDelete={isAllowedToDelete}
        hasPaid={hasPaid}
      />
      <ShoppingCartPaymentSection
        delivery={delivery}
        totalPriceFirstInvoice={totalPriceFirstInvoice}
        totalPriceMonthly={totalPriceMonthly}
        paymentTooltip={paymentTooltip}
        monthlyPriceDetails={monthlyPriceDetails}
        totalPriceUpfront={totalPriceUpfront}
        totalPriceWithoutVAT={totalPriceWithoutVAT}
        totalVAT={totalVAT}
        formatPrice={formatPrice}
        hasPaid={hasPaid}
      />
      {disclaimer && <div className="telia-shopping-cart__disclaimer">{disclaimer}</div>}
      {showFamilyDiscountInfo && <ShoppingCartFamilyDiscountInfo />}
      {continueSection && <ShoppingCartContinueSection section={continueSection} />}
    </form>
  );
};

export default ShoppingCartV2;
