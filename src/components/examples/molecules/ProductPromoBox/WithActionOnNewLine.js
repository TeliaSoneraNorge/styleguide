import React from 'react';
import { ProductPromoBox } from '@telia/styleguide';

const DefaultProductPromoBox = () => (
  <ProductPromoBox
    id="box-1"
    productName="Sony Xperia XZ1"
    imagePath="http://via.placeholder.com/140x280"
    description="Forhåndssalg på Sony Xperia XZ1!"
    price="329"
    priceSmallprint1="/md. med Svitsj"
    priceSmallprint2="Total tlf.pris 24 md. 17 891,-"
    buttonText="Les mer"
    showActionOnNewLine
  />
);

export default DefaultProductPromoBox;
