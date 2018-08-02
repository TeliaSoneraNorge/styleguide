import React from 'react';
import { ArticleList } from '@telia/styleguide';

const articles = [
    { title: 'HBO Nordic', link: '#', tags: ['Artikkel'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit velit, egestas eget suscipit a, porta sed orci. Cras ac convallis nisl. In fringilla aliquam magna nec iaculis. Donec non dolor ipsum. Praesent auctor leo ex.' },
    { title: 'HBO Nordic', link: '#', tags: ['Tag 1', 'Tag 2', 'Tag 3'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit velit, egestas eget suscipit a, porta sed orci. Cras ac convallis nisl. In fringilla aliquam magna nec iaculis. Donec non dolor ipsum. Praesent auctor leo ex.' },
    { title: 'HBO Nordic', link: '#', tags: ['Artikkel'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit velit, egestas eget suscipit a, porta sed orci. Cras ac convallis nisl. In fringilla aliquam magna nec iaculis. Donec non dolor ipsum. Praesent auctor leo ex.' },
    { title: 'HBO Nordic', link: '#', tags: ['Artikkel'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit velit, egestas eget suscipit a, porta sed orci. Cras ac convallis nisl. In fringilla aliquam magna nec iaculis. Donec non dolor ipsum. Praesent auctor leo ex.' },
];

const DefaultArticles = () => (
    <ArticleList articles={articles} />
);

export default DefaultArticles;