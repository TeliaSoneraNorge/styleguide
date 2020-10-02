import React from 'react';
import { List, ListItem, ListCard } from './List';
import { Avatar } from '../../molecules/Avatar';
import { Checkbox } from '../Checkbox';

export default {
  component: List,
  title: 'Business/List',
};

export const Default = ({}) => (
  <div>
    <List type="card" style="shadow">
      <ListItem itemName="Test" style="underlined" />
      <ListItem itemName="Test" caption="success" style="dark" />
      <ListItem itemName="Test" />
      <ListItem itemName="Test" />
    </List>
    <List>
      <ListItem decorator={<Avatar icon="user-admin" />} itemName="Item 1" caption="Active" style="flat" />
      <ListItem
        decorator={<Checkbox label="Item 2" hiddenLabel={true} />}
        itemName="Item 2"
        description="About item 2"
        caption="Suspended"
      />
      <ListCard
        decorator={<Checkbox label="Item 2" hiddenLabel={true} />}
        itemName="Item 2"
        description="About item 2"
        caption="Suspended"
      />
      <ListCard
        decorator={<Checkbox label="Item 2" hiddenLabel={true} />}
        itemName="Item 2"
        description="About item 2"
        caption="Suspended"
        style="dark"
      />
      <ListCard
        decorator={<Checkbox label="Item 2" hiddenLabel={true} />}
        itemName="Item 2"
        description="About item 2"
        caption="Suspended"
        style="flat"
        compact={true}
      />
    </List>
  </div>
);
