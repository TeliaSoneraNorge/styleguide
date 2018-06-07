import React from 'react';
import { List } from '@telia/styleguide';

const { Item, BubbleLink } = List;

const ListWithLinks = () => (
    <List>
        <Item>
            <BubbleLink href="#" iconSrc="/public/icons/facebook_icon_sprite.svg">Facebook</BubbleLink>
        </Item>
        <Item>
            <BubbleLink href="#" iconSrc="/public/icons/twitter_icon_sprite.svg">Twitter</BubbleLink>
        </Item>
    </List>
);

export default ListWithLinks;