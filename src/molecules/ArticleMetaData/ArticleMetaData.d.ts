import * as React from 'react';

export interface ArticleMetaDataProps {
  /**
   * Source of icon to use.
   */
  iconName?: string;
  /**
   * Array of tags to display.
   */
  tags?: string[];
  /**
   * Formatted date of publishing.
   */
  date: string;
  /**
   * Name of the author, who published the article.
   */
  author: string;
}

export const ArticleMetaData: React.FC<ArticleMetaDataProps>;

export default ArticleMetaData;
