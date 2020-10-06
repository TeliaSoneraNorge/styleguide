import React from 'react';
import { List, ListItem, ListCard, ListHeading } from './List';
import { Avatar } from '../../molecules/Avatar';
import { Checkbox } from '../Checkbox';

export default {
  component: List,
  title: 'Business/List',
};

export const Card = ({}) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flex: '0 0 auto' }}>
      <List type="card">
        <ListHeading title="List Standard" />
        <ListItem itemName="Element 1" />
        <ListItem itemName="Element 2" />
        <ListItem itemName="Element 3" />
        <ListItem itemName="Element 4" />
        <ListItem itemName="Element 5" />
      </List>
    </div>
    <div style={{ flex: '0 0 auto' }}>
      <List type="card" style="flat">
        <ListHeading title="List Flat w/Icons and captions" />
        <ListItem itemName="Element 1" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem itemName="Element 2" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem itemName="Element 3" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem itemName="Element 4" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem itemName="Element 5" decorator={<Avatar icon="business" />} caption="caption" />
      </List>
    </div>
    <div style={{ flex: '0 0 auto' }}>
      <List type="card" style="underlined">
        <ListHeading title="List Underlined w/Checkbox and captions and descriptions" />
        <ListItem
          itemName="Element 1"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          itemName="Element 2"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          itemName="Element 3"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          itemName="Element 4"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          itemName="Element 5"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
      </List>
    </div>
    <div style={{ flex: '0 0 auto' }}>
      <List type="card" style="dark">
        <ListHeading title="List dark w/Individual styles" />
        <ListItem itemName="Element 1" caption="caption" description="Description" />
        <ListItem itemName="Element 2" caption="caption" description="Description" style="flat" />
        <ListItem itemName="Element 3" caption="caption" description="Description" style="none" />
        <ListItem itemName="Element 4" caption="caption" description="Description" />
        <ListItem itemName="Element 5" caption="caption" description="Description" />
      </List>
    </div>
  </div>
);

export const Item = ({}) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flex: '0 0 auto' }}>
      <List>
        <ListHeading title="List Standard" />
        <ListItem itemName="Element 1" />
        <ListItem itemName="Element 2" />
        <ListItem itemName="Element 3" />
        <ListItem itemName="Element 4" />
        <ListItem itemName="Element 5" />
      </List>
    </div>
    <div style={{ flex: '0 0 auto' }}>
      <List style="flat">
        <ListHeading title="List Flat w/Icons and captions" />
        <ListItem itemName="Element 1" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem itemName="Element 2" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem itemName="Element 3" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem itemName="Element 4" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem itemName="Element 5" decorator={<Avatar icon="business" />} caption="caption" />
      </List>
    </div>
    <div style={{ flex: '0 0 auto' }}>
      <List style="underlined">
        <ListHeading title="List Underlined w/Checkbox and captions and descriptions" />
        <ListItem
          itemName="Element 1"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          itemName="Element 2"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          itemName="Element 3"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          itemName="Element 4"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          itemName="Element 5"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
      </List>
    </div>
    <div style={{ flex: '0 0 auto' }}>
      <List style="dark">
        <ListHeading title="List dark w/Individual styles" />
        <ListItem itemName="Element 1" caption="caption" description="Description" />
        <ListItem itemName="Element 2" caption="caption" description="Description" style="flat" />
        <ListItem itemName="Element 3" caption="caption" description="Description" style="none" />
        <ListItem itemName="Element 4" caption="caption" description="Description" />
        <ListItem itemName="Element 5" caption="caption" description="Description" />
      </List>
    </div>
  </div>
);
