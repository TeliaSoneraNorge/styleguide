import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *finished*.
 * Category: Boxes
 **/

const SubscriptionPriceBox = ({ topText, extraGB, extraPrice, data, monthlyPrice, simIncluded, bottomText, size }) => (
  <div className="subscription-price-box">
    {topText && <p className="subscription-price-box__top-text">{topText}</p>}
    <div className={`subscription-price-box__square subscription-price-box__square-${size}`}>
      <div className="subscription-price-box__square__extra">
        <p className="subscription-price-box__square__extra-gb">{extraGB}</p>
        <p className="subscription-price-box__square__extra-price">{extraPrice}</p>
      </div>
      <p className="subscription-price-box__square__data-purple">{data}</p>
    </div>
    <p className="subscription-price-box__data">{data}</p>
    <p className="subscription-price-box__monthly-price">{monthlyPrice}</p>
    <div className={`${simIncluded ? 'subscription-price-box__sim' : 'subscription-price-box__sim-hidden'}`}>
      <SvgIcon
        aria-hidden="true"
        className="subscription-price-box__sim-icon"
        iconName="ico_subscription"
        color="black"
      />
      {bottomText}
    </div>
  </div>
);

SubscriptionPriceBox.protoTypes = {
  topText: PropTypes.string,
  extraGB: PropTypes.string,
  extraPrice: PropTypes.string,
  data: PropTypes.string,
  monthlyPrice: PropTypes.string,
  simIncluded: PropTypes.bool,
  bottomText: PropTypes.string,
};

export default SubscriptionPriceBox;
