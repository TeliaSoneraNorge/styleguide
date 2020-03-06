import * as React from 'react';

export interface RelatedArticlesRelatedArticles {
  link: string;
  imageSrc: string;
  heading: string;
  tags: string[];
}

export interface RelatedArticlesProps {
  headingLink: string;
  heading: string;
  id: string;
  relatedArticles?: RelatedArticlesRelatedArticles[];
  isExpandedAccordionIndex?: number; 
}

export default class RelatedArticles extends React.Component<RelatedArticlesProps, any> {
  render(): JSX.Element;
}
