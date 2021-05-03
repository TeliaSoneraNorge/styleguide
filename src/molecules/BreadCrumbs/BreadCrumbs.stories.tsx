import React from 'react';
import { BreadCrumbs } from '../../index';

export default {
  title: 'Component library/Molecules/BreadCrumbs',
  component: BreadCrumbs,
};

export const Default = () => <BreadCrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 0)} />;
export const TwoBreadCrumbs = () => <BreadCrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 1)} />;
export const ThreeBreadCrumbs = () => <BreadCrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 2)} />;
export const FourBreadCrumbs = () => <BreadCrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 3)} />;
export const FiveBreadCrumbs = () => <BreadCrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 4)} />;
export const SixBreadCrumbs = () => <BreadCrumbs crumbs={breadCrumbsData.filter((item, i) => i <= 5)} />;
export const TenBreadCrumbs = () => <BreadCrumbs crumbs={breadCrumbsData} />;
export const TenBreadCrumbsPagingSize = () => <BreadCrumbs crumbs={breadCrumbsData} pagingSize={2} />;
export const TenBreadCrumbsPageSizeLarge = () => <BreadCrumbs crumbs={breadCrumbsData} pageSize={0} />;
export const TenBreadCrumbsPageSizeSmall = () => <BreadCrumbs crumbs={breadCrumbsData} pageSize={1} />;
export const TenBreadCrumbsHideRoot = () => <BreadCrumbs crumbs={breadCrumbsData} alwaysShowRootCrumb={false} />;
export const TenBreadCrumbsPageSizeLargeAndHideRoot = () => (
  <BreadCrumbs crumbs={breadCrumbsData} pageSize={4} alwaysShowRootCrumb={false} />
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
