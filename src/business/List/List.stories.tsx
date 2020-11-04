import React from 'react';
import { List } from './List';
import { ListCard } from './ListCard';
import { ListItem } from './ListItem';
import { ListHeading } from './ListHeading';
import { ListItemColor } from './utils';
import { Avatar } from '../../molecules/Avatar';
import { Lozenge } from '../../molecules/Lozenge';
import { Checkbox } from '../Checkbox';

export default {
  component: List,
  title: 'Business/List',
  subComponents: { ListItem, ListCard, ListHeading },
};

export const Default = ({}) => {
  const [color, setColor] = React.useState<ListItemColor>('light');
  function setNextStyle() {
    const colors: ListItemColor[] = ['light', 'dark', 'medium'];
    const currStyle = colors.indexOf(color);
    let nextStyle = currStyle + 1;

    if (nextStyle >= colors.length) nextStyle = 0;
    setColor(colors[nextStyle]);
  }

  return (
    <div>
      <List>
        <ListHeading title="Normal list heading" />
        <ListItem
          label="ListItem"
          decorator={<Avatar text="LI" />}
          description="<li> element of item type"
          caption="unstyled"
        />
        <ListItem
          label="Compact ListItem"
          compact={true}
          decorator={<Avatar text="CLI" />}
          description="<li> element of item type"
          caption="unstyled"
        />
        <ListHeading title="Compact list heading" compact={true} />
        <ListCard
          label="ListCard"
          decorator={<Avatar text="LC" />}
          description="<li> element of card type"
          caption="shadow"
        />
        <ListCard
          label="Compact ListCard"
          compact={true}
          decorator={<Avatar text="CLC" />}
          description="<li> element of card type"
          caption="shadow"
        />
        <ListCard
          label="ListCard w/onClick"
          onClick={setNextStyle}
          decorator={<Avatar text="CLC" />}
          description="<li> element of card type"
          caption="shadow"
          color={color}
        />
      </List>
    </div>
  );
};
export const Card = ({}) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
      <List type="card">
        <ListHeading title="List Standard" compact={true} />
        <ListItem label="Element 1" />
        <ListItem label="Element 2" />
        <ListItem label="Element 3" />
        <ListItem label="Element 4" />
        <ListItem label="Element 5" />
      </List>
    </div>
    <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
      <List type="card" color="medium">
        <ListHeading title="List Flat w/Icons and captions" />
        <ListItem label="Element 1" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 2" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 3" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 4" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 5" decorator={<Avatar icon="business" />} caption="caption" />
      </List>
    </div>
    <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
      <List type="card" border="underlined">
        <ListHeading title="List Underlined w/Checkbox and captions and descriptions" />
        <ListItem
          label="Element 1"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          label="Element 2"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          label="Element 3"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          label="Element 4"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          label="Element 5"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
      </List>
    </div>
    <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
      <List type="card" color="dark">
        <ListHeading title="List dark w/Individual styles" />
        <ListItem label="Element 1" caption="caption" description="Description" />
        <ListItem label="Element 2" caption="caption" description="Description" color="medium" />
        <ListItem label="Element 3" caption="caption" description="Description" color="light" />
        <ListItem label="Element 4" caption="caption" description="Description" />
        <ListItem label="Element 5" caption="caption" description="Description" />
      </List>
    </div>
    <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
      <List type="card">
        <ListHeading title="List with Lozenge captions" />
        <ListItem label="Element 1" caption={<Lozenge label="Element 1" />} />
        <ListItem label="Element 2" caption={<Lozenge label="Element 2" />} />
        <ListItem label="Element 3" caption={<Lozenge label="Element 3" status="positive" />} />
        <ListItem label="Element 4" caption={<Lozenge label="Element 4" />} />
        <ListItem label="Element 5" caption={<Lozenge label="Element 5" status="negative" />} />
      </List>
    </div>
    <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
      <List type="card">
        <ListHeading title="List with decorators and captions" />
        <ListItem label="Element 1" decorator={<Avatar icon="abroad" />} caption={<Lozenge label="Element 1" />} />
        <ListItem
          label="Element 2"
          decorator={<Avatar icon="check-mark" />}
          caption={<Lozenge label="Element 2" status="positive" />}
        />
        <ListItem
          label="Element 3"
          decorator={<Avatar icon="abroad" />}
          caption={<Lozenge label="Element 3" status="positive" />}
        />
        <ListItem label="Element 4" decorator={<Lozenge label="Element 4" />} caption={<Avatar icon="alarm" />} />
        <ListItem
          label="Element 5"
          decorator={<Lozenge label="Element 5" status="positive" />}
          caption={<Avatar icon="alarm" />}
        />
      </List>
    </div>
  </div>
);

export const Item = ({}) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
      <List>
        <ListHeading title="List Standard" />
        <ListItem label="Element 1" />
        <ListItem label="Element 2" />
        <ListItem label="Element 3" />
        <ListItem label="Element 4" />
        <ListItem label="Element 5" />
      </List>
    </div>
    <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
      <List color="medium">
        <ListHeading title="List Flat w/Icons and captions" />
        <ListItem label="Element 1" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 2" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 3" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 4" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 5" decorator={<Avatar icon="business" />} caption="caption" />
      </List>
    </div>
    <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
      <List border="underlined">
        <ListHeading title="List Underlined w/Checkbox and captions and descriptions" />
        <ListItem
          label="Element 1"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          label="Element 2"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          label="Element 3"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          label="Element 4"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
        <ListItem
          label="Element 5"
          decorator={<Checkbox label="Testcheckbox" hiddenLabel={true} />}
          caption="caption"
          description="Description"
        />
      </List>
    </div>
    <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
      <List color="dark">
        <ListHeading title="List dark w/Individual styles" />
        <ListItem label="Element 1" caption="caption" description="Description" />
        <ListItem label="Element 2" caption="caption" description="Description" color="medium" />
        <ListItem label="Element 3" caption="caption" description="Description" color="light" />
        <ListItem label="Element 4" caption="caption" description="Description" />
        <ListItem label="Element 5" caption="caption" description="Description" />
      </List>
    </div>
  </div>
);
