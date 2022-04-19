import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import Heading from '../../atoms/Heading';
import { Icon, IconDefinition } from '../../atoms/Icon';

type SubscriptionPrice = string | number;

interface Ribbon {
  backgroundColor: string;
  color: string;
  text: string;
}

export interface SubscriptionCompactAccordionProps {
  id?: string;
  isExpanded?: boolean;
  isInverted?: boolean;
  name: string;
  title: string;
  strikethrough?: string;
  tagLine?: string;
  tagLineIcon?: IconDefinition;
  discountLine?: string;
  price: SubscriptionPrice;
  priceStriketrough?: SubscriptionPrice;
  priceInfo?: string[];
  ribbon?: Ribbon | null;
  scrollToOnOpen?: boolean;
  className?: string;
  onOpen?: (...args: any[]) => any;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const SubscriptionCompactAccordion = ({
  id,
  isExpanded,
  isInverted,
  name,
  title,
  strikethrough,
  tagLine,
  tagLineIcon,
  discountLine,
  price,
  priceStriketrough,
  priceInfo,
  ribbon,
  scrollToOnOpen = false,
  children,
  className,
  onOpen = () => {},
  style,
}: SubscriptionCompactAccordionProps) => {
  const ref = useRef<HTMLDivElement>(null);

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
      style={style}
      ref={ref}
      id={id}
      className={cn('subscription-compact-accordion', className, {
        'subscription-compact-accordion--inverted': isInverted,
      })}
    >
      <button className="subscription-compact-accordion__container-button" onClick={onOpen}>
        <div
          className={cn('subscription-compact-accordion__main-container', {
            'subscription-compact-accordion__main-container--expanded': isExpanded,
          })}
        >
          {ribbon ? (
            <div
              style={{ backgroundColor: ribbon.backgroundColor, color: ribbon.color }}
              className="subscription-compact-accordion__ribbon"
            >
              {ribbon.text}
            </div>
          ) : null}
          <div className="subscription-compact-accordion__name">{name}</div>
          <div className="subscription-compact-accordion__header-first-row">
            <div className="subscription-compact-accordion__left-side subscription-compact-accordion__flex--grow">
              <div className="subscription-compact-accordion__heading-container">
                {strikethrough ? (
                  <>
                    <Heading className="subscription-compact-accordion__heading-name" tag="h2" size="s">
                      {title}
                    </Heading>
                    <Heading className="subscription-compact-accordion__heading-striketrough" tag="h2" size="xs">
                      {strikethrough}
                    </Heading>
                  </>
                ) : (
                  <Heading className="subscription-compact-accordion__heading-name" tag="h2" size="s">
                    {title}
                  </Heading>
                )}
              </div>
              {!!tagLine && (
                <div className="subscription-compact-accordion__tagline-wrapper">
                  <span className="subscription-compact-accordion__tagline">{tagLine}</span>
                  {tagLineIcon && <Icon className="subscription-compact-accordion__tagline-icon" icon={tagLineIcon} />}
                </div>
              )}
            </div>
            <div className="subscription-compact-accordion__flex">
              <div className="subscription-compact-accordion__aside">
                <div className="subscription-compact-accordion__price-container">
                  {!!priceStriketrough && (
                    <span className="subscription-compact-accordion__price-striketrough">
                      {formatPrice(priceStriketrough)}/md.
                    </span>
                  )}
                  <div>
                    <span className="subscription-compact-accordion__price">{formatPrice(price)}</span>
                    {priceInfo &&
                      priceInfo.map((info) => (
                        <span key={info} className="subscription-compact-accordion__price-info">
                          {info}
                        </span>
                      ))}
                  </div>
                </div>
                {!!discountLine && (
                  <span className="subscription-compact-accordion__discount-line">{discountLine}</span>
                )}
              </div>
              <div className="subscription-compact-accordion__icon-container">
                <Icon
                  icon="arrow-down"
                  className={cn('subscription-compact-accordion__icon-arrow', {
                    'subscription-compact-accordion__icon-arrow--isExpanded': isExpanded,
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </button>
      {isExpanded && children && (
        <section
          className={cn('subscription-compact-accordion__expanded-info', {
            'subscription-compact-accordion__expanded-info--inverted': isInverted,
          })}
        >
          {children}
        </section>
      )}
      <div
        className={cn('subscription-compact-accordion__footer-border', {
          'subscription-compact-accordion__footer-border--inverted': isInverted,
        })}
      />
    </section>
  );
};

const formatPrice = (price: any) => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

export default SubscriptionCompactAccordion;