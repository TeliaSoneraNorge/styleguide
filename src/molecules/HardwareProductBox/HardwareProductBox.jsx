import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../../atoms/Icon/Icon';
import Image from '../Image/Image';
import Heading from '../../atoms/Heading/Heading';
import logo from '../../stories/sampleImages';

/**
 * Status: *Finished*.
 * Category: Hardware
 */
const HardwareProductBox = ({
  className,
  campaign,
  url,
  brand,
  is5G,
  highlight,
  onClick,
  status,
  children,
  image,
  name,
  ...rest
}) => (
  <a className={classNames('hardware-product', className)} href={url} onClick={onClick} {...rest}>
    {campaign ? (
      <div
        style={{ backgroundColor: campaign.backgroundColor, color: campaign.color }}
        className="hardware-product__product-campaign"
      >
        {campaign.text}
      </div>
    ) : null}
    <div className="hardware-product__upper-container">
      {highlight && (
        <div style={{ backgroundColor: highlight.color }} className="hardware-product__highlight-container">
          <div className="hardware-product__highlight-container--wrapper">
            <Icon className="hardware-product__highlight-container--icon" icon={highlight.icon} />
            <span className="hardware-product__highlight-container--heading">{highlight.heading}</span>
            <span className="hardware-product__highlight-container--text">{highlight.text}</span>
          </div>
        </div>
      )}
      {is5G && !highlight && (
        <div className="hardware-product__five-g-container">
          <Image src={logo.fiveG}></Image>
        </div>
      )}
      {image ? (
        <div className="hardware-product__product-image-container">
          <img className="hardware-product__product-image" src={`${image.url}?h=239`} />
        </div>
      ) : null}
    </div>
    <div className="hardware-product__lower-container">
      <Heading level={3} text={brand} className="hardware-product__product-brand" />
      <Heading level={3} text={name} className="hardware-product__product-name" />
      <hr className={'horizontal-rule horizontal-rule--short'} />
      {children}
    </div>
  </a>
);

HardwareProductBox.propTypes = {
  campaign: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  highlight: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
  url: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  image: PropTypes.string,
  name: PropTypes.string,
};
export default HardwareProductBox;
