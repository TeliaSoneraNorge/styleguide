import React from 'react';
import { ArticleMetaData } from '@telia/styleguide';

const tags = [
    'Technology',
    'Music',
    'Streaming',
];

const DefaultArticleMetaData = () => (
    <ArticleMetaData
        author="Master Yoda"
        date="6 June 2018"
        iconSrc="/public/icons/ico_share.svg"
        tags={tags} />
);

export default DefaultArticleMetaData;