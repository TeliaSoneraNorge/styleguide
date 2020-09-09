import * as React from 'react';

declare interface RelatedArticlesRelatedArticles {
  link: string;
  imageSrc: string;
  heading: string;
  tags: string[];
}

declare interface RelatedArticlesProps {
  headingLink: string;
  heading: string;
  id: string;
  relatedArticles?: RelatedArticlesRelatedArticles[];
  isExpandedAccordionIndex?: number;
}

export default class RelatedArticles extends React.Component<RelatedArticlesProps, any> {
  render(): JSX.Element;
}
