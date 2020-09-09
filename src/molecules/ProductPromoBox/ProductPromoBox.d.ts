import * as React from 'react';

declare type ProductPromoBoxPrice = string | number;

declare interface ProductPromoBoxProps {
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

declare const ProductPromoBox: React.FC<ProductPromoBoxProps>;

export default ProductPromoBox;
