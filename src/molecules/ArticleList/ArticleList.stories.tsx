import React from 'react';
import { ArticleList } from '../../index';

export default {
  title: 'Component library/Molecules/ArticleList',
  component: ArticleList,
};

export const Default = () => {
  const articles = [
    {
      title: 'HBO Nordic',
      link: '#',
      tags: ['Artikkel'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit velit, egestas eget suscipit a, porta sed orci. Cras ac convallis nisl. In fringilla aliquam magna nec iaculis. Donec non dolor ipsum. Praesent auctor leo ex.',
    },
    {
      title: 'HBO Nordic 2',
      link: '#',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit velit, egestas eget suscipit a, porta sed orci. Cras ac convallis nisl. In fringilla aliquam magna nec iaculis. Donec non dolor ipsum. Praesent auctor leo ex.',
    },
    {
      title: 'HBO Nordic 3',
      link: '#',
      tags: ['Artikkel'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit velit, egestas eget suscipit a, porta sed orci. Cras ac convallis nisl. In fringilla aliquam magna nec iaculis. Donec non dolor ipsum. Praesent auctor leo ex.',
    },
    {
      title: 'HBO Nordic 4',
      link: '#',
      tags: ['Artikkel'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit velit, egestas eget suscipit a, porta sed orci. Cras ac convallis nisl. In fringilla aliquam magna nec iaculis. Donec non dolor ipsum. Praesent auctor leo ex.',
    },
  ];

  return <ArticleList articles={articles} />;
};
