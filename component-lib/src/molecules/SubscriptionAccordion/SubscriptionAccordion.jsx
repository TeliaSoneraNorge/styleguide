import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';

const SubscriptionAccordion = ({
  id,
  isExpanded,
  isInverted,
  name,
  price,
  priceInfo,
  discount,
  feature,
  disclaimers,
  scrollToOnOpen = false,
  children,
  className,
  onOpen = () => {},
  onSelect = () => {},
}) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current && isExpanded && scrollToOnOpen) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isExpanded, scrollToOnOpen]);

  return (
    <section
      ref={ref}
      id={id}
      className={cn('subscription-accordion', className, { 'subscription-accordion__inverted': isInverted })}
    >
      <button className="subscription-accordion__header" onClick={onOpen}>
        <Heading tag="h2" size="s" text={name} />
        {discount && (
          <div className="subscription-accordion__discount">
            <span className="subscription-accordion__discount-price">-{discount.price}</span>
            {discount.description}
          </div>
        )}
        <div className="subscription-accordion__aside">
          <span className="subscription-accordion__price">{formatPrice(price)}</span>
          {priceInfo &&
            priceInfo.map(info => (
              <span key={info} className="subscription-accordion__price-info">
                {info}
              </span>
            ))}
          <Icon
            icon="arrow-down"
            className={cn('subscription-accordion__icon-arrow', {
              'subscription-accordion__icon-arrow--isExpanded': isExpanded,
            })}
          />
        </div>
      </button>
      {isExpanded && children && (
        <section className="subscription-accordion__expanded-info">
          {feature && (
            <>
              <Icon icon={feature.iconName} className="subscription-accordion__feature-icon" />
              <span className="subscription-accordion__feature-name">{feature.name}</span>
              <hr className="subscription-accordion__separation-line" />
            </>
          )}
          {children}
          <Button
            className="subscription-accordion__button-choose"
            text="Velg"
            size="small"
            margin="top"
            onClick={() => onSelect(id)}
          />
          <hr className="subscription-accordion__separation-line" />
          <div className="subscription-accordion__disclaimers">{disclaimers}</div>
        </section>
      )}
    </section>
  );
};

SubscriptionAccordion.propTypes = {
  id: PropTypes.string,
  isExpanded: PropTypes.bool,
  isInverted: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  priceInfo: PropTypes.arrayOf(PropTypes.string),
  discount: PropTypes.shape({
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
  }),
  feature: PropTypes.shape({
    iconName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  disclaimers: PropTypes.element,
  scrollToOnOpen: PropTypes.bool,
  className: PropTypes.string,
  onOpen: PropTypes.func,
  onSelect: PropTypes.func,
};

const formatPrice = price => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

export default SubscriptionAccordion;
