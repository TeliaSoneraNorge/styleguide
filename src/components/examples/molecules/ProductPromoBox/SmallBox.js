import React from 'react';
import { ProductPromoBox } from '@telia/styleguide';

const ProductPromoBoxSmallBox = () => (
  <ProductPromoBox
    id="box-4"
    productName="iPhone 9"
    imagePath={require('assets/website-images/iPhone.png')}
    speechBubbleText=""
    description="Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
    price="329"
    priceSmallprint1="/md. med Svitsj"
    priceSmallprint2="Total tlf.pris 24 md. 17 891,-"
    hideButton
    buttonText=""
    isSmallBox
  />
);

export default ProductPromoBoxSmallBox;
