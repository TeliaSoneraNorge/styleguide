import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../../atoms/Icon';
import { DisclaimerItem } from './types';

const getFinancingText = (financing: string, leaseMonths?: string | number, monthlyPrice?: number) => {
  switch (financing) {
    case 'commitment':
      return `Bindingstid i 12 md. – ${monthlyPrice},-/md`;
    case 'lease':
      if (leaseMonths === 0) {
        return '';
      }
      return `Delbetaling i ${leaseMonths} md. – ${monthlyPrice},-/md`;
    case 'switch':
    case 'reswitch':
      return `Svitsj i 24 mnd – ${monthlyPrice},-/md`;
    case 'simonly':
      return 'Ingen bindingstid';
    default:
      return '';
  }
};

interface Props {
  disclaimer: string | DisclaimerItem[];
  onOpenDisclaimer?: () => void;
}

const ShoppingCartDisclaimerSection = ({ disclaimer, onOpenDisclaimer }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Single disclaimer
  if (typeof disclaimer === 'string') return <div className="telia-shopping-cart-single-disclaimer">{disclaimer}</div>;

  const minimumTotalPrice = disclaimer.reduce((acc, cur) => acc + cur.total, 0);

  // Multiple disclaimers
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
        <div className="telia-shopping-cart-disclaimer__icon">
          {isExpanded ? (
            <ChevronUpIcon className="telia-shopping-cart-disclaimer__icon" />
          ) : (
            <ChevronDownIcon className="telia-shopping-cart-disclaimer__icon" />
          )}
        </div>
        <span>Minste totalpris</span>
      </div>
      {isExpanded && (
        <div>
          {disclaimer.map((disclaimerItem) => {
            const financingText = getFinancingText(
              disclaimerItem.financing,
              disclaimerItem.leaseMonths,
              disclaimerItem.monthlyPrice
            );
            return (
              <div className="telia-shopping-cart-disclaimer__item">
                <div>{disclaimerItem.name}</div>
                <div className="telia-shopping-cart-disclaimer__item-total">{disclaimerItem.total},-</div>
                <div className="telia-shopping-cart-disclaimer__item-subtitle">{financingText}</div>
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
