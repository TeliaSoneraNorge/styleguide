import React from 'react';
import { List } from '@telia/styleguide';

const { Item } = List;

const DefaultList = () => (
    <List wrapByFour>
        <Item>First item in list</Item>
        <Item>Second item in list</Item>
        <Item>Third item in list</Item>
        <Item>Fourth item in list</Item>
        <Item>Fifth item in list</Item>
        <Item>Sixth item in list</Item>
        <Item>Seventh item in list</Item>
        <Item>Eighth item in list</Item>
    </List>
);

export default DefaultList;