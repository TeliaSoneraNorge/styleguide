import React from 'react';

import Box from '../../atoms/Box/Box';

function classNames(isShowingCampaign) {
    const classNames = ['product-promo-box'];
    if (isShowingCampaign) {
        classNames.push('product-promo-box--is-showing-campaign');
    }
    return classNames.join(' ');
}
/**
 * Status: *in progress*.
 *
 * A ProductPromoBox component use the default <a href="/components/atoms#Box">Box</a> component.
 * The content within this box presents a product with a name, image, price and short description.
 */
const ProductPromoBox = ({ id, productName, productColor, imagePath, description, monthlyPrice, totalPrice, buttonText, isShowingCampaign }) => {
    const imageAltText = `${productName}`;
    return (
        <Box color="grey" id={id} canExpand={false}>
            <section className={classNames(isShowingCampaign)}>
                <img className="product-promo-box__image" src={imagePath} alt={imageAltText}/>
                <h2 className="heading heading--level-2 product-promo-box__product-name">{productName}</h2>
                <div className="product-promo-box__text">
                    <div className="product-promo-box__description">{description}</div>
                    <div className="product-promo-box__monthly-price">
                        <span className="product-promo-box__monthly-price-number">{monthlyPrice}</span>/mnd
                    </div>
                    <div className="product-promo-box__total-price">{totalPrice},- totalt</div>
                    <button className="button button--small product-promo-box__button">{buttonText}</button>
                </div>
            </section>
        </Box>);
};

export default ProductPromoBox;
