import React from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from './Routes';
import { history } from '../utils/historyUtil';

const App = () => (
  <HashRouter history={history}>
    <Routes />
  </HashRouter>
);

export default App;
