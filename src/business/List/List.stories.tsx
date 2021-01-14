import React from 'react';
import { action } from '@storybook/addon-actions';
import { List } from './List';
import { ListCard } from './ListCard';
import { ListItem } from './ListItem';
import { ListItemSkeleton } from './ListItemSkeleton';
import { ListHeading } from './ListHeading';
import { ListItemColor } from './utils';
import { Avatar } from '../../molecules/Avatar';
import { Lozenge } from '../../molecules/Lozenge';
import { Checkbox } from '../../atoms/Checkbox';
import { useState } from '@storybook/addons';

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
          title="ListItem"
          decorator={<Avatar text="LI" />}
          description="<li> element of item type"
          caption="unstyled"
        />
        <ListItem
          title="Compact ListItem"
          compact={true}
          decorator={<Avatar text="CLI" />}
          description="<li> element of item type"
          caption="unstyled"
        />
        <ListItem
          title="List w/onClick"
          onClick={() => {}}
          decorator={<Avatar text="CLC" />}
          description="<li> element of item type"
          caption="unstyled"
        />
        <ListHeading title="Compact list heading" compact={true} />
        <ListCard
          title="ListCard"
          decorator={<Avatar text="LC" />}
          description="<li> element of card type"
          caption="shadow"
        />
        <ListCard
          title="Compact ListCard"
          compact={true}
          decorator={<Avatar text="CLC" />}
          description="<li> element of card type"
          caption="shadow"
        />
        <ListCard
          title="ListCard w/onClick"
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
export const Card = ({}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List type="card">
          <ListHeading title="List Standard" compact={true} />
          <ListItem title="Element 1" />
          <ListItem title="Element 2" />
          <ListItem title="Element 3" />
          <ListItem title="Element 4" />
          <ListItem title="Element 5" />
        </List>
      </div>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List type="card" color="medium">
          <ListHeading title="List Flat w/Icons and captions" />
          <ListItem title="Element 1" decorator={<Avatar icon="business" />} caption="caption" />
          <ListItem title="Element 2" decorator={<Avatar icon="business" />} caption="caption" />
          <ListItem title="Element 3" decorator={<Avatar icon="business" />} caption="caption" />
          <ListItem title="Element 4" decorator={<Avatar icon="business" />} caption="caption" />
          <ListItem title="Element 5" decorator={<Avatar icon="business" />} caption="caption" />
        </List>
      </div>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List type="card" border="underlined">
          <ListHeading title="List Underlined w/Checkbox and captions and descriptions" />
          <ListItem
            title="Element 1"
            onClick={action('click elemt 1')}
            decorator={
              <Checkbox
                label="Testcheckbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                hiddenLabel={true}
              />
            }
            caption="caption"
            description="Description"
          />
          <ListItem
            title="Element 2"
            onClick={action('click elemt 2')}
            decorator={
              <Checkbox
                label="Testcheckbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                hiddenLabel={true}
              />
            }
            caption="caption"
            description="Description"
          />
          <ListItem
            title="Element 3"
            onClick={action('click elemt 3')}
            decorator={
              <Checkbox
                label="Testcheckbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                hiddenLabel={true}
              />
            }
            caption="caption"
            description="Description"
          />
          <ListItem
            title="Element 4"
            onClick={action('click elemt 4')}
            decorator={
              <Checkbox
                label="Testcheckbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                hiddenLabel={true}
              />
            }
            caption="caption"
            description="Description"
          />
          <ListItem
            title="Element 5"
            onClick={action('click elemt 5')}
            decorator={
              <Checkbox
                label="Testcheckbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                hiddenLabel={true}
              />
            }
            caption="caption"
            description="Description"
          />
        </List>
      </div>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List type="card" color="dark">
          <ListHeading title="List dark w/Individual styles" />
          <ListItem title="Element 1" caption="caption" description="Description" />
          <ListItem title="Element 2" caption="caption" description="Description" color="medium" />
          <ListItem title="Element 3" caption="caption" description="Description" color="light" />
          <ListItem title="Element 4" caption="caption" description="Description" />
          <ListItem title="Element 5" caption="caption" description="Description" />
        </List>
      </div>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List type="card">
          <ListHeading title="List with Lozenge captions" />
          <ListItem title="Element 1" caption={<Lozenge label="Element 1" />} />
          <ListItem title="Element 2" caption={<Lozenge label="Element 2" />} />
          <ListItem title="Element 3" caption={<Lozenge label="Element 3" status="positive" />} />
          <ListItem title="Element 4" caption={<Lozenge label="Element 4" />} />
          <ListItem title="Element 5" caption={<Lozenge label="Element 5" status="negative" />} />
        </List>
      </div>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List type="card">
          <ListHeading title="List with decorators and captions" />
          <ListItem title="Element 1" decorator={<Avatar icon="abroad" />} caption={<Lozenge label="Element 1" />} />
          <ListItem
            title="Element 2"
            decorator={<Avatar icon="check-mark" />}
            caption={<Lozenge label="Element 2" status="positive" />}
          />
          <ListItem
            title="Element 3"
            decorator={<Avatar icon="abroad" />}
            caption={<Lozenge label="Element 3" status="positive" />}
          />
          <ListItem title="Element 4" decorator={<Lozenge label="Element 4" />} caption={<Avatar icon="alarm" />} />
          <ListItem
            title="Element 5"
            decorator={<Lozenge label="Element 5" status="positive" />}
            caption={<Avatar icon="alarm" />}
          />
        </List>
      </div>
    </div>
  );
};

