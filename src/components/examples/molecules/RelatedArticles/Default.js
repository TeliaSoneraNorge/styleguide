import React from 'react';
import { RelatedArticles } from 'component-lib';

const articles = [
    {
        link: '#',
        imageSrc: require('../../../../assets/website-images/boy-ipad.jpg'),
        heading: 'This is the article\'s heading',
        tags: ['Related', 'Article', 'Tag'],
    },
    {
        link: '#',
        imageSrc: require('../../../../assets/website-images/woman-mobile.jpg'),
        heading: 'This is the article\'s heading',
        tags: ['Related', 'Article', 'Tag'],
    },
    {
        link: '#',
        imageSrc: require('../../../../assets/website-images/kids-ipad.jpg'),
        heading: 'This is the article\'s heading',
        tags: ['Related', 'Article', 'Tag'],
    },
    {
        link: '#',
        imageSrc: require('../../../../assets/website-images/woman-holding-ipad.jpg'),
        heading: 'This is the article\'s heading',
        tags: ['Related', 'Article', 'Tag'],
    },
];

const DefaultRelatedArticles = () => (
    <RelatedArticles
        heading="Related articles"
        headingLink="#"
        id="related-articles"
        relatedArticles={articles}
        isExpandedAccordionIndex={1} />
);

export default DefaultRelatedArticles;