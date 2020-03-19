export { default as ShoppingCart } from './ShoppingCart';

export const CART_ITEM_TYPE = {
  SUBSCRIPTION: 'SUBSCRIPTION',
  SUBSCRIPTION_EXISTING_MEMBER: 'SUBSCRIPTION_EXISTING_MEMBER',
  SUBSCRIPTION_DRAFT: 'SUBSCRIPTION_DRAFT',
  HANDSET: 'HANDSET',
  MODEM: 'MODEM',
  TABLET: 'TABLET',
  WEARABLE: 'WEARABLE',
  CONNECTED_DEVICE: 'CONNECTED_DEVICE',
  ACCESSORY: 'ACCESSORY',
  DELIVERY: 'DELIVERY',
  WEBDEAL: 'WEBDEAL',
  SIM: 'SIM',
  NEW_NUMBER: 'NEW_NUMBER',
  BREAKAGE_FEE: 'BREAKAGE_FEE',
  SWITCH_BREAKAGE_FEE: 'SWITCH_BREAKAGE_FEE',
  SWITCH_REMAINING_COST: 'SWITCH_REMAINING_COST',
  SPECIALPRODUCT: 'SPECIALPRODUCT',
  SERVICE: 'SERVICE',
  VOUCHER: 'VOUCHER',
  RESWITCH_PLACEHOLDER: 'RESWITCH_PLACEHOLDER',
  RESWITCH_EXISTING_HARDWARE: 'RESWITCH_EXISTING_HARDWARE',
};

export const CART_ITEM_TYPE_SUBTILE = [CART_ITEM_TYPE.SUBSCRIPTION_EXISTING_MEMBER];

export const CART_ITEM_SUBSCRIPTION_TYPES = [CART_ITEM_TYPE.SUBSCRIPTION, CART_ITEM_TYPE.SUBSCRIPTION_EXISTING_MEMBER];