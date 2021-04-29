import * as React from 'react';

interface Crumbs {
  name: string;
  link: string;
}

export interface BreadcrumbsProps {
  crumbs: Crumbs[];
}

export default class Breadcrumbs extends React.Component<BreadcrumbsProps, any> {
  render(): JSX.Element;
}
