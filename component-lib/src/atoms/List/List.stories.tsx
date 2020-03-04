import React from 'react';
import List from './List';
import {Link} from '../../index';

const { Item, BubbleLink } = List;

export default {
  title: 'Component library|Atoms/List',
  component: List,
};

export const Default = () => (

  // You must define Item: const { Item } = List;

  <List>
    <Item>First item in list</Item>
    <Item>Second item in list</Item>
    <Item>Third item in list</Item>
  </List>
);

export const ListWithLinks = () => (

  // You must define Item: const { Item } = List;
  // Dont forget to import { Link } from '@telia/styleguide'

  <List>
    <Item>
      <Link href="#" icon="arrow-right" iconPosition="before">
        List with default color icon
      </Link>
    </Item>
    <Item>
      <Link href="#" icon="arrow-right" iconPosition="before" iconColor="core-purple">
        List with core purple color icon
      </Link>
    </Item>
    <Item>
      <Link href="#" icon="arrow-right" iconPosition="before" iconColor="black">
        List with black color icon 
      </Link>
    </Item>
  </List>
);

export const DeprecatedListWithLinks = () => (
  <List>
    <Item>
      <Link href="#">First item with link in list</Link>
    </Item>
    <Item>
      <Link href="#">Second item with link in list</Link>
    </Item>
    <Item>
      <Link href="#">Third item with link in list</Link>
    </Item>
  </List>
);

export const DeprecatedListWithBlackLinks = () => (
  <List black>
    <Item>
      <Link href="#">First item with link in list</Link>
    </Item>
    <Item>
      <Link href="#">Second item with link in list</Link>
    </Item>
    <Item>
      <Link href="#">Third item with link in list</Link>
    </Item>
  </List>
);

export const WrapByFour = () => (
  // You must define Item: const { Item } = List;
  <List wrapByFour>
    <Item>First item in list</Item>
    <Item>Second item in list</Item>
    <Item>Third item in list</Item>
    <Item>Fourth item in list</Item>
    <Item>Fifth item in list</Item>
    <Item>Sixth item in list</Item>
    <Item>Seventh item in list</Item>
    <Item>Eigth item in list</Item>
  </List>
);

export const WrapByThree = () => (
  // You must define Item: const { Item } = List;
  <List wrapByThree>
    <Item>First item in list</Item>
    <Item>Second item in list</Item>
    <Item>Third item in list</Item>
    <Item>Fourth item in list</Item>
    <Item>Fifth item in list</Item>
  </List>
);

export const WithBubbleLinks = () => (
  // You must define Item: const { Item, Bubblelink } = List;
  <List>
    <Item>
      <BubbleLink href="#" icon="facebook">
        Facebook
      </BubbleLink>
    </Item>
    <Item>
      <BubbleLink href="#" icon="twitter">
        Twitter
      </BubbleLink>
    </Item>
  </List>
);
