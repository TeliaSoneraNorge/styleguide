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
  name: string;
  title: string;
  strikethrough?: string;
  tagLine?: string;
  tagLineIcon?: IconDefinition;
  discountLine?: string;
  price: SubscriptionPrice;
  priceStriketrough?: SubscriptionPrice;
  priceStriketroughInfo?: string;
  priceInfo?: string[];
  ribbon?: Ribbon | null;
  scrollToOnOpen?: boolean;
  className?: string;
  onOpen?: (...args: any[]) => any;
  style?: React.CSSProperties;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  variant?: 'black' | 'purple';
}

const SubscriptionCompactAccordion = ({
  id,
  isExpanded,
  name,
  title,
  strikethrough,
  tagLine,
  tagLineIcon,
  discountLine,
  price,
  priceStriketrough,
  priceStriketroughInfo,
  priceInfo,
  ribbon,
  scrollToOnOpen = false,
  footer,
  children,
  className,
  onOpen = () => {},
  style,
  variant,
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
        'subscription-compact-accordion--black': variant === 'black',
        'subscription-compact-accordion--purple': variant === 'purple',
        'subscription-compact-accordion-expanded': isExpanded,
      })}
    >
      <button
        className={cn('subscription-compact-accordion__container-button', {
          'subscription-compact-accordion__container-button--footer': footer,
          'subscription-compact-accordion-expanded__container-button': isExpanded,
        })}
        onClick={onOpen}
      >
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
          <div
            className={cn('subscription-compact-accordion__name', {
              'subscription-compact-accordion__name--black': variant === 'black',
              'subscription-compact-accordion__name--purple': variant === 'purple',
            })}
          >
            {name}
          </div>
          <div className="subscription-compact-accordion__header-first-row">
            <div className="subscription-compact-accordion__left-side subscription-compact-accordion__flex--grow">
              <div className="subscription-compact-accordion__heading-container">
                {strikethrough ? (
                  <>
                    <Heading className="subscription-compact-accordion__heading-striketrough" tag="h2" size="xs">
                      {strikethrough}
                    </Heading>
                    <Heading className="subscription-compact-accordion__heading-name" tag="h2" size="s">
                      {title}
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
                  {tagLineIcon && <Icon className="subscription-compact-accordion__tagline-icon" icon={tagLineIcon} />}
                  <span className="subscription-compact-accordion__tagline">{tagLine}</span>
                </div>
              )}
            </div>
            <div className="subscription-compact-accordion__flex">
              <div className="subscription-compact-accordion__aside">
                <div className="subscription-compact-accordion__price-container">
                  {!!priceStriketrough && (
                    <div className="subscription-compact-accordion__price-striketrough-wrapper">
                      <span className="subscription-compact-accordion__price-striketrough">
                        {formatPrice(priceStriketrough)}
                      </span>
                      <span className="subscription-compact-accordion__price-striketrough-info">
                        {priceStriketroughInfo}
                      </span>
                    </div>
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
                  icon="chevron-down"
                  className={cn('subscription-compact-accordion__icon-arrow', {
                    'subscription-compact-accordion__icon-arrow--isExpanded': isExpanded,
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        {footer && (
          <div className="subscription-compact-accordion__footer-container">
            <hr />
            {!isExpanded && footer}
          </div>
        )}
      </button>
      {isExpanded && children && (
        <section
          className={cn('subscription-compact-accordion__expanded-info', {
            'subscription-compact-accordion__expanded-info--black': variant === 'black',
            'subscription-compact-accordion__expanded-info--purple': variant === 'purple',
          })}
        >
          {children}
        </section>
      )}
      <div
        className={cn('subscription-compact-accordion__footer-border', {
          'subscription-compact-accordion__footer-border--black': variant === 'black',
          'subscription-compact-accordion__footer-border--purple': variant === 'purple',
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
