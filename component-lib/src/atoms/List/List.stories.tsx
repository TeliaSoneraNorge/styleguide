import React from 'react';
import List from './List';

export default {
  title: 'Component library|Atoms/List',
  component: List,
};

export const Default = () => {
  const { Item } = List;

  return (
    <List>
      <Item>First item in list</Item>
      <Item>Second item in list</Item>
      <Item>Third item in list</Item>
    </List>
  )
};

export const WrapByFour = () => {
  const { Item } = List; 

  return (
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
  )
};

export const WrapByThree = () => {
  const { Item } = List;

  return (
    <List wrapByThree>
      <Item>First item in list</Item>
      <Item>Second item in list</Item>
      <Item>Third item in list</Item>
      <Item>Fourth item in list</Item>
      <Item>Fifth item in list</Item>
    </List>
  )
};

export const WithLinks = () => {
  const { Item, Link } = List;

  return (
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
  )
};

export const WithBubbleLinks = () => {
  const { Item, BubbleLink } = List;
  
  return (
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
  )
};

export const WithBlackLinks = () => {
  const { Item, Link } = List;
  
  return (
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
  )
};
