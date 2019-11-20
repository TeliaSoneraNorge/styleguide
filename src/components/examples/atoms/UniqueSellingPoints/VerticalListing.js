import React from 'react';
import { UniqueSellingPoints } from '@telia/styleguide';

const { Item } = UniqueSellingPoints;

const UniqueSellingPointsVerticalListing = () => (
  <UniqueSellingPoints className="unique-selling-points__vertical-list">
    <Item iconName="ico_check_sharp" iconColor="purple">
      You can use this functionality
    </Item>
    <Item iconName="facebook_icon" iconColor="purple">
      To list items vertically
    </Item>
    <Item iconName="ico_delete" iconColor="purple">
      And even with different icons
    </Item>
  </UniqueSellingPoints>
);

export default UniqueSellingPointsVerticalListing;
