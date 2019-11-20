import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Heading from '../../atoms/Heading/Heading';

/**
 * Status: *Finished*.
 * Category: Hardware
 */
const HardwareProduct = ({
  className,
  campaign,
  url,
  onClick,
  image,
  name,
  priceDescription,
  price,
  priceDisclaimerLine1,
  priceDisclaimerLine2,
  ...rest
}) => (
  <a className={classNames('hardware-product', className)} href={url} onClick={onClick} {...rest}>
    <div className="hardware-product__upper-container">
      {image ? (
        <div className="hardware-product__product-image-container">
          <img className="hardware-product__product-image" src={image} />
        </div>
      ) : null}
      {campaign ? (
        <div
          style={{ backgroundColor: campaign.backgroundColor, color: campaign.color }}
          className="hardware-product__product-campaign"
        >
          {campaign.text}
        </div>
      ) : null}
    </div>
    <div className="hardware-product__lower-container">
      <Heading level={3} text={name} className="hardware-product__product-name" />
      {priceDescription ? <div className="hardware-product__product-price-decription">{priceDescription}</div> : null}
      <div className="hardware-product__product-price">{price},-</div>
      <div className="hardware-product__product-price-disclaimer">
        {priceDisclaimerLine1}
        {priceDisclaimerLine2 && (
          <React.Fragment>
            <br />
            {priceDisclaimerLine2}
          </React.Fragment>
        )}
      </div>
    </div>
  </a>
);

HardwareProduct.propTypes = {
  campaign: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  url: PropTypes.string,
  onClick: PropTypes.func,
  image: PropTypes.string,
  name: PropTypes.string,
  priceDescription: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  priceDisclaimerLine1: PropTypes.node,
  priceDisclaimerLine2: PropTypes.node,
};
export default HardwareProduct;
