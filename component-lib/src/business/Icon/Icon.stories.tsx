import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, color, select } from '@storybook/addon-knobs';

import { AllBusinessIcons } from './AllBusinessIcons';
import { Icon } from './Icon';
import { IconDefinition } from './IconDefinition';

const stories = storiesOf('Business|Icon', module);

stories.addDecorator(withKnobs);

stories.add('Icon', () => (
  <div style={{ padding: '24px' }}>
    <AllBusinessIcons />

    <h1>Icon</h1>

    <p>
      The component <code>{'<AllBusinessIcons />'}</code> (which itself is invisible) must be present in order for the
      SVGs to be available to the <code>{'<Icon />'}</code> component.
    </p>

    <p>
      The icon inherits its color from the surrounding element (<code>{'fill: currentColor;'}</code>).
    </p>

    <h2>Sample icon</h2>

    <div
      style={{
        transition: 'color 0.15s ease-in-out',
        color: color('Color', 'red'),
      }}
    >
      <Icon icon={select('Sample icon', availableIcons, 'ai-robot') as IconDefinition} />
    </div>

    <h2>All icons</h2>

    <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
      {availableIcons.map((key: IconDefinition) => (
        <li
          key={key}
          style={{
            padding: '8px',
            display: 'inline-block',
            color: color('Color for all icons', 'red'),
          }}
          title={key}
        >
          <Icon style={{ width: '32px', height: '32px' }} icon={key} />
        </li>
      ))}
    </ul>
  </div>
));

/**
 * A complete list of all available icons. While it is must currently be updated
 * manually whenever IconDefinition changes, it _will_ give a TypeScript error
 * if the list does not match the list of icons in IconDefinition.
 */
// const availableIcons: Record<IconDefinition, IconDefinition> = {
const availableIconMap: { [key in IconDefinition]: key } = {
  add: 'add',
  'ai-robot': 'ai-robot',
  alarm: 'alarm',
  alert: 'alert',
  'arrow-down': 'arrow-down',
  'arrow-large-down': 'arrow-large-down',
  'arrow-large-left': 'arrow-large-left',
  'arrow-large-right': 'arrow-large-right',
  'arrow-large-up': 'arrow-large-up',
  'arrow-left': 'arrow-left',
  'arrow-right': 'arrow-right',
  'arrow-small-down': 'arrow-small-down',
  'arrow-small-left': 'arrow-small-left',
  'arrow-small-right': 'arrow-small-right',
  'arrow-small-up': 'arrow-small-up',
  'arrow-up': 'arrow-up',
  attach: 'attach',
  battery: 'battery',
  'best-in-test': 'best-in-test',
  broadband: 'broadband',
  'business-intelligence': 'business-intelligence',
  buy: 'buy',
  calendar: 'calendar',
  camera: 'camera',
  'card-view': 'card-view',
  chat: 'chat',
  'check-mark': 'check-mark',
  close: 'close',
  cloud: 'cloud',
  delivery: 'delivery',
  devices: 'devices',
  'document-doc': 'document-doc',
  'document-pdf': 'document-pdf',
  'document-ppt': 'document-ppt',
  document: 'document',
  'document-xls': 'document-xls',
  download: 'download',
  email: 'email',
  facebook: 'facebook',
  filter: 'filter',
  'folder-new': 'folder-new',
  folder: 'folder',
  games: 'games',
  gift: 'gift',
  graph: 'graph',
  'grid-view': 'grid-view',
  'heart-filled': 'heart-filled',
  heart: 'heart',
  home: 'home',
  image: 'image',
  infinite: 'infinite',
  info: 'info',
  invoice: 'invoice',
  ipad: 'ipad',
  laptop: 'laptop',
  level: 'level',
  link: 'link',
  'list-view': 'list-view',
  lock: 'lock',
  login: 'login',
  logout: 'logout',
  menu: 'menu',
  minus: 'minus',
  'mobile-recycle': 'mobile-recycle',
  mobile: 'mobile',
  'money-euro': 'money-euro',
  money: 'money',
  more: 'more',
  open: 'open',
  orgchart: 'orgchart',
  payment: 'payment',
  pen: 'pen',
  'person-new': 'person-new',
  person: 'person',
  phone: 'phone',
  'pie-chart': 'pie-chart',
  place: 'place',
  play: 'play',
  position: 'position',
  question: 'question',
  refresh: 'refresh',
  return: 'return',
  router: 'router',
  search: 'search',
  server: 'server',
  services: 'services',
  settings: 'settings',
  shopping_2: 'shopping_2',
  shopping: 'shopping',
  shuffle: 'shuffle',
  signal: 'signal',
  'sim-card': 'sim-card',
  sms: 'sms',
  'star-filled': 'star-filled',
  statistics: 'statistics',
  summary: 'summary',
  support: 'support',
  sync: 'sync',
  'table-view': 'table-view',
  tags: 'tags',
  time: 'time',
  'time-waiting': 'time-waiting',
  trash: 'trash',
  tv: 'tv',
  twitter: 'twitter',
  undo: 'undo',
  upload: 'upload',
  video: 'video',
  'visibility-filled': 'visibility-filled',
  visibility: 'visibility',
  volume: 'volume',
  warning: 'warning',
  'wireless-off': 'wireless-off',
  wireless: 'wireless',
  'world-alert': 'world-alert',
  'world-off': 'world-off',
  'world-question': 'world-question',
  world: 'world',
  wrench: 'wrench',
};

const availableIcons = Object.values(availableIconMap);
