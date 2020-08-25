import React from 'react';
import classNames from 'classnames';

import Heading from '../../atoms/Heading/Heading';

type Props = {
    campaign?: {
        backgroundColor: string;
        color: string;
        text: string;
    };
    url?: string;
    onClick?: (...args: any[]) => any;
    image?: string;
    name?: string;
    priceDescription?: string;
    price?: string | number;
    priceDisclaimerLine1?: React.ReactNode;
    priceDisclaimerLine2?: React.ReactNode;
};

/**
 * Status: *Finished*.
 * Category: Hardware
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Props... Remove this comment to see the full error message
const HardwareProduct = ({ className, campaign, url, onClick, image, name, priceDescription, price, priceDisclaimerLine1, priceDisclaimerLine2, ...rest }: Props) => (
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
export default HardwareProduct;
