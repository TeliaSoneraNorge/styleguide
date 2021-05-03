import * as React from 'react';

interface Crumb {
  name: string;
  link: string;
  target: ?string;
  title: ?string;
}

export interface BreadCrumbsProps {
  crumbs: Crumb[];
  alwaysShowRootCrumb: ?boolean;
  pageSize: ?number;
  pagingSize: ?number;
}

class BreadCrumbs extends React.Component<BreadCrumbsProps, any> {
  render(): JSX.Element;
}

export default BreadCrumbs;
