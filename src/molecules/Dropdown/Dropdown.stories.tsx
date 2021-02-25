import { storiesOf } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownSearchToggle,
  DropdownItem,
  DropdownSearchItem,
  DropdownMenu,
  Color,
} from './index';
import { Button } from '../../business';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';
import { Checkbox } from '../../atoms/Checkbox';

type checkedState = {
  item1: boolean;
  item2: boolean;
};

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

export default {
  component: Dropdown,
  title: 'Component library/Molecules/Dropdown',
  subComponents: { DropdownItem, DropdownMenu, DropdownSearchItem, DropdownSearchToggle },
  decorators: [withDesign],
};

export const Default = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [selected, setSelected] = useState<checkedState>({ item1: false, item2: false });

  return (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <h3>Default toggle, with default items, items with icon, header and divider item</h3>
      <br />
      <div>
        DropdownItems can take any type of child and has dynamic height. You can add multiple lines of information,
        images or other componentes to fit you need
      </div>
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        {['default', 'purple', 'white'].map((color) => (
          <div>
            <Dropdown>
              <DropdownToggle label="Toggle" color={color as Color} />
              <DropdownMenu>
                <DropdownItem header={true} label="Header" />
                <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
                <DropdownItem label="Option 2" href="/hei" onClick={action('DropdownItem clicked')} />
                <DropdownItem divider={true} />
                <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
                <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
                  <span style={{ fontSize: '12px' }}>Some attenuated text</span>
                </DropdownItem>
                <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
              </DropdownMenu>
            </Dropdown>

            <br />
            <h4>Wrap content in items</h4>
            <Dropdown>
              <DropdownToggle label="Toggle" color={color as Color} />
              <DropdownMenu wrapContent={true}>
                <DropdownItem header={true} label="Header" />

                <DropdownItem divider={true} />
                <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
                <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
              </DropdownMenu>
            </Dropdown>
            <br />
            <h4>With icon in toggle</h4>
            <Dropdown>
              <DropdownToggle label="Toggle" icon="user" color={color as Color} />
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
              <DropdownToggle label="Toggle" icon="user" hideLabel={true} color={color as Color} />
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
        ))}
      </div>
      <br />
      <h4>With checkbox</h4>
      <Dropdown open={open} toggle={() => setOpen(!open)} itemToggle={false}>
        <DropdownToggle label="Toggle" icon="user" />
        <DropdownMenu>
          <DropdownItem onClick={() => setSelected({ ...selected, item1: !selected.item1 })}>
            <Checkbox checked={selected.item1} label="Check me" tabIndex={-1} />
          </DropdownItem>
          <DropdownItem onClick={() => setSelected({ ...selected, item2: !selected.item2 })}>
            <Checkbox checked={selected.item2} label="Check me" tabIndex={-1} />
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Button label="Save" size="compact" onClick={() => setOpen(!open)} />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <br />
      <div>
        <h4>Positions</h4>
        <div>
          When using <code>left</code> or <code>right</code> the menu will render above toggle if theres little space
          below. This is default behavior. Using any of the other positions will render the menu in a fixed position
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Dropdown>
          <DropdownToggle label="left" icon="user" />
          <DropdownMenu position="left">
            <DropdownItem label="Option Option Option  1" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option Option Option  2" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option Option Option  3" onClick={action('DropdownItem clicked')} />
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle label="right" icon="user" />
          <DropdownMenu position="right">
            <DropdownItem label="Option Option Option  1" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option Option Option  2" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option Option Option  3" onClick={action('DropdownItem clicked')} />
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownToggle label="bottom-left" icon="user" />
          <DropdownMenu position="bottom-left">
            <DropdownItem label="Option  1" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option  2" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option  3" onClick={action('DropdownItem clicked')} />
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownToggle label="bottom-right" icon="user" />
          <DropdownMenu position="bottom-right">
            <DropdownItem label="Option  1" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option  2" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option  3" onClick={action('DropdownItem clicked')} />
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle label="top-left" icon="user" />
          <DropdownMenu position="top-left">
            <DropdownItem label="Option Option Option  1" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option Option Option  2" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option Option Option  3" onClick={action('DropdownItem clicked')} />
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownToggle label="top-right" icon="user" />
          <DropdownMenu position="top-right">
            <DropdownItem label="Option Option Option  1" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option Option Option  2" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option Option Option  3" onClick={action('DropdownItem clicked')} />
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};
export const NoBorder = () => (
  <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
    <h4>No borders</h4>
    <br />
    <div>
      DropdownItems can take any type of child and has dynamic height. You can add multiple lines of information, images
      or other componentes to fit you need
    </div>
    <br />
    <br />

    <div style={{ display: 'flex' }}>
      {['default', 'purple', 'white'].map((color) => (
        <div>
          <Dropdown>
            <DropdownToggle label="Toggle" color={color as Color} outline={false} />
            <DropdownMenu>
              <DropdownItem header={true} label="Header" />
              <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
              <DropdownItem label="Option 2" href="/hei" onClick={action('DropdownItem clicked')} />
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
            <DropdownToggle label="Toggle" color={color as Color} outline={false} />
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
            <DropdownToggle label="Toggle" icon="user" color={color as Color} outline={false} />
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
            <DropdownToggle label="Toggle" icon="user" hideLabel={true} color={color as Color} outline={false} />
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
      ))}
    </div>
  </div>
);
export const FullWidth = () => (
  <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
    <h4>Full width dropdowns</h4>
    <br />
    <div>
      DropdownItems can take any type of child and has dynamic height. You can add multiple lines of information, images
      or other componentes to fit you need
    </div>
    <br />
    <br />

    {['default', 'purple', 'white'].map((color) => (
      <>
        <Dropdown fullWidth={true}>
          <DropdownToggle label="Toggle" color={color as Color} />
          <DropdownMenu>
            <DropdownItem header={true} label="Header" />
            <DropdownItem label="Option 1" onClick={action('DropdownItem clicked')} />
            <DropdownItem label="Option 2" href="/hei" onClick={action('DropdownItem clicked')} />
            <DropdownItem divider={true} />
            <DropdownItem label="Centered" centered={true} onClick={action('DropdownItem clicked')} />
            <DropdownItem icon="user" label="Longer option with child" onClick={action('DropdownItem clicked')}>
              Child
            </DropdownItem>
            <DropdownItem label="Even longer than the long option" onClick={action('DropdownItem clicked')} />
          </DropdownMenu>
        </Dropdown>
        <br />
      </>
    ))}
  </div>
);

