import React from 'react';
import { storiesOf } from '@storybook/react';
import  List  from '../../atoms/List';

import TableWithDropDownD from './TableWithDropDown';

// @ts-ignore
const { THead, TBody, Th, TrExpandable, Tr, Td } = TableWithDropDownD;

// @ts-ignore
const { Item, Link } = List;

const ListWithLinks = () => (
    <div style={{marginLeft:"1rem"}}>

    <List>
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
    </div>
);

// @ts-ignore
storiesOf('Atoms|TableWithDropDown', module).addWithJSX('TableWithDropDown', () => (
  <TableWithDropDownD>
    <THead>
      <Tr>
        <Th style={{fontSize:"1.2rem", fontWeight:"500"}}>TV-produkter</Th>
        <Th>Pris</Th>
        <Th>Endre</Th>
      </Tr>
    </THead>
    <TBody>
      <TrExpandable expandableContent={ListWithLinks()} >
        <Td>Familie</Td>
        <Td>7 776,-/år</Td>
      </TrExpandable>
      <TrExpandable expandableContent={ListWithLinks()} >
        <Td>HBO NOrdic</Td>
        <Td>1 308,-/år</Td>
      </TrExpandable>
      <TrExpandable expandableContent={ListWithLinks()} >
        <Td>TV2 Sport Premium med C More</Td>
        <Td>0,-/år</Td>
      </TrExpandable>

    </TBody>
  </TableWithDropDownD>
));
