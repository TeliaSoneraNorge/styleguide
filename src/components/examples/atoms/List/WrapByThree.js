import React from 'react';
import { List } from 'component-lib';

const { Item } = List;

const DefaultList = () => (
    <List wrapByThree>
        <Item>First item in list</Item>
        <Item>Second item in list</Item>
        <Item>Third item in list</Item>
        <Item>Fourth item in list</Item>
        <Item>Fifth item in list</Item>
    </List>
);

export default DefaultList;