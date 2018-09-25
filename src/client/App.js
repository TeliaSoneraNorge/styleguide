import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './Routes';
import { history } from './utils/historyUtil';

const App = () =>
    <Router history={history}>
        <Routes />
    </Router>;

export default App;
