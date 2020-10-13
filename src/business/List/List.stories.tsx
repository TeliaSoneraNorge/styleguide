import React from 'react';
import { List } from './List';
import { ListItem, ListCard, ListHeading } from './ListItems';
import { Avatar } from '../../molecules/Avatar';
import { Checkbox } from '../Checkbox';

export default {
  component: List,
  title: 'Business/List',
  subComponents: { ListItem, ListCard, ListHeading },
};

export const Default = ({}) => {
  const [style, setStyle] = React.useState('shadow');
  function setNextStyle() {
    const styles = ['shadow', 'dark', 'flat'];
    const currStyle = styles.indexOf(style);
    let nextStyle = currStyle + 1;

    if (nextStyle >= styles.length) nextStyle = 0;
    setStyle(styles[nextStyle]);
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
          style={style as 'shadow' | 'dark' | 'flat'}
        />
      </List>
    </div>
  );
};
export const Card = ({}) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flex: '0 0 auto' }}>
      <List type="card">
        <ListHeading title="List Standard" compact={true} />
        <ListItem label="Element 1" />
        <ListItem label="Element 2" />
        <ListItem label="Element 3" />
        <ListItem label="Element 4" />
        <ListItem label="Element 5" />
      </List>
    </div>
    <div style={{ flex: '0 0 auto' }}>
      <List type="card" style="flat">
        <ListHeading title="List Flat w/Icons and captions" />
        <ListItem label="Element 1" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 2" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 3" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 4" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 5" decorator={<Avatar icon="business" />} caption="caption" />
      </List>
    </div>
    <div style={{ flex: '0 0 auto' }}>
      <List type="card" style="underlined">
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
    <div style={{ flex: '0 0 auto' }}>
      <List type="card" style="dark">
        <ListHeading title="List dark w/Individual styles" />
        <ListItem label="Element 1" caption="caption" description="Description" />
        <ListItem label="Element 2" caption="caption" description="Description" style="flat" />
        <ListItem label="Element 3" caption="caption" description="Description" style="none" />
        <ListItem label="Element 4" caption="caption" description="Description" />
        <ListItem label="Element 5" caption="caption" description="Description" />
      </List>
    </div>
  </div>
);

export const Item = ({}) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flex: '0 0 auto' }}>
      <List>
        <ListHeading title="List Standard" />
        <ListItem label="Element 1" />
        <ListItem label="Element 2" />
        <ListItem label="Element 3" />
        <ListItem label="Element 4" />
        <ListItem label="Element 5" />
      </List>
    </div>
    <div style={{ flex: '0 0 auto' }}>
      <List style="flat">
        <ListHeading title="List Flat w/Icons and captions" />
        <ListItem label="Element 1" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 2" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 3" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 4" decorator={<Avatar icon="business" />} caption="caption" />
        <ListItem label="Element 5" decorator={<Avatar icon="business" />} caption="caption" />
      </List>
    </div>
    <div style={{ flex: '0 0 auto' }}>
      <List style="underlined">
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
    <div style={{ flex: '0 0 auto' }}>
      <List style="dark">
        <ListHeading title="List dark w/Individual styles" />
        <ListItem label="Element 1" caption="caption" description="Description" />
        <ListItem label="Element 2" caption="caption" description="Description" style="flat" />
        <ListItem label="Element 3" caption="caption" description="Description" style="none" />
        <ListItem label="Element 4" caption="caption" description="Description" />
        <ListItem label="Element 5" caption="caption" description="Description" />
      </List>
    </div>
  </div>
);
