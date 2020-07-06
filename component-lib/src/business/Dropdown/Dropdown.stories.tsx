import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from './index';
import Button from '../../atoms/Button';
import { action } from '@storybook/addon-actions';

storiesOf('Business|Dropdown', module)
  .add('Default', () => {
    return (
      <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
        <h4>Default toggle, with default items, items with icon, header and divider item</h4>
        <Dropdown>
          <DropdownToggle label="Toggle" />
          <DropdownMenu>
            <DropdownItem header={true} label="Header" />
            <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
            <DropdownItem divider={true} />
            <DropdownItem label="Centered" centere={true} onClick={action('DropdownItem clicked')} />
            <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
              Child
            </DropdownItem>
            <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
          </DropdownMenu>
        </Dropdown>

        <br />
        <h4>Wrap content in items</h4>
        <Dropdown>
          <DropdownToggle label="Toggle" />
          <DropdownMenu wrapContent={true}>
            <DropdownItem header={true} label="Header" />
            <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
            <DropdownItem divider={true} />
            <DropdownItem label="Centered" centere={true} onClick={action('DropdownItem clicked')} />
            <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
              Child
            </DropdownItem>
            <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
          </DropdownMenu>
        </Dropdown>
        <br />
        <h4>With icon in toggle</h4>
        <Dropdown>
          <DropdownToggle label="Toggle" icon="user" />
          <DropdownMenu>
            <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option 3" onClick={action('DropdownItem clicked')} />
            <DropdownItem icon="user" label="Longer option" onClick={action('DropdownItem clicked')}>
              Child
            </DropdownItem>
            <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
          </DropdownMenu>
        </Dropdown>
        <br />
        <h4>Icon Only</h4>
        <Dropdown>
          <DropdownToggle label="Toggle" icon="user" hideLabel={true} />
          <DropdownMenu>
            <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option 3" onClick={action('DropdownItem clicked')} />
            <DropdownItem icon="user" label="Longer option" onClick={action('DropdownItem clicked')}>
              Child
            </DropdownItem>
            <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  })
  .add('Purple', () => (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <h4>Default</h4>
      <Dropdown>
        <DropdownToggle color="purple" label="Toggle" />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Centered" centere={true} onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>
      <br />
      <h4>wrap content in items</h4>
      <Dropdown>
        <DropdownToggle color="purple" label="Toggle" />
        <DropdownMenu wrapContent={true}>
          <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Centered" centere={true} onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>

      <br />
      <h4>With icon in toggle</h4>

      <Dropdown>
        <DropdownToggle color="purple" label="Toggle" icon="user" />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 3" onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>

      <br />
      <h4>Icon Only</h4>
      <Dropdown>
        <DropdownToggle color="purple" label="Toggle" icon="user" hideLabel={true} />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 3" onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>
    </div>
  ))
  .add('No border', () => (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <h4>Default</h4>
      <Dropdown>
        <DropdownToggle label="Toggle" outline={false} />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Centered" centere={true} onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>
      <br />
      <h4>wrap content in items</h4>
      <Dropdown>
        <DropdownToggle label="Toggle" outline={false} />
        <DropdownMenu wrapContent={true}>
          <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Centered" centere={true} onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>
      <br />
      <h4>With icon in toggle</h4>

      <Dropdown>
        <DropdownToggle label="Toggle" icon="user" outline={false} />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 3" onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>

      <br />
      <h4>Icon Only</h4>
      <Dropdown>
        <DropdownToggle label="Toggle" icon="user" hideLabel={true} outline={false} />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 3" onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>
    </div>
  ))
  .add('Custom toggle', () => (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <h4>Button as toggle</h4>
      <Dropdown>
        <DropdownToggle>
          <Button text="Button" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Centered" centere={true} onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>
      <br />
      <h4>Text</h4>
      <Dropdown>
        <DropdownToggle>Hei</DropdownToggle>
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Centered" centere={true} onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>
      <br />
      <h4>Small Button as toggle</h4>
      <Dropdown>
        <DropdownToggle>
          <Button text="Button" size="small" icon="attach" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Option 2" onClick={action('DropdownItem clicked')} />
          <DropdownItem label="Centered" centere={true} onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>
      <br />
    </div>
  ));
