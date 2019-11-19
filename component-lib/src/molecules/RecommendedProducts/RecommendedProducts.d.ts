import * as React from 'react';

export interface RecommendedProductsProducts {
    url: string;
    image: string;
    name: string;
    price: string | number;
}

export interface RecommendedProductsProps {
    mainHeading: string;
    products?: RecommendedProductsProducts[];
    image: string;
    heading: string;
    text: string;
    buttonText: string;
}

const RecommendedProducts: React.FC<RecommendedProductsProps>;

export default RecommendedProducts;
