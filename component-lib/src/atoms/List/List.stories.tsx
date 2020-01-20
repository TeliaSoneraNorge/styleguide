import React from 'react';
import List from './List';

const { Item, Link, BubbleLink } = List;

export default {
  title: 'Component library|Atoms/List',
  component: List,
};

export const Default = () => (
  <List>
    <Item>First item in list</Item>
    <Item>Second item in list</Item>
    <Item>Third item in list</Item>
  </List>
);

export const WrapByFour = () => (
  <List wrapByFour>
    <Item>First item in list</Item>
    <Item>Second item in list</Item>
    <Item>Third item in list</Item>
    <Item>Fourth item in list</Item>
    <Item>Fifth item in list</Item>
    <Item>Sixth item in list</Item>
    <Item>Seventh item in list</Item>
    <Item>Eighth item in list</Item>
  </List>
);

export const WrapByThree = () => (
  <List wrapByThree>
    <Item>First item in list</Item>
    <Item>Second item in list</Item>
    <Item>Third item in list</Item>
    <Item>Fourth item in list</Item>
    <Item>Fifth item in list</Item>
  </List>
);

export const WithLinks = () => (
  <List>
    <Item>
      <Link href="#">First link in list</Link>
    </Item>
    <Item>
      <Link href="#">Second link in list</Link>
    </Item>
    <Item>
      <Link href="#">Third link in list</Link>
    </Item>
  </List>
);

export const WithBubbleLinks = () => (
  <List>
    <Item>
      <BubbleLink href="#" iconName="facebook_icon">
        Facebook
      </BubbleLink>
    </Item>
    <Item>
      <BubbleLink href="#" iconName="twitter_icon">
        Twitter
      </BubbleLink>
    </Item>
  </List>
);

export const WithBlackLinks = () => (
  <List black>
    <Item>
      <Link href="#">First link in list</Link>
    </Item>
    <Item>
      <Link href="#">Second link in list</Link>
    </Item>
    <Item>
      <Link href="#">Third link in list</Link>
    </Item>
  </List>
);
