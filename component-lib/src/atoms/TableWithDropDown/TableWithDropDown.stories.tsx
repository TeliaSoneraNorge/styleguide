import React from 'react';
import { storiesOf } from '@storybook/react';
import List from '../../atoms/List';
import TableWithDropDown from './TableWithDropDown';

const { TBody, Td, Th, THead, Tr, TrExpandable } = TableWithDropDown;

const { Item, Link } = List;

storiesOf('Component library|Atoms/TableWithDropDown', module).addWithJSX('TableWithDropDown', () => {
  const ListWithLinksExample = () => (
    <div style={{ marginLeft: '1rem' }}>
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
  const TextExample = () => (
    <div style={{ margin: '1rem' }}>
      bus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
      pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
    </div>
  );
  return (
    <TableWithDropDown>
      <THead>
        <Tr>
          <Th style={{ fontSize: 18, fontWeight: 500 }}>TV-produkter</Th>
          <Th>Pris</Th>
          <Th>Endre</Th>
        </Tr>
      </THead>
      <TBody>
        <TrExpandable>
          <Td >Familie</Td>
          <Td>7 776,-/år</Td>
        </TrExpandable>
        <TrExpandable expandableContent={ListWithLinksExample()}>
          <Td>HBO Nordic</Td>
          <Td>1 308,-/år</Td>
        </TrExpandable>
        <TrExpandable expandableContent={TextExample()}>
          <Td>TV2 Sport Premium med C More</Td>
          <Td>0,-/år</Td>
        </TrExpandable>
      </TBody>
    </TableWithDropDown>
  );
});
