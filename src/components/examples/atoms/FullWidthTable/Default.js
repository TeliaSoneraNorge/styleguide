import React from 'react';
import { FullWidthTable } from 'component-lib';

const { THead, TBody, Th, Tr, Td } = FullWidthTable;

const DefaultFullWidthTable = () => (
    <FullWidthTable>
        <THead>
            <Tr>
                <Th>Column 1</Th>
                <Th>Column 2</Th>
                <Th>Column 3</Th>
            </Tr>
        </THead>
        <TBody>
            <Tr>
                <Td>Nulla quis lorem ut libero malesuada feugiat</Td>
                <Td>Lorem</Td>
                <Td>Ipsum</Td>
            </Tr>
            <Tr>
                <Td>Lorem ipsum dolor sit amet</Td>
                <Td>Consectetur</Td>
                <Td>Elit</Td>
            </Tr>
            <Tr>
                <Td>Donec ruTrum congue leo</Td>
                <Td>Eget</Td>
                <Td>Malesuada</Td>
            </Tr>
            <Tr>
                <Td>Nulla quis lorem ut libero malesuada feugiat</Td>
                <Td>Lorem</Td>
                <Td>Ipsum</Td>
            </Tr>
            <Tr>
                <Td>
                    <a href="" className="link" target="_self">Lorem ipsum dolor sit amet</a>
                </Td>
                <Td>Consectetur</Td>
                <Td>Elit</Td>
            </Tr>
            <Tr>
                <Td>
                    <a href="" className="link" target="_self">Donec ruTrum congue leo</a>
                </Td>
                <Td>Eget</Td>
                <Td>Malesuada</Td>
            </Tr>
        </TBody>
    </FullWidthTable>
);

export default DefaultFullWidthTable;