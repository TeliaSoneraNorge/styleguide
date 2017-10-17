import React from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Routes from './Routes';

const history = createHistory();

const App = (props) =>
    <Router history={history}>
        <Routes />
    </Router>;

export default App;
