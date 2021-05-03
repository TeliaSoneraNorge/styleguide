import React from 'react';
import { Breadcrumbs } from '../../index';

export default {
  title: 'Component library/Molecules/Breadcrumbs',
  component: Breadcrumbs,
};

export const Default = () => <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 0)} />;
export const TwoBreadCrumbs = () => <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 1)} />;
export const ThreeBreadCrumbs = () => <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 2)} />;
export const FourBreadCrumbs = () => <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 3)} />;
export const FiveBreadCrumbs = () => <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 4)} />;
export const SixBreadCrumbs = () => <Breadcrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 5)} />;
export const TenBreadCrumbs = () => <Breadcrumbs crumbs={breadCrumbsData} />;
export const TenBreadCrumbsPagingSize = () => <Breadcrumbs crumbs={breadCrumbsData} pagingSize={2} />;
export const TenBreadCrumbsPageSizeLarge = () => <Breadcrumbs crumbs={breadCrumbsData} pageSize={4} />;
export const TenBreadCrumbsPageSizeSmall = () => <Breadcrumbs crumbs={breadCrumbsData} pageSize={1} />;
export const TenBreadCrumbsHideRoot = () => <Breadcrumbs crumbs={breadCrumbsData} alwaysShowRootCrumb={false} />;
export const TenBreadCrumbsPageSizeLargeAndHideRoot = () => (
  <Breadcrumbs crumbs={breadCrumbsData} pageSize={4} alwaysShowRootCrumb={false} />
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
