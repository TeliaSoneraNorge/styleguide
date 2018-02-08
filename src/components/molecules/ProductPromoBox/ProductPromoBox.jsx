import React from 'react';

import Box from '../../atoms/Box/Box';

function classNames(isShowingFeature) {
    const classNames = ['product-promo-box'];
    if (isShowingFeature) {
        classNames.push('product-promo-box--is-showing-feature');
    }
    return classNames.join(' ');
}

/**
 * Status: *finished*.
 *
 * A ProductPromoBox component use the default <a href="/components/atoms#Box">Box</a> component.
 * The content within this box presents a product with a name, image, price and short description.
 *
 * We recommend a short description and minimal 'smallprint' text below the price.
 *
 * If multiple of these promo boxes will be used on a page, a regular button can be used
 * instead of the primary button.
 */
const ProductPromoBox = ({ id, productName, productColor, imagePath, description, price, priceSmallprint1, priceSmallprint2, buttonText, isShowingFeatures, speechBubbleText }) =>
    <Box id={id} className={classNames(isShowingFeatures)} color="grey" canExpand={false} isShowingFeatures={isShowingFeatures} speechBubbleText={speechBubbleText}>
        <div className="product-promo-box__image-container">
            <img className="product-promo-box__image" src={imagePath} alt={productName}/>
        </div>
        <div className="product-promo-box__content-container">
            <div className="product-promo-box__content">
                <h2 className="heading heading--level-2 product-promo-box__product-name">{productName}</h2>
                <div className="product-promo-box__description">{description}</div>
            </div>
            <div className="product-promo-box__price-and-action">
                <div className="product-promo-box__price-info">
                    <span className="product-promo-box__price">{price},-</span>
                    <span className="product-promo-box__price-smallprint">{priceSmallprint1}</span>
                    <div className="product-promo-box__price-smallprint">{priceSmallprint2}</div>
                </div>
                <div className="product-promo-box__button-container">
                    <button className="button button--primary">{buttonText}</button>
                </div>
            </div>
        </div>
    </Box>;

export default ProductPromoBox;
