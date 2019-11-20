import React from 'react';
import { MiniDashboard } from '@telia/styleguide';

const MiniDashboardPrepaid = () => (
  <MiniDashboard
    headingText="Ola Nordmann"
    links={[
      { text: 'Lorem ipsum dolor', href: '#' },
      { text: 'Ut enim ad minim', href: '#' },
      { text: 'Exercitation ullamco', href: '#' },
    ]}
  >
    <p className="paragraph">
      Lorem ipsum dolor sit amet,{' '}
      <a className="link" href="#">
        consectetur adipiscing elit
      </a>
      , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea{' '}
      <a className="link" href="#">
        commodo consequat
      </a>
      .
    </p>
  </MiniDashboard>
);

export default MiniDashboardPrepaid;
