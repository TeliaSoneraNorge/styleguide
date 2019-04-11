import React from 'react';
import { DescriptionList } from 'component-lib';

const { Dt, Dd } = DescriptionList;

const DefaultDl = () => (
    <DescriptionList>
        <Dt>First term:</Dt>
        <Dd>First description</Dd>
        <Dt>Second term:</Dt>
        <Dd>Second description</Dd>
    </DescriptionList>
);

export default DefaultDl;