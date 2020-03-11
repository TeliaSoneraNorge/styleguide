import * as React from 'react';

export type ProductPromoBoxPrice = string | number;

export interface ProductPromoBoxProps {
  id?: string;
  productName?: string;
  productColor?: string;
  isSmallBox?: boolean;
  imagePath?: string;
  description?: string;
  price?: ProductPromoBoxPrice;
  priceSmallprint1?: string;
  priceSmallprint2?: string;
  hideButton?: boolean;
  buttonText?: string;
  isShowingFeatures?: boolean;
  speechBubbleText?: string;
  onClick?: (...args: any[]) => any;
  showActionOnNewLine?: boolean;
}

const ProductPromoBox: React.FC<ProductPromoBoxProps>;

export default ProductPromoBox;
