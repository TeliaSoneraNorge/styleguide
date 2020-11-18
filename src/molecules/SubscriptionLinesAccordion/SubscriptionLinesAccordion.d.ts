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
  dataAmount?: SubscriptionDataAmount;
  dataAmountIcon?: any;
  dataUnit: SubscriptionDataUnit;
  extraDataAmount?: SubscriptionDataAmount;
  extraDataUnit?: SubscriptionDataUnit;
  price?: SubscriptionPrice;
  priceInfo?: string[];
  description1?: string;
  description2?: string;
  showCalculationText?: string;
  numberOfSubscriptions: number;
  feature?: SubscriptionFeature;
  disclaimers?: any;
  scrollToOnOpen?: boolean;
  className?: string;
  isSelected?: boolean;
  onOpen?: (...args: any[]) => any;
  onSelect?: (...args: any[]) => any;
  onClickShowCalculation?: (...args: any[]) => any;
  style?: React.CSSProperties;
}

declare const SubscriptionLinesAccordion: React.FC<SubscriptionLinesAccordionProps>;

export default SubscriptionLinesAccordion;
