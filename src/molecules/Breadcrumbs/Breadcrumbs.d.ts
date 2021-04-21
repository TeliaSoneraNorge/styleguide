import * as React from 'react';

export interface BreadcrumbsProps {
  crumbs: Object;
}

export default class Breadcrumbs extends React.Component<BreadcrumbsProps, any> {
  render(): JSX.Element;
}
