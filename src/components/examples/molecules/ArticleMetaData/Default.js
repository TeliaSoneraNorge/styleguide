import React from 'react';
import { ArticleMetaData } from 'component-lib';

const tags = [
    'Technology',
    'Music',
    'Streaming',
];

const DefaultArticleMetaData = () => (
    <ArticleMetaData
        author="Master Yoda"
        date="6 June 2018"
        iconName="ico_share"
        tags={tags} />
);

export default DefaultArticleMetaData;