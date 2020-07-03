import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from './index';
import { Icon, IconDefinition } from '../../atoms/Icon/index';

storiesOf('Business|Dropdown', module).add('Default', () => {
  return (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <h4>Default</h4>
      <Dropdown>
        <DropdownToggle label="Toggel" />{' '}
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
});