export const Item = ({}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List>
          <ListHeading title="List Standard" />
          <ListItem title="Element 1" />
          <ListItem title="Element 2" />
          <ListItem title="Element 3" />
          <ListItem title="Element 4" />
          <ListItem title="Element 5" />
        </List>
      </div>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List color="medium">
          <ListHeading title="List Flat w/Icons and captions" />
          <ListItem title="Element 1" decorator={<Avatar icon="business" />} caption="caption" />
          <ListItem title="Element 2" decorator={<Avatar icon="business" />} caption="caption" />
          <ListItem title="Element 3" decorator={<Avatar icon="business" />} caption="caption" />
          <ListItem title="Element 4" decorator={<Avatar icon="business" />} caption="caption" />
          <ListItem title="Element 5" decorator={<Avatar icon="business" />} caption="caption" />
        </List>
      </div>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List border="underlined">
          <ListHeading title="List Underlined w/Checkbox and captions and descriptions" />
          <ListItem
            title="Element 1"
            onClick={action('click element 1')}
            decorator={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                label="Testcheckbox"
                hiddenLabel={true}
              />
            }
            caption="caption"
            description="Description"
          />
          <ListItem
            title="Element 2"
            onClick={action('click element 2')}
            decorator={
              <Checkbox
                label="Testcheckbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                hiddenLabel={true}
              />
            }
            caption="caption"
            description="Description"
          />
          <ListItem
            title="Element 3"
            onClick={action('click element 3')}
            decorator={
              <Checkbox
                label="Testcheckbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                hiddenLabel={true}
              />
            }
            caption="caption"
            description="Description"
          />
          <ListItem
            title="Element 4"
            onClick={action('click element 4')}
            decorator={
              <Checkbox
                label="Testcheckbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                hiddenLabel={true}
              />
            }
            caption="caption"
            description="Description"
          />
          <ListItem
            title="Element 5"
            onClick={action('click element 5')}
            decorator={
              <Checkbox
                label="Testcheckbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                hiddenLabel={true}
              />
            }
            caption="caption"
            description="Description"
          />
        </List>
      </div>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List color="dark">
          <ListHeading title="List dark w/Individual styles" />
          <ListItem title="Element 1" caption="caption" description="Description" />
          <ListItem title="Element 2" caption="caption" description="Description" color="medium" />
          <ListItem title="Element 3" caption="caption" description="Description" color="light" />
          <ListItem title="Element 4" caption="caption" description="Description" />
          <ListItem title="Element 5" caption="caption" description="Description" />
        </List>
      </div>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List>
          <ListHeading title="List with only one property" />
          <ListItem title="Title" />
          <ListItem decorator="decorator" />
          <ListItem caption="caption" />
          <ListItem description="description" />
        </List>
      </div>
    </div>
  );
};

