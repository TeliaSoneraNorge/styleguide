import * as React from 'react';

export type SubscriptionDataAmount = string | number;
export type SubscriptionDataUnit = string | number;
export type SubscriptionPrice = string | number;

export type SubscriptionFeature = {
  iconName: string;
  name: string;
};

export interface SubscriptionLinesAccordionProps {
  id?: string;
  isExpanded?: boolean;
  isInverted?: boolean;
  dataAmount: SubscriptionDataAmount;
  dataAmountIcon?: any;
  dataUnit: SubscriptionDataUnit;
  price?: SubscriptionPrice;
  priceInfo?: string[];
  moneySaved: number;
  normalPrice: number;
  numberOfSubscriptions: number;
  discount?: SubscriptionDiscount;
  feature?: SubscriptionFeature;
  disclaimers?: any;
  scrollToOnOpen?: boolean;
  className?: string;
  onOpen?: (...args: any[]) => any;
  onSelect?: (...args: any[]) => any;
  onClickShowCalculation?: (...args: any[]) => any;
}

const SubscriptionLinesAccordion: React.FC<SubscriptionLinesAccordionProps>;

export default SubscriptionLinesAccordion;
