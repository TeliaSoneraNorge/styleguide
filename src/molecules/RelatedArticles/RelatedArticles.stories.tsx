import React from 'react';
import { RelatedArticles } from '../../index';
import img from '../../stories/sampleImages'

export default {
  title: 'Component library/Molecules/RelatedArticles',
  component: RelatedArticles,
};

const articles = [
  {
    link: '#',
    imageSrc: img.boyIpad,
    heading: "This is the article's heading",
    tags: ['Related', 'Article', 'Tag'],
  },
  {
    link: '#',
    imageSrc: img.womanMobile,
    heading: "This is the article's heading again",
    tags: ['Related', 'Article', 'Tag'],
  },
  {
    link: '#',
    imageSrc: img.kidsIpad,
    heading: "This is the article's heading once more",
    tags: ['Related', 'Article', 'Tag'],
  },
  {
    link: '#',
    imageSrc: img.womanHoldingIpad,
    heading: "This is the final article's heading",
    tags: ['Related', 'Article', 'Tag'],
  },
];

export const DefaultRelatedArticles = () => (
  <RelatedArticles
    heading="Related articles"
    headingLink="#"
    id="related-articles"
    relatedArticles={articles}
    isExpandedAccordionIndex={1}
  />
);