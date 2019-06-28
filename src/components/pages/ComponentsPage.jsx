import _ from 'lodash';
import React from 'react';

import { Header, ProductList } from '@telia/styleguide';
import { getComponentsByCategory } from '../../utils/componentUtil';

const CategoryList = ({ categories }) => {
  const items = _.map(categories, (category, categoryName) => {
    return {
      iconName: '',
      title: category.heading,
      href: categoryName === 'style' ? '/style' : `/components/${categoryName}`,
    };
  });

  return <ProductList items={items} />;
};

const categories = getComponentsByCategory();

const ComponentsPage = () => (
  <div>
    <Header iconName="ico_code-2" pageTitle="Components" withMask={false} withContentOverlap={false}>
      <div>Here are the components by category.</div>
    </Header>
    <div className="container container--small container--extra-margin-bottom">
      <CategoryList categories={categories}></CategoryList>
    </div>
  </div>
);

export default ComponentsPage;
