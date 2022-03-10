import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import { Icon } from '../../atoms/Icon';
import ShoppingCartItemsSection from './ShoppingCartItemSection';

/**
 * Status: *in progress*.
 * Category: PageElements
 *
 * This is a component for showing items currently in the shopping cart.
 */

const ShoppingCart = ({
  cartItems,
  heading,
  isAnyCartItemsQuantityModifiable,
  onChangeQuantity,
  onGoToCart,
  buttonText = 'Gå til bestilling',
  buttonInfo = '',
  onRemoveItem,
  totalPriceFirstInvoice,
  totalPriceMonthly,
  totalPriceUpfront,
  totalVAT,
  totalPriceWithoutVAT,
  formatPrice,
  hasPaid,
  disclaimers,
  discount,
}) => {
  return (
    <form className="telia-shopping-cart">
      {heading && (
        <div className="telia-shopping-cart__heading">
          <Heading level={2}>
            <Icon icon="shoppingcart" className="telia-shopping-cart__icon" /> {heading}
          </Heading>
        </div>
      )}
      <ShoppingCartItemsSection cartItems={cartItems} />
    </form>
  );
};

ShoppingCart.propTypes = {
  cartItems: PropTypes.array,
  isAnyCartItemsQuantityModifiable: PropTypes.bool,
  onChangeQuantity: PropTypes.func,
  onRemoveItem: PropTypes.func,
  onGoToCart: PropTypes.func,
  goToCartText: PropTypes.string,
  totalPriceFirstInvoice: PropTypes.number,
  totalPriceMonthly: PropTypes.number,
  totalPriceUpfront: PropTypes.number,
  totalVAT: PropTypes.number,
  totalPriceWithoutVAT: PropTypes.number,
  formatPrice: PropTypes.func,
  hasPaid: PropTypes.bool,
  disclaimers: PropTypes.node,
  discount: PropTypes.shape({
    label: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default ShoppingCart;
