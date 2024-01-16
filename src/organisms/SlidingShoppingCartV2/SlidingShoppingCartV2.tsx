import React, { useRef } from 'react';
import cn from 'classnames';
import { useClickOutsideListener } from '../SlidingShoppingCart/useClickOutsideListener';
import { useFocusTrap } from '../../utils/useFocusTrap';
import { useEscapeListener } from '../../molecules/Modal/useEscapeListener';
import { Icon } from '../../atoms/Icon';
import { Badge } from '../../atoms/Badge';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import { useBreakpoint } from '../../utils/useBreakpoint';

export interface SlidingShoppingCartV2Props {
  shouldShowCart: boolean;
  showMobileCart?: boolean;
  children: React.ReactNode;
  setShouldShowCart(shouldShowCart: boolean): void;
  numberOfItemsInCart?: number;
  pricePerMonth?: number;
  priceUpfront?: number;
}

const SlidingShoppingCartV2 = ({
  setShouldShowCart,
  shouldShowCart,
  showMobileCart = false,
  children,
  numberOfItemsInCart,
  pricePerMonth,
  priceUpfront,
}: SlidingShoppingCartV2Props) => {
  const { container } = useFocusTrap();
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEscapeListener({ onEscape: () => setShouldShowCart(false) });
  useClickOutsideListener({
    open: shouldShowCart,
    close: () => setShouldShowCart(false),
    ref,
    buttonRef,
  });

  const xs = useBreakpoint('xs');
  const isMobile = !xs;

  return showMobileCart ? (
    <div ref={container}>
      {isMobile && (
        <>
          <div className={cn({ 'telia-sliding-shopping-cart__overlay': shouldShowCart })} />
          <button
            className={cn('telia-sliding-shopping-cart-mobile', {
              'telia-sliding-shopping-cart-mobile--expanded': shouldShowCart,
            })}
            onClick={() => (shouldShowCart ? null : setShouldShowCart(!shouldShowCart))}
            ref={buttonRef}
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
                      <span>Å betale nå:</span>
                    </div>
                    <div className="telia-sliding-shopping-cart-mobile__price">
                      <Heading tag="h2" size="xs">
                        {pricePerMonth || 0},-/md.
                      </Heading>
                      <Heading tag="h2" size="xs">
                        {priceUpfront || 0},-
                      </Heading>
                    </div>
                  </div>
                </div>
              )}
              <Button
                className="telia-sliding-shopping-cart-mobile__wrapper--button"
                icon={shouldShowCart ? 'chevron-down' : 'chevron-up'}
                kind="link"
                onClick={() => (shouldShowCart ? setShouldShowCart(!shouldShowCart) : null)}
              />
            </div>
            {shouldShowCart && <div className="telia-sliding-shopping-cart-mobile__content">{children}</div>}
          </button>
        </>
      )}
      {!isMobile && (
        <aside
          ref={ref}
          className={cn('telia-sliding-shopping-cart__container', {
            'telia-sliding-shopping-cart__container--show': shouldShowCart,
          })}
        >
          <button className="telia-sliding-shopping-cart__close-button" onClick={() => setShouldShowCart(false)}>
            <Icon icon="close" />
          </button>
          {children}
        </aside>
      )}
    </div>
  ) : (
    <div ref={container}>
      <aside
        ref={ref}
        className={cn('telia-sliding-shopping-cart__container', {
          'telia-sliding-shopping-cart__container--show': shouldShowCart,
        })}
      >
        <button className="telia-sliding-shopping-cart__close-button" onClick={() => setShouldShowCart(false)}>
          <Icon icon="close" />
        </button>
        {children}
      </aside>
    </div>
  );
};

export default SlidingShoppingCartV2;
