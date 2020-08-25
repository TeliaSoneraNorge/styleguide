import React from 'react';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type Props = {
    topText?: string;
    extraGB?: string;
    extraPrice?: string;
    data?: string;
    monthlyPrice?: string;
    simIncluded?: boolean;
    bottomText?: string;
};

/**
 * Status: *finished*.
 * Category: Boxes
 **/

// @ts-expect-error ts-migrate(2339) FIXME: Property 'size' does not exist on type 'Props'.
const SubscriptionPriceBox = ({ topText, extraGB, extraPrice, data, monthlyPrice, simIncluded, bottomText, size }: Props) => (
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

export default SubscriptionPriceBox;
