import * as React from 'react';

export type SubscriptionDataAmount = string | number;

export type SubscriptionPrice = string | number;

export interface SubscriptionAdditionalInfo {
    routerPrice?: string;
    binding?: string;
}

export interface SubscriptionAllPricesLink {
    url?: string;
    text?: string;
}

export interface SubscriptionFeatures {
    speechBubbleText?: string;
    highlightedFeature?: {
        iconName: string;
        name: string;
    };
    specialMessageText?: string;
    productList?: {
        title: string;
        subtitle?: string;
        price: string | number;
    }[];
    button?: any;
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
    dataUnit?: string;
    price?: SubscriptionPrice;
    priceInfo?: string[];
    additionalInfo?: SubscriptionAdditionalInfo;
    allPricesLink?: SubscriptionAllPricesLink;
    features?: SubscriptionFeatures;
    totalCalculation?: SubscriptionTotalCalculation;
}

const Subscription: React.FC<SubscriptionProps>;

export default Subscription;
