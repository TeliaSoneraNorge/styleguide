import * as React from 'react';

export interface SubscriptionPriceBoxProps {
    topText?: string;
    extraGB?: string;
    extraPrice?: string;
    data?: string;
    monthlyPrice?: string;
    simIncluded?: boolean;
    bottomText?: string;
    size: string;
}

export const SubscriptionPriceBox: React.FC<SubscriptionPriceBoxProps>;

export default SubscriptionPriceBox;
