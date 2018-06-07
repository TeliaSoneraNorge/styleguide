import React from 'react';
import { UniqueSellingPoints } from '@telia/styleguide';

const { Item } = UniqueSellingPoints;

const DefaultUniqueSellingPoints = () => (
    <UniqueSellingPoints>
        <Item imgSrc="/public/icons/ico_wireless.svg">
            This is the component for unique selling points
        </Item>
        <Item imgSrc="/public/icons/ico_buy.svg">
            You can use this to point out key values of a product
        </Item>
        <Item imgSrc="/public/icons/ico_enduser.svg">
            And add some icons that goes with the key points
        </Item>
        <Item imgSrc="/public/icons/ico_search.svg">
            It's recommended to use between 2-4 points
        </Item>
    </UniqueSellingPoints>
);

export default DefaultUniqueSellingPoints;