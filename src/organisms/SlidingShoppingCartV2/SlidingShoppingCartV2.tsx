import React, { useRef } from 'react';
import cn from 'classnames';
import { useClickOutsideListener } from '../SlidingShoppingCart/useClickOutsideListener';
import { useFocusTrap } from '../../utils/useFocusTrap';
import { useEscapeListener } from '../../molecules/Modal/useEscapeListener';

export interface SlidingShoppingCartV2Props {
  shouldShowCart: boolean;
  children: React.ReactNode;
  setShouldShowCart(shouldShowCart: boolean): void;
}

const SlidingShoppingCartV2 = ({ setShouldShowCart, shouldShowCart, children }: SlidingShoppingCartV2Props) => {
  const { container } = useFocusTrap();
  const ref = useRef<HTMLDivElement>(null);

  useEscapeListener({ onEscape: () => setShouldShowCart(false) });
  useClickOutsideListener({
    open: shouldShowCart,
    close: () => setShouldShowCart(false),
    ref,
  });

  return (
    <div ref={container}>
      <div className={cn({ 'telia-sliding-shopping-cart__overlay': shouldShowCart })} />
      <aside
        ref={ref}
        className={cn('telia-sliding-shopping-cart__container', {
          'telia-sliding-shopping-cart__container--show': shouldShowCart,
        })}
      >
        <button className="telia-sliding-shopping-cart__close-button" onClick={() => setShouldShowCart(false)}>
          X
        </button>
        {children}
      </aside>
    </div>
  );
};

export default SlidingShoppingCartV2;
