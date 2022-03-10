import React from 'react';
import _ from 'lodash';
import ShoppingCartItem from './ShoppingCartItem';
import { ICartItem } from './types';

export interface ShoppingCartItemSectionProps {
  heading?: string;
  cartItems: ICartItem[];
  onChangeQuantity: (item: any, quantity: number) => void;
  onRemoveItem: (item: any) => void;
  shouldShowQuantity?: boolean;
  formatPrice: (price: string | number) => string;
  isAnyCartItemsQuantityModifiable?: boolean;
  isAllowedToDelete?: boolean;
}

const ShoppingCartItemsSection = ({
  cartItems,
  onChangeQuantity,
  onRemoveItem,
  shouldShowQuantity,
  isAllowedToDelete,
  formatPrice,
}: ShoppingCartItemSectionProps) => {
  return (
    <section>
      {cartItems.map((cartItem) => {
        <ShoppingCartItem cartItem={cartItem} />;
      })}
    </section>
  );
};

export default ShoppingCartItemsSection;
