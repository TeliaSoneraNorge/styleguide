import React, { useRef, useState, useEffect } from 'react';
import cn from 'classnames';
import Heading from '../../atoms/Heading';
import { Icon } from '../../atoms/Icon';
import RadioButton from '../../atoms/RadioButton';

const SubscriptionLinesAccordion = ({
  id,
  isExpanded,
  isInverted,
  dataAmount,
  dataAmountIcon,
  dataUnit,
  price,
  priceInfo,
  moneySaved,
  normalPrice,
  numberOfSubscriptions,
  feature,
  disclaimers,
  scrollToOnOpen = false,
  children,
  className,
  footer,
  onOpen = () => {},
  onSelect = () => {},
}) => {
  const ref = useRef();
  const [isHoveringRadioButton, setIsHoveringRadioButton] = useState(false);

  useEffect(() => {
    if (ref.current && isExpanded && scrollToOnOpen) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isExpanded, scrollToOnOpen]);

  const handleOnSelect = () => {
    onSelect();
  };

  const handleOnOpen = () => {
    if (!isHoveringRadioButton) {
      onOpen();
    }
  };

  return (
    <section
      ref={ref}
      id={id}
      className={cn('subscription-lines-accordion', className, {
        'subscription-lines-accordion__inverted': isInverted,
      })}
    >
      <button
        onMouseEnter={() => console.log('lal')}
        className="subscription-lines-accordion__header"
        onClick={e => handleOnOpen(e)}
      >
        <div className="subscription-lines-accordion__radio-button">
          <RadioButton
            onMouseEnter={() => setIsHoveringRadioButton(true)}
            onMouseLeave={() => setIsHoveringRadioButton(false)}
            onChange={() => handleOnSelect()}
          />
        </div>
        {dataAmountIcon ? (
          <div className="subscription-lines-accordion__heading-container">
            <div className="subscription-lines-accordion__heading-icon">
              {dataAmountIcon}
              <Heading className="subscription-lines-accordion__heading-unit" tag="h2" size="s" text={dataUnit} />
            </div>
          </div>
        ) : (
          <div className="subscription-lines-accordion__heading-container">
            <Heading className="subscription-lines-accordion__heading-name" tag="h2" size="s" text={dataAmount}>
              <div className="subscription-lines-accordion__heading-unit">{dataUnit}</div>
            </Heading>
          </div>
        )}
        <div className="subscription-lines-accordion__discount-description">
          <div className="subscription-lines-accordion__discount-description-save">Du sparer {moneySaved},- pr md.</div>
          <div
            className={cn('subscription-lines-accordion__discount-description-normal', {
              'subscription-lines-accordion__discount-description-normal--inverted': isInverted,
            })}
          >
            Normalpris {normalPrice},- pr md.
          </div>
        </div>
        <div>
          <div className="subscription-lines-accordion__vertical-line"></div>
        </div>
        <div className="subscription-lines-accordion__aside">
          <div className="subscription-lines-accordion__price-container">
            <div
              className={cn('subscription-lines-accordion__discount-description-normal', {
                'subscription-lines-accordion__discount-description-normal--inverted': isInverted,
              })}
            >
              Totalt for{' '}
              <span className="subscription-lines-accordion__discount-description-normal--bold">
                {numberOfSubscriptions} stk
              </span>
              .
            </div>
            <div>
              <span className="subscription-lines-accordion__price">{formatPrice(price)}</span>
              {priceInfo &&
                priceInfo.map(info => (
                  <span key={info} className="subscription-lines-accordion__price-info">
                    {info}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <Icon
          icon="arrow-down"
          className={cn('subscription-lines-accordion__icon-arrow', {
            'subscription-lines-accordion__icon-arrow--isExpanded': isExpanded,
          })}
        />
      </button>
      {isExpanded && children && (
        <section
          className={cn('subscription-lines-accordion__expanded-info', {
            'subscription-lines-accordion__expanded-info--inverted': isInverted,
          })}
        >
          {feature && (
            <>
              <Icon icon={feature.iconName} className="subscription-lines-accordion__feature-icon" />
              <span className="subscription-lines-accordion__feature-name">{feature.name}</span>
              <hr className="subscription-lines-accordion__separation-line" />
            </>
          )}
          {children}
          <div className="subscription-lines-accordion__disclaimers">{disclaimers}</div>
        </section>
      )}
      {footer && (
        <div
          className={cn('subscription-lines-accordion__footer', {
            'subscription-lines-accordion__footer--inverted': isInverted,
            'subscription-lines-accordion__footer--expanded': isExpanded && !isInverted,
          })}
        >
          {!isExpanded && (
            <hr
              className={cn('subscription-lines-accordion__footer-line', {
                'subscription-lines-accordion__footer-line--inverted': isInverted,
              })}
            />
          )}
          {footer}
        </div>
      )}
    </section>
  );
};

const formatPrice = price => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

export default SubscriptionLinesAccordion;
