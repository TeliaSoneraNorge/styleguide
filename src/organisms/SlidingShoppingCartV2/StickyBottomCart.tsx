import React from 'react';
import cn from 'classnames';
import { Icon } from '../../atoms/Icon';
import { Badge } from '../../atoms/Badge';
import Heading from '../../atoms/Heading';

export interface StickyBottomCartProps {
  shouldShowCart: boolean;
  showMobileCart?: boolean;
  setShouldShowCart(shouldShowCart: boolean): void;
  numberOfItemsInCart?: number;
  pricePerMonth?: number;
  priceUpfront?: number;
}

const StickyBottomCart = ({
  setShouldShowCart,
  shouldShowCart,
  numberOfItemsInCart,
  pricePerMonth,
  priceUpfront,
}: StickyBottomCartProps) => (
  <button
    className={cn('telia-sliding-shopping-cart-mobile', {
      'telia-sliding-shopping-cart-mobile--expanded': shouldShowCart,
    })}
    onClick={() => (shouldShowCart ? null : setShouldShowCart(!shouldShowCart))}
  >
    <div
      className={cn('telia-sliding-shopping-cart-mobile__wrapper', {
        'telia-sliding-shopping-cart-mobile__wrapper--open': shouldShowCart,
      })}
    >
      {!shouldShowCart && (
        <div className="telia-sliding-shopping-cart-mobile__wrapper--cart">
          {numberOfItemsInCart && (
            <Badge text={`${numberOfItemsInCart}`}>
              <Icon icon="shoppingcart" />
            </Badge>
          )}
          <div className="telia-sliding-shopping-cart-mobile__price-wrapper">
            <div className="telia-sliding-shopping-cart-mobile__price-header">
              <span>Betale pr md: </span>
              <span>Betal nå:</span>
            </div>
            <div className="telia-sliding-shopping-cart-mobile__price-container">
              <Heading className="telia-sliding-shopping-cart-mobile__price" tag="h2" size="xs">
                {pricePerMonth || 0},-/md.
              </Heading>
              <Heading className="telia-sliding-shopping-cart-mobile__price" tag="h2" size="xs">
                {priceUpfront || 0},-
              </Heading>
            </div>
          </div>
        </div>
      )}
      <span className="telia-sliding-shopping-cart-mobile__wrapper--button">
        <Icon icon={shouldShowCart ? 'chevron-down' : 'chevron-up'} />
      </span>
    </div>
  </button>
);

export default StickyBottomCart;
