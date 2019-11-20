import React from 'react';
import { UniqueSellingPoints } from '@telia/styleguide';

const { Item } = UniqueSellingPoints;

const DefaultUniqueSellingPoints = () => (
  <UniqueSellingPoints>
    <Item iconName="ico_buy" iconColor="purple">
      You can use this to point out key values of a product
    </Item>
    <Item iconName="ico_search" iconColor="black">
      It&#39;s recommended to use between 2-3 points
    </Item>
  </UniqueSellingPoints>
);

export default DefaultUniqueSellingPoints;
