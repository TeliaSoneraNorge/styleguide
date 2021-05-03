import * as React from 'react';

interface Crumb {
  name: string;
  link: string;
  target: ?string;
  title: ?string;
}

export interface BreadCrumbsProps {
  crumbs: Crumb[];
  alwaysShowRootCrumb: ?boolean = true;
  pageSize: ?number = 1;
  pagingSize: ?number = 1;
}

class Breadcrumbs extends React.Component<BreadCrumbsProps, any> {
  render(): JSX.Element;
}

export default Breadcrumbsz;
