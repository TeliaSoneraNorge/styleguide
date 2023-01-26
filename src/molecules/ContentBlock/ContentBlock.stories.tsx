import React from 'react';
import { ContentBlock } from './ContentBlock';

export default {
  title: 'Component library/Molecules/ContentBlock',
  component: ContentBlock,
};

const props = {
  block: {
    buttonLink: '/mobilabonnement/ubegrenset-data/familie/',
    buttonText: 'Les mer',
    image: {
      title: 'Spar penger med familie',
      url:
        '//images.ctfassets.net/iz15t1lxx44v/aBE1UpjIubMTkpL0Kfcd0/df800159f0fa3c37799c7135fe3fb14d/image-2022-04-07-13-42-27-884.png',
    },

    orientation: true,
    text:
      '<p class="paragraph">Det lønner seg å legge til flere. Betal full pris for kun ett abonnement, resten får samme hastighet til <span style="font-family: TeliaSans-medium, Helvetica, Arial, sans-serif;">kun 399,-</span></p>',
    title: 'Spar penger med familie',
  },
  whiteBackground: false,
};

export const DefaultContentBlock = () => <ContentBlock {...props} />;

export const ContentBlockWhiteBg = () => <ContentBlock {...props} whiteBackground={true} />;
