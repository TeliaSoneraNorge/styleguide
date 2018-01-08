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
 * Status: *in progress*.
 *
 * A ProductPromoBox component use the default <a href="/components/atoms#Box">Box</a> component.
 * The content within this box presents a product with a name, image, price and short description.
 */
const ProductPromoBox = ({ id, productName, productColor, imagePath, description, monthlyPrice, totalPrice, buttonText, isShowingFeature }) => {
    const imageAltText = `${productName}`;
    return (
        <Box id={id} color="grey" canExpand={false} isShowingFeature={isShowingFeature}>
            <section className={classNames(isShowingFeature)}>
                <div className="product-promo-box__image-section">
                    <img className="product-promo-box__image" src={imagePath} alt={imageAltText}/>
                </div>
                <div className="product-promo-box__content-section">
                    <h2 className="heading heading--level-2 product-promo-box__product-name">{productName}</h2>
                    <div className="product-promo-box__description">{description}</div>
                </div>
                <div className="product-promo-box__price-section">
                    <div className="product-promo-box__monthly-price">
                        <span className="product-promo-box__monthly-price-number">{monthlyPrice}</span>/mnd
                    </div>
                    <div className="product-promo-box__total-price">{totalPrice},- totalt</div>
                    <button className="button button--primary">{buttonText}</button>
                </div>
            </section>
        </Box>
    );
};

export default ProductPromoBox;
