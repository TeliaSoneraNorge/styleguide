import React from 'react';
import { Card, Cards } from '@telia/styleguide';

const imgSrc = require('assets/website-images/screenshot1.png');

const WhiteCards = () => (
    <div className="card--background-grey">
        <Cards>
            <Card
                img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }}
                link="#"
                title="Dette er cardsblokk 1" />
            <Card
                img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }}
                link="#"
                title="Dette er cardsblokk 2" />
            <Card
                img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }}
                link="#"
                title="Dette er cardsblokk 3" />
        </Cards>
    </div>
);

export default WhiteCards;