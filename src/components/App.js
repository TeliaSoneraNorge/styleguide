import React from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from './Routes';
import { ModalDialogProvider } from '../../component-lib/src';

const App = () => (
  <HashRouter>
    <ModalDialogProvider>
      <Routes />
    </ModalDialogProvider>
  </HashRouter>
);

export default App;
