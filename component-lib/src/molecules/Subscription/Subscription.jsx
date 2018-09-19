import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Box from '../../atoms/Box/Box';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import PriceTable from '../PriceTable/PriceTable';
import RadioButtonList from '../RadioButtonList/RadioButtonList';
import RadioButtonWithLabel from '../RadioButtonList/RadioButtonWithLabel';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *finished*.
 *
 */
const Subscription = ({ isShowingFeatures, isStandalone, isBroadband, color, size, id, isExpanded, name, dataAmount, dataUnit, price, speechBubbleText,
    highlightedFeature, specialMessageText, productList, totalCalculation }) => (
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
                <span className="subscription__price-info">per mnd.</span>
                <span className="subscription__price-info">Ingen bindingstid.</span>
                {isBroadband &&
                <div className="subscription__additional-info">
                    <div className="subscription__additional-info--bold">Ruter fra 499,-</div>
                    <div>ved 12 mnd binding</div>
                </div>
                }
            </div>
            {!isBroadband &&
            <div className="subscription__teaser-links">
                <div><a href="#" className="link" target="_self">Se alle priser</a></div>
            </div>
            }
        </section>
        {(isExpanded || isShowingFeatures) ?
            <section className="subscription__features">
                {speechBubbleText ?
                    <div className="box__speech-bubble">{speechBubbleText}</div>
                    : <div className="box__speech-bubble box__speech-bubble--empty"></div>}
                {highlightedFeature ?
                    <div className="subscription__highlighted-feature">
                        <SvgIcon className="subscription__highlighted-feature-icon" iconName={highlightedFeature.iconName} role="presentation" alt="" />
                        <span className="subscription__highlighted-feature-text">{highlightedFeature.name}</span>
                    </div> : null}
                {specialMessageText ?
                    <strong className="special-message">{specialMessageText}</strong> : null}
                {isBroadband &&
                    <PriceTable productListWithPrice={productList} totalTextWithPrice={totalCalculation} />}
                <button className="button button--primary">Gå videre</button>
            </section> : null}
        {isExpanded ?
            <section className="subscription__expanded-info">
                {isBroadband &&
                <RadioButtonList
                    type="vertical"
                    hasRichContent>
                    <RadioButtonWithLabel checked hasRichContent value="0" name="radiobutton-broadband">
                        <div style={{ display: 'inline-block', width: '80%' }}>
                            <Heading level="3" text="Batteridrevet 4G-ruter" />
                            <Paragraph>A longer description text here. Nulla quis lorem ut libero malesuada feugiat.
                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</Paragraph>
                            <Heading level="2" text="499,-" className="heading--pebble subscription__price" />
                            <Paragraph kind="fineprint">Forutsetter binding av abonnement i 12mnd</Paragraph>
                        </div>
                        <img style={{ display: 'inline-block', float: 'right', width: '20%' }} src="/public/website-images/router1.jpg" />
                    </RadioButtonWithLabel>
                    <RadioButtonWithLabel hasRichContent value="1" name="radiobutton-broadband">
                        <div style={{ display: 'inline-block', width: '80%' }}>
                            <Heading level="3" text="Markedets kraftigste 4G-ruter" />
                            <Paragraph>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id
                                imperdiet et, porttitor at sem.</Paragraph>
                            <Heading level="2" text="499,-" className="heading--pebble subscription__price" />
                            <Paragraph kind="fineprint">Forutsetter binding av abonnement i 12mnd</Paragraph>
                        </div>
                        <img style={{ display: 'inline-block', float: 'right', width: '20%' }} src="/public/website-images/router2.png" />
                    </RadioButtonWithLabel>
                    <RadioButtonWithLabel hasRichContent value="2" name="radiobutton-broadband">
                        <Heading level="3" text="Jeg ønsker ikke å kjøpe ruter" />
                    </RadioButtonWithLabel>
                </RadioButtonList>
                }
                <h2 className="heading heading--level-2">Om abonnement</h2>
                <h3 className="heading heading--level-3">Skanning, texting og MMS</h3>
                <p>
                    Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like
                    the world has never seen. Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?
                </p>
                <h3 className="heading heading--level-3">Data</h3>
                <p>
                    I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, "I
                    can't do it. I just can't do it. It's inappropriate. It's not nice." When other websites give you
                    text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of
                    problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing
                    misspellings. They’re typists… And some, I assume, are good words. I think the only card she has is
                    the Lorem card.
                </p>
                <h3 className="heading heading--level-3">Utland</h3>
                <p>
                    We have so many things that we have to do better... and certainly ipsum is one of them. Despite the
                    constant negative ipsum covfefe. Lorem Ipsum is the single greatest threat. We are not - we are not
                    keeping up with other websites.
                </p>
                <ul className="list list--links">
                    <li className="list__item">
                        <a className="list__link" href="#" target="_self">Last ned abonnementsvilkår</a>
                    </li>
                </ul>
            </section> : null}
    </Box>
);
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
    totalCalculation: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
};

export default Subscription;