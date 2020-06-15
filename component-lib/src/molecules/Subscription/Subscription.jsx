import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Box from '../../atoms/Box/Box';
import PriceTable from '../PriceTable/PriceTable';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *finished*.
 * Category: Subscription
 *
 */
const Subscription = ({
  id,
  size,
  color,
  name,
  dataAmount,
  dataUnit,
  price,
  priceInfo,
  additionalInfo,
  allPricesLink,
  features,
  isStandalone,
  isBroadband,
  isExpanded,
  isShowingFeatures,
  scrollToOnOpen = false,
  onSelect,
  onClose,
  children,
  isSelected,
  teaserFeatures,
  extraDataAmount,
  extraDataUnit,
  dataAmountIcon,
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
            teaserFeatures.map(feature => (
              <div key={feature} className="subscription__feature-info">
                {feature}
              </div>
            ))}
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

const Features = ({ features, isBroadband, isExpanded }) => (
  <section className="subscription__features">
    {features.speechBubbleText ? (
      <div className="box__speech-bubble">
        <div className="box__speech-bubble-text">{features.speechBubbleText}</div>
      </div>
    ) : (
      <div className="box__speech-bubble box__speech-bubble--empty"></div>
    )}
    {features.highlightedFeature ? (
      features.highlightedFeature.secondIconName ? (
        !isExpanded && (
          <div className="subscription__highlighted-feature">
            <SvgIcon
              className={classnames('subscription__highlighted-feature-icon', {
                'subscription__highlighted-feature-icon-large': features.highlightedFeature.size === 'large',
              })}
              iconName={features.highlightedFeature.iconName}
              role="presentation"
              alt=""
            />
            <span className="subscription__highlighted-feature-text">{features.highlightedFeature.name}</span>
            <hr />
            <SvgIcon
              className={classnames('subscription__highlighted-feature-icon', {
                'subscription__highlighted-feature-icon-large': features.highlightedFeature.secondSize === 'large',
              })}
              iconName={features.highlightedFeature.secondIconName}
              role="presentation"
              alt=""
            />
            <span className="subscription__highlighted-feature-text">{features.highlightedFeature.secondName}</span>
          </div>
        )
      ) : (
        <div className="subscription__highlighted-feature">
          <SvgIcon
            className={classnames('subscription__highlighted-feature-icon', {
              'subscription__highlighted-feature-icon-large': features.highlightedFeature.size === 'large',
            })}
            iconName={features.highlightedFeature.iconName}
            role="presentation"
            alt=""
          />
          <span className="subscription__highlighted-feature-text">{features.highlightedFeature.name}</span>
        </div>
      )
    ) : null}
    {features.specialMessageText && <strong className="special-message">{features.specialMessageText}</strong>}
    {isExpanded && isBroadband && (
      <PriceTable productListWithPrice={features.productList} totalTextWithPrice={features.totalCalculation} />
    )}
    {isExpanded && features.button}
  </section>
);

Features.propTypes = {
  isBroadband: PropTypes.bool,
  isExpanded: PropTypes.bool,
  features: PropTypes.shape({
    speechBubbleText: PropTypes.string,
    highlightedFeature: PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      size: PropTypes.string,
      secondIconName: PropTypes.string,
      secondName: PropTypes.string,
      secondSize: PropTypes.string,
    }),
    specialMessageText: PropTypes.string,
    productList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      })
    ),
    button: PropTypes.node,
  }),
};

Subscription.Features = Features;

Subscription.propTypes = {
  isShowingFeatures: PropTypes.bool,
  isStandalone: PropTypes.bool,
  isBroadband: PropTypes.bool,
  isExpanded: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  dataAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dataUnit: PropTypes.string,
  dataAmountIcon: PropTypes.element,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  priceInfo: PropTypes.arrayOf(PropTypes.string),
  additionalInfo: PropTypes.shape({
    routerPrice: PropTypes.string,
    binding: PropTypes.string,
  }),
  allPricesLink: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  }),
  features: PropTypes.shape({
    speechBubbleText: PropTypes.string,
    highlightedFeature: PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      size: PropTypes.string,
      secondIconName: PropTypes.string,
      secondName: PropTypes.string,
      secondSize: PropTypes.string,
    }),
    specialMessageText: PropTypes.string,
    productList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      })
    ),
    button: PropTypes.node,
  }),
  totalCalculation: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
  scrollToOnOpen: PropTypes.bool,
  onSelect: PropTypes.func,
  onClose: PropTypes.func,
};

const formatPrice = price => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

export default Subscription;
