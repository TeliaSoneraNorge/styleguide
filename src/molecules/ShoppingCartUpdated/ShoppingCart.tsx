import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import Heading from '../../atoms/Heading/Heading';
import { Icon } from '../../atoms/Icon';
import ShoppingCartItemsSection from './ShoppingCartItemSection';
import { ICartDelivery, ICartItem } from './types';
import ShoppingCartPaymentSection from './ShoppingCartPaymentSection';

export interface ShoppingCartProps {
  heading?: string;
  cartItems: ICartItem[];
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
}: ShoppingCartProps) => {
  return (
    <form className="telia-shopping-cart">
      {heading && (
        <div className="telia-shopping-cart__heading">
          <Heading level={2}>
            <Icon icon="shoppingcart" className="telia-shopping-cart__icon" /> {heading}
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
        totalPriceUpfront={totalPriceUpfront}
        totalPriceWithoutVAT={totalPriceWithoutVAT}
        totalVAT={totalVAT}
        formatPrice={formatPrice}
      />
    </form>
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
  totalVAT: PropTypes.number,
  totalPriceWithoutVAT: PropTypes.number,
  formatPrice: PropTypes.func,
  hasPaid: PropTypes.bool,
  disclaimers: PropTypes.node,
  discount: PropTypes.shape({
    label: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default ShoppingCart;
