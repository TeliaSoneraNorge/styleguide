import * as React from 'react';

declare interface PriceTableProductListWithPrice {
  title: string;
  subtitles?: string[];
  price: string | number;
  originalPrice?: string | number;
}

declare interface PriceTableTotalTextWithPrice {
  title: string;
  subtitles?: string[];
  price: string | number;
  originalPrice?: string | number;
}

declare interface PriceTableProps {
  productListWithPrice?: PriceTableProductListWithPrice[];
  totalTextWithPrice?: PriceTableTotalTextWithPrice;
  additionalLine?: string;
}

declare const PriceTable: React.FC<PriceTableProps>;

export default PriceTable;
