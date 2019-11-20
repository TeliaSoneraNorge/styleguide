import React from 'react';
import { ProductPromoBox } from '@telia/styleguide';

const ProductPromoBoxWithoutPrice = () => (
  <ProductPromoBox
    id="box-3"
    productName="iPhone 9"
    imagePath={require('assets/website-images/iPhone.png')}
    speechBubbleText=""
    description="Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
    price=""
    priceSmallprint1=""
    priceSmallprint2=""
    hideButton
    buttonText=""
  />
);

export default ProductPromoBoxWithoutPrice;
