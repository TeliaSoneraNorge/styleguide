import React from 'react';
import { Breadcrumbs } from '../../index';

export default {
  title: 'Component library/Molecules/Breadcrumbs',
  component: Breadcrumbs,
};

export const Default = () => <Breadcrumbs crumbs={storybook.homePage} />;
export const Step1 = () => <Breadcrumbs crumbs={storybook.step1Page} />;
export const Step2 = () => <Breadcrumbs crumbs={storybook.step2Page} />;
export const Step3 = () => <Breadcrumbs crumbs={storybook.step3Page} />;
export const Step4 = () => <Breadcrumbs crumbs={storybook.step4Page} />;
export const Step5 = () => <Breadcrumbs crumbs={storybook.step5Page} />;
export const Step6 = () => <Breadcrumbs crumbs={storybook.step6Page} />;

const storybook = {
  homePage: [
    {
      name: 'Hjem',
      link: './',
    },
  ],
  step1Page: [
    {
      name: 'Hjem',
      link: './',
    },
    {
      name: 'Current page',
      link: './',
    },
  ],
  step2Page: [
    {
      name: 'Hjem',
      link: './',
    },
    {
      name: 'Step1',
      link: './',
    },
    {
      name: 'Current page',
      link: './',
    },
  ],
  step3Page: [
    {
      name: 'Hjem',
      link: './',
    },
    {
      name: 'Step1',
      link: './',
    },
    {
      name: 'Step2',
      link: './',
    },
    {
      name: 'Current page',
      link: './',
    },
  ],
  step4Page: [
    {
      name: 'Hjem',
      link: './',
    },
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
      name: 'Current page',
      link: './',
    },
  ],
  step5Page: [
    {
      name: 'Hjem',
      link: './',
    },
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
      name: 'Current page',
      link: './',
    },
  ],
  step6Page: [
    {
      name: 'Hjem',
      link: './',
    },
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
    },
    {
      name: 'Step6',
      link: './',
    },
    {
      name: 'Step7',
      link: './',
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
      name: 'Current page',
      link: './',
    },
  ],
};
