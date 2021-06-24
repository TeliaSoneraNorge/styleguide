import React from 'react';
import { Breadcrumbs } from '../../index';

export default {
  title: 'Component library/Molecules/Breadcrumbs',
  component: Breadcrumbs,
};

export const Default = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData.filter((item, i) => i <= 0)}
    alwaysShowRootCrumb={true}
    pageSize={2}
    pagingSize={2}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const TwoBreadcrumbs = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData.filter((item, i) => i <= 1)}
    alwaysShowRootCrumb={true}
    pageSize={2}
    pagingSize={2}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const ThreeBreadcrumbs = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData.filter((item, i) => i <= 2)}
    alwaysShowRootCrumb={true}
    pageSize={2}
    pagingSize={2}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const FourBreadcrumbs = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData.filter((item, i) => i <= 3)}
    alwaysShowRootCrumb={true}
    pageSize={2}
    pagingSize={3}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const FiveBreadcrumbs = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData.filter((item, i) => i <= 4)}
    alwaysShowRootCrumb={true}
    pageSize={2}
    pagingSize={2}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const SixBreadcrumbs = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData.filter((item, i) => i <= 5)}
    alwaysShowRootCrumb={false}
    pageSize={3}
    pagingSize={1}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const TenBreadcrumbs = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData}
    alwaysShowRootCrumb={true}
    pageSize={2}
    pagingSize={1}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const TenBreadcumbsPagingSize = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData}
    alwaysShowRootCrumb={true}
    pageSize={2}
    pagingSize={1}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const TenBreadcrumbsPageSizeLarge = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData}
    pageSize={4}
    alwaysShowRootCrumb={true}
    pagingSize={1}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const TenBreadcrumbsPageSizeSmall = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData}
    pageSize={1}
    alwaysShowRootCrumb={true}
    pagingSize={1}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const TenBreadcrumbsPageSizeTen = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData}
    pageSize={10}
    alwaysShowRootCrumb={true}
    pagingSize={1}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const TenBreadcrumbsHideRoot = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData}
    alwaysShowRootCrumb={false}
    pageSize={2}
    pagingSize={1}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const TenBreadcrumbsPageSizeLargeAndHideRoot = () => (
  <Breadcrumbs
    crumbs={breadCrumbsData}
    pageSize={4}
    alwaysShowRootCrumb={false}
    pagingSize={1}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const EmptyBreadcrumbsArray = () => (
  <Breadcrumbs
    crumbs={[]}
    pageSize={4}
    alwaysShowRootCrumb={false}
    pagingSize={1}
    fontColor={''}
    iconColor={''}
    backgroundColor={''}
  />
);

export const PurpleBackgroundColor = () => (
  <Breadcrumbs
    backgroundColor={'core-purple'}
    fontColor={'white'}
    iconColor={'white'}
    crumbs={breadCrumbsData.filter((item, i) => i <= 5)}
    pageSize={2}
    alwaysShowRootCrumb={false}
    pagingSize={1}
  />
);
export const GreyBackgroundColor = () => (
  <Breadcrumbs
    backgroundColor={'grey'}
    fontColor={'white'}
    iconColor={'white'}
    crumbs={breadCrumbsData.filter((item, i) => i <= 5)}
    pageSize={2}
    alwaysShowRootCrumb={false}
    pagingSize={1}
  />
);

export const BlackBackgroundColor = () => (
  <Breadcrumbs
    backgroundColor={'black'}
    fontColor={'white'}
    iconColor={'white'}
    crumbs={breadCrumbsData.filter((item, i) => i <= 5)}
    pageSize={2}
    alwaysShowRootCrumb={false}
    pagingSize={1}
  />
);

export const PurpleBackgroundWhiteTextBlackIconColor = () => (
  <Breadcrumbs
    backgroundColor={'core-purple'}
    fontColor={'white'}
    iconColor={'black'}
    crumbs={breadCrumbsData.filter((item, i) => i <= 5)}
    pageSize={2}
    alwaysShowRootCrumb={false}
    pagingSize={2}
  />
);

const breadCrumbsData = [
  {
    name: 'Step1',
    link: './',
  },
  {
    name: 'Step2',
    link: './',
  },
  {
    name: 'Step3',
    link: './',
  },
  {
    name: 'Step4',
    link: './',
  },
  {
    name: 'Step5',
    link: './',
    target: '_blank',
    title: 'Step 5 title',
  },
  {
    name: 'Step6',
    link: './',
    title: 'Step 6 title',
  },
  {
    name: 'Step7',
    link: './',
    target: '_blank',
  },
  {
    name: 'Step8',
    link: './',
  },
  {
    name: 'Step9',
    link: './',
  },
  {
    name: 'Step10',
    link: './',
  },
];
