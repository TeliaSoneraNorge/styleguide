import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import AccordionList from '../../molecules/AccordionList/AccordionList';

type Props = {
    isExpanded?: boolean;
    numberOfItemsInCart?: number;
    shouldHideOnDesktop?: boolean;
    shouldBeSticky?: boolean;
    shouldShowButton?: boolean;
    totalPriceMonthly?: number;
    totalPriceUpfront?: number;
    onGoToCart?: (...args: any[]) => any;
    toggleCart?: (...args: any[]) => any;
    formatPrice?: (...args: any[]) => any;
};

/**
 * Status: *in progress*.
 * Category: PageElements
 *
 * This is a component for showing items currently in the shopping cart in an accordion
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Props'... Remove this comment to see the full error message
const ShoppingCartAccordion = ({ children, isExpanded, numberOfItemsInCart, onGoToCart, shouldHideOnDesktop, shouldShowButton = true, toggleCart, totalPriceMonthly, totalPriceUpfront, shouldBeSticky, formatPrice, }: Props) => {
  const [shouldAnimateNumberOfCartItems, setShouldAnimateNumberOfCartItems] = useState(false)

  useEffect(() => {
    setShouldAnimateNumberOfCartItems(true)
    setTimeout(() => setShouldAnimateNumberOfCartItems(false), 300)
  }, [numberOfItemsInCart])

  useEffect(() => {
    setShouldAnimateNumberOfCartItems(false)
  }, [])

  const accordionItems = [
    {
      id: 'shopping-cart',
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      title: `${numberOfItemsInCart}${numberOfItemsInCart > 1 ? '     ' : ''} produkt${
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        numberOfItemsInCart > 1 ? 'er' : ''
      }`,
      children: children,
      icon: 'shoppingcart',
      iconTitle: 'Handlekurv',
      buttonType: 'primary',
      // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
      text: `Betales nå: ${formatPrice(totalPriceUpfront)}. Pris pr. måned: ${formatPrice(totalPriceMonthly)}`,
      ...(shouldShowButton && {
        button: 'Gå til kassen',
        onButtonClick: onGoToCart,
      }),
    },
  ];

  return (
    <div
      className={classnames({ 'shopping-cart__sticky': shouldBeSticky })}
      onKeyUp={event => {
        if (event.key === 'Escape' && isExpanded) {
          // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
          toggleCart();
        }
      }}
    >
      <AccordionList
        accordionItems={accordionItems}
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'className' does not exist on type 'Intri... Remove this comment to see the full error message
        className={classnames('shopping-cart__accordion', {
          // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
          'shopping-cart__accordion--has-double-digit-count': numberOfItemsInCart > 9,
          'shopping-cart__accordion--hide-on-desktop': shouldHideOnDesktop,
        })}
        isExpandedAccordionIndex={isExpanded ? 0 : -1}
        // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
        toggleIsExpanded={() => toggleCart()}
        shouldAnimateHeaderButtonTextBox={shouldAnimateNumberOfCartItems}
      />
    </div>
  );
};

export default ShoppingCartAccordion;
