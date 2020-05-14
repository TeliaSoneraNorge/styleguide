import * as React from 'react';

export type SubscriptionDataAmount = string | number;

export type SubscriptionPrice = string | number;

export interface SubscriptionAdditionalInfo {
  routerPrice?: string;
  binding?: string;
}

export interface SubscriptionFeatures {
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

export interface SubscriptionTotalCalculation {
  title: string;
  subtitle?: string;
  price: string | number;
}

export interface SubscriptionProps {
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
  price?: SubscriptionPrice;
  priceInfo?: string[];
  additionalInfo?: SubscriptionAdditionalInfo;
  features?: SubscriptionFeatures;
  totalCalculation?: SubscriptionTotalCalculation;
  scrollToOnOpen?: boolean;
  onSelect?: (...args: any[]) => any;
  onClose?: (...args: any[]) => any;
}

const Subscription: React.FC<SubscriptionProps>;

export default Subscription;
