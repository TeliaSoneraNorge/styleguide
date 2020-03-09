import React from 'react';
import { ArticleMetaData } from '../../index';

export default {
  title: 'Component library|Molecules/ArticleMetaData',
  component: ArticleMetaData,
};

export const Default = () => {
  const tags = ['Technology', 'Music', 'Streaming'];
  
  return (
    <ArticleMetaData author="Master Yoda" date="6 June 2018" iconName="ico_share" tags={tags} />
  )
};

