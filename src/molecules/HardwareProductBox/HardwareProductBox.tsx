import React from 'react';
import classNames from 'classnames';
import { Icon } from '../../atoms/Icon/Icon';
import Heading from '../../atoms/Heading/Heading';
import { IconDefinition } from '../../atoms/Icon';
import { isEmpty } from 'lodash';

/**
 * Status: *Finished*.
 * Category: Hardware
 */

interface HardwareProductCampaign {
  backgroundColor: string;
  color: string;
  text: string;
}

interface Highlight {
  heading?: string;
  text?: string;
  icon?: IconDefinition;
  color?: string;
  textColor?: string;
}

export interface HardwareProductProps {
  className?: string;
  brand: string;
  is5G?: boolean;
  campaign?: HardwareProductCampaign | null;
  highlight?: Highlight;
  image?: {
    url: string;
  };
  name?: string;
  children?: React.ReactNode;
}

const HardwareProductBox = ({
  className,
  campaign,
  brand,
  is5G,
  highlight,
  children,
  image,
  name,
  ...rest
}: HardwareProductProps) => (
  <div className={classNames('hardware-product-box', className)} {...rest}>
    {campaign ? (
      <div
        style={{ backgroundColor: campaign.backgroundColor, color: campaign.color }}
        className="hardware-product-box__product-campaign"
      >
        {campaign.text}
      </div>
    ) : null}
    <div className="hardware-product-box__upper-container">
      {highlight && !isEmpty(highlight) && (
        <div
          style={{ backgroundColor: highlight.color, color: highlight.textColor || '#fffff' }}
          className="hardware-product-box__highlight-container"
        >
          <div className="hardware-product-box__highlight-container--wrapper">
            {highlight.icon && (
              <Icon className="hardware-product-box__highlight-container--icon" icon={highlight.icon} />
            )}
            {highlight.heading && (
              <span className="hardware-product-box__highlight-container--heading">{highlight.heading}</span>
            )}
            {highlight.text && (
              <span className="hardware-product-box__highlight-container--text">{highlight.text}</span>
            )}
          </div>
        </div>
      )}
      {is5G && !highlight && <Icon className="hardware-product-box__five-g-container" icon="five-g" />}
      {image ? (
        <div className="hardware-product-box__product-image-container">
          <img loading="lazy" className="hardware-product-box__product-image" src={`${image.url}?w=180`} alt="" />
        </div>
      ) : null}
    </div>
    <div className="hardware-product-box__lower-container">
      <div className="hardware-product-box__name-wrapper">
        <Heading level={3} text={brand} className="hardware-product-box__product-brand" />
        <Heading level={3} text={name} className="hardware-product-box__product-name" />
        <hr className={'horizontal-rule horizontal-rule--short'} />
      </div>
      {children}
    </div>
  </div>
);

export default HardwareProductBox;
