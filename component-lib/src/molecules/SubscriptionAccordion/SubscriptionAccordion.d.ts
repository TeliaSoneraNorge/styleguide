import * as React from 'react';

export type SubscriptionDataAmount = string | number;

export type SubscriptionPrice = string | number;

export type SubscriptionFeature = {
  iconName: string;
  name: string;
}

export type SubscriptionDiscount = {
  price: SubscriptionPrice;
  description: string;
}

export interface SubscriptionAccordionProps {
  id?: string;
  isExpanded?: boolean;
  isInverted?: boolean;
  name?: string;
  price?: SubscriptionPrice;
  priceInfo?: string[];
  discount?: SubscriptionDiscount;
  feature?: SubscriptionFeature;
  disclaimers?: any;
  scrollToOnOpen?: boolean;
  className?: string;
  buttonText?: any;
  buttonIsProcessing?: boolean;
  onOpen?: (...args: any[]) => any;
  onSelect?: (...args: any[]) => any;
}

const SubscriptionAccordion: React.FC<SubscriptionAccordionProps>;

export default SubscriptionAccordion;
