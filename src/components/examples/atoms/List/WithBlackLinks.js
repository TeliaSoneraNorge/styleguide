import React from 'react';
import { List } from 'component-lib';

const { Item, Link } = List;

const ListWithBlackLinks = () => (
    <List black>
        <Item>
            <Link href="#">First link in list</Link>
        </Item>
        <Item>
            <Link href="#">Second link in list</Link>
        </Item>
        <Item>
            <Link href="#">Third link in list</Link>
        </Item>
    </List>
);

export default ListWithBlackLinks;