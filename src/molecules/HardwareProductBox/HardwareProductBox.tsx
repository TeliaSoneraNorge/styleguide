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
  heading: string;
  text: string;
  icon: IconDefinition;
  color: string;
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
        <div style={{ backgroundColor: highlight.color }} className="hardware-product-box__highlight-container">
          <div className="hardware-product-box__highlight-container--wrapper">
            <Icon className="hardware-product-box__highlight-container--icon" icon={highlight.icon} />
            <span className="hardware-product-box__highlight-container--heading">{highlight.heading}</span>
            <span className="hardware-product-box__highlight-container--text">{highlight.text}</span>
          </div>
        </div>
      )}
      {is5G && !highlight && <div className="hardware-product-box__five-g-container" />}
      {image ? (
        <div className="hardware-product-box__product-image-container">
          <img loading="lazy" className="hardware-product-box__product-image" src={`${image.url}?w=180`} />
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
