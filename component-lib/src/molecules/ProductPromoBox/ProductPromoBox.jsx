import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Box from '../../atoms/Box/Box';
import Heading from '../../atoms/Heading/Heading';

/**
 * Status: *finished*.
 * Category: Hardware
 *
 * A ProductPromoBox component use the default <a href="/components/atoms#Box">Box</a> component.
 * The content within this box presents a product with a name, image, price and short description.
 *
 * We recommend a short description and minimal 'smallprint' text below the price.
 *
 * If multiple of these promo boxes will be used on a page, a regular button can be used
 * instead of the primary button.
 */
const ProductPromoBox = ({
    id,
    productName,
    isSmallBox,
    imagePath,
    description,
    price,
    priceSmallprint1,
    priceSmallprint2,
    hideButton,
    buttonText,
    isShowingFeatures,
    speechBubbleText,
    showActionOnNewLine,
    onClick
}) =>
    <Box
        id={id}
        className={classnames('product-promo-box', {
            'product-promo-box--is-showing-feature': isShowingFeatures,
            'product-promo-box--small': isSmallBox
        })}
        color="grey"
        canExpand={false}
        isShowingFeatures={isShowingFeatures}
        speechBubbleText={speechBubbleText}>
        <div className="product-promo-box__image-container">
            <img className="product-promo-box__image" src={imagePath} alt={productName} />
        </div>
        <div className="product-promo-box__content-container">
            <div className="product-promo-box__content">
                <h2 className="heading heading--level-2 product-promo-box__product-name">{productName}</h2>
                <div className="product-promo-box__description">{description}</div>
            </div>
            <div
                className={classnames('product-promo-box__price-and-action', {
                    'product-promo-box__price-and-action-inline': !showActionOnNewLine
                })}>
                {price &&
                    <div className="product-promo-box__price-info">
                        <span className="product-promo-box__price">{price},-</span>
                        <span className="product-promo-box__price-smallprint">{priceSmallprint1}</span>
                        <div className="product-promo-box__price-smallprint">{priceSmallprint2}</div>
                    </div>
                }
                {!hideButton
                    ? <button className="button button--primary button--margin-top" onClick={onClick}>{buttonText}</button>
                    : <Heading level={3} text="Coming soon" className="product-promo-box__text-instead-of-button" />
                }
            </div>
        </div>
    </Box>;

ProductPromoBox.propTypes = {
    id: PropTypes.string,
    productName: PropTypes.string,
    productColor: PropTypes.string,
    isSmallBox: PropTypes.bool,
    imagePath: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    priceSmallprint1: PropTypes.string,
    priceSmallprint2: PropTypes.string,
    hideButton: PropTypes.bool,
    buttonText: PropTypes.string,
    isShowingFeatures: PropTypes.bool,
    speechBubbleText: PropTypes.string,
    onClick: PropTypes.func
};

export default ProductPromoBox;
