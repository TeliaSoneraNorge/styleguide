import React from 'react';
import { List } from 'component-lib';

const { Item, BubbleLink } = List;

const ListWithLinks = () => (
    <List>
        <Item>
            <BubbleLink
                href="#"
                iconName="facebook_icon">
                Facebook
            </BubbleLink>
        </Item>
        <Item>
            <BubbleLink
                href="#"
                iconName="twitter_icon">                
                Twitter
            </BubbleLink>
        </Item>
    </List>
);

export default ListWithLinks;