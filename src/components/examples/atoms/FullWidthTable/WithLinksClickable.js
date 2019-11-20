import React from 'react';
import { FullWidthTable } from '@telia/styleguide';

const { THead, TBody, Th, Tr, Td } = FullWidthTable;

const FullWidthTableWithLink = () => {
  return (
    <FullWidthTable clickable>
      <THead>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr
          onClick={() => {
            window.location.href = '#';
          }}
        >
          <Td>Nulla quis lorem ut libero malesuada feugiat</Td>
          <Td>Lorem</Td>
          <Td>
            <a href="#" className="link" target="_self">
              Lorem ipsum dolor sit amet
            </a>
          </Td>
        </Tr>
        <Tr
          onClick={() => {
            window.location.href = 'https://telia.no';
          }}
        >
          <Td>Lorem ipsum dolor sit amet</Td>
          <Td>Consectetur</Td>
          <Td>
            <a href="https://telia.no" className="link" target="_self">
              Lorem ipsum dolor sit amet
            </a>
          </Td>
        </Tr>
        <Tr
          onClick={() => {
            window.location.href = 'https://telia.no';
          }}
        >
          <Td>Donec ruTrum congue leo</Td>
          <Td>Eget</Td>
          <Td>
            <a href="https://telia.no" className="link" target="_self">
              Lorem ipsum dolor sit amet
            </a>
          </Td>
        </Tr>
      </TBody>
    </FullWidthTable>
  );
};

export default FullWidthTableWithLink;
