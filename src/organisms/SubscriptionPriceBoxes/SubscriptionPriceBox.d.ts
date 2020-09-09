import * as React from 'react';

declare interface SubscriptionPriceBoxProps {
  topText?: string;
  extraGB?: string;
  extraPrice?: string;
  data?: string;
  monthlyPrice?: string;
  simIncluded?: boolean;
  bottomText?: string;
  size: string;
}

declare const SubscriptionPriceBox: React.FC<SubscriptionPriceBoxProps>;

export default SubscriptionPriceBox;
