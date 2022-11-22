import React from 'react';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';

type FlashText = {
  text: string;
  textColor: string;
  color: string;
};

type BundleDealBoxProps = {
  flashText: FlashText;
  image: {
    url: string;
  };
  productName: string;
  description: string;
  discountPrice: string;
  salesPrice: string;
  disclaimer: string;
  buttonText: string;
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
    <div className="bundleDealBox">
      <div className="bundleDealBox__flashText-container">
        <div
          className="bundleDealBox__flashText"
          style={{ color: flashText.textColor, backgroundColor: flashText.color }}
        >
          {flashText.text}
        </div>
      </div>
      <div className="bundleDealBox__image-container">
        <img loading="lazy" className="bundleDealBox__product-image" src={`${image.url}?w=180`} alt="" />
      </div>
      <div className="bundleDealBox__upper-container">
        <Heading tag="h2" size="s" text={productName} />
        <div>{description}</div>
        <div className="bundleDealBox__price-container">
          <span className="bundleDealBox__price-container--strikethrough">{discountPrice}</span>
          <span className="bundleDealBox__price-container--salesPrice">{salesPrice}</span>
        </div>
        <div>{disclaimer}</div>
        <Button className="bundleDealBox__link" href={url} text={buttonText} />
      </div>
    </div>
  );
};

export default BundleDealBox;
