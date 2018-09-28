import React from 'react';
import { Container, Heading, List, ProductList, ProductListGrid } from '@telia/styleguide';

const ProductListGridExample = () => (
    <Container size="large">
        <ProductListGrid>
            <ProductListGrid.Section>
                <Heading level={2} text="Data Boost" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ProductList items={[
                    {
                        iconName: 'ico_databoost',
                        iconColor: 'purple',
                        title: '1 TIME FOR 19,-',
                        description: 'Lorem ipsum dolor sit amet',
                        href: '#',
                        style: 'promo'
                    },
                    {
                        iconName: 'ico_databoost',
                        iconColor: 'purple',
                        title: '3 TIME FOR 39,-',
                        href: 'https://telia.no'
                    },
                    {
                        iconName: 'ico_databoost',
                        iconColor: 'purple',
                        title: '12 TIME FOR 99,-',
                        description: 'Lorem ipsum dolor sit amet'
                    }
                ]} />
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ProductList items={[
                    {
                        iconName: 'ico_subscription',
                        iconColor: 'black',
                        title: '1GB FOR 99,-',
                        href: 'https://telia.no'
                    },
                    {
                        iconName: 'ico_subscription',
                        iconColor: 'purple',
                        title: '5GB FOR 199,-',
                        href: 'https://telia.no'
                    },
                    {
                        iconName: 'ico_subscription',
                        iconColor: 'black',
                        title: '10GB FOR 299,-',
                        href: 'https://telia.no'
                    }
                ]} />
            </ProductListGrid.Section>
        </ProductListGrid>
    </Container>
);

export default ProductListGridExample;