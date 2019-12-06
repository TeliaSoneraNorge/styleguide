import React from 'react';
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
  formatPrice,
}) => {
  const accordionItems = [
    {
      id: 'shopping-cart',
      title: `${numberOfItemsInCart}${numberOfItemsInCart > 1 ? '     ' : ''} produkt${
        numberOfItemsInCart > 1 ? 'er' : ''
      }`,
      children: children,
      icon: 'ico_buy',
      iconTitle: 'Handlekurv',
      buttonType: 'primary',
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
      />
    </div>
  );
};

ShoppingCartAccordion.propTypes = {
  isExpanded: PropTypes.bool,
  numberOfItemsInCart: PropTypes.number,
  shouldHideOnDesktop: PropTypes.bool,
  shouldBeSticky: PropTypes.bool,
  shouldShowButton: PropTypes.bool,
  totalPriceMonthly: PropTypes.number,
  totalPriceUpfront: PropTypes.number,
  onGoToCart: PropTypes.func,
  toggleCart: PropTypes.func,
  formatPrice: PropTypes.func,
};

export default ShoppingCartAccordion;
