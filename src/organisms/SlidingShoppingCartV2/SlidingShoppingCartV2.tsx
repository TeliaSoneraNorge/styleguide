import React, { useRef } from 'react';
import cn from 'classnames';
import { useClickOutsideListener } from '../SlidingShoppingCart/useClickOutsideListener';
import { useFocusTrap } from '../../utils/useFocusTrap';
import { useEscapeListener } from '../../molecules/Modal/useEscapeListener';
import { Icon } from '../../atoms/Icon';
import { Badge } from '../../atoms/Badge';
import Heading from '../../atoms/Heading';
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
          <div
            className={cn('telia-sliding-shopping-cart-mobile', {
              'telia-sliding-shopping-cart-mobile--expanded': shouldShowCart,
            })}
          >
            <div
              className={cn('telia-sliding-shopping-cart-mobile__wrapper', {
                'telia-sliding-shopping-cart-mobile__wrapper--open': shouldShowCart,
              })}
            >
              {!shouldShowCart && (
                <div className="telia-sliding-shopping-cart-mobile__wrapper--cart">
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

              {!!numberOfItemsInCart && (
                <button
                  className="telia-sliding-shopping-cart-mobile__trigger"
                  onClick={() => (shouldShowCart ? null : setShouldShowCart(!shouldShowCart))}
                  ref={buttonRef}
                >
                  <Badge text={`${numberOfItemsInCart}`} status="ok">
                    <Icon icon="shoppingcart" className="telia-sliding-shopping-cart-mobile__trigger-icon" />
                  </Badge>
                </button>
              )}
            </div>
            {shouldShowCart && <div className="telia-sliding-shopping-cart-mobile__content">{children}</div>}
          </div>
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
