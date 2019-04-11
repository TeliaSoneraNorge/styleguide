import React from 'react';
import { FullWidthTable } from 'component-lib';

const { THead, TBody, Th, Tr, Td, TFoot } = FullWidthTable;

const WithFooter1 = () => (
    <FullWidthTable>
        <THead>
            <Tr>
                <Th>Kostnader</Th>
                <Th>Other</Th>
                <Th>Pris</Th>
            </Tr>
        </THead>
        <TFoot>
            <Tr>
                <Td>Sum</Td>
                <Td>Foo</Td>
                <Td>553,-</Td>
            </Tr>
        </TFoot>
        <TBody>
            <Tr>
                <Td>Fast avgifter</Td>
                <Td>Bar</Td>
                <Td>399,-</Td>
            </Tr>
            <Tr>
                <Td>Rabatter</Td>
                <Td>Baz</Td>
                <Td>-100,-</Td>
            </Tr>
            <Tr>
                <Td>Bruk</Td>
                <Td>Foobar</Td>
                <Td>254,-</Td>
            </Tr>
        </TBody>
    </FullWidthTable>
);

export default WithFooter1;