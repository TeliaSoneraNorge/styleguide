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
      <div className="telia-bundle-deal-box__flashText-container">
        {flashText && (
          <div
            className="telia-bundle-deal-box__flashText"
            style={{ color: flashText.textColor, backgroundColor: flashText.color }}
          >
            {flashText.text}
          </div>
        )}
      </div>
      <div className="telia-bundle-deal-box__image-container">
        <img loading="lazy" className="telia-bundle-deal-box__product-image" src={`${image.url}?w=180`} alt="" />
      </div>
      <div className="telia-bundle-deal-box__upper-container">
        <Heading tag="h2" size="s" text={productName} />
        {description && (
          <div
            className="telia-bundle-deal-box__description paragraph"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        <div className="telia-bundle-deal-box__price-container">
          <span className="telia-bundle-deal-box__price-container--strikethrough">{discountPrice}</span>
          <span className="telia-bundle-deal-box__price-container--salesPrice">{salesPrice}</span>
        </div>
        <div className="telia-bundle-deal-box__disclaimer">{disclaimer}</div>
        {buttonText && <Button className="telia-bundle-deal-box__link" component="link" href={url} text={buttonText} />}
      </div>
    </div>
  );
};

export default BundleDealBox;
