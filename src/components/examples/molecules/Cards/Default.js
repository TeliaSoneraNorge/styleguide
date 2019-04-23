import React from 'react';
import Card from '../../../../../component-lib/src/molecules/Cards/Card';
import Cards from '../../../../../component-lib/src/molecules/Cards/Cards';

const img = require('../../../../assets/website-images/screenshot1.png');

const DefaultCards = () => (
    <Cards isGrey={true}>
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
            title="Dette er cardsblokkasd asdasdasdasd 3" />
    </Cards>
);

export default DefaultCards;