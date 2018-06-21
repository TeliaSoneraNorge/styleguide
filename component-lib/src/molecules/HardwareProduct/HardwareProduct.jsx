import React from 'react';
import classNames from 'classnames';
import Heading from '../../atoms/Heading/Heading';

const HardwareProduct = ({ className, campaign, url, image, name, priceDescription, price, priceDisclaimerLine1, priceDisclaimerLine2 }) =>
    <a className={classNames('hardware-product', className)} href={url}>
        <div className="hardware-product__upper-container">
            {image ? <div className="hardware-product__product-image-container">
                <img className="hardware-product__product-image" src={image} />
            </div> : null}
            {campaign ? <div style={{ backgroundColor: campaign.backgroundColor, color: campaign.color }} className="hardware-product__product-campaign">{campaign.text}</div> : null}
        </div>
        <div className="hardware-product__lower-container">
            <Heading level="3" text={name} className="hardware-product__product-name" />
            {priceDescription ? <div className="hardware-product__product-price-decription">{priceDescription}</div> : null }
            <div className="hardware-product__product-price">{price},-</div>
            <div className="hardware-product__product-price-disclaimer">
                {priceDisclaimerLine1}
                {priceDisclaimerLine2 ? <br /> : null}
                {priceDisclaimerLine2 ? priceDisclaimerLine2 : null}
            </div>
        </div>
    </a>;

export default HardwareProduct;