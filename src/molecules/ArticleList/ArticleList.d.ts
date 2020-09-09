import * as React from 'react';

export interface ArticleListItemsProps {
  title: string;
  link: string;
  tags: string[];
  description: string;
}

export const ArticleList: React.FC<{articles: ArticleListItemsProps[]}>;

export default ArticleList;
