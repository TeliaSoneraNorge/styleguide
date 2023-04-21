import React, { ReactNode } from 'react';
interface Ribbon {
  backgroundColor: string;
  color: string;
  text: string;
}

export type SubscriptionDataAmount = string | number;

export type SubscriptionPrice = string | number;

export type SubscriptionFeature = {
  iconName: string;
  name: string;
};

export type SubscriptionDiscount = {
  price: SubscriptionPrice;
  description: string;
  color?: 'blue' | 'green' | 'purple';
};

export interface SubscriptionAccordionProps {
  id?: string;
  isExpanded?: boolean;
  isInverted?: boolean;
  name?: string;
  titleTag?: string;
  highlight?: string;
  lineThrough?: string;
  discountPrice?: SubscriptionPrice;
  price?: SubscriptionPrice;
  priceInfo?: string[];
  discount?: SubscriptionDiscount;
  feature?: SubscriptionFeature;
  disclaimers?: any;
  ribbon?: Ribbon | null;
  scrollToOnOpen?: boolean;
  className?: string;
  onOpen?: (...args: any[]) => any;
  description?: any;
  children?: ReactNode | ReactNode[];
}

declare const SubscriptionAccordion: React.FC<SubscriptionAccordionProps>;

export default SubscriptionAccordion;
