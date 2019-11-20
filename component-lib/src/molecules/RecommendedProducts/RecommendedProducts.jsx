import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

/**
 * Status: *Finished*.
 * Category: Hardware
 */
const RecommendedProducts = ({ mainHeading, products = [], image, heading, text, buttonText }) => (
  <div className="recommended-products">
    <Heading level="2" text={mainHeading} className="recommended-products__heading" />
    <div className="recommended-products__products">
      {products.map(product => (
        <div key={product.name} className="recommended-products__item-container">
          <a className="recommended-products__item recommended-products__product" href={product.url}>
            <div className="recommended-products__product-image-container">
              <img className="recommended-products__product-image" src={product.image} />
            </div>
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
          <Heading level="3" text={heading} />
          <p className="paragraph">{text}</p>
          <Button text={buttonText} size="small" />
        </div>
      </div>
    </div>
  </div>
);
RecommendedProducts.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default RecommendedProducts;
