import React from 'react';
import classnames from 'classnames';

/**
 * Status: *in progress*.
 * Category: Boxes
 *
 * The PromoBox is created to display a promoted feature.
 * It can be animated by adding class name promo-box__animated
 */
const PromoBox = ({
  className,
  animated,
  imgSrc,
  imgAlt,
  children
}: any) => (
  <div
    className={classnames('promo-box', {
      'promo-box--animated': animated,
      'promo-box--with-image': !!imgSrc,
      [className]: className,
    })}
  >
    <div className="promo-box__outer-wrapper">
      <div className="promo-box__content">{children}</div>
      {imgSrc && <img className="promo-box__image" alt={imgAlt} src={imgSrc} />}
    </div>
  </div>
);

export default PromoBox;
