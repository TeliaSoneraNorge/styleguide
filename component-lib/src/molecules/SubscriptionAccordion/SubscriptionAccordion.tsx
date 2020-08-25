import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';

type Props = {
    id?: string;
    isExpanded?: boolean;
    isInverted?: boolean;
    name?: string;
    price?: string | number;
    priceInfo?: string[];
    discount?: {
        price?: string | number;
        description?: string;
    };
    feature?: {
        iconName: string;
        name: string;
    };
    disclaimers?: React.ReactElement;
    scrollToOnOpen?: boolean;
    className?: string;
    onOpen?: (...args: any[]) => any;
    onSelect?: (...args: any[]) => any;
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Props'... Remove this comment to see the full error message
const SubscriptionAccordion = ({ id, isExpanded, isInverted, name, price, priceInfo, discount, feature, disclaimers, scrollToOnOpen = false, children, className, onOpen = () => { }, onSelect = () => { }, }: Props) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current && isExpanded && scrollToOnOpen) {
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isExpanded, scrollToOnOpen]);

  return (
    <section
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type 'HTMLEl... Remove this comment to see the full error message
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
              {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '"link" | ... Remove this comment to see the full error message */}
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

const formatPrice = (price: any) => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

export default SubscriptionAccordion;
