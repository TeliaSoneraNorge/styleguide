import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from './index';
import Button from '../../atoms/Button';

storiesOf('Business|Dropdown', module)
  .add('Default', () => {
    return (
      <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
        <h4>Default toggle, with default items, items with icon, header and divider item</h4>
        <Dropdown>
          <DropdownToggle label="Toggel" />
          <DropdownMenu>
            <DropdownItem header={true} label="Header" />
            <DropdownItem label="Option 1" onClick={() => console.log('click')} />
            <DropdownItem label="Option 2" onClick={() => console.log('click')} />
            <DropdownItem divider={true} />
            <DropdownItem label="Centered" centere={true} onClick={() => console.log('click')} />
            <DropdownItem icon="user" label="Longer option with child" onClick={() => console.log('click')}>
              Child
            </DropdownItem>
            <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
          </DropdownMenu>
        </Dropdown>
        <br />
        <h4>With icon in toggle</h4>
        <Dropdown>
          <DropdownToggle label="Toggel" icon="user" />
          <DropdownMenu>
            <DropdownItem label="Option 1" onClick={() => console.log('click')} />
            <DropdownItem label="Option 2" onClick={() => console.log('click')} />
            <DropdownItem label="Option 3" onClick={() => console.log('click')} />
            <DropdownItem icon="user" label="Longer option" onClick={() => console.log('click')}>
              Child
            </DropdownItem>
            <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
          </DropdownMenu>
        </Dropdown>
        <br />
        <h4>Icon Only</h4>
        <Dropdown>
          <DropdownToggle label="Toggel" icon="user" hideLabel={true} />
          <DropdownMenu>
            <DropdownItem label="Option 1" onClick={() => console.log('click')} />
            <DropdownItem label="Option 2" onClick={() => console.log('click')} />
            <DropdownItem label="Option 3" onClick={() => console.log('click')} />
            <DropdownItem icon="user" label="Longer option" onClick={() => console.log('click')}>
              Child
            </DropdownItem>
            <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  })
  .add('Purple', () => (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <h4>Default</h4>
      <Dropdown>
        <DropdownToggle color="purple" label="Toggel" />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={() => console.log('click')} />
          <DropdownItem label="Option 2" onClick={() => console.log('click')} />
          <DropdownItem label="Centered" centere={true} onClick={() => console.log('click')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={() => console.log('click')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
        </DropdownMenu>
      </Dropdown>

      <br />
      <h4>With icon in toggle</h4>

      <Dropdown>
        <DropdownToggle color="purple" label="Toggel" icon="user" />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={() => console.log('click')} />
          <DropdownItem label="Option 2" onClick={() => console.log('click')} />
          <DropdownItem label="Option 3" onClick={() => console.log('click')} />
          <DropdownItem icon="user" label="Longer option" onClick={() => console.log('click')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
        </DropdownMenu>
      </Dropdown>

      <br />
      <h4>Icon Only</h4>
      <Dropdown>
        <DropdownToggle color="purple" label="Toggel" icon="user" hideLabel={true} />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={() => console.log('click')} />
          <DropdownItem label="Option 2" onClick={() => console.log('click')} />
          <DropdownItem label="Option 3" onClick={() => console.log('click')} />
          <DropdownItem icon="user" label="Longer option" onClick={() => console.log('click')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
        </DropdownMenu>
      </Dropdown>
    </div>
  ))
  .add('No border', () => (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <h4>Default</h4>
      <Dropdown>
        <DropdownToggle label="Toggel" outline={false} />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={() => console.log('click')} />
          <DropdownItem label="Option 2" onClick={() => console.log('click')} />
          <DropdownItem label="Centered" centere={true} onClick={() => console.log('click')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={() => console.log('click')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
        </DropdownMenu>
      </Dropdown>

      <br />
      <h4>With icon in toggle</h4>

      <Dropdown>
        <DropdownToggle label="Toggel" icon="user" outline={false} />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={() => console.log('click')} />
          <DropdownItem label="Option 2" onClick={() => console.log('click')} />
          <DropdownItem label="Option 3" onClick={() => console.log('click')} />
          <DropdownItem icon="user" label="Longer option" onClick={() => console.log('click')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
        </DropdownMenu>
      </Dropdown>

      <br />
      <h4>Icon Only</h4>
      <Dropdown>
        <DropdownToggle label="Toggel" icon="user" hideLabel={true} outline={false} />
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={() => console.log('click')} />
          <DropdownItem label="Option 2" onClick={() => console.log('click')} />
          <DropdownItem label="Option 3" onClick={() => console.log('click')} />
          <DropdownItem icon="user" label="Longer option" onClick={() => console.log('click')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
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
          <DropdownItem label="Option 1" onClick={() => console.log('click')} />
          <DropdownItem label="Option 2" onClick={() => console.log('click')} />
          <DropdownItem label="Centered" centere={true} onClick={() => console.log('click')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={() => console.log('click')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
        </DropdownMenu>
      </Dropdown>
      <br />
      <h4>Text</h4>
      <Dropdown>
        <DropdownToggle>Hei</DropdownToggle>
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={() => console.log('click')} />
          <DropdownItem label="Option 2" onClick={() => console.log('click')} />
          <DropdownItem label="Centered" centere={true} onClick={() => console.log('click')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={() => console.log('click')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
        </DropdownMenu>
      </Dropdown>
      <br />
      <h4>Small Button as toggle</h4>
      <Dropdown>
        <DropdownToggle>
          <Button text="Button" size="small" icon="attach" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem label="Option 1" onClick={() => console.log('click')} />
          <DropdownItem label="Option 2" onClick={() => console.log('click')} />
          <DropdownItem label="Centered" centere={true} onClick={() => console.log('click')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={() => console.log('click')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={() => console.log('click')} />
        </DropdownMenu>
      </Dropdown>
      <br />
    </div>
  ));
