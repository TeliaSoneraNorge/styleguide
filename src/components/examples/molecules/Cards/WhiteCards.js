import React from 'react';
import Card from '../../../../../component-lib/src/molecules/Cards/Card';
import Cards from '../../../../../component-lib/src/molecules/Cards/Cards';

const img = require('../../../../assets/website-images/screenshot1.png');

const WhiteCards = () => (
    <div className="card--background-grey">
        <Cards>
            <Card
                img={img}
                alt="Man and woman looking at an iPad."
                link="#"
                title="Dette er cardsblokk 1" />
            <Card
                img={img}
                alt="Man and woman looking at an iPad."
                link="#"
                title="Dette er cardsblokk 2" />
            <Card
                img={img}
                alt="Man and woman looking at an iPad."
                link="#"
                title="Dette er cardsblokk 3" />
        </Cards>
    </div>
);

export default WhiteCards;