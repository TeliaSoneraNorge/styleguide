import React from 'react';
import { RelatedArticle } from 'component-lib';

const DefaultRelatedArticle = () => (
    <RelatedArticle
        imgSrc={require('../../../../assets/website-images/boy-ipad.jpg')}
        imgAlt="Boy playing with a tablet in a bed."
        heading="This is the article's heading"
        tags={['Related', 'Article', 'Tag']} />
);

export default DefaultRelatedArticle;