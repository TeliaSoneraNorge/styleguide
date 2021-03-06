import * as React from 'react';

interface Crumb {
  name: string;
  link: string;
  target?: string;
  title?: string;
}

export interface BreadcrumbsProps {
  crumbs?: Crumb[];
  alwaysShowRootCrumb?: boolean;
  pageSize?: number;
  pagingSize?: number;
  backgroundColor?: string;
  fontColor?: string;
  iconColor?: string;
}

class Breadcrumbs extends React.Component<BreadcrumbsProps, any> {
  render(): JSX.Element;
}

export default Breadcrumbs;
