import React from 'react';
import { UniqueSellingPoints } from 'component-lib';

const { Item } = UniqueSellingPoints;

const UniqueSellingPointsWithChecks = () => (
    <UniqueSellingPoints>
        <Item
            iconName="ico_check"
            iconColor="purple">
            Unique selling point
        </Item>
        <Item
            iconName="ico_check"
            iconColor="purple">
            Key value of a product
        </Item>
        <Item
            iconName="ico_check"
            iconColor="purple">
            Use 2-3 points
        </Item>
    </UniqueSellingPoints>
);

export default UniqueSellingPointsWithChecks;