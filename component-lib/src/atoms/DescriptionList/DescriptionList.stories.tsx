import React from 'react';
import DescriptionList from './DescriptionList';

export default {
  title: 'Component library/Atoms/Description List',
  component: DescriptionList,
};

export const Default = () => {

  const { Dt, Dd } = DescriptionList;

  return (

    <DescriptionList>
      <Dt>First term:</Dt>
      <Dd>First description</Dd>
      <Dt>Second term:</Dt>
      <Dd>Second description</Dd>
    </DescriptionList>

  )

};

export const WrapByTwo = () => {
  
  const { Dt, Dd } = DescriptionList;
  
  return (

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

  )
};