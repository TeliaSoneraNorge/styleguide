import React from 'react';
import { DescriptionList } from '@telia/styleguide';

const { Dt, Dd } = DescriptionList;

const WrapByTwo = () => (
  <DescriptionList wrapByTwo>
    <Dt>First term:</Dt>
    <Dd>First description</Dd>
    <Dt>Second term:</Dt>
    <Dd>Second description</Dd>
    <Dt>Third term:</Dt>
    <Dd>Third description</Dd>
    <Dt>Fourth term:</Dt>
    <Dd>Fourth description</Dd>
  </DescriptionList>
);

export default WrapByTwo;
