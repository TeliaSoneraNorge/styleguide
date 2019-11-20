import React from 'react';
import { Router } from 'react-router-dom';
import { Menu } from '@telia/styleguide';
import { history } from '../../../../utils/historyUtil';

const OnlyLogo = () => (
  <Router history={history}>
    <Menu
      logoUrl="#"
      logoTitle="Telia logo"
      logoImageDesktopPath={require('assets/images/logo/logo.svg')}
      logoImageInverseDesktopPath={require('assets/images/logo/logo-inverted.svg')}
      onlyLogo
    />
  </Router>
);

export default OnlyLogo;
