import React from 'react';
import { Cards, Card } from '../../index';
import img from '../../stories/sampleImages'

export default {
  title: 'Component library/Molecules/Cards',
  component: Cards,
};

export const DefaultCards = () => {
  const imgSrc = img.screenshot1;
  
  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
    <Cards isGrey={true}>
      <Card img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }} link="#" title="Dette er cardsblokk 1" />
      <Card img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }} link="#" title="Dette er cardsblokk 2" />
      <Card
        img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }}
        link="#"
        title="Dette er cards blokka blokka hrrrraaaaatata 3"
      />
    </Cards>
  )
};

export const WhiteCards = () => {
  const imgSrc = img.screenshot1;
  
  return (
    <div className="card--background-grey">
      {/* @ts-expect-error ts-migrate(2559) FIXME: Type '{ children: Element[]; }' has no properties ... Remove this comment to see the full error message */}
      <Cards>
        <Card img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }} link="#" title="Dette er cardsblokk 1" />
        <Card img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }} link="#" title="Dette er cardsblokk 2" />
        <Card img={{ src: imgSrc, alt: 'Man and woman looking at an iPad.' }} link="#" title="Dette er cardsblokk 3" />
      </Cards>
    </div>
  )
};