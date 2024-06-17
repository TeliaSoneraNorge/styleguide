import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../../atoms/Icon';
import { DisclaimerItem } from './types';

interface Props {
  disclaimer: string | DisclaimerItem[];
  onOpenDisclaimer?: () => void;
}

const ShoppingCartDisclaimerSection = ({ disclaimer, onOpenDisclaimer }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Single disclaimer
  if (typeof disclaimer === 'string') return <div className="telia-shopping-cart-single-disclaimer">{disclaimer}</div>;

  // Multiple disclaimers
  const minimumTotalPrice = disclaimer.reduce((acc, cur) => acc + cur.total, 0);
  return (
    <div
      className="telia-shopping-cart-disclaimer"
      onClick={() => {
        setIsExpanded(!isExpanded);
        if (!isExpanded && onOpenDisclaimer) {
          onOpenDisclaimer();
        }
      }}
    >
      <div className="telia-shopping-cart-disclaimer__header">
        <div className="telia-shopping-cart-disclaimer__header-left">
          {isExpanded ? (
            <ChevronUpIcon className="telia-shopping-cart-disclaimer__icon" />
          ) : (
            <ChevronDownIcon className="telia-shopping-cart-disclaimer__icon" />
          )}
          {<span>Minste totalpris</span>}
        </div>
        {!isExpanded && <span>{minimumTotalPrice},-</span>}
      </div>
      {isExpanded && (
        <div>
          {disclaimer.map((disclaimerItem, index) => {
            return (
              <div className="telia-shopping-cart-disclaimer__item" key={index}>
                <div>{disclaimerItem.name}</div>
                <div className="telia-shopping-cart-disclaimer__item-total">{disclaimerItem.total},-</div>
                <div className="telia-shopping-cart-disclaimer__item-subtitle">{disclaimerItem.description}</div>
              </div>
            );
          })}
          <div className="telia-shopping-cart-disclaimer__item telia-shopping-cart-disclaimer__total">
            <div>Minste totalpris</div>
            <div className="telia-shopping-cart-disclaimer__item-total">{minimumTotalPrice},-</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartDisclaimerSection;
