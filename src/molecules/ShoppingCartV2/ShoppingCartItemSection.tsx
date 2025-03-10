import React, { Fragment } from 'react';
import _ from 'lodash';
import ShoppingCartItem from './ShoppingCartItem';
import { ICartItem } from './types';

export interface ShoppingCartItemSectionProps {
  heading?: string;
  cartItems: ICartItem[];
  shouldShowQuantity?: boolean;
  isAnyCartItemsQuantityModifiable?: boolean;
  isAllowedToDelete?: boolean;
  hasPaid?: boolean;
  onChangeQuantity: (item: any, quantity: number) => void;
  onRemoveItem: (item: any) => void;
  formatPrice: (price: string | number) => string;
}

export interface ShoppingCartItemGroupProps {
  cartItem: ICartItem;
  isAllowedToDelete?: boolean;
  hasPaid?: boolean;
  onChangeQuantity: (item: any, quantity: number) => void;
  onRemoveItem: (item: any) => void;
  formatPrice: (price: string | number) => string;
}

const sortShoppingCart = (item: ICartItem) => {
  const cartItemTypes: any = {
    WEBDEAL: 10,
    HANDSET: 20,
    TABLET: 30,
    MODEM: 40,
    WEARABLE: 50,
    CONNECTED_DEVICE: 60,
    SUBSCRIPTION: 70,
    SUBSCRIPTION_DRAFT: 70,
    SPECIALPRODUCT: 71,
    SIM: 80,
    NEW_NUMBER: 90,
    SERVICE: 100,
    ACCESSORY: 110,
    VOUCHER: 130,
  };

  return cartItemTypes[item.type];
};

const ShoppingCartSectionBody = ({ children }: { children: React.ReactNode }) => (
  <div className="telia-shopping-cart__section__body">{children}</div>
);

const ShoppingCartItemGroup = ({
  cartItem,
  isAllowedToDelete,
  hasPaid,
  onChangeQuantity,
  onRemoveItem,
  formatPrice,
}: ShoppingCartItemGroupProps) => {
  const renderCartItem = (item: ICartItem) => {
    return (
      <Fragment key={item.id}>
        <ShoppingCartItem
          cartItem={item}
          isAllowedToDelete={!!isAllowedToDelete}
          hasPaid={hasPaid}
          onChangeQuantity={onChangeQuantity}
          onRemoveItem={onRemoveItem}
          formatPrice={formatPrice}
        />
        {!_.isEmpty(item.items) && _.sortBy(item.items, [sortShoppingCart]).map((subItem) => renderCartItem(subItem))}
      </Fragment>
    );
  };
  return <ShoppingCartSectionBody>{renderCartItem(cartItem)}</ShoppingCartSectionBody>;
};

const ShoppingCartSection = ({
  cartItems,
  isAllowedToDelete,
  hasPaid,
  onChangeQuantity,
  onRemoveItem,
  formatPrice,
}: ShoppingCartItemSectionProps) => {
  return (
    <section className="telia-shopping-cart__section">
      {_.sortBy(cartItems, [sortShoppingCart]).map((item, _index) => (
        <div key={`${item.id}-${item.bundleId}`}>
          <ShoppingCartItemGroup
            cartItem={item}
            onChangeQuantity={onChangeQuantity}
            onRemoveItem={onRemoveItem}
            isAllowedToDelete={isAllowedToDelete}
            hasPaid={hasPaid}
            formatPrice={formatPrice}
          />
        </div>
      ))}
    </section>
  );
};

export default ShoppingCartSection;
