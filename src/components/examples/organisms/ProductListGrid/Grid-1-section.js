import React from 'react';
import { Container, Heading, List, ProductList, ProductListGrid } from '@telia/styleguide';

const ProductListGridExample = () => (
  <Container size="large">
    <ProductListGrid>
      <ProductListGrid.Section>
        <Heading level={2} text="Data Boost" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ProductList
          items={[
            {
              iconName: 'ico_databoost',
              iconColor: 'purple',
              title: '1 time for 19,-',
              description: 'Lorem ipsum dolor sit amet',
              href: '#',
              style: 'promo',
            },
            {
              iconName: 'ico_databoost',
              iconColor: 'purple',
              title: '3 time for 39,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_databoost',
              iconColor: 'purple',
              title: '12 time for 99,-',
              description: 'Lorem ipsum dolor sit amet',
            },
          ]}
        />
        <List>
          <List.Item>
            <List.Link href="#">First link in list</List.Link>
          </List.Item>
          <List.Item>
            <List.Link href="#">Second link in list</List.Link>
          </List.Item>
        </List>
      </ProductListGrid.Section>
    </ProductListGrid>
  </Container>
);

export default ProductListGridExample;
