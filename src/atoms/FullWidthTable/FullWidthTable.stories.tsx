import React from 'react';
import FullWidthTable from './FullWidthTable';
import './FullWidthTable.stories.css';
export default {
  title: 'Component library/Atoms/FullWidth Table',
  component: FullWidthTable,
};

export const Default = () => {
  const { THead, TBody, Th, Tr, Td } = FullWidthTable;

  return (
    <FullWidthTable id="defaultFullWidthTable" className="no-ts-error">
      <THead>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 3</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Nulla quis lorem ut libero malesuada feugiat</Td>
          <Td>Ipsum</Td>
        </Tr>
        <Tr>
          <Td>Lorem ipsum dolor sit amet</Td>
          <Td>Elit</Td>
        </Tr>
        <Tr>
          <Td>Donec ruTrum congue leo</Td>
          <Td>Malesuada</Td>
        </Tr>
        <Tr>
          <Td>Nulla quis lorem ut libero malesuada feugiat</Td>
          <Td>Ipsum</Td>
        </Tr>
        <Tr>
          <Td>
            <a href="" className="link" target="_self">
              Lorem ipsum dolor sit amet
            </a>
          </Td>
          <Td>Elit</Td>
        </Tr>
        <Tr>
          <Td>
            <a href="" className="link" target="_self">
              Donec ruTrum congue leo
            </a>
          </Td>
          <Td>Malesuada</Td>
        </Tr>
      </TBody>
    </FullWidthTable>
  );
};

export const FullWidthTableWithLink = () => {
  const { THead, TBody, Th, Tr, Td } = FullWidthTable;

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
