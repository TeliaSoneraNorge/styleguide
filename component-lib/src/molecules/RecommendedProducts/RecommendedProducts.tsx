import React from 'react';

import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

type Props = {
    mainHeading: string;
    products?: {
        url: string;
        image: string;
        name: string;
        price: string | number;
    }[];
    image: string;
    heading: string;
    text: string;
    buttonText: string;
};

/**
 * Status: *Finished*.
 * Category: Hardware
 */
const RecommendedProducts = ({ mainHeading, products = [], image, heading, text, buttonText }: Props) => (
  <div className="recommended-products">
    {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '1 | 2 | 3... Remove this comment to see the full error message */}
    <Heading level="2" text={mainHeading} className="recommended-products__heading" />
    <div className="recommended-products__products">
      {products.map(product => (
        <div key={product.name} className="recommended-products__item-container">
          <a className="recommended-products__item recommended-products__product" href={product.url}>
            <div className="recommended-products__product-image-container">
              <img className="recommended-products__product-image" src={product.image} />
            </div>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '1 | 2 | 3... Remove this comment to see the full error message */}
            <Heading level="3" text={product.name} className="recommended-products__product-name" />
            <p className="recommended-products__product-price">{product.price},-</p>
          </a>
        </div>
      ))}
      <div className="recommended-products__item-container recommended-products__teaser-container">
        <div className="recommended-products__item recommended-products__teaser">
          <div className="recommended-products__teaser-image-container">
            <img className="recommended-products__teaser-image" src={image} />
          </div>
          {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '1 | 2 | 3... Remove this comment to see the full error message */}
          <Heading level="3" text={heading} />
          <p className="paragraph">{text}</p>
          <Button text={buttonText} size="small" />
        </div>
      </div>
    </div>
  </div>
);

export default RecommendedProducts;
