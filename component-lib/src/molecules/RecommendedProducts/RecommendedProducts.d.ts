import * as React from 'react';

declare interface RecommendedProductsProducts {
  url: string;
  image: string;
  name: string;
  price: string | number;
}

declare interface RecommendedProductsProps {
  mainHeading: string;
  products?: RecommendedProductsProducts[];
  image: string;
  heading: string;
  text: string;
  buttonText: string;
}

declare const RecommendedProducts: React.FC<RecommendedProductsProps>;

export default RecommendedProducts;
