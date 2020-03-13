import React from 'react';
import { Table, TableBodyCell, TableBodyRow } from './Table';

import { storiesOf } from '@storybook/react';

const subscribers = require('./sampledata.json');

storiesOf('Business|Table', module).add('default', () => {
    return <Table headings={[
        "Navn",
        "Navn2",
        "Telefonnummer",
        "Avdelingsnummer",
        "Avdeling",
        "Fornavn",
        "Etternavn",
        "Ettellerannet",
        "Enhetstype",
        "Abonnementsstatus",
        "Statusårsak",
        "Abonnement",
        "Et objekt",
        "Et annet objekt",
        "Profil",
        "Profil2"
    ]}>
        {subscribers.map((subscriber: any, index: number) =>
            <TableBodyRow key={index}>
                {Object.values(subscriber).map((item: any, index: number) =>
                    <TableBodyCell key={index}>{item ? item.toString() : ""}</TableBodyCell>)}
            </TableBodyRow>)}
    </Table>;
  });