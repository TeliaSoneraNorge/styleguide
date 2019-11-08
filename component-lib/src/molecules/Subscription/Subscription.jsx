import React from 'react';
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
    children }) => (
    <Box
        className={classnames('subscription', {
            'subscription--is-showing-features': isShowingFeatures,
            'subscription--is-standalone': isStandalone,
            'subscription--is-broadband': isBroadband,
        })}
        color={color}
        size={size}
        id={id}
        canExpand={!isStandalone}
        isExpanded={isExpanded}>
        <section className="subscription__teaser">
            <div className="subscription__teaser-content">
                <h1 className="subscription__name">{name}</h1>
                <span className="subscription__data-amount">{dataAmount}</span>
                <span className="subscription__data-unit">{dataUnit}</span>
                <span className="subscription__price">{price},-</span>
                {priceInfo &&
                        priceInfo.map(info =>
                            <span key={info} className="subscription__price-info">{info}</span>
                        )
                }
                {additionalInfo &&
                        <div className="subscription__additional-info">
                            <div className="subscription__additional-info--bold">{additionalInfo.routerPrice}</div>
                            <div>{additionalInfo.binding}</div>
                        </div>
                }
            </div>
            {allPricesLink &&
                    <div className="subscription__teaser-links">
                        <div><a href={allPricesLink.url} className="link" target="_self">{allPricesLink.text}</a></div>
                    </div>
            }
        </section>
        {features &&
                <Subscription.Features
                    features={features} isBroadband={isBroadband} />}
        {children &&
                <section className="subscription__expanded-info">
                    {children}
                </section>}
    </Box>
);

const Features = ({ features, isBroadband }) =>
    <section className="subscription__features">
        {(features.speechBubbleText ?
            <div className="box__speech-bubble">{features.speechBubbleText}</div>
            : <div className="box__speech-bubble box__speech-bubble--empty"></div>)}
        {features.highlightedFeature &&
            <div className="subscription__highlighted-feature">
                <SvgIcon className="subscription__highlighted-feature-icon" iconName={features.highlightedFeature.iconName} role="presentation" alt="" />
                <span className="subscription__highlighted-feature-text">{features.highlightedFeature.name}</span>
            </div>}
        {features.specialMessageText &&
            <strong className="special-message">{features.specialMessageText}</strong>}
        {isBroadband &&
            <PriceTable productListWithPrice={features.productList} totalTextWithPrice={features.totalCalculation} />}
        {features.button}
    </section>;
Subscription.Features = Features


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
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    priceInfo: PropTypes.arrayOf(PropTypes.string),
    additionalInfo: PropTypes.shape({
        routerPrice: PropTypes.string,
        binding: PropTypes.string
    }),
    allPricesLink: PropTypes.shape({
        url: PropTypes.string,
        text: PropTypes.string
    }),
    features: PropTypes.shape({
        speechBubbleText: PropTypes.string,
        highlightedFeature: PropTypes.shape({
            iconName: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
        specialMessageText: PropTypes.string,
        productList: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })),
        button: PropTypes.Button
    }),
    totalCalculation: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
};

export default Subscription;