export const Skeleton = ({}) => {
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => setLoading(!loading), loading ? 3000 : 1000);

  return (
    <>
      <div>
        <h2>Default </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List>
              <ListHeading title="Default" />
              {loading ? (
                <>
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                </>
              ) : (
                <>
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                </>
              )}
            </List>
          </div>

          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List color="medium">
              <ListHeading title="Color medium" />
              {loading ? (
                <>
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                </>
              ) : (
                <>
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                </>
              )}
            </List>
          </div>

          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List color="dark">
              <ListHeading title="Color dark" />
              {loading ? (
                <>
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                </>
              ) : (
                <>
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                </>
              )}
            </List>
          </div>
        </div>

        <h2>type: card </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List border="shadow" type="card">
              <ListHeading title="default" />
              {loading ? (
                <>
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                </>
              ) : (
                <>
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                </>
              )}
            </List>
          </div>

          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List color="medium" border="shadow" type="card">
              <ListHeading title="color medium" />
              {loading ? (
                <>
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                </>
              ) : (
                <>
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                </>
              )}
            </List>
          </div>

          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List color="dark" border="shadow" type="card">
              <ListHeading title="color dark" />
              {loading ? (
                <>
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                  <ListItemSkeleton />
                </>
              ) : (
                <>
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                  <ListItem decorator={<Avatar icon="mobile" />} title="Element 1" description="Description" />
                </>
              )}
            </List>
          </div>
        </div>
      </div>
      <div>
        <h2>compact: true</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List>
              <ListHeading title="default" />
              {loading ? (
                <>
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                </>
              ) : (
                <>
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                </>
              )}
            </List>
          </div>

          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List color="medium">
              <ListHeading title="color medium" />
              {loading ? (
                <>
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                </>
              ) : (
                <>
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                </>
              )}
            </List>
          </div>

          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List color="dark">
              <ListHeading title="color dark" />
              {loading ? (
                <>
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                </>
              ) : (
                <>
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                </>
              )}
            </List>
          </div>
        </div>

        <h2>compact: true, type: card</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List border="shadow" type="card">
              <ListHeading title="default" />
              {loading ? (
                <>
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                </>
              ) : (
                <>
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                </>
              )}
            </List>
          </div>

          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List color="medium" border="shadow" type="card">
              <ListHeading title="color medium" />
              {loading ? (
                <>
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                </>
              ) : (
                <>
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                </>
              )}
            </List>
          </div>

          <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
            <List color="dark" border="shadow" type="card">
              <ListHeading title="color dark" />
              {loading ? (
                <>
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                  <ListItemSkeleton compact={true} />
                </>
              ) : (
                <>
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                  <ListItem
                    compact={true}
                    decorator={<Avatar icon="mobile" />}
                    title="Element 1"
                    description="Description"
                  />
                </>
              )}
            </List>
          </div>
        </div>
      </div>
      <h2>description: false, caption: true</h2>
      <div style={{ flex: '1 1 0px', minWidth: '15rem', padding: '1rem' }}>
        <List type="card" border="shadow">
          {loading ? (
            <>
              <ListItemSkeleton description={false} caption={true} />
              <ListItemSkeleton description={false} caption={true} />
              <ListItemSkeleton description={false} caption={true} />
            </>
          ) : (
            <>
              <ListItem
                caption={<Lozenge status="positive" label="lozenge" />}
                decorator={<Avatar icon="mobile" />}
                title="Element 1"
              />
              <ListItem
                caption={<Lozenge status="positive" label="lozenge" />}
                decorator={<Avatar icon="mobile" />}
                title="Element 1"
              />
              <ListItem
                caption={<Lozenge status="positive" label="lozenge" />}
                decorator={<Avatar icon="mobile" />}
                title="Element 1"
              />
            </>
          )}
        </List>
      </div>
    </>
  );
};

export const WithChildren = ({}) => {
  return (
    <div>
      <List>
        <ListHeading title="Normal list heading" />
        <ListItem
          title="ListItem"
          decorator={<Avatar text="LI" />}
          description="<li> element of item type"
          caption="unstyled"
        >
          <ListItem
            title="I am a child. A list item"
            description="Dont worry. I am a div, not an li"
            compact={true}
            tag="div"
          />
        </ListItem>
        <ListCard
          title="Compact ListCard"
          compact={true}
          decorator={<Avatar text="CLC" />}
          description="<li> element of card type"
          caption="shadow"
        >
          <div>Hello child</div>
        </ListCard>

        <ListItem
          onClick={() => {
            console.log('click');
          }}
        >
          <ListItem
            title="I am a child. A list item. Inside another list item with no properties"
            description="Dont worry. I am a div, not an li"
            compact={true}
            tag="div"
          />
        </ListItem>

        <ListCard
          title="Compact ListCard"
          compact={true}
          decorator={<Avatar text="CLC" />}
          description="<li> element of card type"
          caption="shadow"
        >
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Lozenge label="Hello world" /> <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
            <Lozenge label="Hello world" />
          </div>
        </ListCard>
      </List>
    </div>
  );
};

export const Expandable = ({}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [open2, setOpen2] = React.useState<boolean>(false);
  const [open3, setOpen3] = React.useState<boolean>(false);
  const [open4, setOpen4] = React.useState<boolean>(false);
  return (
    <div>
      <List>
        <ListHeading title="Expandable list items heading" />
        <ListItem
          title="ListItem"
          decorator={<Avatar text="LI" />}
          description="<li> element of item type"
          caption="unstyled"
          onClick={() => setOpen(!open)}
          open={open}
          expandable
        >
          <ListItem
            title="I am a child. A list item"
            description="Dont worry. I am a div, not an li"
            compact={true}
            tag="div"
          />
        </ListItem>

        <ListItem
          title="Expandable ListItem dark"
          color="dark"
          border="shadow"
          decorator={<Avatar text="LI" color="grey100" />}
          description="<li> element of item type"
          caption="unstyled"
          onClick={() => setOpen2(!open2)}
          open={open2}
          expandable
        >
          <div>Now you see me!</div>
        </ListItem>

        <ListCard
          title="Expandable ListCard"
          decorator={<Avatar text="CLC" />}
          description="<li> element of card type"
          caption="shadow"
          onClick={() => setOpen3(!open3)}
          open={open3}
          expandable
        >
          <div>Hello child</div>
        </ListCard>

        <ListCard
          title="Expandable ListCard - compact"
          compact={true}
          color="dark"
          decorator={<Avatar color="grey100" text="CLC" />}
          description="<li> element of card type"
          caption="shadow"
          onClick={() => setOpen4(!open4)}
          open={open4}
          expandable
        >
          <div>Hello child</div>
        </ListCard>
      </List>
    </div>
  );
};
