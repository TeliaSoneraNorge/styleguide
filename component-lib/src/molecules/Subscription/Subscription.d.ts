import * as React from 'react';

declare type SubscriptionDataAmount = string | number;

declare type SubscriptionPrice = string | number;

declare interface SubscriptionAdditionalInfo {
  routerPrice?: string;
  binding?: string;
}
declare interface SubscriptionAllPricesLink {
  url?: string;
  text?: string;
}
declare interface SubscriptionFeatures {
  speechBubbleText?: string;
  highlightedFeature?: {
    iconName: string;
    name: string;
    size?: string;
    secondIconName?: string;
    secondName?: string;
    secondSize?: string;
  };
  specialMessageText?: string;
  productList?: {
    title: string;
    subtitle?: string;
    price: string | number;
  }[];
  button?: React.ReactNode;
}

declare interface SubscriptionTotalCalculation {
  title: string;
  subtitle?: string;
  price: string | number;
}

declare interface SubscriptionProps {
  isShowingFeatures?: boolean;
  isStandalone?: boolean;
  isBroadband?: boolean;
  isExpanded?: boolean;
  color?: string;
  size?: string;
  id?: string;
  name?: string;
  dataAmount?: SubscriptionDataAmount;
  extraDataAmount?: SubscriptionDataAmount;
  dataUnit?: string;
  extraDataUnit?: string;
  price?: SubscriptionPrice;
  priceInfo?: string[];
  additionalInfo?: SubscriptionAdditionalInfo;
  allPricesLink?: SubscriptionAllPricesLink;
  features?: SubscriptionFeatures;
  totalCalculation?: SubscriptionTotalCalculation;
  scrollToOnOpen?: boolean;
  onSelect?: (...args: any[]) => any;
  onClose?: (...args: any[]) => any;
}

declare const Subscription: React.FC<SubscriptionProps>;

export default Subscription;
