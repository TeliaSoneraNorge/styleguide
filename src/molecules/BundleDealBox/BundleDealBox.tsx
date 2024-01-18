import React from 'react';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';

type FlashText = {
  text: string;
  textColor: string;
  color: string;
};

type BundleDealBoxProps = {
  flashText?: FlashText;
  image: {
    url: string;
  };
  productName: string;
  description?: string;
  discountPrice: string;
  salesPrice: string;
  disclaimer: string;
  buttonText?: string;
  url: string;
};

const BundleDealBox: React.FC<BundleDealBoxProps> = ({
  flashText,
  image,
  productName,
  description,
  discountPrice,
  salesPrice,
  disclaimer,
  buttonText,
  url,
}) => {
  return (
    <div className="telia-bundle-deal-box">
      {flashText && (
        <div className="telia-bundle-deal-box__flashText-container">
          <div
            className="telia-bundle-deal-box__flashText"
            style={{ color: flashText.textColor, backgroundColor: flashText.color }}
          >
            {flashText.text}
          </div>
        </div>
      )}
      <a href={url} className="telia-bundle-deal-box__wrapper">
        <div className="telia-bundle-deal-box__upper-container">
          {image ? (
            <div className="telia-bundle-deal-box__product-image-container">
              <img loading="lazy" className="telia-bundle-deal-box__product-image" src={`${image.url}?w=180`} alt="" />
            </div>
          ) : null}
          <Heading tag="h2" size="s" text={productName} />
          {description && (
            <div
              className="telia-bundle-deal-box__description paragraph"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
        <div className="telia-bundle-deal-box__lower-container">
          <div className="telia-bundle-deal-box__price-container">
            <span className="telia-bundle-deal-box__price-container--strikethrough">{discountPrice}</span>
            <span className="telia-bundle-deal-box__price-container--salesPrice">{salesPrice}</span>
          </div>
          <div className="telia-bundle-deal-box__disclaimer">{disclaimer}</div>
        </div>
      </a>
    </div>
  );
};

export default BundleDealBox;
