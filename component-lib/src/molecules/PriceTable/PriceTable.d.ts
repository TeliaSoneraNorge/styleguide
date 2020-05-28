import * as React from 'react';

export interface PriceTableProductListWithPrice {
  title: string;
  subtitles?: string[];
  price: string | number;
  originalPrice?: string | number;
}

export interface PriceTableTotalTextWithPrice {
  title: string;
  subtitles?: string[];
  price: string | number;
  originalPrice?: string | number;
}

export interface PriceTableProps {
  productListWithPrice?: PriceTableProductListWithPrice[];
  totalTextWithPrice?: PriceTableTotalTextWithPrice;
  additionalLine?: string;
}

const PriceTable: React.FC<PriceTableProps>;

export default PriceTable;
