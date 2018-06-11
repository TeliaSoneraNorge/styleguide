import React from 'react';
import { RelatedArticle } from '@telia/styleguide';

const tags = ['Related', 'Article', 'Tag'];

const DefaultRelatedArticle = () => (
    <RelatedArticle
        imgSrc="/public/website-images/boy-ipad.jpg"
        imgAlt="Boy playing with a tablet in a bed."
        heading="This is the article's heading"
        tags={tags} />
);

export default DefaultRelatedArticle;