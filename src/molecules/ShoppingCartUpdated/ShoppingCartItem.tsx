import React from 'react';
import _ from 'lodash';
import { ICartItem } from '../../organisms/SlidingShoppingCartUpdated/types';
import { CART_ITEM_TYPE } from './index';

export interface ShoppingCartItemProps {
  cartItem: ICartItem;
}

const ShoppingCartItem = ({ cartItem }: ShoppingCartItemProps) => {
  const { id, leaseMonths, name, lineThrough, subtitle, price, discount, type } = cartItem;
  const quantity = _.get(cartItem, 'quantity.value', 1);
  const isQuantityModifiable = _.get(cartItem, 'quantity.modifiable');
  const isRemovable = _.get(cartItem, 'quantity.removable');
  const shouldShowPricePerUnit = (!!price.upfront || !!price.firstInvoice) && quantity > 1;
  const discountValueUpfront = _.get(discount, 'value.upfront') || 0;
  const discountValueMonthly = _.get(discount, 'value.monthly') || 0;
  const hasGroupDiscount = _.get(discount, 'hasGroupDiscount', false);
  const isDraft = type === CART_ITEM_TYPE.SUBSCRIPTION_DRAFT || _.get(cartItem, 'status.isDraft');
  const isActive = _.get(cartItem, 'status.isActive');

  return <div>ShoppingCartItem</div>;
};

export default ShoppingCartItem;
