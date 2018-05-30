import React from 'react';
import { ProductPromoBox } from '@telia/styleguide';

const ProductPromoBoxWithCampaign = () => (
    <ProductPromoBox
        id='box-2'
        productName='Sony Xperia XZ1'
        imagePath='http://via.placeholder.com/140x280'
        speechBubbleText='Some speech bubble text!'
        description='Forhåndssalg på Sony Xperia XZ1!'
        price='329'
        priceSmallprint1=''
        priceSmallprint2='per md. 7891,- totalt'
        buttonText='Les mer'
        isShowingFeatures
    />
);

export default ProductPromoBoxWithCampaign;