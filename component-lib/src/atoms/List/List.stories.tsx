import React from 'react';
import List from './List';
import { Link as TeliaLink } from '../../index'

export default {
  title: 'Component library/Atoms/List',
  component: List,
};


export const Warning = () => {
  return (
    <h4 style={{ color: 'red'}}>
      List component are not deprecated yet, but we advice not to use them!<br/>
      For list accessibility use this refrence: <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists" target="_blank">W3 List Structure</a>
    </h4>
  )
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

export const ListLinksAndNormalLinks = () => {
  // import { List, Link as TeliaLink } from '@telia/styleguide/'
  const { Item, Link } = List;

  return (
    <>
    <TeliaLink href="#" icon="security" iconPosition="before">
      Normal Link with icon before
    </TeliaLink>
    <br/>
    <br/>

    <List>
      <Item>
        <Link href="#">List Link First link in list</Link>
      </Item>
      <Item>
        <Link href="#">List Link Second link in list</Link>
      </Item>
      <Item>
        <Link href="#">List Link Third link in list</Link>
      </Item>
    </List>
    </>
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
