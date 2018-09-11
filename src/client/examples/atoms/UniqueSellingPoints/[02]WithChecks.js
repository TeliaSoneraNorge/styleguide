import React from 'react';
import { UniqueSellingPoints } from '@telia/styleguide';

const { Item } = UniqueSellingPoints;

const UniqueSellingPointsWithChecks = () => (
    <UniqueSellingPoints>
        <Item
            iconName="ico_check"
            iconColor="purple">
            This is the component for unique selling points
        </Item>
        <Item
            iconName="ico_check"
            iconColor="purple">
            You can use this to point out key values of a product
        </Item>
        <Item
            iconName="ico_check"
            iconColor="purple">
            And add some icons that goes with the key points
        </Item>
        <Item
            iconName="ico_check"
            iconColor="purple">
            It's recommended to use between 2-4 points
        </Item>
    </UniqueSellingPoints>
);

export default UniqueSellingPointsWithChecks;