import React, { useRef, useState, useEffect } from 'react';
import cn from 'classnames';
import Heading from '../../atoms/Heading';
import { Icon } from '../../atoms/Icon';
import RadioButton from '../../atoms/RadioButton';
import Button from '../../atoms/Button';

const SubscriptionLinesAccordion = ({
  id,
  isExpanded,
  isInverted,
  dataAmount,
  dataAmountIcon,
  dataUnit,
  price,
  priceInfo,
  numberOfSubscriptions,
  feature,
  disclaimers,
  scrollToOnOpen = false,
  children,
  className,
  description1,
  description2,
  showCalculationText = 'Se utregning',
  onOpen = () => {},
  onSelect = () => {},
  onClickShowCalculation = () => {},
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

  const handleOnClickShowCalculation = event => {
    event.stopPropagation();
    onClickShowCalculation();
  };

  const Footer = () => (
    <div
      className={cn('subscription-lines-accordion__footer-container', {
        'subscription-lines-accordion__footer-container--inverted': isInverted,
        'subscription-lines-accordion__footer-container--inverted-expanded': isExpanded && isInverted,
        'subscription-lines-accordion__footer-container--expanded': isExpanded,
      })}
    >
      {!isExpanded && (
        <hr
          className={cn('subscription-lines-accordion__footer-line', {
            'subscription-lines-accordion__footer-line--inverted': isInverted,
          })}
        />
      )}
      <div className="subscription-lines-accordion__footer subscription-lines-accordion__desktop-only">
        <Button
          component="div"
          onClick={event => handleOnClickShowCalculation(event)}
          href="#"
          kind="link"
          text={showCalculationText}
        />
      </div>
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
              priceInfo.map(info => (
                <span key={info} className="subscription-lines-accordion__price-info">
                  {info}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      id={id}
      className={cn('subscription-lines-accordion', className, {
        'subscription-lines-accordion__inverted': isInverted,
      })}
    >
      <button className="subscription-lines-accordion__header" onClick={e => handleOnOpen(e)}>
        <div className="subscription-lines-accordion__header-first-row">
          <div className="subscription-lines-accordion__radio-button">
            <RadioButton
              onMouseEnter={() => setIsHoveringRadioButton(true)}
              onMouseLeave={() => setIsHoveringRadioButton(false)}
              onChange={() => handleOnSelect()}
            />
          </div>
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
                <Heading
                  className="subscription-lines-accordion__heading-name"
                  tag="h2"
                  size="s"
                  text={`${dataAmount} ${dataUnit}`}
                />
              </div>
              <div className="subscription-lines-accordion__desktop-only">
                <Heading className="subscription-lines-accordion__heading-name" tag="h2" size="s" text={dataAmount}>
                  <div className="subscription-lines-accordion__heading-unit">{dataUnit}</div>
                </Heading>
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
                className={cn('subscription-lines-accordion__description1 subscription-lines-accordion__desktop-only', {
                  'subscription-lines-accordion__description1--inverted': isInverted,
                })}
              >
                Totalt for{' '}
                <span className="subscription-lines-accordion__description1--bold">{numberOfSubscriptions} stk</span>.
              </div>
              <div className="subscription-lines-accordion__desktop-only">
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
        </div>
        <div className="subscription-lines-accordion__description2 subscription-lines-accordion__mobile-only">
          {description1}
        </div>
        {!isExpanded && <Footer />}
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
      {isExpanded && <Footer />}
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
