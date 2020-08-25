import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';

import Box from '../../atoms/Box/Box';
import PriceTable from '../PriceTable/PriceTable';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type SubscriptionProps = {
    isShowingFeatures?: boolean;
    isStandalone?: boolean;
    isBroadband?: boolean;
    isExpanded?: boolean;
    color?: string;
    size?: string;
    id?: string;
    name?: string;
    dataAmount?: string | number;
    dataUnit?: string;
    dataAmountIcon?: React.ReactElement;
    price?: string | number;
    priceInfo?: string[];
    additionalInfo?: {
        routerPrice?: string;
        binding?: string;
    };
    allPricesLink?: {
        url?: string;
        text?: string;
    };
    features?: {
        speechBubbleText?: string;
        highlightedFeature?: {
            iconName: string;
            name: string;
            size?: string;
            secondIconName?: string;
            secondName?: string;
            secondSize?: string;
        };
        specialMessageText?: string;
        productList?: {
            title: string;
            subtitle?: string;
            price: string | number;
        }[];
        button?: React.ReactNode;
    };
    totalCalculation?: {
        title: string;
        subtitle?: string;
        price: string | number;
    };
    scrollToOnOpen?: boolean;
    onSelect?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
};

/**
 * Status: *finished*.
 * Category: Subscription
 *
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'children' does not exist on type 'Subscr... Remove this comment to see the full error message
const Subscription = ({ id, size, color, name, dataAmount, dataUnit, price, priceInfo, additionalInfo, allPricesLink, features, isStandalone, isBroadband, isExpanded, isShowingFeatures, scrollToOnOpen = false, onSelect, onClose, children, isSelected, teaserFeatures, extraDataAmount, extraDataUnit, dataAmountIcon, }: SubscriptionProps) => {
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
    <Box
      className={classnames('subscription', {
        'subscription--is-showing-features': isShowingFeatures,
        'subscription--is-standalone': isStandalone,
        'subscription--is-broadband': isBroadband,
        'subscription--is-selected': isSelected,
      })}
      color={color}
      size={size}
      id={id}
      canExpand={!isStandalone}
      isExpanded={isExpanded}
      onClick={onSelect}
      onClose={onClose}
      ref={ref}
      isSelected={isSelected}
    >
      <section className="subscription__teaser">
        <div className="subscription__teaser-content">
          {dataUnit && <h1 className="subscription__name">{name}</h1>}
          {extraDataAmount && extraDataUnit ? (
            <>
              <span className="subscription__data-amount">
                {dataAmount}
                <span className="subscription__data-unit--extra">{dataUnit}</span>
              </span>
              <span className="subscription__data-amount--extra">
                +{extraDataAmount}
                {extraDataUnit}
              </span>
            </>
          ) : dataUnit ? (
            <>
              <span className="subscription__data-amount">{dataAmount}</span>
              <span className="subscription__data-unit">{dataUnit}</span>
            </>
          ) : (
            <>
              {dataAmountIcon ? (
                <div className="subscription__data-amount__icon">{dataAmountIcon}</div>
              ) : (
                <span className="subscription__data-amount subscription__data-amount--big">{dataAmount}</span>
              )}
              <h1 className="subscription__name--big">{name}</h1>
            </>
          )}

          <span className="subscription__price">{formatPrice(price)}</span>
          {priceInfo &&
            priceInfo.map(info => (
              <span key={info} className="subscription__price-info">
                {info}
              </span>
            ))}
          {additionalInfo && (
            <div className="subscription__additional-info">
              <div className="subscription__additional-info--bold">{additionalInfo.routerPrice}</div>
              <div>{additionalInfo.binding}</div>
            </div>
          )}
          {teaserFeatures &&
            teaserFeatures.map((feature: any) => <div key={feature} className="subscription__feature-info">
              {feature}
            </div>)}
        </div>
        {allPricesLink && (
          <div className="subscription__teaser-links">
            <div>
              <a href={allPricesLink.url} className="link" target="_self">
                {allPricesLink.text}
              </a>
            </div>
          </div>
        )}
      </section>
      {features && <Subscription.Features features={features} isBroadband={isBroadband} isExpanded={isExpanded} />}
      {isExpanded && children && (
        <section id="subscription-info" className="subscription__expanded-info">
          {children}
        </section>
      )}
    </Box>
  );
};

type FeaturesProps = {
    isBroadband?: boolean;
    isExpanded?: boolean;
    features?: {
        speechBubbleText?: string;
        highlightedFeature?: {
            iconName: string;
            name: string;
            size?: string;
            secondIconName?: string;
            secondName?: string;
            secondSize?: string;
        };
        specialMessageText?: string;
        productList?: {
            title: string;
            subtitle?: string;
            price: string | number;
        }[];
        button?: React.ReactNode;
    };
};

const Features = ({ features, isBroadband, isExpanded }: FeaturesProps) => (
  <section className="subscription__features">
    {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
    {features.speechBubbleText ? (
      <div className="box__speech-bubble">
        {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
        <div className="box__speech-bubble-text">{features.speechBubbleText}</div>
      </div>
    ) : (
      <div className="box__speech-bubble box__speech-bubble--empty"></div>
    )}
    {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
    {features.highlightedFeature ? (
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      features.highlightedFeature.secondIconName ? (
        !isExpanded && (
          <div className="subscription__highlighted-feature">
            <SvgIcon
              className={classnames('subscription__highlighted-feature-icon', {
                // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
                'subscription__highlighted-feature-icon-large': features.highlightedFeature.size === 'large',
              })}
              // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
              iconName={features.highlightedFeature.iconName}
              // @ts-expect-error ts-migrate(2322) FIXME: Property 'role' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
              role="presentation"
              alt=""
            />
            {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
            <span className="subscription__highlighted-feature-text">{features.highlightedFeature.name}</span>
            <hr />
            <SvgIcon
              className={classnames('subscription__highlighted-feature-icon', {
                // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
                'subscription__highlighted-feature-icon-large': features.highlightedFeature.secondSize === 'large',
              })}
              // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
              iconName={features.highlightedFeature.secondIconName}
              // @ts-expect-error ts-migrate(2322) FIXME: Property 'role' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
              role="presentation"
              alt=""
            />
            {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
            <span className="subscription__highlighted-feature-text">{features.highlightedFeature.secondName}</span>
          </div>
        )
      ) : (
        <div className="subscription__highlighted-feature">
          <SvgIcon
            className={classnames('subscription__highlighted-feature-icon', {
              // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
              'subscription__highlighted-feature-icon-large': features.highlightedFeature.size === 'large',
            })}
            // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
            iconName={features.highlightedFeature.iconName}
            // @ts-expect-error ts-migrate(2322) FIXME: Property 'role' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
            role="presentation"
            alt=""
          />
          {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
          <span className="subscription__highlighted-feature-text">{features.highlightedFeature.name}</span>
        </div>
      )
    ) : null}
    {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
    {features.specialMessageText && <strong className="special-message">{features.specialMessageText}</strong>}
    {isExpanded && isBroadband && (
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      <PriceTable productListWithPrice={features.productList} totalTextWithPrice={features.totalCalculation} />
    )}
    {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
    {isExpanded && features.button}
  </section>
);

Subscription.Features = Features;

const formatPrice = (price: any) => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

export default Subscription;
