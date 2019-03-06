import React from 'react';
import { ProductPromoBox } from '@telia/styleguide';

const ProductPromoBoxesInGrid = () => (
    <div className="product-promo-box-grid">
        <ProductPromoBox
            id="box-5"
            productName="iPhone 9"
            imagePath={require('../../../../assets/website-images/iPhone.png')}
            speechBubbleText=""
            description="Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
            price=""
            priceSmallprint1=""
            priceSmallprint2=""
            hideButton
            buttonText="" />
        <ProductPromoBox
            id="box-6"
            productName="iPhone 9"
            imagePath={require('../../../../assets/website-images/iPhone.png')}
            speechBubbleText=""
            description="Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
            price=""
            priceSmallprint1=""
            priceSmallprint2=""
            buttonText=""
            hideButton
            isSmallBox />
        <ProductPromoBox
            id="box-7"
            productName="iPhone 9"
            imagePath={require('../../../../assets/website-images/iPhone.png')}
            speechBubbleText=""
            description="Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
            price=""
            priceSmallprint1=""
            priceSmallprint2=""
            buttonText=""
            hideButton
            isSmallBox />
    </div>

);

export default ProductPromoBoxesInGrid;