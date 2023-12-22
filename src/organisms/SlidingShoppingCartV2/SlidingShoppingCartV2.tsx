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

  useEscapeListener({ onEscape: () => setShouldShowCart(false) });
  useClickOutsideListener({
    open: shouldShowCart,
    close: () => setShouldShowCart(false),
    ref,
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
            ref={ref}
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
                  <Heading tag="h2" size="s">
                    {priceUpfront ? `${priceUpfront},-` : `${pricePerMonth},-/md.`}
                  </Heading>
                </div>
              )}
              <Button
                className="telia-sliding-shopping-cart-mobile__wrapper--button"
                icon={shouldShowCart ? 'chevron-down' : 'chevron-up'}
                onClick={() => setShouldShowCart(!shouldShowCart)}
                kind="link"
              />
            </div>
            {shouldShowCart && children}
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
