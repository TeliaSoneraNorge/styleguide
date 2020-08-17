import { storiesOf } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownSearchToggle,
  DropdownItem,
  DropdownSearchItem,
  DropdownMenu,
} from './index';
import Button from '../../atoms/Button';
import { action } from '@storybook/addon-actions';

/**
 * for use in stories for dropdowns with search
 */
const countries = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Albania' },
  { name: 'Algeria' },
  { name: 'American Samoa' },
  { name: 'AndorrA' },
  { name: 'Angola' },
  { name: 'Benin' },
  { name: 'Bermuda' },
  { name: 'Bhutan' },
  { name: 'Bolivia' },
  { name: 'Cuba' },
  { name: 'Cyprus' },
  { name: 'Czech Republic' },
  { name: 'Denmark' },
  { name: 'Djibouti' },
  { name: 'Dominica' },
  { name: 'Dominican Republic' },
  { name: 'Ecuador' },
  { name: 'Egypt' },
  { name: 'India' },
  { name: 'Indonesia' },
  { name: 'Lithuania' },
  { name: 'Luxembourg' },
  { name: 'Macao' },
  { name: 'Macedonia, The Former Yugoslav Republic of' },
  { name: 'Madagascar' },
  { name: 'Montserrat' },
  { name: 'Myanmar' },
  { name: 'Namibia' },
  { name: 'Nauru' },
  { name: 'Nepal' },
  { name: 'Norway' },
  { name: 'Poland' },
  { name: 'Portugal' },
  { name: 'Puerto Rico' },
  { name: 'Qatar' },
  { name: 'Reunion' },
  { name: 'Romania' },
  { name: 'Russian Federation' },
  { name: 'Samoa' },
  { name: 'San Marino' },
  { name: 'Solomon Islands' },
  { name: 'Somalia' },
  { name: 'South Africa' },
  { name: 'Spain' },
  { name: 'Yemen' },
  { name: 'Zambia' },
  { name: 'Zimbabwe' },
];

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
            <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
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
            <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
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
          <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
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
          <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
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
          <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
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
          <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
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
          <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
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
          <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
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
          <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
          <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
            Child
          </DropdownItem>
          <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
        </DropdownMenu>
      </Dropdown>
      <br />
    </div>
  ))
  .add('With search toggle', () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');

    const [activeCountry, setActiveCountry] = useState<string | undefined>(undefined);
    const [activeCountry2, setActiveCountry2] = useState<string | undefined>(undefined);

    const items = countries.filter(country => country.name.toLowerCase().includes(input.toLowerCase()));
    const items2 = countries.filter(country => country.name.toLowerCase().includes(input2.toLowerCase()));

    useEffect(() => {
      setInput(activeCountry ? activeCountry : '');
    }, [activeCountry]);

    useEffect(() => {
      setInput2(activeCountry2 ? activeCountry2 : '');
    }, [activeCountry2]);

    const handleChange2 = (value: string) => {
      setInput2(value);
      if (value.length) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    return (
      <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
        <h4>props openImmedialey set to true</h4>
        <Dropdown>
          <DropdownSearchToggle
            placeholder="Velg et land"
            onInputChange={setInput}
            openImmediately={true}
            value={input}
          />
          <DropdownMenu>
            <DropdownItem header={true} label="Header" />
            {items.map(i => (
              <DropdownItem label={i.name} onClick={() => setActiveCountry(i.name)} />
            ))}
          </DropdownMenu>
        </Dropdown>

        <br />

        <h4>controlled open state. With icon</h4>
        <Dropdown open={open} toggle={() => setOpen(!open)}>
          <DropdownSearchToggle
            placeholder="Søk etter et land"
            value={input2}
            onInputChange={handleChange2}
            icon="search"
          />
          <DropdownMenu>
            <DropdownItem header={true} label="Header" />
            {items2.map(i => (
              <DropdownItem label={i.name} onClick={() => setActiveCountry2(i.name)} />
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  })
  .add('With search item', () => {
    const [input, setInput] = useState('');
    const [activeCountry, setActiveCountry] = useState<string | undefined>(undefined);
    const items = countries.filter(country => country.name.toLowerCase().includes(input.toLowerCase()));

    return (
      <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
        <h4>With search as dropdown item</h4>
        <Dropdown>
          <DropdownToggle label={activeCountry ? activeCountry : 'Velg land'} />
          <DropdownMenu>
            <DropdownItem header={true} label="Search for something:" />
            <DropdownSearchItem icon="search" onInputChange={setInput} />
            {items.map(r => (
              <DropdownItem label={r.name} onClick={() => setActiveCountry(r.name)} />
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  });
