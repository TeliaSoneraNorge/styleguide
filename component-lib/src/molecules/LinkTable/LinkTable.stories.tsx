import React from 'react';
import LinkTable from './LinkTable';
import Container from '../../atoms/Container';
import {AllBusinessIcons} from '../../business/Icon/AllBusinessIcons'

export default {
    title: 'Component library|Molecules/Link table',
    component: LinkTable,
};

export const EightItems = () => (
    <Container size="large">
        <AllBusinessIcons />
        <LinkTable>
            <LinkTable.Item href="#" icon="shoppingcart" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="sim-card" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="product-svitsj" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="document" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="kontantkort" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="insurance" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="money-euro" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="user" text="Lorem ipsum" />
        </LinkTable>
    </Container>
);

export const WrapByTwoItems = () => (
    <Container size="medium">
        <AllBusinessIcons />
        <LinkTable wrapByTwo={true}>
            <LinkTable.Item href="#" icon="shoppingcart" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="sim-card" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="product-svitsj" text="Lorem ipsum" />
            <LinkTable.Item href="#" icon="document" text="Lorem ipsum" />
        </LinkTable>
    </Container>
);