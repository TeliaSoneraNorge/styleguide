import React from 'react';
import { UniqueSellingPoints } from '@telia/styleguide';

const { Item } = UniqueSellingPoints;

const DefaultUniqueSellingPoints = () => (
    <UniqueSellingPoints>
        <Item
            iconName="ico_wireless"
            iconColor="black">
            This is the component for unique selling points
        </Item>
        <Item
            iconName="ico_buy"
            iconColor="purple">
            You can use this to point out key values of a product
        </Item>
        <Item
            iconName="ico_end_user"
            iconColor="black">
            And add some icons that goes with the key points
        </Item>
        <Item
            iconName="ico_search"
            iconColor="black">
            It's recommended to use between 2-4 points
        </Item>
    </UniqueSellingPoints>
);

export default DefaultUniqueSellingPoints;