export const CustomToggle = () => (
  <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
    <h3> With custom toggle components</h3>
    <br />
    <div>
      DropdownItems can take any type of child and has dynamic height. You can add multiple lines of information, images
      or other componentes to fit you need
    </div>
    <br />
    <br />
    <h4>Button as toggle</h4>
    <Dropdown>
      <DropdownToggle>
        <Button label="Button" />
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
        <Button label="Button" size="compact" icon="attach" />
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
);

export const SearchToggle = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const [activeCountry, setActiveCountry] = useState<string | undefined>(undefined);
  const [activeCountry2, setActiveCountry2] = useState<string | undefined>(undefined);
  const [activeCountry3, setActiveCountry3] = useState<string | undefined>(undefined);
  const [activeCountry4, setActiveCountry4] = useState<string | undefined>(undefined);

  const items = countries.filter((country) => country.name.toLowerCase().includes(input.toLowerCase()));
  const items2 = countries.filter((country) => country.name.toLowerCase().includes(input2.toLowerCase()));
  const items3 = countries.filter((country) => country.name.toLowerCase().includes(input3.toLowerCase()));
  const items4 = countries.filter((country) => country.name.toLowerCase().includes(input4.toLowerCase()));

  useEffect(() => {
    setInput(activeCountry ? activeCountry : '');
  }, [activeCountry]);

  useEffect(() => {
    setInput2(activeCountry2 ? activeCountry2 : '');
  }, [activeCountry2]);

  useEffect(() => {
    setInput(activeCountry3 ? activeCountry3 : '');
  }, [activeCountry3]);

  useEffect(() => {
    setInput2(activeCountry4 ? activeCountry4 : '');
  }, [activeCountry4]);

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
      <h3>And input field with support for displaying a list of search results</h3>
      <div>
        Related to{' '}
        <a href="https://styleguide.channelapi.telia.no/?path=/story/business-textfield--quick-search">Quick Search</a>
      </div>
      <div>
        Handle input state yourself and implement filtering/search on the client or backend as desired. The DropdownMenu
        is simply a map of the result from the search/filter
      </div>

      <div>
        Example use:
        <ul>
          <li>Search for addresses and display matched</li>
          <li>Global search on objects in your application</li>
          <li>Search for products, display relevant product information and images</li>
        </ul>
      </div>
      <br />

      <div>
        DropdownItems can take any type of child and has dynamic height. You can add multiple lines of information,
        images or other componentes to fit you need
      </div>
      <br />
      <br />
      <div>
        Prop <code>openImmedialey</code> set to true
      </div>
      <div>Useful when you have a predefined set of options you wish to preset the user</div>
      <Dropdown>
        <DropdownSearchToggle
          placeholder="Velg et land"
          onInputChange={setInput}
          openImmediately={true}
          value={input}
        />
        <DropdownMenu>
          <DropdownItem header={true} label="Header" />
          {items.map((i) => (
            <DropdownItem label={i.name} onClick={() => setActiveCountry(i.name)} />
          ))}
        </DropdownMenu>
      </Dropdown>

      <br />

      <h4>controlled open state</h4>
      <div>
        With icon. <br />
        Prop <code>openImmedialey</code> not set. Requires user input to show results <br />
        FullWidth
      </div>

      <Dropdown open={open} toggle={() => setOpen(!open)} fullWidth={true}>
        <DropdownSearchToggle
          placeholder="Søk etter et land"
          value={input2}
          onInputChange={handleChange2}
          icon="search"
        />
        <DropdownMenu>
          <DropdownItem header={true} label="Header" />
          {items2.map((i) => (
            <DropdownItem label={i.name} onClick={() => setActiveCountry2(i.name)} />
          ))}
        </DropdownMenu>
      </Dropdown>
      <br />

      <div>TextField kind='white'</div>
      <Dropdown>
        <DropdownSearchToggle
          kind="white"
          placeholder="Søk etter et land"
          value={input3}
          onInputChange={setInput3}
          icon="search"
          openImmediately={true}
        />
        <DropdownMenu>
          <DropdownItem header={true} label="Header" />
          {items3.map((i) => (
            <DropdownItem label={i.name} onClick={() => setActiveCountry3(i.name)} />
          ))}
        </DropdownMenu>
      </Dropdown>
      <br />
      <div>TextField kind='grey'</div>
      <Dropdown>
        <DropdownSearchToggle
          kind="grey"
          placeholder="Søk etter et land"
          value={input4}
          onInputChange={setInput4}
          icon="search"
          openImmediately={true}
        />
        <DropdownMenu>
          <DropdownItem header={true} label="Header" />
          {items4.map((i) => (
            <DropdownItem label={i.name} onClick={() => setActiveCountry4(i.name)} />
          ))}
        </DropdownMenu>
      </Dropdown>
      <br />
      <br />
    </div>
  );
};
export const SearchItem = () => {
  const [input, setInput] = useState('');
  const [activeCountry, setActiveCountry] = useState<string | undefined>(undefined);
  const items = countries.filter((country) => country.name.toLowerCase().includes(input.toLowerCase()));

  return (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <h3>A dropdown with a search field inside the menu</h3>
      <div>Useful when you need a label for you dropdown, but need search/filtering functionality</div>
      <div>
        Example use:
        <ul>
          <li>selection a store/location</li>
          <li>setting filters on a list/tabel of products/subscrptions.</li>
        </ul>
      </div>

      <br />
      <div>
        DropdownItems can take any type of child and has dynamic height. You can add multiple lines of information,
        images or other componentes to fit you need
      </div>
      <br />
      <Dropdown>
        <DropdownToggle label={activeCountry ? activeCountry : 'Velg land'} />
        <DropdownMenu position="bottom-left">
          <DropdownItem header={true} label="Search for something:" />
          <DropdownSearchItem icon="search" onInputChange={setInput} />
          {items.map((r) => (
            <DropdownItem label={r.name} onClick={() => setActiveCountry(r.name)} />
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
export const MultiLevelItems = () => {
  const [input, setInput] = useState('');
  const [activeCountry, setActiveCountry] = useState<string | undefined>(undefined);
  const items = countries.filter((country) => country.name.toLowerCase().includes(input.toLowerCase()));

  return (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <h3>A dropdown with a search field inside the menu -- with scroll</h3>
      <div>Useful when you need a label for you dropdown, but need search/filtering functionality</div>
      <div>
        Example use:
        <ul>
          <li>selection a store/location</li>
          <li>setting filters on a list/tabel of products/subscrptions.</li>
        </ul>
      </div>
      <br />
      <div>
        DropdownItems can take any type of child and has dynamic height. You can add multiple lines of information,
        images or other componentes to fit you need
      </div>
      <br />
      <div>This story also uses a wrapper around the DropdownItems, to set a max heigh and scroll on the items</div>
      <br />

      <Dropdown>
        <DropdownToggle label={activeCountry ? activeCountry : 'Velg land'} />
        <DropdownMenu>
          <DropdownItem header={true} label="Search for something:" />
          <DropdownSearchItem icon="search" onInputChange={setInput} />
          <div style={{ height: '200px', overflowY: 'scroll' }}>
            {items.map((r) => (
              <DropdownItem label={r.name} onClick={() => setActiveCountry(r.name)} />
            ))}
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/RA2c5kxKNaUE5hJrIF084D/Dropdown?node-id=62%3A1818',
  },
};

SearchToggle.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/EBjS8URGPnFXU0SQsVL9la/Quick-search?node-id=13%3A21',
  },
};
