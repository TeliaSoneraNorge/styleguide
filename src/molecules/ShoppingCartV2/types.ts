import { IconDefinition } from '../../atoms/Icon/index';
import { colors } from '../../utils/colors';
import { LozengeStatus } from '../Lozenge/Lozenge';

export type ICartType =
  | 'SUBSCRIPTION'
  | 'SUBSCRIPTION_DRAFT'
  | 'HANDSET'
  | 'HANDSET-PREOWNED'
  | 'MODEM'
  | 'TABLET'
  | 'WEARABLE'
  | 'CONNECTED_DEVICE'
  | 'ACCESSORY'
  | 'DELIVERY'
  | 'WEBDEAL'
  | 'SIM'
  | 'ESIM'
  | 'NEW_NUMBER'
  | 'BREAKAGE_FEE'
  | 'SWITCH_BREAKAGE_FEE'
  | 'SWITCH_REMAINING_COST'
  | 'IN_SHOP_SERVICE'
  | 'SPECIALPRODUCT'
  | 'SERVICE'
  | 'VOUCHER'
  | 'RESWITCH_PLACEHOLDER'
  | 'RESWITCH_EXISTING_HARDWARE'
  | 'PREPAID_REFILL'
  | 'TRANSFER';

interface ICartSize {
  amount: string;
  unit: string;
}

interface ICartFinancing {
  type: string;
  duration: string | number;
  code: string;
}

interface ICartSubscriptionPhoneNumberCheck {
  type?: string;
  isAllowedToProceed: boolean;
}

interface ICartSubscriptionPhoneNumber {
  selectedPhoneNumber: string;
  check: ICartSubscriptionPhoneNumberCheck;
}

interface ICartSubscriptionProductUser {
  firstName: string;
  lastName: string;
  birthDate: string;
  street: string;
  postcode: string;
  city: string;
  email: string;
}

interface ICartSubscriptionReswitch {
  ban: string;
  imei: string;
  phoneNumber: string;
  ordererPhoneNumber: string;
  missingExistingSwitchHandset: boolean;
  initiatedBy: string;
  handset?: any;
  breakageFee?: any;
  remainingCost?: number;
  totalRemainingMonths?: number;
  showSubscriptionListOnPdp: boolean;
}

interface ICartSubscriptionExisting {
  id: string;
  name: string;
  size: ICartSize;
  maxAgeAllowed: boolean;
  isDataUnlimited: boolean;
  price: ICartSubscriptionPrice;
}

interface ICartSubscriptionPriceMonthly {
  amountSubscription: number;
  amountBeforeDiscountSubscription: number | null;
  infoHtmlSubscription: number | null;
}

interface ICartSubscriptionPriceSpecial {
  amountSubscription: number;
}

interface ICartSubscriptionPrice {
  monthly: ICartSubscriptionPriceMonthly;
  special?: ICartSubscriptionPriceSpecial;
}

export interface ICartSubscription {
  type: ICartType;
  id: string;
  code: string;
  isLegal: boolean;
  financing?: ICartFinancing;
  keepExistingSubscription?: boolean;
  isPrepaidToPostpaid?: boolean;
  isExistingPrepaidKBDSubscription?: boolean;
  isDataUnlimited?: boolean;
  phoneNumber: ICartSubscriptionPhoneNumber;
  reswitch?: ICartSubscriptionReswitch | null;
  existing?: ICartSubscriptionExisting;
  maxAgeAllowed?: number;
  productUser: ICartSubscriptionProductUser;
  name: string;
  size: ICartSize;
  price: ICartSubscriptionPrice;
}

export interface ICartSubscriptions {
  [key: string]: ICartSubscription;
}

interface ICartItemQuantity {
  modifiable?: boolean;
  removable?: boolean;
  value: number;
}

export interface ICartItemPrice {
  upfront?: number;
  upfrontWithoutVAT?: number;
  monthly?: number;
  monthlyWithoutVAT?: number;
  firstInvoice?: number;
  originalSalesPrice?: number;
  originalSalesPriceWithoutVAT?: number;
}

interface ICartItemDiscountValue {
  upfront?: number;
  monthly?: number;
}

export interface ICartDiscountType {
  id: 'commitment' | 'sameGroup' | 'hardcoded';
  value: number;
  text: string;
  lozengeStatus?: LozengeStatus;
}

interface ICartItemDiscount {
  value: ICartItemDiscountValue;
  description?: string;
  handsetDiscountText?: string;
  types?: ICartDiscountType[];
  isManualDiscount?: boolean;
  smartDiscountCode?: string;
  isSmartDiscount?: boolean;
  name?: string;
}

export interface ICartItemImage {
  url?: string;
  icon?: IconDefinition;
}

export interface ICartItem {
  type: ICartType;
  subtype?: string;
  id: string;
  code?: string;
  bundleId?: string;
  isLegal?: boolean;
  name: string;
  href?: string;
  lineThrough?: string;
  subtitle?: string | string[];
  brand?: string;
  brandSlug?: string;
  model?: string;
  modelSlug?: string;
  modelSize?: string;
  color?: string;
  quantity: ICartItemQuantity;
  price: ICartItemPrice;
  discount?: ICartItemDiscount;
  image?: ICartItemImage;
  leaseMonths?: number | string | null;
  isReSwitch?: boolean;
  isWebDeal?: boolean;
  items?: ICartItem[];
  onlyAvailableInShops?: boolean;
}

export interface ICartDeliveryProgressBar {
  min: number;
  max: number;
  progress: number;
  text?: string;
  color?: keyof typeof colors;
}

export interface ICartDelivery {
  icon?: IconDefinition;
  label: string;
  value: string | number;
  progressBar?: ICartDeliveryProgressBar;
}

export interface DisclaimerItem {
  name: string;
  total: number;
  description?: string | string[];
}

type DisclaimerItemFinancing = 'lease' | 'simonly' | 'upfront' | 'commitment' | 'switch' | 'reswitch';
