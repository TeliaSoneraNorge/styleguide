import React from 'react';
import { RelatedArticles } from '@telia/styleguide';

const articles = [
    {
        link: '#',
        imageSrc: '/public/website-images/boy-ipad.jpg',
        heading: 'This is the article\'s heading',
        tags: ['Related', 'Article', 'Tag'],
    },
    {
        link: '#',
        imageSrc: '/public/website-images/woman-mobile.jpg',
        heading: 'This is the article\'s heading',
        tags: ['Related', 'Article', 'Tag'],
    },
    {
        link: '#',
        imageSrc: '/public/website-images/kids-ipad.jpg',
        heading: 'This is the article\'s heading',
        tags: ['Related', 'Article', 'Tag'],
    },
    {
        link: '#',
        imageSrc: '/public/website-images/woman-holding-ipad.jpg',
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