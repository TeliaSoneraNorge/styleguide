import React from 'react';
import { Breadcrumbs } from '../../index';

export default {
  title: 'Component library/Molecules/Breadcrumbs',
  component: Breadcrumbs,
};

const storybook = {
  homePage: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
  ],
  step1Page: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
    {
      id: 1,
      name: 'Current page',
      link: './hjem/currentpage',
    },
  ],
  step2Page: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
    {
      id: 1,
      name: 'Step1',
      link: './hjem/step1',
    },
    {
      id: 2,
      name: 'Current page',
      link: './hjem/step1/currentpage',
    },
  ],
  step3Page: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
    {
      id: 1,
      name: 'Step1',
      link: 'http://localhost:6006/?path=/story/component-library-molecules-breadcrumbs--step-3',
    },
    {
      id: 2,
      name: 'Step2',
      link: 'http://localhost:6006/?path=/story/component-library-molecules-breadcrumbs--step-3',
    },
    {
      id: 3,
      name: 'Current page',
      link: './hjem/step1/step2/currentpage',
    },
  ],
  step4Page: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
    {
      id: 1,
      name: 'Step1',
      link: './hjem/step1',
    },
    {
      id: 2,
      name: 'Step2',
      link: './hjem/step1/step2',
    },
    {
      id: 3,
      name: 'Step3',
      link: './hjem/step1/step2/step3',
    },
    {
      id: 4,
      name: 'Current page',
      link: './hjem/step1/step2/step3/currentpage',
    },
  ],
  step5Page: [
    {
      id: 0,
      name: 'Hjem',
      link: './',
    },
    {
      id: 1,
      name: 'Step1',
      link: './hjem/step1',
    },
    {
      id: 2,
      name: 'Step2',
      link: './hjem/step1/step2',
    },
    {
      id: 3,
      name: 'Step3',
      link: './hjem/step1/step2/step3',
    },
    {
      id: 4,
      name: 'Step4',
      link: './hjem/step1/step2/step3/step4',
    },
    {
      id: 5,
      name: 'Current page',
      link: './hjem/step1/step2/step3/curentpage',
    },
  ],
};

export const Default = () => <Breadcrumbs crumbs={storybook.homePage} />;

export const Step1 = () => <Breadcrumbs crumbs={storybook.step1Page} />;

export const Step2 = () => <Breadcrumbs crumbs={storybook.step2Page} />;

export const Step3 = () => <Breadcrumbs crumbs={storybook.step3Page} />;

export const Step4 = () => <Breadcrumbs crumbs={storybook.step4Page} />;

export const Step5 = () => <Breadcrumbs crumbs={storybook.step5Page} />;
