import * as React from 'react';

export interface HardwareProductCampaign {
  backgroundColor: string;
  color: string;
  text: string;
}

export type HardwareProductPrice = string | number;

export interface HardwareProductProps {
  campaign?: HardwareProductCampaign;
  url?: string;
  onClick?: (...args: any[]) => any;
  image?: string;
  name?: string;
  priceDescription?: string;
  price?: HardwareProductPrice;
  priceDisclaimerLine1?: React.ReactNode;
  priceDisclaimerLine2?: React.ReactNode;
}

const HardwareProduct: React.FC<HardwareProductProps>;

export default HardwareProduct;
