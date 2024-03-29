import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import AccordionList from '../../molecules/AccordionList/AccordionList';

/**
 * Status: *in progress*.
 * Category: PageElements
 *
 * This is a component for showing items currently in the shopping cart in an accordion
 */
const ShoppingCartAccordion = ({
  children,
  isExpanded,
  numberOfItemsInCart,
  onGoToCart,
  shouldHideOnDesktop,
  shouldShowButton = true,
  toggleCart,
  totalPriceMonthly,
  totalPriceUpfront,
  shouldBeSticky,
  shouldShowOnlyOnExpanded = false,
  formatPrice,
}) => {
  const [shouldAnimateNumberOfCartItems, setShouldAnimateNumberOfCartItems] = useState(false);

  useEffect(() => {
    setShouldAnimateNumberOfCartItems(true);
    setTimeout(() => setShouldAnimateNumberOfCartItems(false), 300);
  }, [numberOfItemsInCart]);

  useEffect(() => {
    setShouldAnimateNumberOfCartItems(false);
  }, []);

  const accordionItems = [
    {
      id: 'shopping-cart',
      title: `${numberOfItemsInCart}${numberOfItemsInCart > 1 ? '     ' : ''} produkt${
        numberOfItemsInCart > 1 ? 'er' : ''
      }`,
      children: children,
      icon: 'shoppingcart',
      iconTitle: 'Handlekurv',
      buttonType: 'primary',
      text: `Betales nå: ${formatPrice(totalPriceUpfront)}. Pris pr. måned: ${formatPrice(totalPriceMonthly)}`,
      ...(shouldShowButton && {
        button: 'Gå til bestilling',
        onButtonClick: onGoToCart,
      }),
    },
  ];

  return (
    <>
      {isExpanded ? <div className="shopping-cart__opacity-layer" onClick={() => toggleCart()}></div> : null}
      <div
        className={classnames({
          'shopping-cart__sticky': shouldBeSticky,
          'shopping-cart__show-only-on-expanded': shouldShowOnlyOnExpanded,
          'shopping-cart__show-only-on-expanded--is-expanded': isExpanded,
        })}
        onKeyUp={(event) => {
          if (event.key === 'Escape' && isExpanded) {
            toggleCart();
          }
        }}
      >
        <AccordionList
          accordionItems={accordionItems}
          className={classnames('shopping-cart__accordion', {
            'shopping-cart__accordion--has-double-digit-count': numberOfItemsInCart > 9,
            'shopping-cart__accordion--hide-on-desktop': shouldHideOnDesktop,
          })}
          isExpandedAccordionIndex={isExpanded ? 0 : -1}
          toggleIsExpanded={() => toggleCart()}
          shouldAnimateHeaderButtonTextBox={shouldAnimateNumberOfCartItems}
        />
      </div>
    </>
  );
};

ShoppingCartAccordion.propTypes = {
  isExpanded: PropTypes.bool,
  numberOfItemsInCart: PropTypes.number,
  shouldHideOnDesktop: PropTypes.bool,
  shouldBeSticky: PropTypes.bool,
  shouldShowOnlyOnExpanded: PropTypes.bool,
  shouldShowButton: PropTypes.bool,
  totalPriceMonthly: PropTypes.number,
  totalPriceUpfront: PropTypes.number,
  onGoToCart: PropTypes.func,
  toggleCart: PropTypes.func,
  formatPrice: PropTypes.func,
};

export default ShoppingCartAccordion;
