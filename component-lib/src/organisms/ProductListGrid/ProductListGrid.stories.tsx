import React from 'react';
import ProductListGrid from './ProductListGrid';
import { Container, Heading, List, ProductList } from '../../index';

export default {
  title: 'Component library|Organisms/ProductListGrid',
  component: ProductListGrid,
};

export const Default = () => (
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
              title: '3 timer for 39,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_databoost',
              iconColor: 'purple',
              title: '12 timer for 99,-',
              description: 'Lorem ipsum dolor sit amet',
              href: 'https://telia.no',
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

export const ProductListGridExampleMedium = () => (
  <Container size="medium">
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
              title: '3 timer for 39,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_databoost',
              iconColor: 'purple',
              title: '12 timer for 99,-',
              description: 'Lorem ipsum dolor sit amet',
              href: 'https://telia.no',
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
      <ProductListGrid.Section>
        <Heading level={2} text="Ekstra data" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ProductList
          items={[
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '1GB for 99,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '5GB for 199,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
    </ProductListGrid>
  </Container>
);

export const ProductListGridExample2 = () => (
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
              href: 'https://telia.no',
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
      <ProductListGrid.Section>
        <Heading level={2} text="Ekstra data" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ProductList
          items={[
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '1GB for 99,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '5GB for 199,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
    </ProductListGrid>
  </Container>
);

export const ProductListGridExample3 = () => (
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
              href: 'https://telia.no',
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
      <ProductListGrid.Section>
        <Heading level={2} text="Ekstra data" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ProductList
          items={[
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '1GB for 99,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '5GB for 199,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
      <ProductListGrid.Section>
        <Heading level={2} text="Ekstra data" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ProductList
          items={[
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '1GB for 99,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '5GB for 199,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
    </ProductListGrid>
  </Container>
);

export const ProductListGridExample4 = () => (
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
              href: 'https://telia.no',
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
      <ProductListGrid.Section>
        <Heading level={2} text="Ekstra data" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ProductList
          items={[
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '1GB for 99,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '5GB for 199,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
      <ProductListGrid.Section>
        <Heading level={2} text="Ekstra data" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ProductList
          items={[
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '1GB for 99,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '5GB for 199,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
      <ProductListGrid.Section>
        <Heading level={2} text="Ekstra data" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ProductList
          items={[
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '1GB for 99,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '5GB for 199,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
    </ProductListGrid>
  </Container>
);

export const ProductListGridExampleHorizontalMedium = () => (
  <Container size="medium">
    <ProductListGrid layout="horizontal">
      <ProductListGrid.Section>
        <Heading level={2} text="Some section" />
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
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
      <ProductListGrid.Section>
        <Heading level={2} text="Another section" />
        <ProductList
          items={[
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '1GB for 99,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '5GB for 199,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
      <ProductListGrid.Section>
        <Heading level={2} text="The third section" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ProductList
          items={[
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '1GB for 99,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '5GB for 199,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
    </ProductListGrid>
  </Container>
);

export const ProductListGridExampleHorizontal = () => (
  <Container size="large">
    <ProductListGrid layout="horizontal">
      <ProductListGrid.Section>
        <Heading level={2} text="Some section" />
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
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
      <ProductListGrid.Section>
        <Heading level={2} text="Another section" />
        <ProductList
          items={[
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '1GB for 99,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '5GB for 199,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
      <ProductListGrid.Section>
        <Heading level={2} text="The third section" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ProductList
          items={[
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '1GB for 99,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '5GB for 199,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
            {
              iconName: 'ico_subscription',
              iconColor: 'purple',
              title: '10GB for 299,-',
              href: 'https://telia.no',
            },
          ]}
        />
      </ProductListGrid.Section>
    </ProductListGrid>
  </Container>
);