import React from 'react';
import { FullWidthTable } from '@telia/styleguide';

const { THead, TBody, Th, Tr, Td, TFoot } = FullWidthTable;

const WithFooter2 = () => (
  <FullWidthTable>
    <THead>
      <Tr>
        <Th>Kostnader</Th>
        <Th>Pris</Th>
      </Tr>
    </THead>
    <TFoot white>
      <Tr>
        <Td>Sum</Td>
        <Td>299,-</Td>
      </Tr>
    </TFoot>
    <TBody>
      <Tr>
        <Td>Fast avgifter</Td>
        <Td>399,-</Td>
      </Tr>
      <Tr>
        <Td>Rabatter</Td>
        <Td>-100,-</Td>
      </Tr>
    </TBody>
  </FullWidthTable>
);

export default WithFooter2;
