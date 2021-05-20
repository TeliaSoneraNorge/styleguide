import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import { Breadcrumbs } from '../../index';

export default {
  title: 'Component library/Molecules/Breadcrumbs',
  component: Breadcrumbs,
};

export const Default = () => (
  <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 0)} alwaysShowRootCrumb={true} />
);

export const TwoBreadcrumbs = () => <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 1)} />;
export const ThreeBreadcrumbs = () => <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 2)} />;
export const FourBreadcrumbs = () => <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 3)} />;
export const FiveBreadcrumbs = () => <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 4)} />;
export const SixBreadcrumbs = () => <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 5)} />;
export const TenBreadcrumbs = () => <Breadcrumbs crumbs={breadCrumbsData} />;
export const TenBreadcumbsPagingSize = () => <Breadcrumbs crumbs={breadCrumbsData} pagingSize={2} />;
export const TenBreadcrumbsPageSizeLarge = () => <Breadcrumbs crumbs={breadCrumbsData} pageSize={4} />;
export const TenBreadcrumbsPageSizeSmall = () => <Breadcrumbs crumbs={breadCrumbsData} pageSize={1} />;
export const TenBreadcrumbsHideRoot = () => <Breadcrumbs crumbs={breadCrumbsData} alwaysShowRootCrumb={false} />;
export const TenBreadcrumbsPageSizeLargeAndHideRoot = () => (
  <Breadcrumbs crumbs={breadCrumbsData} pageSize={4} alwaysShowRootCrumb={false} />
);
export const EmptyBreadcrumbsArray = () => <Breadcrumbs crumbs={[]} />;
export const BreadcrumbsUndefined = () => <Breadcrumbs />;
export const PurpleBackgroundColor = () => (
  <Breadcrumbs
    backgroundColor={'core-purple'}
    detailColor={'white'}
    crumbs={breadCrumbsData.filter((item, i) => i <= 5)}
  />
);
export const GrayBackgroundColor = () => (
  <Breadcrumbs backgroundColor={'gray'} detailColor={'white'} crumbs={breadCrumbsData.filter((item, i) => i <= 5)} />
);

export const BlackBackgroundColor = () => (
  <Breadcrumbs backgroundColor={'black'} detailColor={'white'} crumbs={breadCrumbsData.filter((item, i) => i <= 5)} />
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
