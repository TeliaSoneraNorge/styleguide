import React, { useRef, useState, useEffect } from 'react';
import cn from 'classnames';
import Heading from '../../atoms/Heading';
import { Icon } from '../../atoms/Icon';

const SubscriptionLinesAccordion = ({
  id,
  isExpanded,
  isInverted,
  dataAmount,
  dataAmountIcon,
  dataUnit,
  extraDataAmount,
  extraDataUnit,
  price,
  priceInfo,
  numberOfSubscriptions,
  feature,
  scrollToOnOpen = false,
  children,
  className,
  description1,
  description2,
  footer,
  onOpen = () => {},
  style,
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

  const FooterComponent = () => (
    <div
      className={cn('subscription-lines-accordion__footer-container', {
        'subscription-lines-accordion__footer-container--inverted': isInverted,
        'subscription-lines-accordion__footer-container--expanded': isExpanded,
      })}
    >
      {!(isInverted && isExpanded) && (
        <hr
          className={cn('subscription-lines-accordion__seperation-line', {
            'subscription-lines-accordion__seperation-line--inverted': isInverted,
          })}
        />
      )}
      <div className="subscription-lines-accordion__footer subscription-lines-accordion__desktop-only">{footer}</div>
      <div className="subscription-lines-accordion__footer subscription-lines-accordion__mobile-only">
        <div className="subscription-lines-accordion__price-container">
          <div
            className={cn('subscription-lines-accordion__description1', {
              'subscription-lines-accordion__description1--inverted': isInverted,
            })}
          >
            Totalt for{' '}
            <span className="subscription-lines-accordion__description1--bold">{numberOfSubscriptions} stk.</span>
            <span className="subscription-lines-accordion__price">{formatPrice(price)}</span>
            {priceInfo &&
              priceInfo.map((info) => (
                <span key={info} className="subscription-lines-accordion__price-info">
                  {info}
                </span>
              ))}
          </div>
        </div>
        {footer}
      </div>
    </div>
  );

  const extraDataString = extraDataAmount && extraDataUnit ? `+ ${extraDataAmount}${extraDataUnit}` : '';

  return (
    <section
      style={style}
      ref={ref}
      id={id}
      className={cn('subscription-lines-accordion', className, {
        'subscription-lines-accordion--inverted': isInverted,
      })}
    >
      <button className="subscription-lines-accordion__container-button" onClick={onOpen}>
        <div
          className={cn('subscription-lines-accordion__main-container', {
            'subscription-lines-accordion__main-container--expanded': isExpanded,
          })}
        >
          <div className="subscription-lines-accordion__header-first-row">
            {dataAmountIcon ? (
              <div className="subscription-lines-accordion__heading-container">
                <div className="subscription-lines-accordion__desktop-only">
                  <div className="subscription-lines-accordion__heading-icon">
                    {dataAmountIcon}
                    <Heading className="subscription-lines-accordion__heading-unit" tag="h2" size="s" text={dataUnit} />
                  </div>
                </div>
                <div className="subscription-lines-accordion__heading-icon-container subscription-lines-accordion__mobile-only">
                  <div className="subscription-lines-accordion__heading-icon">{dataAmountIcon}</div>
                  <Heading className="subscription-lines-accordion__heading-name" tag="h2" size="s" text={dataUnit} />
                </div>
              </div>
            ) : (
              <div className="subscription-lines-accordion__heading-container">
                <div className="subscription-lines-accordion__mobile-only">
                  <Heading className="subscription-lines-accordion__heading-name" tag="h2" size="s">
                    {dataAmount} {dataUnit}
                    {extraDataString && (
                      <div className="subscription-lines-accordion__heading-extra-same-line">{extraDataString}</div>
                    )}
                  </Heading>
                </div>
                <div className="subscription-lines-accordion__desktop-only">
                  <Heading className="subscription-lines-accordion__heading-name" tag="h2" size="s" text={dataAmount}>
                    <div className="subscription-lines-accordion__heading-unit">{dataUnit}</div>
                  </Heading>
                  {extraDataString && (
                    <div className="subscription-lines-accordion__heading-extra">{extraDataString}</div>
                  )}
                </div>
              </div>
            )}
            <div className="subscription-lines-accordion__description">
              <div className="subscription-lines-accordion__description2 subscription-lines-accordion__desktop-only">
                {description1}
              </div>
              <div
                className={cn('subscription-lines-accordion__description1 subscription-lines-accordion__desktop-only', {
                  'subscription-lines-accordion__description1--inverted': isInverted,
                })}
              >
                {description2}
              </div>
            </div>
            <div>
              <div className="subscription-lines-accordion__vertical-line"></div>
            </div>
            <div className="subscription-lines-accordion__aside">
              <div className="subscription-lines-accordion__price-container">
                <div
                  className={cn(
                    'subscription-lines-accordion__description1 subscription-lines-accordion__desktop-only',
                    {
                      'subscription-lines-accordion__description1--inverted': isInverted,
                    }
                  )}
                >
                  Totalt for{' '}
                  <span className="subscription-lines-accordion__description1--bold">{numberOfSubscriptions} stk</span>.
                </div>
                <div className="subscription-lines-accordion__desktop-only">
                  <span className="subscription-lines-accordion__price">{formatPrice(price)}</span>
                  {priceInfo &&
                    priceInfo.map((info) => (
                      <span key={info} className="subscription-lines-accordion__price-info">
                        {info}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="subscription-lines-accordion__icon-container">
              <Icon
                icon="arrow-down"
                className={cn('subscription-lines-accordion__icon-arrow', {
                  'subscription-lines-accordion__icon-arrow--isExpanded': isExpanded,
                })}
              />
            </div>
          </div>
        </div>
        <div className="subscription-lines-accordion__description2 subscription-lines-accordion__mobile-only">
          {description1}
        </div>
      </button>
      {isExpanded && children && (
        <section
          className={cn('subscription-lines-accordion__expanded-info', {
            'subscription-lines-accordion__expanded-info--inverted': isInverted,
          })}
        >
          <div className="subscription-lines-accordion__seperation-line-container">
            <hr
              className={cn('subscription-lines-accordion__seperation-line', {
                'subscription-lines-accordion__seperation-line--inverted': isInverted,
              })}
            />
          </div>

          {feature && (
            <>
              <Icon icon={feature.iconName} className="subscription-lines-accordion__feature-icon" />
              <span className="subscription-lines-accordion__feature-name">{feature.name}</span>
              <hr className="subscription-lines-accordion__separation-line" />
            </>
          )}
          {children}
        </section>
      )}
      <div
        className={cn('subscription-lines-accordion__mobile-only subscription-lines-accordion__footer-border', {
          'subscription-lines-accordion__footer-border--inverted': isInverted,
        })}
      >
        {<FooterComponent />}
      </div>
      <div
        className={cn('subscription-lines-accordion__desktop-only subscription-lines-accordion__footer-border', {
          'subscription-lines-accordion__footer-border--inverted': isInverted,
        })}
      >
        {!!footer && <FooterComponent />}
      </div>
    </section>
  );
};

const formatPrice = (price) => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

export default SubscriptionLinesAccordion;
