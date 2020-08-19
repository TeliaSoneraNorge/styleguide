import React from 'react';
import UniqueSellingPoints from './UniqueSellingPoints';

export default {
  title: 'Component library/Atoms/Unique Selling Points',
  component: UniqueSellingPoints,
};

export const Default = () => {

  const { Item } = UniqueSellingPoints;
  
  return (

    <UniqueSellingPoints>
      <Item iconName="ico_buy">
        You can use this to point out key values of a product
      </Item>
    </UniqueSellingPoints>

  )

};

export const Color = () => {

  const { Item } = UniqueSellingPoints;
  
  return (

    <UniqueSellingPoints>
      <Item iconName="ico_buy" iconColor="core-purple">
        You can use this to point out key values of a product
      </Item>
      <Item iconName="ico_delete" iconColor="red">
        You can use this to point out key values of a product
      </Item>
    </UniqueSellingPoints>

  )

};

export const VerticalListing = () => {

  const { Item } = UniqueSellingPoints;
  
  return (

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

  )

};

export const PointsWithChecks = () => {

  const { Item } = UniqueSellingPoints;
  
  return (

    <UniqueSellingPoints>
      <Item iconName="ico_check" iconColor="purple">
        Unique selling point
      </Item>
      <Item iconName="ico_check" iconColor="purple">
        Key value of a product
      </Item>
      <Item iconName="ico_check" iconColor="purple">
        Use 2-3 points
      </Item>
    </UniqueSellingPoints>

  )

};