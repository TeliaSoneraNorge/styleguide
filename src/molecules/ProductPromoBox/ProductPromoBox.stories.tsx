import React, { useState } from 'react';
import { ProductPromoBox } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Molecules/ProductPromoBox',
  component: ProductPromoBox,
};

export const Default = () => (
  <ProductPromoBox
    id="box-1"
    productName="Sony Xperia XZ1"
    imagePath="http://via.placeholder.com/140x280"
    description="Forhåndssalg på Sony Xperia XZ1!"
    price="329"
    priceSmallprint1="/md. med Svitsj"
    priceSmallprint2="Total tlf.pris 24 md. 17 891,-"
    buttonText="Les mer"
  />
);

export const ProductPromoBoxesInGrid = () => (
  <div className="product-promo-box-grid">
    <ProductPromoBox
      id="box-5"
      productName="iPhone 9"
      imagePath={img.iPhone}
      speechBubbleText=""
      description="Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
      price=""
      priceSmallprint1=""
      priceSmallprint2=""
      hideButton
      buttonText=""
    />
    <ProductPromoBox
      id="box-6"
      productName="iPhone 9"
      imagePath={img.iPhone}
      speechBubbleText=""
      description="Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
      price=""
      priceSmallprint1=""
      priceSmallprint2=""
      buttonText=""
      hideButton
      isSmallBox
    />
    <ProductPromoBox
      id="box-7"
      productName="iPhone 9"
      imagePath={img.iPhone}
      speechBubbleText=""
      description="Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
      price=""
      priceSmallprint1=""
      priceSmallprint2=""
      buttonText=""
      hideButton
      isSmallBox
    />
  </div>
);

export const ProductPromoBoxSmallBox = () => (
  <ProductPromoBox
    id="box-4"
    productName="iPhone 9"
    imagePath={img.iPhone}
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

export const WithActionOnNewLine = () => (
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

export const ProductPromoBoxWithCampaign = () => (
  <ProductPromoBox
    id="box-2"
    productName="Sony Xperia XZ1"
    imagePath="http://via.placeholder.com/140x280"
    speechBubbleText="Some speech bubble text!"
    description="Forhåndssalg på Sony Xperia XZ1!"
    price="329"
    priceSmallprint1=""
    priceSmallprint2="per md. 7891,- totalt"
    buttonText="Les mer"
    isShowingFeatures
  />
);

export const ProductPromoBoxWithoutPrice = () => (
  <ProductPromoBox
    id="box-3"
    productName="iPhone 9"
    imagePath={img.iPhone}
    speechBubbleText=""
    description="Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
    price=""
    priceSmallprint1=""
    priceSmallprint2=""
    hideButton
    buttonText=""
  />
);