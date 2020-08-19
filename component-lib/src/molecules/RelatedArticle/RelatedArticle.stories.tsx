import React from 'react';
import { RelatedArticle } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library/Molecules/RelatedArticle',
  component: RelatedArticle,
};

export const Default = () => (
  <RelatedArticle
    imgSrc={img.boyIpad}
    imgAlt="Boy playing with a tablet in a bed."
    heading="This is the article's heading"
    tags={['Related', 'Article', 'Tag']}
  />
);