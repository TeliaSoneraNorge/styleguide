import React from 'react';
import { Heading, Paragraph, RadioButtonList, RadioButtonWithLabel, Subscription } from 'component-lib';

const features = {
    totalCalculation: { title: 'Minste totalpris', price: '8887,-', subtitles: ['med 12 mnd avtale'] },
    productList: [
        { title: 'Abonnement', price: '699,-', subtitles: ['Per mnd'] },
        { title: 'Ruter', price: '499,-' },
    ],
    buttonText: 'Gå videre'

};

const BroadbandExpanded = () => (
    <Subscription
        id="broadband-subscription-expanded"
        dataAmount={40}
        dataUnit="GB"
        price={699}
        priceInfo={['pr. md', 'Ingen bindingstid.']}
        additionalInfo={{
            routerPrice: 'Ruter fra 499,-',
            binding: 'ved 12 mnd binding'
        }}
        color="blue"
        size="small"
        isExpanded
        speechBubbleText="Some campaign text"
        featureButtonText="Gå videre"
        isBroadband
        features={features} >
        <RadioButtonList
            type="vertical"
            hasRichContent>
            <RadioButtonWithLabel hasRichContent value="0" name="radiobutton-broadband">
                <div style={{ display: 'inline-block', width: '80%' }}>
                    <Heading level="3" text="Batteridrevet 4G-ruter" />
                    <Paragraph>A longer description text here. Nulla quis lorem ut libero malesuada feugiat.
                                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</Paragraph>
                    <Heading level="2" text="499,-" className="heading--pebble subscription__price" />
                    <Paragraph kind="fineprint">Forutsetter binding av abonnement i 12mnd</Paragraph>
                </div>
                <img style={{ display: 'inline-block', float: 'right', width: '20%' }} src={require('../../../../assets/website-images/router1.jpg')} />
            </RadioButtonWithLabel>
            <RadioButtonWithLabel hasRichContent value="1" name="radiobutton-broadband">
                <div style={{ display: 'inline-block', width: '80%' }}>
                    <Heading level="3" text="Markedets kraftigste 4G-ruter" />
                    <Paragraph>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id
                                    imperdiet et, porttitor at sem.</Paragraph>
                    <Heading level="2" text="499,-" className="heading--pebble subscription__price" />
                    <Paragraph kind="fineprint">Forutsetter binding av abonnement i 12mnd</Paragraph>
                </div>
                <img style={{ display: 'inline-block', float: 'right', width: '20%' }} src={require('../../../../assets/website-images/router2.png')} />
            </RadioButtonWithLabel>
            <RadioButtonWithLabel hasRichContent value="2" name="radiobutton-broadband">
                <Heading level="3" text="Jeg ønsker ikke å kjøpe ruter" />
            </RadioButtonWithLabel>
        </RadioButtonList>
        <div className="rich-text">
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
        </div>
    </Subscription>
);

export default BroadbandExpanded;