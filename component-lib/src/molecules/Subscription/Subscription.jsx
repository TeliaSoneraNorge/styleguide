import React from 'react';

import Box from '../../atoms/Box/Box';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import PriceTable from '../PriceTable/PriceTable';
import RadioButtonList from '../RadioButtonList/RadioButtonList';
import RadioButtonWithLabel from '../RadioButtonList/RadioButtonWithLabel';


function classNames(isShowingFeatures, isStandalone, isBroadband) {
    const classNames = ['subscription'];
    if (isShowingFeatures) {
        classNames.push('subscription--is-showing-features');
    }
    if (isStandalone) {
        classNames.push('subscription--is-standalone');
    }
    if (isBroadband) {
        classNames.push('subscription--is-broadband');
    }
    return classNames.join(' ');
}
/**
 * Status: *finished*.
 *
 */
export default class Subscription extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box className={classNames(this.props.isShowingFeatures, this.props.isStandalone, this.props.isBroadband)} color={this.props.color} size={this.props.size} id={this.props.id} canExpand={!this.props.isStandalone} isExpanded={this.props.isExpanded}>
                <section className="subscription__teaser">
                    <div className="subscription__teaser-content">
                        <h1 className="subscription__name">{this.props.name}</h1>
                        <span className="subscription__data-amount">{this.props.dataAmount}</span>
                        <span className="subscription__data-unit">{this.props.dataUnit}</span>
                        <span className="subscription__price">{this.props.price},-</span>
                        <span className="subscription__price-info">per mnd.</span>
                        <span className="subscription__price-info">Ingen bindingstid.</span>
                        {this.props.isBroadband &&
                            <div className="subscription__additional-info">
                                <div className="subscription__additional-info--bold">Ruter fra 499,-</div>
                                <div>ved 12 mnd binding</div>
                            </div>
                        }
                    </div>
                    {!this.props.isBroadband &&
                        <div className="subscription__teaser-links">
                            <div><a href="#" className="link" target="_self">Se alle priser</a></div>
                        </div>
                    }
                </section>
                {(this.props.isExpanded || this.props.isShowingFeatures) ?
                    <section className="subscription__features">
                        {this.props.speechBubbleText ?
                            <div className="box__speech-bubble">{this.props.speechBubbleText}</div>
                            : <div className="box__speech-bubble box__speech-bubble--empty"></div>}
                        {this.props.highlightedFeature ?
                            <div className="subscription__highlighted-feature">
                                <img className="subscription__highlighted-feature-icon" src={this.props.highlightedFeature.icon} role="presentation" alt="" />
                                <span className="subscription__highlighted-feature-text">{this.props.highlightedFeature.name}</span>
                            </div> : null}
                        {this.props.specialMessageText ? <strong className="special-message">{this.props.specialMessageText}</strong> : null}
                        {this.props.isBroadband &&
                            <PriceTable productListWithPrice={this.props.productList} totalTextWithPrice={this.props.totalCalculation} />
                        }
                        <button className="button button--primary">Gå videre</button>
                    </section> : null}
                {this.props.isExpanded ?
                    <section className="subscription__expanded-info">
                        {this.props.isBroadband &&
                            <RadioButtonList
                                type="vertical"
                                hasRichContent>
                                <RadioButtonWithLabel checked hasRichContent value="0" name="radiobutton-broadband">
                                    <div style={{display: 'inline-block', width: '80%'}}>
                                        <Heading level="3" text="Batteridrevet 4G-ruter"/>
                                        <Paragraph>A longer description text here. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</Paragraph>
                                        <Heading level="2" text="499,-" className="heading--pebble subscription__price"/>
                                        <Paragraph kind="fineprint">Forutsetter binding av abonnement i 12mnd</Paragraph>
                                    </div>
                                    <img style={{display: 'inline-block', float: 'right', width: '20%'}} src="/public/website-images/router1.jpg"/>
                                </RadioButtonWithLabel>
                                <RadioButtonWithLabel hasRichContent value="1" name="radiobutton-broadband">
                                    <div style={{display: 'inline-block', width: '80%'}}>
                                        <Heading level="3" text="Markedets kraftigste 4G-ruter"/>
                                        <Paragraph>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</Paragraph>
                                        <Heading level="2" text="499,-" className="heading--pebble subscription__price"/>
                                        <Paragraph kind="fineprint">Forutsetter binding av abonnement i 12mnd</Paragraph>
                                    </div>
                                    <img style={{display: 'inline-block', float: 'right', width: '20%'}} src="/public/website-images/router2.png"/>
                                </RadioButtonWithLabel>
                                <RadioButtonWithLabel hasRichContent value="2" name="radiobutton-broadband">
                                    <Heading level="3" text="Jeg ønsker ikke å kjøpe ruter"/>
                                </RadioButtonWithLabel>
                            </RadioButtonList>
                        }
                        <h2 className="heading heading--level-2">Om abonnement</h2>
                        <h3 className="heading heading--level-3">Skanning, texting og MMS</h3>
                        <p>Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?</p>
                        <h3 className="heading heading--level-3">Data</h3>
                        <p>I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, "I can't do it. I just can't do it. It's inappropriate. It's not nice." When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. I think the only card she has is the Lorem card.</p>
                        <h3 className="heading heading--level-3">Utland</h3>
                        <p>We have so many things that we have to do better... and certainly ipsum is one of them. Despite the constant negative ipsum covfefe. Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites.</p>
                        <ul className="list list--links">
                            <li className="list__item">
                                <a className="list__link" href="#" target="_self">Last ned abonnementsvilkår</a>
                            </li>
                        </ul>
                    </section> : null}
            </Box>
        );
    }
}